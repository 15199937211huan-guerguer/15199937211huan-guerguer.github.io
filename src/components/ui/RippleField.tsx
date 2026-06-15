import { useEffect, useRef } from "react";
import { renderGate } from "@/lib/renderGate";

type P = { x: number; y: number; hx: number; hy: number; vx: number; vy: number; r: number };
type Ripple = { x: number; y: number; t: number };

export function RippleField({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const ripples = useRef<Ripple[]>([]);
  const raf = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let pts: P[] = [];
    const GAP = 34;
    const accent = "94, 234, 212";

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      pts = [];
      const cols = Math.ceil(w / GAP) + 1;
      const rows = Math.ceil(h / GAP) + 1;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * GAP;
          const y = j * GAP;
          pts.push({ x, y, hx: x, hy: y, vx: 0, vy: 0, r: 0.8 + Math.random() * 0.8 });
        }
      }
    };

    const now = () => performance.now();
    const RIPPLE_LIFE = 1400;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const t = now();
      ripples.current = ripples.current.filter((r) => t - r.t < RIPPLE_LIFE);

      for (const p of pts) {
        // spring back home
        p.vx += (p.hx - p.x) * 0.02;
        p.vy += (p.hy - p.y) * 0.02;

        // mouse soft push
        const mdx = p.x - mouse.current.x;
        const mdy = p.y - mouse.current.y;
        const md2 = mdx * mdx + mdy * mdy;
        if (md2 < 120 * 120 && md2 > 0.01) {
          const d = Math.sqrt(md2);
          const f = (1 - d / 120) * 1.4;
          p.vx += (mdx / d) * f;
          p.vy += (mdy / d) * f;
        }

        // ripple rings push outward
        for (const rp of ripples.current) {
          const age = (t - rp.t) / RIPPLE_LIFE;
          const radius = age * Math.max(w, h) * 0.7;
          const dx = p.x - rp.x;
          const dy = p.y - rp.y;
          const d = Math.sqrt(dx * dx + dy * dy) || 0.01;
          const band = Math.abs(d - radius);
          if (band < 40) {
            const strength = (1 - band / 40) * (1 - age) * 4;
            p.vx += (dx / d) * strength;
            p.vy += (dy / d) * strength;
          }
        }

        p.vx *= 0.9;
        p.vy *= 0.9;
        p.x += p.vx;
        p.y += p.vy;

        const disp = Math.min(Math.hypot(p.x - p.hx, p.y - p.hy) / 30, 1);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r + disp * 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${accent}, ${0.25 + disp * 0.6})`;
        ctx.fill();
      }

      // draw expanding ripple rings (subtle)
      for (const rp of ripples.current) {
        const age = (t - rp.t) / RIPPLE_LIFE;
        const radius = age * Math.max(w, h) * 0.7;
        ctx.beginPath();
        ctx.arc(rp.x, rp.y, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${accent}, ${(1 - age) * 0.12})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      raf.current = requestAnimationFrame(draw);
    };

    const toLocal = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      return { x: clientX - rect.left, y: clientY - rect.top };
    };
    const onMove = (e: MouseEvent) => {
      const p = toLocal(e.clientX, e.clientY);
      mouse.current.x = p.x;
      mouse.current.y = p.y;
    };
    const onLeave = () => {
      mouse.current.x = -9999;
      mouse.current.y = -9999;
    };
    const onClick = (e: MouseEvent) => {
      const p = toLocal(e.clientX, e.clientY);
      ripples.current.push({ x: p.x, y: p.y, t: now() });
    };

    resize();
    let running = false;
    const start = () => {
      if (running || reduce) return;
      running = true;
      raf.current = requestAnimationFrame(draw);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf.current);
    };
    if (reduce) draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);
    window.addEventListener("click", onClick);
    const ungate = renderGate(canvas, (active) => (active ? start() : stop()));

    // auto ripple cadence for ambient life
    const auto = reduce
      ? 0
      : window.setInterval(() => {
          if (!running) return;
          ripples.current.push({ x: Math.random() * w, y: Math.random() * h, t: now() });
        }, 3600);

    return () => {
      stop();
      ungate();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      window.removeEventListener("click", onClick);
      if (auto) clearInterval(auto);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden />;
}
