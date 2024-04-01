import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";
import { Card } from "~/app/components/card";
import { BadgeList } from "~/app/components/mdx/badge-list";
import { Badge } from "~/app/components/ui/badge";
import { cn } from "~/app/utils/styles";

export interface HighlightCardProps {
  title: string;
  date?: string;
  tags?: string[];
  route: string;
  image: string;
  icon: ReactNode;
  className?: string;
}

const HighlightCard: React.FC<HighlightCardProps> = ({
  title,
  date,
  tags,
  route,
  image,
  icon,
  className,
}) => {
  return (
    <Link href={route} className={cn("mt-4 text-primary", className)}>
      <Card
        depth={0}
        className="w-full transition-transform duration-300 hover:-translate-y-3 motion-safe:ease-bounce-up"
      >
        <Card
          depth={1}
          className="relative aspect-[9/4] w-full overflow-hidden"
          overlayShadow
        >
          <Image src={image} alt="" className="object-cover object-top" fill />
        </Card>
        {/* Bottom row */}
        <div className="flex flex-col gap-y-2 px-6 py-3">
          <div className="flex flex-row justify-between">
            {/* Title */}
            <div className="flex flex-row items-center gap-x-2">
              {icon}
              <p className="line-clamp-1 font-medium">{title}</p>
            </div>
            {/* Date */}
            <p className="line-clamp-1 hidden text-right text-secondary sm:block">
              {date}
            </p>
          </div>
          {/* Tags */}
          <ul className="hidden flex-row flex-nowrap gap-x-1 sm:flex">
            {tags?.map((t) => (
              <Badge key={t} slot="li" variant="outline">
                {t}
              </Badge>
            ))}
          </ul>
        </div>
      </Card>
    </Link>
  );
};

export { HighlightCard };
