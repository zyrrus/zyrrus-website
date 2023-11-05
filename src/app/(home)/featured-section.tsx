import { GoCommandPalette, GoPencil } from "react-icons/go";
import { HighlightCardRow } from "~/app/components/highlight-card-row";
import { getAllFeaturedPostsMeta } from "~/server/utils/mdx/mdx";

export default async function Featured() {
  const featuredSources = await getAllFeaturedPostsMeta();

  const featured = Object.entries(featuredSources)
    .map(([source, posts]) =>
      posts.map((post) => ({
        ...post,
        source,
        slug: `/${source}/${post.slug}`,
      })),
    )
    .flat();

  return (
    <section className="flex flex-col gap-y-12">
      <HighlightCardRow
        title="Featured"
        items={featured.map((post, index) => ({
          title: post.title,
          tags: post.tags,
          route: post.slug,
          image:
            post.image ?? `https://picsum.photos/seed/${index + 1}/540/240/`,
          icon:
            post.source === "projects" ? <GoCommandPalette /> : <GoPencil />,
        }))}
      />
    </section>
  );
}
