import { ArrowUpRight } from "lucide-react";
import { profile, socials } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden border-t border-white/5 pt-32 lg:pt-40"
    >
      <div className="grid-lines absolute inset-0 opacity-40" />
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/8 blur-[160px] animate-glow-pulse" />

      <div className="shell relative z-10 flex flex-1 flex-col justify-center">
        <Reveal>
          <span className="eyebrow">Get in touch · 联系</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 font-display text-5xl font-bold leading-[1.05] tracking-tightest text-fg lg:text-8xl">
            一起，让 AI
            <br />
            <span className="text-gradient">在真实场景里好用</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-fg-muted">
            如果你也对模型、Agent、AI 学习、Vibe Coding、AI 产品从 0 到 1 的搭建过程感兴趣，或者同样在思考 AI 如何真正进入具体场景、服务真实用户、解决真实问题，欢迎随时和我交流。
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <a
            href={`mailto:${profile.email}`}
            className="group mt-12 inline-flex items-center gap-4 font-display text-2xl font-medium text-fg transition-colors hover:text-accent lg:text-4xl"
          >
            <span aria-hidden>📮</span>
            {profile.email}
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 transition-all duration-500 group-hover:border-accent/60 group-hover:bg-accent/10 lg:h-16 lg:w-16">
              <ArrowUpRight className="h-6 w-6 transition-transform duration-500 group-hover:rotate-45" />
            </span>
          </a>
        </Reveal>
        <Reveal delay={0.4}>
          <a
            href={profile.larkDoc}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 inline-flex items-center gap-4 font-display text-2xl font-medium text-fg transition-colors hover:text-accent lg:text-4xl"
          >
            <span aria-hidden>📄</span>
            个人说明书
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 transition-all duration-500 group-hover:border-accent/60 group-hover:bg-accent/10 lg:h-16 lg:w-16">
              <ArrowUpRight className="h-6 w-6 transition-transform duration-500 group-hover:rotate-45" />
            </span>
          </a>
        </Reveal>
      </div>

      <footer className="shell relative z-10 mt-20 flex flex-col items-start justify-between gap-6 border-t border-white/8 py-8 md:flex-row md:items-center">
        <span className="text-sm text-fg-faint">
          © {new Date().getFullYear()} {profile.nameCn} · {profile.role}
        </span>
        <div className="flex flex-wrap gap-8">
          {socials.map((s) => {
            const external = s.href.startsWith("http");
            return (
              <a
                key={s.label}
                href={s.href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-fg"
              >
                <span className="font-display text-xs uppercase tracking-widest text-fg-faint">
                  {s.label}
                </span>
                {s.value}
              </a>
            );
          })}
        </div>
      </footer>
    </section>
  );
}
