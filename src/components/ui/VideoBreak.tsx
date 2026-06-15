import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type VideoBreakProps = {
  src: string;
  poster?: string;
  title: string;
  caption?: string;
};

export function VideoBreak({ src, poster, title, caption }: VideoBreakProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.25, 1, 1.25]);
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["40%", "-40%"]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0]
  );

  return (
    <section
      ref={ref}
      className="relative h-[70vh] overflow-hidden lg:h-[85vh]"
    >
      <motion.div style={{ scale, y }} className="absolute inset-0 h-[120%]">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          src={src}
        />
      </motion.div>

      <div className="absolute inset-0 bg-ink-900/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-ink-900" />
      <div className="grid-lines absolute inset-0 opacity-40" />

      <motion.div
        style={{ y: textY, opacity }}
        className="shell relative z-10 flex h-full flex-col items-center justify-center text-center"
      >
        <h3 className="max-w-4xl font-display text-4xl font-semibold leading-tight tracking-tightest text-fg lg:text-6xl">
          {title}
        </h3>
        {caption && (
          <p className="mt-6 max-w-xl text-base text-fg-muted lg:text-lg">
            {caption}
          </p>
        )}
      </motion.div>
    </section>
  );
}
