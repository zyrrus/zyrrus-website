"use client";

import { useRef, useState, useEffect } from "react";
import {
  HighlightCard,
  type HighlightCardProps,
} from "~/app/components/highlight-card";
import { ScrollArea } from "~/app/components/ui/scroll-area";

export interface HighlightCardRowProps {
  title: string;
  items: HighlightCardProps[];
}

const HighlightCardRow: React.FC<HighlightCardRowProps> = ({
  title,
  items,
}) => {
  const containerRef = useRef<HTMLHeadingElement | null>(null);
  const [gutterWidth, setGutterWidth] = useState(0);
  const columnGap = 32;

  useEffect(() => {
    const updateDistance = () => {
      if (containerRef.current) {
        const boundingRect = containerRef.current.getBoundingClientRect();
        const distance = boundingRect.left;
        setGutterWidth(distance);
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
      className="flex-shrink-0"
      style={{
        width: Math.max(gutterWidth, 0),
        marginRight: -columnGap,
      }}
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
      <ScrollArea className="pb-6" scrollbarHorizontalClassname="max-w-[588px]">
        <div className="flex w-full flex-row gap-x-8 px-6">
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
