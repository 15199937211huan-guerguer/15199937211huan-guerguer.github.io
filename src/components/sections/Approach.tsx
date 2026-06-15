import { approaches } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Approach() {
  return (
    <section
      id="approach"
      className="relative border-t border-white/5 py-20 lg:py-28"
    >
      <div className="shell">
        <SectionHeading
          eyebrow="How I Work · 我的做事方式"
          title="先拆问题，再动手验证"
          description="遇到模糊的问题先拆清楚，不确定时先做一个最小版本，能自己验证的事不等别人，相信数据也听真实用户怎么说。"
          index="06"
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
          {approaches.map((a, i) => {
            const Icon = a.icon;
            return (
              <Reveal key={a.title} delay={(i % 2) * 0.1}>
                <div className="group flex h-full gap-6 rounded-xl border border-white/8 bg-ink-850 p-8 transition-all duration-500 hover:border-accent/30 lg:p-9">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-ink-900 text-accent transition-all duration-500 group-hover:border-accent/40 group-hover:shadow-[0_0_30px_-8px_rgba(94,234,212,0.5)]">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-fg">
                      {a.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                      {a.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
