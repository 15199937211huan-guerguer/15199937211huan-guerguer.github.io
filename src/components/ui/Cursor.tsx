import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const glowX = useSpring(x, { stiffness: 60, damping: 20, mass: 0.6 });
  const glowY = useSpring(y, { stiffness: 60, damping: 20, mass: 0.6 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] hidden lg:block">
      <motion.div
        style={{ x: glowX, y: glowY }}
        className="absolute -ml-[150px] -mt-[150px] h-[300px] w-[300px] rounded-full bg-accent/[0.07] blur-[60px]"
      />
    </div>
  );
}
