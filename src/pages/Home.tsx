import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { IntroCover } from "@/components/sections/IntroCover";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Academic } from "@/components/sections/Academic";
import { Projects } from "@/components/sections/Projects";
import { Strengths } from "@/components/sections/Strengths";
import { Approach } from "@/components/sections/Approach";
import { Focus } from "@/components/sections/Focus";
import { Life } from "@/components/sections/Life";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Cursor } from "@/components/ui/Cursor";
import { ParticleField } from "@/components/ui/ParticleField";
import { Preloader } from "@/components/ui/Preloader";
import { TransitionCurtain } from "@/components/ui/TransitionCurtain";
import { VideoBreak } from "@/components/ui/VideoBreak";
import { videoBreaks } from "@/data/content";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  useSmoothScroll(loaded);

  return (
    <div className="noise-overlay relative min-h-screen bg-ink-900">
      {!loaded && <Preloader onDone={() => setLoaded(true)} />}
      <ParticleField />
      <ScrollProgress />
      <Cursor />
      <TransitionCurtain />
      <Navbar />
      <main className="relative z-10">
        <IntroCover />
        <About />
        <Experience />
        <Academic />
        <Projects />
        <VideoBreak {...videoBreaks.work} />
        <Strengths />
        <Approach />
        <Focus />
        <VideoBreak {...videoBreaks.life} />
        <Life />
        <Gallery />
        <Contact />
      </main>
    </div>
  );
}
