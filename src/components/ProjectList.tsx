import { Project } from "data/projects";
import SmallDivider from "components/Divider";
import ProjectItem from "components/ProjectItem";

type Props = {
  title: string;
  projects: Project[];
};

export default function ProjectList({ title, projects }: Props) {
  return (
    <>
      <h1 className="my-6 mt-14 text-4xl font-semibold">{title}</h1>
      {projects.map((project, index) => (
        <>
          <ProjectItem key={`Project-${project.title}`} {...project} />
          {index !== projects.length - 1 && (
            <SmallDivider key={`Divider-${project.title}`} />
          )}
        </>
      ))}
    </>
  );
}
