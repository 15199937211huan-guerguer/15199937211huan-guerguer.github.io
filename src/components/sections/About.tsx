import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { profile, intro, stats, keywords, obsessions } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { StatCounter } from "@/components/ui/StatCounter";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  const [active, setActive] = useState(0);
  const current = profile.portraits[active];

  return (
    <section id="about" className="relative border-t border-white/5 py-20 lg:py-28">
      <div className="shell">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Portrait — folded card stack */}
          <Reveal className="lg:col-span-5">
            <div className="relative pr-10 pt-10">
              {/* Back card (the other photo, peeking out as a fold) */}
              {profile.portraits.length > 1 && (
                <motion.button
                  type="button"
                  onClick={() => setActive((active + 1) % profile.portraits.length)}
                  aria-label={`切换到「${profile.portraits[(active + 1) % profile.portraits.length].label}」`}
                  initial={false}
                  whileHover={{ rotate: 4, x: 6, y: -6 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  className="group absolute right-0 top-0 z-0 aspect-[4/5] w-[58%] origin-bottom-left rotate-[6deg] overflow-hidden rounded-xl border border-white/10 shadow-2xl shadow-black/50"
                >
                  <img
                    src={profile.portraits[(active + 1) % profile.portraits.length].src}
                    alt=""
                    className="h-full w-full scale-125 object-cover opacity-90 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-ink-900/30 transition-colors duration-500 group-hover:bg-transparent" />
                  <span className="absolute right-3 top-3 rounded-full bg-ink-900/70 px-3 py-1 text-[11px] font-medium text-accent backdrop-blur">
                    点击切换 ↺
                  </span>
                </motion.button>
              )}

              {/* Front card (active photo) */}
              <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-xl border border-white/10 shadow-2xl shadow-black/50">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.img
                    key={current.src}
                    src={current.src}
                    alt={profile.nameCn}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </AnimatePresence>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div className="font-display text-2xl font-semibold tracking-tight text-fg">
                    {profile.nameCn}
                  </div>
                  <div className="mt-1 text-sm text-fg-muted">
                    {current.label}
                  </div>
                </div>

                {/* Index dots */}
                <div className="absolute bottom-6 right-6 flex gap-2">
                  {profile.portraits.map((p, i) => (
                    <button
                      key={p.src}
                      onClick={() => setActive(i)}
                      aria-label={p.label}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        i === active
                          ? "w-7 bg-accent"
                          : "w-2.5 bg-white/30 hover:bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <span className="absolute -left-3 top-7 z-20 flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
              </span>
            </div>
          </Reveal>

          {/* Intro */}
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="About · 关于我"
              title="对 AI 能力好奇 也对它怎么服务人好奇"
              index="01"
            />

            <div className="mt-8 space-y-5">
              {intro.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.1 * (i + 1)}>
                  <p className="text-base leading-relaxed text-fg-muted">{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2.5 text-sm text-fg-muted transition-colors hover:text-accent"
                >
                  <Mail className="h-4 w-4 text-accent" />
                  {profile.email}
                </a>
                <span className="flex items-center gap-2.5 text-sm text-fg-muted">
                  <MapPin className="h-4 w-4 text-accent" />
                  {profile.location}
                </span>
              </div>
            </Reveal>

            {/* Stats */}
            <Reveal delay={0.4}>
              <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-12 border-t border-white/8 pt-12 sm:grid-cols-3 lg:grid-cols-6">
                {stats.map((stat) => (
                  <StatCounter key={stat.label} {...stat} />
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Keywords */}
        <div className="mt-20">
          <Reveal>
            <span className="eyebrow">Keywords · 几个关键词</span>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/8 bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
            {keywords.map((kw, i) => {
              const Icon = kw.icon;
              return (
                <Reveal key={kw.title} delay={(i % 3) * 0.08}>
                  <div className="group h-full bg-ink-850 p-7 transition-colors duration-500 hover:bg-ink-800">
                    <div className="flex items-center gap-3.5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-ink-900 text-accent transition-all duration-500 group-hover:border-accent/40">
                        <Icon className="h-[18px] w-[18px]" strokeWidth={1.6} />
                      </div>
                      <h3 className="font-display text-base font-semibold tracking-tight text-fg">
                        {kw.title}
                      </h3>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-fg-muted">
                      {kw.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Obsessions */}
        <div className="mt-20">
          <Reveal>
            <span className="eyebrow">Obsessions · 驱动我的三个执念</span>
            <h3 className="mt-5 max-w-2xl font-display text-3xl font-semibold tracking-tightest text-fg lg:text-4xl">
              这三件事驱动了过去几年所有的选择
            </h3>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
            {obsessions.map((ob, i) => (
              <Reveal key={ob.index} delay={(i % 3) * 0.1}>
                <div className="relative h-full rounded-xl border border-white/8 bg-ink-850 p-8 transition-all duration-500 hover:border-accent/30">
                  <span className="font-display text-5xl font-bold tracking-tight text-accent/20">
                    {ob.index}
                  </span>
                  <h4 className="mt-4 font-display text-xl font-semibold tracking-tight text-fg">
                    {ob.title}
                  </h4>
                  <p className="mt-4 text-sm leading-relaxed text-fg-muted">
                    {ob.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
