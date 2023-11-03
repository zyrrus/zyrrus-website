import { GoProject } from "react-icons/go";
import { HighlightCardRow } from "~/app/components/highlight-card-row";
import { getAllPostsMeta } from "~/server/utils/mdx/mdx";
import { type PostFrontmatter } from "~/server/utils/mdx/types";

export default async function Articles() {
  const articles = await getAllPostsMeta<PostFrontmatter>("articles");

  return (
    <section className="flex flex-col gap-y-12 transition-transform">
      <HighlightCardRow
        title="Articles"
        items={articles.map((article, index) => ({
          title: article.title,
          tags: article.tags,
          route: "/",
          image: `https://picsum.photos/seed/${index + 1}/540/240/`,
          icon: <GoProject />,
        }))}
      />
    </section>
  );
}
