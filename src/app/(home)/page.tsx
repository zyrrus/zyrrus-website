import { Button } from "~/app/components/ui/button";
import { GoPaperAirplane, GoCopy } from "react-icons/go";
import Featured from "~/app/(home)/featured";
import Articles from "~/app/(home)/articles";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-52 pb-36 pt-72">
      {/* <RingBackground /> */}
      {/* <HeroGraphic /> */}
      <Hero />
      <About />
      <Featured />
      <Articles />
    </main>
  );
}

function Hero() {
  return (
    <section className="container flex flex-col gap-y-5 pb-48">
      <div className="flex flex-col gap-y-2">
        <h1 className="display-text-['Zeke'] text-2xl">Zeke Abshire</h1>
        <p className="text-xl text-secondary">Software Engineer</p>
      </div>
      <div className="flex flex-row items-center gap-x-2">
        <div className="relative h-2 w-2 rounded-full bg-[#34D399] before:absolute before:inset-0 before:animate-ping before:rounded-full before:bg-[#34D399] before:content-['']"></div>
        <p className="text-secondary">Available for new opportunities</p>
      </div>
      <div className="flex flex-row items-center gap-x-7"></div>
      <div className="flex flex-col items-stretch gap-x-4 gap-y-2 sm:flex-row sm:items-center">
        <Button size="lg">
          Contact me
          <GoPaperAirplane strokeWidth="1.25" />
        </Button>
        <span className="text-center text-secondary">or</span>
        <Button variant="outline" size="lg">
          Copy email
          <GoCopy strokeWidth="0.5" />
        </Button>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="container flex flex-col gap-y-16">
      <h2 className="display-text-['About'] text-2xl">About</h2>
      <div className="flex flex-col gap-y-4 text-secondary">
        <p>
          I'm Zeke Abshire, a multidisciplinary designer based in New York City.
        </p>
        <p>
          With over 15 years of experience in the field, I take pride in
          delivering visually stunning and user-friendly designs that exceed
          client expectations.
        </p>
        <p>
          Whether it's collaborating with cross-functional teams or leading
          design projects, my attention to detail and dedication to excellence
          has earned me a reputation for delivering exceptional results.
        </p>
      </div>
    </section>
  );
}
