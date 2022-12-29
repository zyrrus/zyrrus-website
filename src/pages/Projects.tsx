import { Project, ProjectsList } from "data/projects";

export default function Projects() {
  return (
    <>
      {ProjectsList.map((project) => (
        <ProjectItem {...project} />
      ))}
    </>
  );
}

function ProjectItem({ title, date, description, images }: Project) {
  return (
    <section>
      <h2>{title}</h2>
      <h4>{date}</h4>
      {images.map((img) => (
        <img src={img} alt="project preview" />
      ))}
      <p>{description}</p>
    </section>
  );
}
