import { GoPencil } from "react-icons/go";
import { HighlightCardRow } from "~/app/components/highlight-card-row";
import { getAllPostsMeta } from "~/server/utils/mdx/mdx";

export default async function Articles() {
  const articles = await getAllPostsMeta("articles");

  return (
    <section className="flex flex-col gap-y-12 transition-transform">
      <HighlightCardRow
        title="Articles"
        items={articles.map((article, index) => ({
          title: article.title,
          tags: article.tags,
          route: `/articles/${article.slug}`,
          image:
            article.image ?? `https://picsum.photos/seed/${index + 1}/540/240/`,
          icon: <GoPencil />,
        }))}
      />
    </section>
  );
}
