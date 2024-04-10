"use client";

import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState } from "react";
import Filters from "~/app/components/filters";

interface Props {
  originalItems: { title: string; date: string; tags: string[] }[];
}

export default function GridContainer({ originalItems }: Props) {
  const [animationParent] = useAutoAnimate();
  const [items, setItems] = useState(originalItems);

  return (
    <div
      ref={animationParent}
      className="mx-auto grid grid-cols-1 gap-10 px-6 lg:grid-cols-2 2xl:grid-cols-3"
    >
      <Filters
        filterNames={originalItems.flatMap((p) => p.tags)}
        originalItems={originalItems}
        items={items}
        setItems={setItems}
      />
      {items.map(({ title, date }) => (
        <div key={title}>{title}</div>
      ))}
    </div>
  );
}
