import ProjectList from "components/ProjectList";
import { JobList } from "data/projects";

export default function Work() {
  return <ProjectList title="Employment" projects={JobList} />;
}
