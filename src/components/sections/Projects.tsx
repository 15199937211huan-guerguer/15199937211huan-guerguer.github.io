import { useCallback, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { Magnetic } from "@/components/ui/Magnetic";

export function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef(0);

  const applyTransforms = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    cardRefs.current.forEach((card) => {
      if (!card) return;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const dist = (cardCenter - center) / track.clientWidth;
      const clamped = Math.max(-1.4, Math.min(1.4, dist));
      const rotateY = clamped * -28;
      const translateZ = -Math.abs(clamped) * 220;
      const scale = 1 - Math.min(Math.abs(clamped) * 0.18, 0.32);
      const opacity = 1 - Math.min(Math.abs(clamped) * 0.55, 0.62);
      card.style.transform = `perspective(1600px) rotateY(${rotateY}deg) translateZ(${translateZ}px) scale(${scale})`;
      card.style.opacity = `${opacity}`;
      card.style.zIndex = `${100 - Math.round(Math.abs(clamped) * 50)}`;
    });
  }, []);

  const onScroll = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(applyTransforms);
  }, [applyTransforms]);

  useEffect(() => {
    applyTransforms();
    window.addEventListener("resize", applyTransforms);
    return () => {
      window.removeEventListener("resize", applyTransforms);
      cancelAnimationFrame(rafRef.current);
    };
  }, [applyTransforms]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = cardRefs.current[0];
    const step = card ? card.offsetWidth + 32 : el.clientWidth * 0.7;
    el.scrollBy({ left: step * dir, behavior: "smooth" });
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-white/5 py-20 lg:py-28"
    >
      <div className="shell">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Selected Work · 精选项目"
            title="把想法落成能跑的东西"
            description="从视觉基模训练、Agent 策略，到 Vibe Coding 自研的平台与工具——这些是我主导或独立完成的代表性工作。横向滑动浏览。"
            index="04"
          />
          <div className="flex items-center gap-3">
            <Magnetic strength={0.5}>
              <button
                onClick={() => scrollByCard(-1)}
                aria-label="上一个"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-fg-muted transition-all duration-300 hover:border-accent/50 hover:text-accent"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
            </Magnetic>
            <Magnetic strength={0.5}>
              <button
                onClick={() => scrollByCard(1)}
                aria-label="下一个"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-fg-muted transition-all duration-300 hover:border-accent/50 hover:text-accent"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </Magnetic>
          </div>
        </div>
      </div>

      <Reveal className="mt-16" variant="rise">
        <div
          ref={trackRef}
          onScroll={onScroll}
          className="no-scrollbar flex snap-x snap-mandatory items-center gap-8 overflow-x-auto px-[max(2rem,calc((100vw-1100px)/2))] py-12 [perspective:1600px] [transform-style:preserve-3d]"
        >
          {projects.map((project, i) => (
            <div
              key={project.title}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              style={{ transformStyle: "preserve-3d", willChange: "transform" }}
              className="w-[82vw] shrink-0 snap-center transition-[opacity] duration-300 sm:w-[480px] lg:w-[540px]"
            >
              <div className="float-card" style={{ animationDelay: `${i * -1.6}s` }}>
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
