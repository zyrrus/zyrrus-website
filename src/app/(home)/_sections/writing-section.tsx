import { GoPencil } from "react-icons/go";
import { HighlightCardRow } from "~/app/components/highlight-card-row";
import { getAllPostsMeta } from "~/utils/server/mdx/mdx";

export default async function Writing() {
  const writing = await getAllPostsMeta();

  return (
    <section className="flex flex-col gap-y-8">
      <HighlightCardRow
        title="Writing"
        items={writing.map((article) => ({
          title: article.title,
          tags: article.tags,
          route: `/writing/${article.slug}`,
          image: article.image ?? `https://picsum.photos/540/240/`,
          icon: <GoPencil />,
        }))}
      />
    </section>
  );
}
