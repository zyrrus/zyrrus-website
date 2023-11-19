import type { PostFrontmatter, SourceRoute } from "~/server/utils/mdx/types";
import type { CardMatter } from "~/app/(mdx)/filters";
import { GoCommandPalette, GoPencil } from "react-icons/go";

export const projectToCardMatter =
  (source: SourceRoute) =>
  (project: PostFrontmatter & { slug: string }): CardMatter => ({
    ...project,
    route: `/projects/${project.slug}`,
    image: project.image ?? `https://picsum.photos/540/240/`,
    icon: source === "projects" ? <GoCommandPalette /> : <GoPencil />,
  });
