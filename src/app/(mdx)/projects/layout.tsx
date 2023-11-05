import { type PropsWithChildren } from "react";
import { PostsPanel } from "~/app/components/navigation/posts-panel";
import { getAllPostsMeta } from "~/server/utils/mdx/mdx";

export default async function ProjectsLayout({ children }: PropsWithChildren) {
  const posts = await getAllPostsMeta("projects");

  return (
    <>
      <PostsPanel source="projects" posts={posts} />
      <main className="container prose prose-neutral mb-24 mt-10 dark:prose-invert">
        {children}
      </main>
    </>
  );
}
