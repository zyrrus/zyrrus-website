import Hero from "~/app/(home)/_sections/hero-section";
import About from "~/app/(home)/_sections/about-section";
import Writing from "~/app/(home)/_sections/writing-section";
import { HeroGraphic } from "~/app/(home)/_sections/hero-graphic";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-52 pb-24 pt-72">
      <HeroGraphic />
      <Hero />
      <About />
      <Writing />
    </main>
  );
}
