import { useEffect, useRef } from "react";
import { galleryPhotos } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { renderGate } from "@/lib/renderGate";

function fibonacciSphere(n: number) {
  const pts: { x: number; y: number; z: number }[] = [];
  const offset = 2 / n;
  const increment = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const y = i * offset - 1 + offset / 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const phi = i * increment;
    pts.push({ x: Math.cos(phi) * r, y, z: Math.sin(phi) * r });
  }
  return pts;
}

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const thumbSrc = (src: string) =>
  src.replace(/\/photos\/([^/]+)\.\w+$/, "/photos/thumbs/$1.jpg");

export function Gallery() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);
  const hoveredRef = useRef<number | null>(null);
  const focusVisibleRef = useRef<number | null>(null);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const progressRef = useRef<number[]>(galleryPhotos.map(() => 0));
  const fullLoadedRef = useRef<boolean[]>(galleryPhotos.map(() => false));

  // load the sharp full-res image for a tile, then swap it in
  const loadFull = (i: number) => {
    if (fullLoadedRef.current[i]) return;
    fullLoadedRef.current[i] = true;
    const img = imgRefs.current[i];
    if (!img) return;
    const full = new Image();
    full.onload = () => {
      img.src = galleryPhotos[i];
    };
    full.src = galleryPhotos[i];
  };

  useEffect(() => {
    const base = fibonacciSphere(galleryPhotos.length);
    let radius = 280;
    let focusPx = 440; // native rendered size of each tile (focused size)
    let smallPx = 78; // on-screen size of a tile resting in the sphere
    let ay = 0;
    const ax = 0.32;
    let raf = 0;

    const measure = () => {
      const w = containerRef.current?.clientWidth ?? 600;
      const h = containerRef.current?.clientHeight ?? 600;
      radius = Math.min(w, 620) * 0.42;
      // focused image is rendered natively at a large size (sharp, no upscaling)
      focusPx = Math.round(Math.min(w, h) * 0.86);
      smallPx = Math.round(radius * 0.3);
      for (const el of itemRefs.current) {
        if (!el) continue;
        el.style.width = `${focusPx}px`;
        el.style.height = `${focusPx}px`;
      }
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);

    const cosX = Math.cos(ax);
    const sinX = Math.sin(ax);
    const positions = base.map(() => ({ sx: 0, sy: 0, depth: 0 }));

    const frame = () => {
      if (hoveredRef.current === null) ay += 0.0024;

      const cosY = Math.cos(ay);
      const sinY = Math.sin(ay);

      // 1. compute each image's resting (sphere) screen position
      for (let i = 0; i < base.length; i++) {
        const { x, y, z } = base[i];
        const x1 = x * cosY + z * sinY;
        const z1 = -x * sinY + z * cosY;
        const y2 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;
        positions[i].sx = x1 * radius;
        positions[i].sy = y2 * radius;
        positions[i].depth = (z2 + 1) / 2; // 0..1, 1 = closest
      }

      // 2. resolve hovered image by geometry (stable) + hysteresis to kill flicker
      const mouse = mouseRef.current;
      if (!mouse) {
        hoveredRef.current = null;
      } else {
        let nearest = -1;
        let nearestDist = Infinity;
        for (let i = 0; i < positions.length; i++) {
          const dx = positions[i].sx - mouse.x;
          const dy = positions[i].sy - mouse.y;
          // slight bias toward front-facing images
          const d = Math.hypot(dx, dy) - positions[i].depth * 8;
          if (d < nearestDist) {
            nearestDist = d;
            nearest = i;
          }
        }
        const cur = hoveredRef.current;
        const enter = smallPx * 0.9;
        if (cur === null) {
          if (nearestDist < enter) hoveredRef.current = nearest;
        } else {
          const cd = Math.hypot(
            positions[cur].sx - mouse.x,
            positions[cur].sy - mouse.y
          );
          const keep = smallPx * 1.8;
          if (cd > keep) {
            hoveredRef.current = nearestDist < enter ? nearest : null;
          } else if (nearest !== cur && nearestDist + smallPx * 0.6 < cd) {
            // only switch when the new image is clearly closer
            hoveredRef.current = nearest;
          }
        }
      }

      // 3. render — element is sized at focusPx natively, so sphere state shrinks it (sharp)
      const hovered = hoveredRef.current;
      for (let i = 0; i < base.length; i++) {
        const el = itemRefs.current[i];
        if (!el) continue;

        const { sx, sy, depth } = positions[i];
        const depthScale = 0.5 + depth * 0.6;
        const sphereScale = (smallPx * depthScale) / focusPx;
        const depthOpacity = 0.3 + depth * 0.7;

        const target = hovered === i ? 1 : 0;
        // ease in toward center, snap back to sphere faster
        const rate = target === 1 ? 0.16 : 0.26;
        const p = lerp(progressRef.current[i], target, rate);
        progressRef.current[i] = p;

        const px = lerp(sx, 0, p);
        const py = lerp(sy, 0, p);
        const scale = lerp(sphereScale, 1, p);

        let opacity = depthOpacity;
        if (hovered !== null && hovered !== i) opacity *= 0.4;
        opacity = lerp(opacity, 1, p);

        const zIndex = hovered === i ? 9999 : Math.round(depth * 1000);

        el.style.transform = `translate(-50%, -50%) translate(${px}px, ${py}px) scale(${scale})`;
        el.style.opacity = `${opacity}`;
        el.style.zIndex = `${zIndex}`;

        // show the whole photo (object-contain) once it grows enough; square-crop in the ball
        const img = imgRefs.current[i];
        if (img) {
          const wantContain = p > 0.5;
          const isContain = focusVisibleRef.current === i;
          if (wantContain && !isContain) {
            img.style.objectFit = "contain";
            el.style.background = "rgba(10,10,12,0.92)";
            focusVisibleRef.current = i;
          } else if (!wantContain && isContain) {
            img.style.objectFit = "cover";
            el.style.background = "";
            focusVisibleRef.current = null;
          }
        }

        // begin loading the sharp full-res image as soon as a tile starts growing
        if (hovered === i && p > 0.12) loadFull(i);
      }

      raf = requestAnimationFrame(frame);
    };

    let running = false;
    const start = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };
    const ungate = renderGate(containerRef.current, (active) =>
      active ? start() : stop()
    );

    return () => {
      stop();
      ungate();
      ro.disconnect();
    };
  }, []);

  return (
    <section
      id="gallery"
      className="relative border-t border-white/5 py-20 lg:py-28"
    >
      <div className="shell">
        <SectionHeading
          eyebrow="Moments · 影像志"
          title="走过的路，见过的人"
          description="徒步、毕业、分享、志愿、旅途……影像围成一颗缓缓旋转的星球，这是一张关于我大学的真实世界的地图。"
          index="09"
        />

        <div
          ref={containerRef}
          className="relative mt-10 h-[clamp(420px,70vw,720px)] w-full select-none"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            mouseRef.current = {
              x: e.clientX - rect.left - rect.width / 2,
              y: e.clientY - rect.top - rect.height / 2,
            };
          }}
          onMouseLeave={() => {
            mouseRef.current = null;
          }}
        >
          <div className="absolute left-1/2 top-1/2">
            {galleryPhotos.map((src, i) => (
              <div
                key={src}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                className="absolute left-0 top-0 overflow-hidden rounded-xl border border-white/10 bg-ink-850 shadow-lg shadow-black/40 will-change-transform"
                style={{ width: 440, height: 440, opacity: 0 }}
              >
                <img
                  src={thumbSrc(src)}
                  alt=""
                  ref={(el) => {
                    imgRefs.current[i] = el;
                  }}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
