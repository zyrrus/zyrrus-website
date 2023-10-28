import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";
import { Card } from "~/app/components/card";

export interface HighlightCardProps {
  title: string;
  subtitle: string;
  route: string;
  image: string;
  icon: ReactNode;
}

const HighlightCard: React.FC<HighlightCardProps> = ({
  title,
  subtitle,
  route,
  image,
  icon,
}) => {
  return (
    <Link
      href={route}
      className="w-full max-w-[540px] flex-shrink-0 flex-grow text-primary"
    >
      <Card
        depth={0}
        className="mt-3 transition-transform hover:-translate-y-3"
      >
        <Card depth={1} className="relative h-60 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            className="shadow-cutout-depth-1"
            fill
          />
        </Card>
        <div className="flex flex-row justify-between px-6 py-3">
          <div className="flex flex-row items-center gap-x-2">
            {icon}
            <p className="font-medium">{title}</p>
          </div>
          <p className="text-secondary">{subtitle}</p>
        </div>
      </Card>
    </Link>
  );
};

export { HighlightCard };
