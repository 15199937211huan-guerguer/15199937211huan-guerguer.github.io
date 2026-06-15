import { academics } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Academic() {
  return (
    <section
      id="academic"
      className="relative border-t border-white/5 py-20 lg:py-28"
    >
      <div className="shell">
        <SectionHeading
          eyebrow="Academic · 学术项目"
          title="从用户场景出发的算法实践"
          description="作为项目负责人，从需求调研、数据建设到模型迭代与产品落地——这两个项目让我第一次把「从用户场景出发」变成具象画面，也学会区分「模型效果」与「产品效果」。"
          index="03"
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {academics.map((a, i) => (
            <Reveal key={a.title} delay={(i % 2) * 0.12}>
              <article className="group h-full rounded-xl border border-white/8 bg-ink-850 p-8 transition-all duration-500 hover:border-accent/30 lg:p-10">
                <div className="flex items-center gap-3">
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-display text-xs tracking-widest text-accent">
                    {a.role}
                  </span>
                  <span className="font-display text-xs tracking-widest text-fg-faint">
                    {a.period}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-fg">
                  {a.title}
                </h3>

                <ul className="mt-6 space-y-3">
                  {a.points.map((p) => (
                    <li
                      key={p}
                      className="flex gap-3 text-sm leading-relaxed text-fg-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                      {p}
                    </li>
                  ))}
                </ul>

                <p className="mt-7 border-t border-white/8 pt-6 text-sm leading-relaxed text-fg">
                  {a.value}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
