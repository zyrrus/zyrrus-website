import { type PropsWithChildren } from "react";
import MdxHeader from "~/app/components/mdx/mdx-header";
import { MainContainer } from "~/app/components/mdx/main-container";
import { PostsPanel } from "~/app/components/navigation/posts-panel";
import { getAllPostsMeta } from "~/utils/server/mdx/mdx";

export default async function MdxLayout({ children }: PropsWithChildren) {
  const posts = await getAllPostsMeta();

  return (
    <>
      <PostsPanel posts={posts} />
      <MainContainer>
        <MdxHeader posts={posts} />
        {children}
      </MainContainer>
    </>
  );
}
