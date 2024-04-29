import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "~/utils/client/styles";

const cardVariants = cva("", {
  variants: {
    depth: {
      0: "shadow-cutout-depth-0 bg-1",
      1: "shadow-cutout-depth-1 bg-2",
    },
  },
});

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  overlayShadow?: boolean;
}

const Card: React.FC<CardProps> = ({
  className,
  depth = 0,
  overlayShadow = false,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        "relative overflow-clip rounded-3xl",
        cardVariants({ depth }),
        className,
      )}
      {...props}
    >
      {children}
      {overlayShadow && (
        <div
          className={cn(
            "absolute inset-0",
            ["shadow-cutout-depth-0", "shadow-cutout-depth-1"][depth ?? 0] ??
              "",
          )}
        />
      )}
    </div>
  );
};

export { Card, cardVariants as cardVariants };
