import { useEffect, useMemo, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { introWords, profile, type IntroWord } from "@/data/content";

const kindColor: Record<IntroWord["kind"], string> = {
  company: "text-accent",
  project: "text-fg",
  award: "text-amber-300/90",
  trait: "text-accent/80",
  life: "text-fg-muted",
};

type Placed = IntroWord & {
  left: number; // %
  top: number; // %
  fontRem: number;
  delay: number;
  rot: number;
};

type Box = { x: number; y: number; w: number; h: number };

function overlaps(a: Box, b: Box) {
  return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
}

// Estimate rendered width (px) of a label at a given font size.
function estWidth(text: string, fontPx: number) {
  let units = 0;
  for (const ch of text) {
    if (/[\u4e00-\u9fff\uff00-\uffef]/.test(ch)) units += 1.02; // CJK
    else if (ch === " ") units += 0.32;
    else units += 0.56;
  }
  return units * fontPx + 14;
}

// Place every word so none overlap each other or the central hero text block.
function buildLayout(): Placed[] {
  const vw = typeof window !== "undefined" ? window.innerWidth : 1280;
  const vh = typeof window !== "undefined" ? window.innerHeight : 800;
  const rem = 16;
  const pad = 10;

  // The cloud lives in the free band to the right of the title; y0 clears the
  // eyebrow tagline so nothing collides with it.
  const region = {
    x0: vw * 0.48,
    x1: vw - 18,
    y0: vh * 0.14,
    y1: vh * 0.95,
  };
  const regionW = region.x1 - region.x0;
  const regionH = region.y1 - region.y0;

  // Reserved boxes the cloud must avoid: the whole left column plus the wide
  // title band that overhangs past the midline.
  const reserved: Box[] = [
    { x: 0, y: 0, w: vw * 0.48, h: vh },
    { x: 0, y: vh * 0.14, w: vw * 0.58, h: vh * 0.44 },
    { x: 0, y: vh * 0.53, w: vw * 0.84, h: vh * 0.3 },
  ];

  // Font size driven by weight — clear hierarchy, but bigger overall than
  // before so the right side reads well without overpowering the title.
  const sizeRange: Record<number, [number, number]> = {
    10: [2.0, 2.4],
    6: [1.5, 1.8],
    4: [1.15, 1.4],
  };

  // Even-but-not-scattered: a jittered anchor grid confined to the right
  // region. Enough anchors that every word gets a home.
  const cols = 3;
  const rows = 10;
  const anchors: { x: number; y: number }[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      anchors.push({
        x: region.x0 + ((c + 0.5) / cols) * regionW,
        y: region.y0 + ((r + 0.5) / rows) * regionH,
      });
    }
  }
  anchors.sort(() => Math.random() - 0.5);

  const placed: Box[] = [];
  const out: Placed[] = [];

  // Largest words first so they always find room.
  const words = [...introWords].sort(
    (a, b) => (b.weight ?? 4) - (a.weight ?? 4)
  );

  const tryPlace = (w: IntroWord, i: number, fontRem: number): boolean => {
    const fontPx = fontRem * rem;
    const wpx = estWidth(w.text, fontPx);
    const hpx = fontPx * 1.25;
    for (const a of anchors) {
      for (let j = 0; j < 5; j++) {
        const x = a.x - wpx / 2 + (Math.random() - 0.5) * (regionW / cols) * 0.8;
        const y =
          a.y - hpx / 2 + (Math.random() - 0.5) * (regionH / rows) * 0.8;
        if (
          x < region.x0 - 8 ||
          x + wpx > region.x1 + 8 ||
          y < region.y0 ||
          y + hpx > region.y1
        )
          continue;
        const box: Box = {
          x: x - pad,
          y: y - pad,
          w: wpx + pad * 2,
          h: hpx + pad * 2,
        };
        if (reserved.some((rsv) => overlaps(box, rsv))) continue;
        if (placed.some((p) => overlaps(box, p))) continue;
        placed.push(box);
        out.push({
          ...w,
          left: (x / vw) * 100,
          top: (y / vh) * 100,
          fontRem,
          delay: 0.3 + i * 0.03,
          rot: (Math.random() - 0.5) * 4,
        });
        return true;
      }
    }
    return false;
  };

  words.forEach((w, i) => {
    const weight = w.weight ?? 4;
    const [lo, hi] = sizeRange[weight] ?? sizeRange[4];
    let fontRem = lo + Math.random() * (hi - lo);
    // Shrink-to-fit: if crowded, drop the size a notch and retry so no word
    // gets dropped from the cloud.
    for (let attempt = 0; attempt < 4; attempt++) {
      if (tryPlace(w, i, fontRem)) return;
      fontRem *= 0.86;
    }
  });

  return out;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
};

const charItem = {
  hidden: { opacity: 0, y: "0.9em", rotateX: -55 },
  show: {
    opacity: 1,
    y: "0em",
    rotateX: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function RoleTicker() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = window.setInterval(
      () => setI((v) => (v + 1) % profile.heroRoles.length),
      2400
    );
    return () => clearInterval(id);
  }, []);
  return (
    <span className="relative inline-flex h-[1.4em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ y: "110%", opacity: 0, filter: "blur(8px)" }}
          animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-110%", opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-flow inline-block whitespace-nowrap font-display font-bold"
        >
          {profile.heroRoles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

// A single word in the cloud — drifts in fast, then shakes + lights up on hover.
function WordChip({ w }: { w: Placed }) {
  const [hover, setHover] = useState(false);
  return (
    <motion.span
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`absolute cursor-default select-none whitespace-nowrap font-display font-bold transition-colors ${kindColor[w.kind]}`}
      style={{
        left: `${w.left}%`,
        top: `${w.top}%`,
        fontSize: `${w.fontRem}rem`,
        transformOrigin: "center",
      }}
      initial={{ opacity: 0, scale: 0.3, rotate: w.rot }}
      animate={
        hover
          ? {
              opacity: 1,
              scale: 1.16,
              rotate: [w.rot, w.rot - 4, w.rot + 4, w.rot - 3, w.rot + 2, w.rot],
              x: [0, -2, 3, -2, 1, 0],
            }
          : { opacity: 0.72, scale: 1, rotate: w.rot, x: 0 }
      }
      transition={
        hover
          ? { duration: 0.45, ease: "easeInOut" }
          : { type: "spring", stiffness: 340, damping: 14, delay: w.delay }
      }
    >
      {w.text}
    </motion.span>
  );
}

export function Preloader({ onDone }: { onDone: () => void }) {
  const layout = useMemo(buildLayout, []);
  const [leaving, setLeaving] = useState(false);

  // mouse parallax for ghost + glow
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const ghostX = useTransform(sx, [-0.5, 0.5], [-50, 50]);
  const ghostY = useTransform(sy, [-0.5, 0.5], [-30, 30]);
  const glowX = useTransform(sx, [-0.5, 0.5], [-40, 40]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  // Tear-open transition. A thin slit is cut from the left edge and its right
  // end sweeps fast across to the right (the "tear"), then the slit opens up
  // and down to reveal the page (the "开屏"). `w` = how far right the tear has
  // reached (%), `g` = half-height of the slit (%).
  const tear = (w: number, g: number) =>
    `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% ${50 + g}%, ${w}% ${
      50 + g
    }%, ${w}% ${50 - g}%, 0% ${50 - g}%)`;

  return (
    <>
      {/* Colored under-layer: revealed inside the dark tear as a glowing seam,
          then opens a beat later than the dark layer to hand off to the page. */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-[99] overflow-hidden"
        initial={false}
        animate={leaving ? "leave" : "idle"}
        variants={{
          idle: { clipPath: tear(0, 0), opacity: 0 },
          leave: {
            clipPath: [tear(0, 4), tear(100, 4), tear(100, 50)],
            opacity: [1, 1, 0],
          },
        }}
        transition={{
          duration: 1.05,
          times: [0, 0.42, 1],
          ease: [0.65, 0, 0.2, 1],
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-accent via-[#7df5de] to-accent" />
        <div className="absolute left-1/2 top-1/2 h-[40vh] w-[120vw] -translate-x-1/2 -translate-y-1/2 bg-white/70 blur-[60px]" />
      </motion.div>

      <motion.div
        className="fixed inset-0 z-[100] flex items-center overflow-hidden bg-ink-950"
        initial={false}
        animate={leaving ? "leave" : "idle"}
        variants={{
          idle: { clipPath: tear(0, 0) },
          leave: { clipPath: [tear(0, 1.5), tear(100, 1.5), tear(100, 50)] },
        }}
        transition={{
          duration: 0.95,
          times: [0, 0.34, 1],
          ease: [0.65, 0, 0.2, 1],
        }}
        onAnimationComplete={(def) => {
          if (def === "leave") onDone();
        }}
      >
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=abstract%20dark%20flowing%20particles%20and%20teal%20light%20trails%20on%20black%20background%2C%20cinematic%2C%20premium%20tech%20mood&image_size=landscape_16_9"
          src={profile.heroVideo}
        />
      </div>
      {/* Dark overlays */}
      <div className="absolute inset-0 bg-ink-950/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/90 via-ink-950/55 to-ink-950" />
      <div className="grid-lines absolute inset-0 opacity-50" />

      {/* Giant ghost name behind everything */}
      <motion.div
        style={{ x: ghostX, y: ghostY }}
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-end pr-[4vw]"
      >
        <span className="text-outline font-display text-[34vw] font-black leading-none tracking-tighter opacity-30">
          YH
        </span>
      </motion.div>

      {/* moving teal glow */}
      <motion.div
        style={{ x: glowX }}
        className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-accent/15 blur-[150px]"
      />

      {/* Word cloud — ambient layer that pops in fast, no overlaps */}
      <div className="absolute inset-0 z-[1]">
        {layout.map((w, i) => (
          <WordChip key={`${w.text}-${i}`} w={w} />
        ))}
      </div>

      {/* Hero composition — left aligned, word cloud fills the right */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="shell pointer-events-none relative z-10"
      >
        <div className="max-w-3xl">
          <motion.div variants={fade} className="flex items-center gap-4">
            <span
              aria-hidden
              className="font-mono text-sm tracking-[0.3em] text-accent/60"
            >
              [= ◇ ⌒ ◇ =]
            </span>
            <span className="eyebrow">{profile.tagline}</span>
          </motion.div>

          <motion.h1 className="mt-7 font-display text-6xl font-black leading-[0.96] tracking-tightest text-fg lg:text-[7rem] [perspective:1000px]">
            {profile.heroTitle.map((line, i) => (
              <span key={i} className="block overflow-hidden">
                {Array.from(line).map((ch, j) => (
                  <motion.span
                    key={j}
                    variants={charItem}
                    className={
                      i === 1
                        ? "text-flow inline-block whitespace-pre [transform-style:preserve-3d]"
                        : "inline-block whitespace-pre [transform-style:preserve-3d]"
                    }
                  >
                    {ch === " " ? "\u00A0" : ch}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>

          <motion.div
            variants={fade}
            className="mt-8 text-xl font-medium leading-snug text-fg lg:text-3xl"
          >
            <span className="text-fg-muted">现在专注于&nbsp;</span>
            <RoleTicker />
          </motion.div>

          <motion.p
            variants={fade}
            className="mt-6 max-w-xl text-base leading-relaxed text-fg-muted"
          >
            {profile.heroSubtitle}
          </motion.p>

          <motion.div variants={fade} className="mt-12">
            <button
              type="button"
              onClick={() => {
                window.dispatchEvent(new Event("site:enter"));
                setLeaving(true);
              }}
              className="group pointer-events-auto inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-8 py-3.5 font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent transition-all duration-300 hover:border-accent/80 hover:bg-accent/20 hover:shadow-[0_0_44px_-8px_rgba(94,234,212,0.6)]"
            >
              进入了解
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* footer hint */}
      <AnimatePresence>
        {!leaving && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1.4 }}
            className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.4em] text-fg-faint"
          >
            杨欢 · Portfolio
          </motion.span>
        )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
