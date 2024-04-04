import AllPosts from "~/app/(mdx)/all-posts";
import { projectToCardMatter } from "~/utils/server/mdx/converters";
import { getAllPostsMeta } from "~/utils/server/mdx/mdx";

export default async function Articles() {
  const allArticles = (await getAllPostsMeta("articles")).map(
    projectToCardMatter("articles"),
  );

  return (
    <main className="not-prose flex flex-col gap-y-36 pb-24 pt-52">
      <h1 className="container display-text-['Articles'] text-2xl">Articles</h1>
      <AllPosts originalPosts={allArticles} />
    </main>
  );
}
