import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function TransitionCurtain() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(
        'a[href^="#"]'
      ) as HTMLAnchorElement | null;
      if (!target) return;
      const id = target.getAttribute("href");
      if (!id || id === "#") return;
      if (!document.querySelector(id)) return;
      setActive(true);
      window.setTimeout(() => setActive(false), 720);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[80] origin-bottom bg-ink-950"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1, originY: 0 }}
          exit={{ scaleY: 0, originY: 1 }}
          transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex h-full items-center justify-center">
            <motion.span
              className="font-mono text-sm tracking-[0.4em] text-accent/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              [= ◇ ⌒ ◇ =]
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
