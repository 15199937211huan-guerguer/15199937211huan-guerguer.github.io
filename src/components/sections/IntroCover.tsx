import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { profile } from "@/data/content";
import { RippleField } from "@/components/ui/RippleField";

export function IntroCover() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // portrait shrinks + rounds as you scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.62]);
  const radius = useTransform(scrollYProgress, [0, 1], [0, 28]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [0.25, 0.45, 0.85]);

  // name draws on between 8%–55% of scroll, then drifts up & fades near the end
  const DASH = 1600;
  const dashOffset = useTransform(scrollYProgress, [0.08, 0.55], [DASH, 0]);
  const fillOpacity = useTransform(scrollYProgress, [0.45, 0.62], [0, 1]);
  const nameOpacity = useTransform(
    scrollYProgress,
    [0.05, 0.18, 0.8, 1],
    [0, 1, 1, 0]
  );
  const nameY = useTransform(scrollYProgress, [0, 1], ["8%", "-4%"]);
  const subOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.85, 1], [0, 1, 1, 0]);

  // whole cover fades right at the end to hand off to Hero
  const coverOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, 0]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <section ref={ref} id="hero" className="relative h-[220vh]">
      <motion.div
        style={{ opacity: coverOpacity }}
        className="sticky top-0 flex h-screen items-center justify-center overflow-hidden bg-ink-950"
      >
        {/* Portrait */}
        <motion.div
          style={{ scale, borderRadius: radius, y: imgY }}
          className="relative h-full w-full overflow-hidden"
        >
          <img
            src="/photos/p72.jpg"
            alt={profile.nameCn}
            className="h-full w-full object-cover object-top"
          />
          <motion.div
            style={{ opacity: overlayOpacity }}
            className="absolute inset-0 bg-gradient-to-b from-ink-950/40 via-transparent to-ink-950"
          />
          <div className="absolute inset-0 bg-ink-950/20" />

          {/* Ripple particles over the portrait */}
          <RippleField className="absolute inset-0 h-full w-full" />

          {/* Name written on, overlaid on the photo */}
          <motion.div
            style={{ opacity: nameOpacity, y: nameY }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <svg
              viewBox="0 0 600 200"
              className="w-[80vw] max-w-3xl overflow-visible"
              fill="none"
            >
              <defs>
                <linearGradient id="nameGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#F4F4F5" />
                  <stop offset="48%" stopColor="#7DF5DE" />
                  <stop offset="100%" stopColor="#5EEAD4" />
                </linearGradient>
                <linearGradient id="nameStroke" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#5EEAD4" />
                  <stop offset="55%" stopColor="#F4F4F5" />
                  <stop offset="100%" stopColor="#5EEAD4" />
                </linearGradient>
                <filter id="nameGlow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="6" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              {/* solid fill that fades in once the stroke is mostly drawn */}
              <motion.text
                x="300"
                y="150"
                textAnchor="middle"
                className="font-display"
                filter="url(#nameGlow)"
                style={{
                  fontSize: 180,
                  fontWeight: 800,
                  fill: "url(#nameGrad)",
                  fillOpacity,
                }}
              >
                杨欢
              </motion.text>
              {/* stroke that draws on with scroll */}
              <motion.text
                x="300"
                y="150"
                textAnchor="middle"
                className="font-display"
                filter="url(#nameGlow)"
                style={{
                  fontSize: 180,
                  fontWeight: 800,
                  fill: "transparent",
                  stroke: "url(#nameStroke)",
                  strokeWidth: 1.6,
                  strokeDasharray: DASH,
                  strokeDashoffset: dashOffset,
                }}
              >
                杨欢
              </motion.text>
            </svg>
            <motion.span
              style={{ opacity: subOpacity }}
              className="mt-2 font-mono text-xs uppercase tracking-[0.4em] text-accent/80 lg:text-sm"
            >
              {profile.tagline}
            </motion.span>
          </motion.div>
        </motion.div>

        {/* scroll hint */}
        <motion.div
          style={{ opacity: hintOpacity }}
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-fg-faint"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.4em]">
            Scroll
          </span>
          <span className="h-10 w-px bg-gradient-to-b from-accent/60 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
