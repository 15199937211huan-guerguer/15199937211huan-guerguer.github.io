import { useRef, useState } from "react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ01<>/\\{}[]#%*";

type ScrambleTextProps = {
  text: string;
  className?: string;
  /** scramble automatically once when it enters; default true */
  trigger?: "hover" | "view";
};

export function ScrambleText({
  text,
  className,
  trigger = "hover",
}: ScrambleTextProps) {
  const [output, setOutput] = useState(text);
  const frame = useRef(0);
  const raf = useRef(0);

  const run = () => {
    cancelAnimationFrame(raf.current);
    const chars = Array.from(text);
    const total = 16;
    frame.current = 0;

    const tick = () => {
      const progress = frame.current / total;
      const revealCount = Math.floor(progress * chars.length);
      const next = chars
        .map((ch, i) => {
          if (ch === " ") return " ";
          if (i < revealCount) return ch;
          return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        })
        .join("");
      setOutput(next);
      frame.current += 1;
      if (frame.current <= total) {
        raf.current = requestAnimationFrame(tick);
      } else {
        setOutput(text);
      }
    };
    raf.current = requestAnimationFrame(tick);
  };

  return (
    <span
      className={className}
      onMouseEnter={trigger === "hover" ? run : undefined}
    >
      {output}
    </span>
  );
}
