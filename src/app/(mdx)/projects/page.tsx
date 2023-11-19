import AllPosts from "~/app/(mdx)/all-posts";
import { projectToCardMatter } from "~/server/utils/mdx/converters";
import { getAllPostsMeta } from "~/server/utils/mdx/mdx";

export default async function Projects() {
  const allProjects = (await getAllPostsMeta("projects")).map(
    projectToCardMatter("projects"),
  );

  return (
    <main className="not-prose flex flex-col gap-y-36 pb-24 pt-52">
      <h1 className="container display-text-['Projects'] text-2xl">Projects</h1>
      <AllPosts originalPosts={allProjects} />
    </main>
  );
}
