import { RxDoubleArrowDown } from "react-icons/rx";
import { GithubIcon, EmailIcon, LinkedinIcon } from "components/Icons";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-between gap-y-12">
        <div className="w-full">
          <h1 className="mt-36 text-2xl font-semibold leading-normal xs:text-3xl xs:leading-normal sm:text-5xl sm:leading-snug md:text-6xl md:leading-snug lg:text-7xl lg:leading-tight">
            Full-Stack
            <br />
            Software Developer
          </h1>
          <div className="mt-2 flex flex-row justify-between text-xl font-light text-mix sm:text-2xl md:mt-5 md:text-3xl lg:text-3xl">
            <h2>Zeke Abshire</h2>
            <div className="flex flex-row items-center gap-x-4">
              <a href="https://github.com/zyrrus/">
                <GithubIcon />
              </a>
              <a href="https://www.linkedin.com/in/zyrrus/">
                <LinkedinIcon />
              </a>
              <a href="mailto:zekeabshire@gmail.com">
                <EmailIcon />
              </a>
            </div>
          </div>
        </div>

        <a href="#intro" className="mb-48">
          <RxDoubleArrowDown className="floating text-6xl text-mix transition-colors hover:text-fg sm:text-6xl md:text-7xl lg:text-8xl" />
        </a>
      </div>

      <div
        id="intro"
        className="flex flex-col gap-y-10 py-8 text-lg leading-loose text-mix"
      >
        <p>
          Hi, my name is Zeke Abshire, and I am currently a Software Developer
          Intern at Vigilus (formerly Crimer). I'm proficient in developing
          full-stack, cross-platform mobile apps and web apps, software
          architecture planning, and UI/UX design.
        </p>
        <p>
          In my current role at Vigilus, I am actively contributing to the
          rebranding effort by working on the company's website. In my free
          time, I enjoy pursuing personal projects, playing musical instruments,
          learning new languages, and experimenting with various Linux
          distributions, and I am always looking for new opportunities to learn
          and grow as a developer.
        </p>
        <p>
          If you have any questions or would like to learn more about my work,
          please don't hesitate to contact me.
        </p>
      </div>

      {/* Spacer for Footer */}
      {/* <div className="h-screen" /> */}
    </>
  );
}
