import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RxDoubleArrowDown } from "react-icons/rx";

export default function Home() {
  return (
    <div className="relative flex flex-col align-middle">
      <h1 className="mt-[20vh] text-3xl font-semibold leading-normal xs:text-4xl xs:leading-normal sm:text-6xl sm:leading-snug md:text-7xl md:leading-snug lg:text-8xl lg:leading-tight">
        Full-Stack
        <br />
        Software Developer
      </h1>

      <div className="mt-2 flex flex-row justify-between text-xl font-light text-mix sm:text-2xl md:mt-5 md:text-3xl lg:text-3xl">
        <h2>Zeke Abshire</h2>
        <div className="flex flex-row items-center gap-x-4">
          <a href="https://github.com/zyrrus/">
            <FaGithub className="text-mix hover:text-fg" />
          </a>
          <a href="https://www.linkedin.com/in/zyrrus/">
            <FaLinkedin className="text-mix hover:text-fg" />
          </a>
          <a href="mailto:zekeabshire@gmail.com">
            <MdEmail className="text-mix hover:text-fg" />
          </a>
        </div>
      </div>

      <a
        href="#intro"
        className="absolute top-[75vh] left-1/2 mx-auto block grow -translate-x-1/2 transform"
      >
        <RxDoubleArrowDown className="floating text-6xl text-mix hover:text-fg sm:text-6xl md:text-7xl lg:text-8xl" />
      </a>

      <div
        id="intro"
        className="absolute top-[100vh] flex h-screen flex-col gap-y-10 py-8 text-lg leading-loose text-mix"
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
    </div>
  );
}
