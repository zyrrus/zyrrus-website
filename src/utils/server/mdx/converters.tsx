import type { PostFrontmatter } from "~/utils/server/mdx/types";
import type { CardMatter } from "~/app/components/mdx/filters";
import { GoPencil } from "react-icons/go";

export const projectToCardMatter =
  () =>
  (project: PostFrontmatter & { slug: string }): CardMatter => ({
    ...project,
    route: `/writing/${project.slug}`,
    image: project.image ?? `https://picsum.photos/540/240/`,
    icon: <GoPencil />,
  });
