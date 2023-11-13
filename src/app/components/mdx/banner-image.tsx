import Image from "next/image";
import { Card } from "~/app/components/card";
import { cn } from "~/app/utils/styles";

const BannerImage: React.FC<{
  src: string;
  alt?: string;
  className?: string;
}> = ({ src, alt = "", className }) => {
  return (
    <Card
      className={cn(
        "not-prose relative aspect-video h-auto max-w-full",
        className,
      )}
      overlayShadow
    >
      <Image src={src} alt={alt} className="object-cover" fill />
    </Card>
  );
};

export { BannerImage };
