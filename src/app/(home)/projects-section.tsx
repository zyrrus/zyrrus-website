import { GoCommandPalette } from "react-icons/go";
import { HighlightCardRow } from "~/app/components/highlight-card-row";
import { getAllPostsMeta } from "~/server/utils/mdx/mdx";

export default async function Projects() {
  const projects = await getAllPostsMeta("projects");

  return (
    <section className="flex flex-col gap-y-12">
      <HighlightCardRow
        title="Projects"
        items={projects.map((project) => ({
          title: project.title,
          tags: project.tags,
          route: `/projects/${project.slug}`,
          image: project.image ?? `https://picsum.photos/540/240/`,
          icon: <GoCommandPalette />,
        }))}
      />
    </section>
  );
}
