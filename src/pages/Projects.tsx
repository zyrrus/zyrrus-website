import ProjectList from "components/ProjectList";
import { ProjectsList } from "data/projects";

export default function Projects() {
  return (
    <>
      <ProjectList
        title="Completed Projects"
        projects={ProjectsList.complete}
      />
      <ProjectList title="Active Projects" projects={ProjectsList.active} />
    </>
  );
}
