import { redirect } from "next/navigation";
import { getFirstPostMetaBySource } from "~/server/utils/mdx/mdx";

export default async function Projects() {
  const firstProject = await getFirstPostMetaBySource("projects");
  redirect(`/projects/${firstProject?.slug}`);
}
