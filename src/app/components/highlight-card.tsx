"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode, useEffect } from "react";
import { Card } from "~/app/components/card";
import { clamp } from "~/app/utils/math";
import { cn } from "~/app/utils/styles";

export interface HighlightCardProps {
  title: string;
  tags?: string[];
  route: string;
  image: string;
  icon: ReactNode;
  disableFullWidth?: boolean;
  className?: string;
}

const HighlightCard: React.FC<HighlightCardProps> = ({
  title,
  tags,
  route,
  image,
  icon,
  disableFullWidth = false,
  className,
}) => {
  const padding = 24 * 2;
  const maxWidth = 588 - padding;

  const [width, setWidth] = useState(540);

  useEffect(() => {
    const updateWidth = () => {
      setWidth(clamp(0, document.body.clientWidth - padding, maxWidth));
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <Link
      href={route}
      className={cn("mt-4 text-primary", className)}
      style={{ width: disableFullWidth ? undefined : width }}
    >
      <Card
        depth={0}
        className="transition-transform duration-300 hover:-translate-y-3 motion-safe:ease-bounce-up"
      >
        <Card
          depth={1}
          className="relative h-60 w-full overflow-hidden"
          overlayShadow
        >
          <Image src={image} alt="" className="object-cover object-top" fill />
        </Card>
        <div className="flex flex-row justify-between gap-x-4 px-6 py-3">
          <div className="flex flex-row items-center gap-x-2">
            {icon}
            <p className="line-clamp-1 font-medium">{title}</p>
          </div>
          <p className="line-clamp-1 text-right">{tags?.join(" · ")}</p>
        </div>
      </Card>
    </Link>
  );
};

export { HighlightCard };
