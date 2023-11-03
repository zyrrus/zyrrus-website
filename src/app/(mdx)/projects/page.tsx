import { redirect } from "next/navigation";
import { getFirstPostBySource } from "~/server/utils/mdx/mdx";

export default async function Projects() {
  const firstProject = await getFirstPostBySource("projects");
  redirect(`/projects/${firstProject?.slug}`);
}
