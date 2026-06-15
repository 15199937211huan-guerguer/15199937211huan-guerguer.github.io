import { lifeBlocks, lifeStats } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { StatCounter } from "@/components/ui/StatCounter";

export function Life() {
  return (
    <section id="life" className="relative border-t border-white/5 py-20 lg:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="Beyond Work · 生活"
          title="不只有工作和项目的人"
          description="志愿者、分享、黑客松、徒步旅行……这些经历并非为了丰富简历，而是我保持开放视角、保持对真实世界感知力的方式。"
          index="08"
        />

        <Reveal delay={0.1}>
          <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-12 border-y border-white/8 py-12 sm:grid-cols-4">
            {lifeStats.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
          {lifeBlocks.map((block, i) => {
            const Icon = block.icon;
            return (
              <Reveal key={block.title} delay={(i % 3) * 0.1}>
                <article className="group flex h-full flex-col rounded-xl border border-white/8 bg-ink-850 p-8 transition-all duration-500 hover:border-accent/30 lg:p-9">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-ink-900 text-accent transition-all duration-500 group-hover:border-accent/40 group-hover:shadow-[0_0_30px_-8px_rgba(94,234,212,0.5)]">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-6 font-display text-lg font-semibold tracking-tight text-fg">
                    {block.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                    {block.description}
                  </p>
                  <ul className="mt-6 space-y-2.5 border-t border-white/8 pt-6">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-relaxed text-fg-muted"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
