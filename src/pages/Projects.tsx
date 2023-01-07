import { LargeDivider } from "components/Divider";
import ProjectList from "components/ProjectList";
import { ProjectsList } from "data/projects";

export default function Projects() {
  return (
    <>
      <ProjectList
        title="Completed Projects"
        projects={ProjectsList.complete}
      />
      <LargeDivider />
      <ProjectList title="Active Projects" projects={ProjectsList.active} />
    </>
  );
}
