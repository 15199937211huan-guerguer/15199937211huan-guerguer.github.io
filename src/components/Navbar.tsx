import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Music, VolumeX } from "lucide-react";
import { navLinks, profile } from "@/data/content";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/Magnetic";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#hero");
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const audio = new Audio("/music.mp3");
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    const startMusic = () =>
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));

    window.addEventListener("site:enter", startMusic);

    return () => {
      audio.pause();
      window.removeEventListener("site:enter", startMusic);
    };
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <nav className="shell flex h-20 items-center justify-between">
        <a
          href="#hero"
          className={cn(
            "flex items-center gap-3 rounded-full border px-3 py-2 transition-all duration-500",
            scrolled
              ? "border-white/10 bg-ink-900/70 backdrop-blur-xl"
              : "border-transparent"
          )}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-accent/40 bg-accent/10 font-display text-sm font-bold text-accent">
            Y
          </span>
          <span className="hidden pr-2 font-mono text-xs uppercase tracking-[0.2em] text-fg sm:block">
            {profile.nameCn}
          </span>
        </a>

        <ul
          className={cn(
            "hidden items-center gap-1 rounded-full border px-2 py-1.5 transition-all duration-500 md:flex",
            scrolled
              ? "border-white/10 bg-ink-900/70 backdrop-blur-xl"
              : "border-white/8 bg-ink-900/40 backdrop-blur-md"
          )}
        >
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "group relative flex items-center gap-1.5 rounded-full px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors",
                    isActive
                      ? "bg-accent/10 text-accent"
                      : "text-fg-muted hover:text-fg"
                  )}
                >
                  <span
                    className={cn(
                      "font-mono transition-opacity",
                      isActive
                        ? "text-accent opacity-100"
                        : "opacity-0 group-hover:opacity-60"
                    )}
                  >
                    {"->"}
                  </span>
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4">
          <Magnetic strength={0.4}>
            <a href="#contact" className="btn-primary !py-2.5 !px-5">
              联系我
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Magnetic>

          <button
            type="button"
            onClick={toggleMusic}
            aria-label={playing ? "关闭音乐" : "播放音乐"}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300",
              playing
                ? "border-accent/40 bg-accent/10 text-accent"
                : "border-white/10 bg-ink-900/50 text-fg-muted hover:text-fg"
            )}
          >
            {playing ? (
              <Music className="h-4 w-4 animate-pulse" />
            ) : (
              <VolumeX className="h-4 w-4" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
