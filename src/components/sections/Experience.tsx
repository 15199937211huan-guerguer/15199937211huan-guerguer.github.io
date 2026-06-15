import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { experiences } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  const [active, setActive] = useState(0);
  const exp = experiences[active];

  return (
    <section
      id="experience"
      className="relative border-t border-white/5 py-20 lg:py-28"
    >
      <div className="shell">
        <SectionHeading
          eyebrow="Experience · 实习经历"
          title="从 AI 工具落地到视觉模型核心"
          description="5 段实习，方向越来越聚焦——从银行 RPA 自动化、到爱奇艺 AI Agent 优化、再到字节跳动参与基模训练与创作 Agent 策略，每段都在深化同一件事：让 AI 能力在真实业务里产生可衡量的价值。"
          index="02"
        />

        <Reveal>
          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/5 lg:grid-cols-12">
            {/* Tabs */}
            <div className="flex flex-row overflow-x-auto bg-ink-850 lg:col-span-4 lg:flex-col lg:overflow-visible">
              {experiences.map((e, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={e.company}
                    onClick={() => setActive(i)}
                    className={`group relative shrink-0 px-6 py-6 text-left transition-colors duration-300 lg:px-8 lg:py-7 ${
                      isActive
                        ? "bg-ink-800"
                        : "hover:bg-ink-800/50"
                    }`}
                  >
                    <span
                      className={`absolute left-0 top-0 h-full w-0.5 transition-all duration-300 ${
                        isActive ? "bg-accent" : "bg-transparent"
                      }`}
                    />
                    <span
                      className={`font-display text-[11px] tracking-widest transition-colors ${
                        isActive ? "text-accent" : "text-fg-faint"
                      }`}
                    >
                      {e.period}
                    </span>
                    <div
                      className={`mt-2 font-display text-lg font-semibold tracking-tight transition-colors ${
                        isActive ? "text-fg" : "text-fg-muted group-hover:text-fg"
                      }`}
                    >
                      {e.company}
                    </div>
                    <div className="mt-1 hidden text-xs leading-snug text-fg-faint lg:block">
                      {e.role}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Detail panel */}
            <div className="relative bg-ink-850 p-8 lg:col-span-8 lg:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="font-display text-xs tracking-widest text-accent/80">
                    {exp.role}
                  </span>
                  <p className="mt-4 text-base leading-relaxed text-fg">
                    {exp.summary}
                  </p>

                  <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 md:grid-cols-2">
                    {exp.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex gap-3 text-sm leading-relaxed text-fg-muted"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {exp.metrics && (
                    <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/8 pt-7 sm:grid-cols-4">
                      {exp.metrics.map((m) => (
                        <div key={m.label}>
                          <div className="font-display text-lg font-semibold tracking-tight text-accent">
                            {m.value}
                          </div>
                          <div className="mt-1 text-xs leading-snug text-fg-faint">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {exp.insight && (
                    <p className="mt-7 border-l-2 border-accent/40 pl-4 text-sm italic leading-relaxed text-fg-muted">
                      {exp.insight}
                    </p>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
