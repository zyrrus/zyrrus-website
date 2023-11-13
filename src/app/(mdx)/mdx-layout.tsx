import { type PropsWithChildren } from "react";
import MdxHeader from "~/app/(mdx)/mdx-header";
import { MainContainer } from "~/app/components/mdx/main-container";
import { PostsPanel } from "~/app/components/navigation/posts-panel";
import { getAllPostsMeta } from "~/server/utils/mdx/mdx";
import { type SourceRoute } from "~/server/utils/mdx/types";

export default async function MdxLayout({
  children,
  source,
}: PropsWithChildren<{ source: SourceRoute }>) {
  const posts = await getAllPostsMeta(source);

  return (
    <>
      <PostsPanel source={source} posts={posts} />
      <MainContainer>
        <MdxHeader posts={posts} />
        {children}
      </MainContainer>
    </>
  );
}
