"use client";

import { useRef, useState, useEffect } from "react";
import {
  HighlightCard,
  type HighlightCardProps,
} from "~/app/_components/highlight-card";
import { ScrollArea } from "~/app/_components/ui/scroll-area";
import { cn } from "~/app/_utils/styles";

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

  const updateDistance = () => {
    if (containerRef.current) {
      const boundingRect = containerRef.current.getBoundingClientRect();
      const distance = boundingRect.left;
      setDistanceToLeftEdge(distance);
    }
  };

  useEffect(() => {
    updateDistance();

    window.addEventListener("resize", updateDistance);
    return () => {
      window.removeEventListener("resize", updateDistance);
    };
  }, []);

  return (
    <>
      <h2
        ref={containerRef}
        data-bg-text={title}
        className="container display-text-[attr(data-bg-text)] text-2xl"
      >
        {title}
      </h2>
      <ScrollArea className="pb-3">
        <div className="flex w-full flex-row gap-x-8">
          <div style={{ width: distanceToLeftEdge - 32, flexShrink: 0 }} />
          {items.map((card, index) => (
            <HighlightCard key={index} {...card} />
          ))}
          <div style={{ width: distanceToLeftEdge - 32, flexShrink: 0 }} />
        </div>
      </ScrollArea>
    </>
  );
};

export { HighlightCardRow };
