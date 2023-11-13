"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { BannerImage } from "~/app/components/mdx/banner-image";
import type { PostFrontmatter } from "~/server/utils/mdx/types";
import { BadgeList } from "~/app/components/mdx/badge-list";

interface Props {
  posts: (PostFrontmatter & {
    slug: string;
  })[];
}
export default function MdxHeader({ posts }: Props) {
  const pathname = usePathname();

  const currentPost = useMemo(() => {
    const filtered = posts.filter((post) => {
      const segments = pathname.split("/");
      const segment = segments[segments.length - 1];
      return post.slug === segment;
    });

    if (filtered.length === 0) return undefined;
    return filtered[0];
  }, [pathname]);

  return !!currentPost ? (
    <div className="mb-10 flex flex-col gap-y-2">
      {!!currentPost.image && <BannerImage src={currentPost.image} />}
      {!!currentPost.tags && <BadgeList badges={currentPost.tags} />}
    </div>
  ) : undefined;
}
