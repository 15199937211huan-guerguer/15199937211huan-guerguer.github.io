import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealVariant =
  | "rise"
  | "clip"
  | "blur"
  | "scale"
  | "dissolve"
  | "mask";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  variant?: RevealVariant;
};

const EASE = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 46,
  className,
  variant = "mask",
}: RevealProps) {
  const variants = {
    rise: { initial: { opacity: 0, y }, animate: { opacity: 1, y: 0 } },
    clip: {
      initial: { opacity: 0, y: y * 0.6, clipPath: "inset(0 0 100% 0)" },
      animate: { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" },
    },
    blur: {
      initial: { opacity: 0, y: y * 0.5, filter: "blur(14px)" },
      animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    },
    scale: {
      initial: { opacity: 0, scale: 0.94, y: y * 0.5 },
      animate: { opacity: 1, scale: 1, y: 0 },
    },
    dissolve: {
      initial: { opacity: 0, filter: "blur(12px)", scale: 1.02 },
      animate: { opacity: 1, filter: "blur(0px)", scale: 1 },
    },
    // 遮罩揭开 + 位移 + 压缩后归位（高级克制默认款）
    mask: {
      initial: {
        opacity: 0,
        y,
        scale: 0.965,
        clipPath: "inset(0% 0% 100% 0%)",
        filter: "blur(6px)",
      },
      animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        clipPath: "inset(0% 0% -4% 0%)",
        filter: "blur(0px)",
      },
    },
  }[variant];

  return (
    <motion.div
      className={className}
      initial={variants.initial}
      whileInView={variants.animate}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.05, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
