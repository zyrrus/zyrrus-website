import ImageCarousel from "components/Carousel";
import { FigmaIcon, GithubIcon, LiveIcon } from "components/Icons";
import { Project, ProjectsList } from "data/projects";

export default function Projects() {
  return (
    <>
      <h1 className="my-6 mt-14 text-4xl">Completed Projects</h1>
      {ProjectsList.complete.map((project) => (
        <ProjectItem {...project} />
      ))}

      <h1 className="my-6 mt-14 text-4xl">Active Projects</h1>
      {ProjectsList.active.map((project) => (
        <ProjectItem {...project} />
      ))}
    </>
  );
}

function ProjectItem({
  title,
  date,
  description,
  images,
  links,
  stack,
}: Project) {
  return (
    <section className="my-10">
      {/* Images, Icons */}
      <div className="relative flex flex-col items-center">
        <ImageCarousel images={images} />
        <div className="absolute bottom-0 flex flex-row gap-x-1 text-3xl">
          <a href={links.github}>
            <GithubIcon />
          </a>
          <a href={links.figma}>
            <FigmaIcon />
          </a>
          <a href={links.live}>
            <LiveIcon />
          </a>
        </div>
      </div>

      {/* Title, Stack, Date */}
      <div className="flex flex-col lg:flex-row">
        <h2 className="my-3 mt-8 text-2xl font-semibold">{title}</h2>
        <div className="flex flex-row justify-between font-semibold text-mix">
          <h4>{stack}</h4>
          <h4>{date}</h4>
        </div>
      </div>

      {/* Paragraphs */}
      {description.map((paragraph, i) => (
        <p className="my-3 text-lg leading-loose text-mix" key={i}>
          {paragraph}
        </p>
      ))}
    </section>
  );
}
