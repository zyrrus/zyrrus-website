import { Project } from "data/projects";
import { GithubIcon, FigmaIcon, LiveIcon } from "./Icons";

export default function ProjectItem({
  title,
  date,
  description,
  image,
  links,
  stack,
}: Project) {
  return (
    <section className="my-10">
      {/* Images, Icons */}
      {image !== undefined && (
        <div className="relative flex flex-col items-center">
          <img
            src={image}
            alt="project preview"
            className="w-full rounded-2xl md:rounded-[2rem]"
          />
          <Icons figma={links.figma} github={links.github} live={links.live} />
        </div>
      )}

      {/* Title, Stack, Date */}
      <h2 className="relative my-3 mt-8 text-2xl font-semibold">{title}</h2>
      <div className="relative mb-8 flex w-full flex-row justify-between font-semibold text-mix">
        <h4>{stack}</h4>
        <h4>{date}</h4>
      </div>
      {image === undefined && (
        <Icons
          figma={links.figma}
          github={links.github}
          live={links.live}
          hideBackground
        />
      )}
      {/* Paragraphs */}
      {description.map((paragraph, i) => (
        <p className="relative my-3 text-lg leading-loose text-mix" key={i}>
          {paragraph}
        </p>
      ))}
    </section>
  );
}

type IconsProps = {
  figma?: string;
  github?: string;
  live?: string;
  hideBackground?: boolean;
};

function Icons({ figma, github, live, hideBackground }: IconsProps) {
  const underImageClasses =
    "icon-backdrop absolute bottom-[-10%] mt-6 flex flex-row gap-x-1 text-4xl xs:bottom-[-7%] md:bottom-[-4.5%] md:text-3xl";
  const underTitleClasses =
    "mt-6 flex flex-row gap-x-5 text-4xl md:text-3xl justify-center";
  const classes = hideBackground ? underTitleClasses : underImageClasses;

  return (
    <div className={classes}>
      {github !== undefined && (
        <a href={github}>
          <GithubIcon />
        </a>
      )}
      {figma !== undefined && (
        <a href={figma}>
          <FigmaIcon />
        </a>
      )}
      {live !== undefined && (
        <a href={live}>
          <LiveIcon />
        </a>
      )}
    </div>
  );
}
