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
    <aside className="fixed bottom-0 left-[72px] top-0 z-20 hidden w-60 border-r border-r-neutral-200 bg-neutral-50/75 pt-8 backdrop-blur-lg dark:border-r-neutral-700 dark:bg-neutral-800/75 xl:block 2xl:w-80">
      <h1 className="mb-3 px-4 font-bold capitalize">{source}</h1>
      <h2 className=" mb-2 px-4 font-medium text-secondary">Now reading</h2>
      <PostCard href={`/${source}/${segment}`} isActive />
      <h2 className=" mb-2 mt-6 px-4 font-medium text-secondary">Up next</h2>
      <div className="flex flex-col gap-y-2">
        {posts.map(
          (post) =>
            post.slug !== segment && (
              <PostCard key={post.slug} href={`/${source}/${post.slug}`} />
            ),
        )}
      </div>
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
  const Container = isActive ? "div" : Link;

  return (
    <Container
      href={href}
      className={cn(
        "dark:bg-neutral-750 dark:hover:bg-neutral-750 mx-2 block rounded-xl bg-neutral-150 p-2 transition-colors duration-500 hover:bg-neutral-150",
        !isActive && "bg-transparent dark:bg-transparent",
      )}
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      <span className="block text-secondary">01/02/2000</span>
    </Container>
  );
}

export { PostsPanel };
