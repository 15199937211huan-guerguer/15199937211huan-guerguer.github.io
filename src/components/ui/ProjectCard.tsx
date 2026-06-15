import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/content";
import { Tilt } from "@/components/ui/Tilt";

const EASE = [0.22, 1, 0.36, 1] as const;

export function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // 轻微 parallax：图片随滚动在框内缓慢上移
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <Tilt max={6} className="h-full">
      <article className="group relative h-full overflow-hidden rounded-xl border border-white/8 bg-ink-850 transition-colors duration-500 hover:border-accent/30">
        <div ref={ref} className="relative aspect-[4/3] overflow-hidden">
          {/* 图片 reveal：遮罩从下往上揭开（挂载即播放，兼容横向轮播） */}
          <motion.div
            className="absolute inset-0"
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 1.1, ease: EASE }}
          >
            <motion.img
              src={project.image}
              alt={project.title}
              loading="lazy"
              style={{ y: imgY }}
              className="absolute inset-0 h-[116%] w-full -top-[8%] scale-105 object-cover opacity-85 transition-all duration-700 ease-out group-hover:scale-110 group-hover:opacity-100"
            />
          </motion.div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/20 to-transparent" />
          <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-ink-900/60 backdrop-blur-sm transition-all duration-500 [transform:translateZ(45px)] group-hover:border-accent/60 group-hover:bg-accent/10">
            <ArrowUpRight className="h-5 w-5 text-fg transition-colors group-hover:text-accent" />
          </div>
          <span className="absolute left-5 top-5 font-display text-xs tracking-widest text-fg-muted">
            {project.year}
          </span>
        </div>

        <div className="relative p-7 lg:p-8">
          <span className="font-display text-xs uppercase tracking-[0.24em] text-accent/80">
            {project.category}
          </span>
          <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-fg">
            {project.title}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-fg-muted">
            {project.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 px-3 py-1 text-xs text-fg-muted transition-colors group-hover:border-white/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-x-10 -top-px h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
        </div>
      </article>
    </Tilt>
  );
}
