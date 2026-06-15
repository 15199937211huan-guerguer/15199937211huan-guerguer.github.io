import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type TiltProps = {
  children: ReactNode;
  className?: string;
  max?: number;
};

export function Tilt({ children, className, max = 8 }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const spx = useSpring(px, { stiffness: 150, damping: 18 });
  const spy = useSpring(py, { stiffness: 150, damping: 18 });

  const rotateX = useTransform(spy, [0, 1], [max, -max]);
  const rotateY = useTransform(spx, [0, 1], [-max, max]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", transformPerspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
