import { strengths, approaches } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const groups = [
  {
    key: "strengths",
    label: "我有什么 · 能力优势",
    items: strengths,
  },
  {
    key: "approach",
    label: "我怎么做 · 做事方式",
    items: approaches,
  },
];

export function Strengths() {
  return (
    <section
      id="strengths"
      className="relative border-t border-white/5 py-16 lg:py-20"
    >
      <div className="shell">
        <SectionHeading
          eyebrow="Strengths · 好奇心 × 行动力"
          title="我能做什么、怎么做"
          description="从模型能力底层到用户价值，把复杂的 AI 能力翻译成真实场景里好用的东西——模型强只是起点，真的好用才算完成；想到了就动手，相信数据也听真实用户怎么说。"
          index="05"
        />

        <div className="mt-10 space-y-8">
          {groups.map((group) => (
            <div key={group.key}>
              <Reveal>
                <div className="flex items-center gap-4">
                  <span className="h-px w-8 bg-accent/50" />
                  <h3 className="font-display text-sm font-medium uppercase tracking-[0.2em] text-fg-muted">
                    {group.label}
                  </h3>
                </div>
              </Reveal>

              <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <Reveal key={item.title} delay={(i % 3) * 0.1}>
                      <div className="group flex h-full gap-4 rounded-xl border border-white/8 bg-ink-850 p-6 transition-all duration-500 hover:border-accent/30">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-ink-900 text-accent transition-all duration-500 group-hover:border-accent/40 group-hover:shadow-[0_0_30px_-8px_rgba(94,234,212,0.5)]">
                          <Icon className="h-5 w-5" strokeWidth={1.6} />
                        </div>
                        <div>
                          <h4 className="font-display text-base font-semibold tracking-tight text-fg">
                            {item.title}
                          </h4>
                          <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
