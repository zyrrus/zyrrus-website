import { type PropsWithChildren } from "react";
import { PostsPanel } from "~/app/components/navigation/posts-panel";
import { getAllPostsMeta } from "~/server/utils/mdx/mdx";

export default async function ArticlesLayout({ children }: PropsWithChildren) {
  const posts = await getAllPostsMeta("articles");

  return (
    <>
      <PostsPanel source="articles" posts={posts} />
      <main className="container prose prose-neutral mb-24 mt-10 dark:prose-invert">
        {children}
      </main>
    </>
  );
}
