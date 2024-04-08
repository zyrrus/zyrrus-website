"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { cn } from "~/utils/client/styles";
import { type PostFrontmatter } from "~/utils/server/mdx/types";
import { Sheet, SheetContent, SheetTrigger } from "~/app/components/ui/sheet";
import { Button } from "~/app/components/ui/button";
import { GoKebabHorizontal } from "react-icons/go";
import { ScrollArea } from "~/app/components/ui/scroll-area";

interface Props {
  posts: (PostFrontmatter & {
    slug: string;
  })[];
}

function PostsPanel(props: Props) {
  return (
    <>
      {/* Desktop side panel */}
      <div className="fixed bottom-0 left-[72px] top-0 z-20 hidden w-60 border-r border-r-neutral-200 bg-neutral-50/75 pt-8 backdrop-blur-lg dark:border-r-neutral-700 dark:bg-neutral-800/75 xl:block 2xl:w-80">
        <PostsPanelContent {...props} />
      </div>
      {/* Mobile top bar + drawer */}
      <div className="sticky left-0 right-0 top-0 z-30 border-b border-neutral-200 bg-neutral-50/75 backdrop-blur-lg dark:border-neutral-700 dark:bg-neutral-800/75 xl:hidden">
        <div className="flex h-full w-full flex-row items-center justify-between p-2 pl-4 text-lg">
          <Link href="/writing" className="font-medium capitalize">
            Writing
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <GoKebabHorizontal className="h-6 w-6 text-primary" />
                <span className="sr-only">Open "More Writing" panel</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <PostsPanelContent {...props} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
}

function PostsPanelContent({ posts }: Props) {
  const segment = useSelectedLayoutSegment();

  if (segment === null) return null;

  const currentPost = posts.find((post) => post.slug === segment);

  return (
    <aside>
      <h1 className="mb-3 px-4 font-bold capitalize">
        <Link href="/writing">Writing</Link>
      </h1>
      {currentPost && (
        <>
          <h2 className=" mb-2 px-4 font-medium text-secondary">Now reading</h2>
          <PostCard
            href={`/writing/${segment}`}
            isActive
            title={currentPost.title}
            date={currentPost.date}
          />
        </>
      )}
      {posts.length > (currentPost ? 1 : 0) && (
        <>
          <h2 className=" mb-2 mt-6 px-4 font-medium text-secondary">
            Up next
          </h2>
          <div className="flex flex-col gap-y-2">
            {/* Height = screen height - height of "Projects" through "Up next" */}
            <ScrollArea className="h-[calc(100vh-228px)]">
              {posts.map(
                (post) =>
                  post.slug !== segment && (
                    <PostCard
                      key={post.slug}
                      href={`/writing/${post.slug}`}
                      title={post.title}
                      date={post.date}
                    />
                  ),
              )}
            </ScrollArea>
          </div>
        </>
      )}
    </aside>
  );
}

function PostCard({
  href,
  isActive = false,
  title,
  date,
}: {
  href: string;
  isActive?: boolean;
  title: string;
  date: string;
}) {
  const Container = isActive ? "div" : Link;

  return (
    <Container
      href={href}
      className={cn(
        "mx-2 block rounded-xl bg-neutral-150 p-2 transition-colors duration-500 hover:bg-neutral-150 dark:bg-neutral-750 dark:hover:bg-neutral-750",
        !isActive && "bg-transparent dark:bg-transparent",
      )}
    >
      {title}
      <span className="block text-secondary">{date}</span>
    </Container>
  );
}

export { PostsPanel };
