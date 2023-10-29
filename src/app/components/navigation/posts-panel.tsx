"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { cn } from "~/app/utils/styles";
import { isSourceRoute, type SourceRoute } from "~/server/utils/mdx/types";

interface Props {
  source: SourceRoute;
  posts: (Record<string, unknown> & {
    slug: string;
  })[];
}

function PostsPanel({ source, posts }: Props) {
  const segment = useSelectedLayoutSegment();

  if (segment === null || isSourceRoute(segment)) return null;

  return (
    <aside className="fixed bottom-0 left-[72px] top-0 z-20 hidden w-60 border-r border-r-neutral-200 bg-neutral-50/75 pt-8 backdrop-blur-lg dark:border-r-neutral-700 dark:bg-neutral-800/75 xl:block">
      <h1 className="mb-3 px-4 font-bold capitalize">{source}</h1>
      <h2 className="px-4 font-medium">Now reading</h2>
      <PostCard href={`/${source}/${segment}`} isActive />
      <h2 className="px-4 font-medium">Up next</h2>
      {posts.map(
        (post) =>
          post.slug !== segment && (
            <PostCard key={post.slug} href={`/${source}/${post.slug}`} />
          ),
      )}
    </aside>
  );
}

function PostCard({
  href,
  isActive = false,
}: {
  href: string;
  isActive?: boolean;
}) {
  return (
    <Link
      key={href}
      href={href}
      className={cn("block", isActive ? "" : "px-4")}
    >
      {href}
    </Link>
  );
}

export { PostsPanel };
