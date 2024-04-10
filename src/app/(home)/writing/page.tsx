import AllPosts from "~/app/components/mdx/all-posts";
import { projectToCardMatter } from "~/utils/server/mdx/converters";
import { getAllPostsMeta } from "~/utils/server/mdx/mdx";

export default async function Writing() {
  const allWriting = (await getAllPostsMeta()).map(projectToCardMatter());

  return (
    <main className="not-prose flex flex-col gap-y-36 pb-24 pt-52">
      <h1 className="container display-text-['Writing'] text-2xl">Writing</h1>
      <AllPosts originalPosts={allWriting} />
    </main>
  );
}
