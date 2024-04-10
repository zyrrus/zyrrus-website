import type { PostFrontmatter } from "~/utils/server/mdx/types";
import { GoPencil } from "react-icons/go";
import type { HighlightCardProps } from "~/app/components/highlight-card";

export type CardMatter = HighlightCardProps &
  PostFrontmatter & { slug: string };

export const projectToCardMatter =
  () =>
  (project: PostFrontmatter & { slug: string }): CardMatter => ({
    ...project,
    route: `/writing/${project.slug}`,
    image: project.image ?? `https://picsum.photos/540/240/`,
    icon: <GoPencil />,
  });
