import { strengths } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Strengths() {
  return (
    <section
      id="strengths"
      className="relative border-t border-white/5 py-20 lg:py-28"
    >
      <div className="shell">
        <SectionHeading
          eyebrow="Strengths · 个人优势"
          title="好奇心 × 行动力"
          description="从模型能力底层到用户价值，从数据设计到自己写代码验证——把复杂的 AI 能力翻译成真实场景里好用的东西。"
          index="05"
        />

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/8 bg-white/5 md:grid-cols-2 lg:grid-cols-3">
          {strengths.map((strength, i) => {
            const Icon = strength.icon;
            return (
              <Reveal key={strength.title} delay={(i % 3) * 0.1}>
                <div className="group h-full bg-ink-850 p-9 transition-colors duration-500 hover:bg-ink-800">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-ink-900 text-accent transition-all duration-500 group-hover:border-accent/40 group-hover:shadow-[0_0_30px_-8px_rgba(94,234,212,0.5)]">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-fg">
                    {strength.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                    {strength.description}
                  </p>
                  <span className="mt-6 block font-display text-xs text-fg-faint">
                    0{i + 1}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
