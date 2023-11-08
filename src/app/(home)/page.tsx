import Hero from "~/app/(home)/hero-section";
import About from "~/app/(home)/about-section";
import Featured from "~/app/(home)/featured-section";
import Articles from "~/app/(home)/articles-section";
import { HeroGraphic } from "~/app/(home)/hero-graphic";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-52 pb-24 pt-72">
      {/* <RingBackground /> */}
      <HeroGraphic />
      <Hero />
      <About />
      <Featured />
      <Articles />
    </main>
  );
}
