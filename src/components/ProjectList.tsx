import { Project } from "data/projects";
import { SmallDivider } from "components/Divider";
import ProjectItem from "components/ProjectItem";
import { Fragment } from "react";

type Props = {
  title: string;
  id: string;
  projects: Project[];
};

export default function ProjectList({ title, id, projects }: Props) {
  return (
    <>
      <h1 id={id} className="my-6 mt-14 text-4xl font-semibold">
        {title}
      </h1>
      {projects.map((project, index) => (
        <Fragment key={project.title}>
          <ProjectItem {...project} />
          {index !== projects.length - 1 && <SmallDivider />}
        </Fragment>
      ))}
    </>
  );
}
