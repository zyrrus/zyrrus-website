"use client";

import { useAutoAnimate } from "@formkit/auto-animate/react";
import Link from "next/link";
import { useState } from "react";
import { Card } from "~/app/components/card";
import Filters, { type Filterable } from "~/app/components/filters";

interface Item extends Filterable {
  route: string;
}

interface Props {
  originalItems: Item[];
}

export default function GridContainer({ originalItems }: Props) {
  const [animationParent] = useAutoAnimate();
  const [items, setItems] = useState(originalItems);

  return (
    <div
      ref={animationParent}
      className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
    >
      <Filters
        filterNames={originalItems.flatMap((p) => p.tags ?? [])}
        originalItems={originalItems}
        items={items}
        setItems={setItems}
      />
      {items.map(({ title, date, route }) => (
        <Link key={title} href={route}>
          <Card
            className="px-8 py-5 transition-transform duration-300 hover:-translate-y-3 motion-safe:ease-bounce-up"
            depth={0}
          >
            <p className="">{title}</p>
            <p className="">{date}</p>
          </Card>
        </Link>
      ))}
    </div>
  );
}
