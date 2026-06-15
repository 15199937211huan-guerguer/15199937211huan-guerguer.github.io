import { closing } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";

export function Closing() {
  return (
    <section
      id="closing"
      className="relative overflow-hidden border-t border-white/5 py-20 lg:py-28"
    >
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-[0.04]" />
      <div className="shell relative">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <blockquote className="font-display text-3xl font-semibold leading-snug tracking-tight text-fg lg:text-4xl">
              <span className="text-accent">“</span>
              {closing.quote}
              <span className="text-accent">”</span>
            </blockquote>
          </Reveal>

          <div className="mt-12 space-y-6">
            {closing.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.15 + i * 0.1}>
                <p className="text-base leading-relaxed text-fg-muted">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
