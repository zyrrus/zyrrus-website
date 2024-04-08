"use client";

import { useState } from "react";
import Filters, { type CardMatter } from "~/app/components/mdx/filters";
import { HighlightCard } from "~/app/components/highlight-card";
import { useAutoAnimate } from "@formkit/auto-animate/react";

interface Props {
  originalPosts: CardMatter[];
}

export default function AllPosts({ originalPosts }: Props) {
  const [animationParent] = useAutoAnimate();
  const [posts, setPosts] = useState(originalPosts);

  return (
    <div
      ref={animationParent}
      className="mx-auto grid grid-cols-1 gap-10 px-6 lg:grid-cols-2 2xl:grid-cols-3"
    >
      <Filters
        originalPosts={originalPosts}
        posts={posts}
        setPosts={setPosts}
      />
      {posts.map((props) => (
        <HighlightCard
          key={props.route}
          {...props}
          className="max-w-[540px] xl:max-w-[420px]"
        />
      ))}
    </div>
  );
}
