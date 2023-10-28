import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "~/app/utils/styles";

const cardVariants = cva("rounded-3xl", {
  variants: {
    depth: {
      0: "shadow-cutout-depth-0 bg-neutral-100 dark:bg-neutral-850",
      1: "shadow-cutout-depth-1 bg-neutral-200 dark:bg-neutral-900",
    },
  },
  defaultVariants: {
    depth: 0,
  },
});

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card: React.FC<CardProps> = ({ className, depth, ...props }) => {
  return <div className={cn(cardVariants({ depth }), className)} {...props} />;
};

export { Card, cardVariants };
