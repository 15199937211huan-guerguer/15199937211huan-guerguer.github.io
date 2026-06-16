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
      setActive(false);
      requestAnimationFrame(() => setActive(true));
      window.setTimeout(() => setActive(false), 480);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="pointer-events-none fixed inset-x-0 top-0 z-[80] h-[2px] origin-left bg-gradient-to-r from-accent/0 via-accent to-accent/0"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            scaleX: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
            opacity: { duration: 0.16 },
          }}
        />
      )}
    </AnimatePresence>
  );
}
