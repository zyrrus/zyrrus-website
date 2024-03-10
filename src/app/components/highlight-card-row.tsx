"use client";

import { useRef, useState, useEffect } from "react";
import {
  HighlightCard,
  type HighlightCardProps,
} from "~/app/components/highlight-card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export interface HighlightCardRowProps {
  title: string;
  items: HighlightCardProps[];
}

const HighlightCardRow: React.FC<HighlightCardRowProps> = ({
  title,
  items,
}) => {
  const { containerRef, containerWidth } = useContainerWidth();

  return (
    <>
      <h2
        ref={containerRef}
        data-bg-text={title}
        className="container display-text-[attr(data-bg-text)] text-2xl"
      >
        {title}
      </h2>
      <Swiper
        className="max-w-[588px] !overflow-visible !px-6"
        width={containerWidth}
        slidesPerView={1}
        slidesPerGroup={1}
        spaceBetween={containerWidth < 588 ? 12 : 32}
      >
        {items.map((card, index) => (
          <SwiperSlide key={index}>
            <HighlightCard {...card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

const useContainerWidth = () => {
  const containerRef = useRef<HTMLHeadingElement | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateContainerWidth = () => {
      if (containerRef.current) {
        const boundingRect = containerRef.current.getBoundingClientRect();
        setContainerWidth(boundingRect.width);
      }
    };

    updateContainerWidth();

    window.addEventListener("resize", updateContainerWidth);
    return () => {
      window.removeEventListener("resize", updateContainerWidth);
    };
  }, [containerRef.current]);

  return { containerRef, containerWidth };
};

export { HighlightCardRow };
