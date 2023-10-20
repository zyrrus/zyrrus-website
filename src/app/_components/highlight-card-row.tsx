"use client";

import { useRef, useState, useEffect } from "react";
import {
  HighlightCard,
  type HighlightCardProps,
} from "~/app/_components/highlight-card";
import { ScrollArea } from "~/app/_components/ui/scroll-area";

export interface HighlightCardRowProps {
  title: string;
  items: HighlightCardProps[];
}

const HighlightCardRow: React.FC<HighlightCardRowProps> = ({
  title,
  items,
}) => {
  const containerRef = useRef<HTMLHeadingElement | null>(null);
  const [distanceToLeftEdge, setDistanceToLeftEdge] = useState(0);

  useEffect(() => {
    const updateDistance = () => {
      if (containerRef.current) {
        const boundingRect = containerRef.current.getBoundingClientRect();
        const distance = boundingRect.left;
        setDistanceToLeftEdge(distance);
        // setTimeout(() => {
        //   setDistanceToLeftEdge(distance);
        // }, 10);
      }
    };

    updateDistance();

    window.addEventListener("resize", updateDistance);
    return () => {
      window.removeEventListener("resize", updateDistance);
    };
  }, [containerRef.current]);

  const spacer = (
    <div
      className="flex-shrink-0 transition-[width]"
      style={{ width: Math.max(distanceToLeftEdge - 32, 0) }}
    />
  );

  return (
    <>
      <h2
        ref={containerRef}
        data-bg-text={title}
        className="container display-text-[attr(data-bg-text)] text-2xl"
      >
        {title}
      </h2>
      <ScrollArea className="pb-6">
        <div className="flex w-full flex-row gap-x-8">
          {spacer}
          {items.map((card, index) => (
            <HighlightCard key={index} {...card} />
          ))}
          {spacer}
        </div>
      </ScrollArea>
    </>
  );
};

export { HighlightCardRow };
