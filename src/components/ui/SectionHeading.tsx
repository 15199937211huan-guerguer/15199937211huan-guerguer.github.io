import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrambleText } from "@/components/ui/ScrambleText";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  index?: string;
};

const EASE = [0.22, 1, 0.36, 1] as const;

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  index,
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const ghostY = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);
  const ghostX = useTransform(
    scrollYProgress,
    [0, 1],
    align === "center" ? ["0%", "0%"] : ["-4%", "4%"]
  );

  // 按词拆分，做逐词遮罩揭开 + 位移 + 压缩归位
  const words = title.split(/(\s+)/);

  return (
    <div ref={ref} className="relative">
      {index && (
        <motion.span
          style={{ y: ghostY, x: ghostX }}
          aria-hidden
          className={
            align === "center"
              ? "pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 select-none font-display text-[12rem] font-bold leading-none tracking-tightest text-white/[0.04] lg:text-[18rem]"
              : "pointer-events-none absolute -top-20 -left-6 select-none font-display text-[10rem] font-bold leading-none tracking-tightest text-white/[0.04] lg:text-[16rem]"
          }
        >
          {index}
        </motion.span>
      )}

      <div
        className={
          align === "center"
            ? "mx-auto max-w-2xl text-center"
            : "max-w-2xl text-left"
        }
      >
        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className={
            align === "center"
              ? "flex items-center justify-center gap-3"
              : "flex items-center gap-3"
          }
        >
          <span
            aria-hidden
            className="font-mono text-xs tracking-[0.3em] text-accent/50"
          >
            [=◇=]
          </span>
          <ScrambleText text={eyebrow} className="eyebrow" />
          {index && (
            <span className="font-mono text-xs text-fg-faint">{index}</span>
          )}
        </motion.div>

        <h2
          className={
            align === "center"
              ? "mt-5 flex flex-wrap justify-center font-display text-4xl font-semibold tracking-tightest text-fg lg:text-5xl"
              : "mt-5 flex flex-wrap font-display text-4xl font-semibold tracking-tightest text-fg lg:text-5xl"
          }
        >
          {words.map((word, i) => {
            if (/^\s+$/.test(word)) return <span key={i}>&nbsp;</span>;
            return (
              <span
                key={i}
                className="inline-block overflow-hidden py-[0.08em] align-bottom"
                style={{ clipPath: "inset(-15% 0 -15% 0)" }}
              >
                <motion.span
                  className="inline-block"
                  initial={{ y: "115%", scaleY: 1.18, opacity: 0 }}
                  whileInView={{ y: "0%", scaleY: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.95,
                    delay: 0.12 + i * 0.06,
                    ease: EASE,
                  }}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </h2>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
            className="mt-5 text-base leading-relaxed text-fg-muted"
          >
            {description}
          </motion.p>
        )}
      </div>
    </div>
  );
}
