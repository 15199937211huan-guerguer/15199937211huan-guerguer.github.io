import { focusAreas, focusThoughts } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Focus() {
  return (
    <section id="focus" className="relative border-t border-white/5 py-20 lg:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="Currently · 持续关注"
          title="我在持续关注什么"
          description="记录我当前正在关注和思考的方向——这个模块会持续更新。"
          index="07"
        />

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/8 bg-white/5 sm:grid-cols-2">
          {focusAreas.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={(i % 2) * 0.1}>
                <div className="group h-full bg-ink-850 p-9 transition-colors duration-500 hover:bg-ink-800">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-ink-900 text-accent transition-all duration-500 group-hover:border-accent/40">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </div>
                    <h3 className="font-display text-lg font-semibold tracking-tight text-fg">
                      {f.title}
                    </h3>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-fg-muted">
                    {f.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {focusThoughts.map((t, i) => (
              <div
                key={t}
                className="relative rounded-xl border border-white/8 bg-ink-850/50 p-7"
              >
                <span className="font-display text-3xl font-semibold tracking-tight text-accent/30">
                  0{i + 1}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">{t}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
