import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, animate } from "framer-motion";

type StatCounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

export function StatCounter({ value, prefix = "", suffix = "", label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionValue, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, value, motionValue]);

  return (
    <div ref={ref} className="flex flex-col">
      <div className="flex items-baseline font-display text-5xl font-semibold tracking-tightest text-fg lg:text-6xl">
        {prefix && <span className="mr-1 text-3xl text-fg-muted lg:text-4xl">{prefix}</span>}
        <span>{display}</span>
        <span className="text-accent">{suffix}</span>
      </div>
      <span className="mt-3 text-sm text-fg-muted">{label}</span>
    </div>
  );
}
