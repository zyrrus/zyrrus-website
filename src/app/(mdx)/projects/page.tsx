import { GoCommandPalette } from "react-icons/go";
import { HeroGraphic } from "~/app/(home)/hero-graphic";
import { HighlightCardRow } from "~/app/components/highlight-card-row";
import { getAllPostsMeta } from "~/server/utils/mdx/mdx";
import type { PostFrontmatter } from "~/server/utils/mdx/types";

export default async function Projects() {
  const allProjects = await getAllPostsMeta("projects");

  const projectToHighlightCard = (
    project: PostFrontmatter & {
      slug: string;
    },
  ) => ({
    title: project.title,
    tags: project.tags,
    route: `/projects/${project.slug}`,
    image: project.image ?? `https://picsum.photos/540/240/`,
    icon: <GoCommandPalette />,
  });

  return (
    <main className="not-prose flex flex-col gap-y-52 pb-24 pt-52">
      <section className="container flex flex-col gap-y-16">
        <h1 className="display-text-['Projects'] text-2xl">Projects</h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          iusto hic quibusdam ad. Aspernatur tempora, architecto, quo
          exercitationem?
        </p>
      </section>
      <section className="flex flex-col gap-y-12">
        <HighlightCardRow
          title="Featured"
          items={allProjects
            .filter((project) => project.featured)
            .map(projectToHighlightCard)}
        />
      </section>
      <section className="flex flex-col gap-y-12">
        <HighlightCardRow
          title="All"
          items={allProjects.map(projectToHighlightCard)}
        />
      </section>
    </main>
  );
}
