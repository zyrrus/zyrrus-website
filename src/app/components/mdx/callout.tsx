import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "~/utils/client/styles";
import { GoAlert, GoInfo, GoPin } from "react-icons/go";
import { type ReactNode } from "react";

const calloutVariant = cva(
  "not-prose my-10 rounded-lg px-4 py-3 text-primary",
  {
    variants: {
      variant: {
        none: "bg-2",
        note: "bg-green-100 dark:bg-emerald-700/50",
        important: "bg-blue-100 dark:bg-indigo-700/50",
        warning: "bg-orange-100 dark:bg-amber-700/50",
      },
    },
  },
);

type CallOutVariant = VariantProps<typeof calloutVariant>;
type Variants = Exclude<CallOutVariant["variant"], null | undefined>;
type Header = { title?: string; icon?: ReactNode };

interface CalloutProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CallOutVariant {}

const Callout: React.FC<CalloutProps> = ({
  className,
  variant = "none",
  children,
  ...props
}) => {
  const headers: Record<Variants, Header> = {
    none: {},
    note: { title: "Note", icon: <GoPin strokeWidth={1} /> },
    important: {
      title: "Important",
      icon: <GoInfo strokeWidth={1} />,
    },
    warning: {
      title: "Warning",
      icon: <GoAlert strokeWidth={1} />,
    },
  };

  const header: Header | undefined = variant ? headers[variant] : undefined;

  return (
    <div className={cn(calloutVariant({ variant }), className)} {...props}>
      <p className="flex flex-row items-center gap-x-2 font-medium">
        {header?.icon && header.icon}
        {header?.title && header.title}
      </p>
      {children}
    </div>
  );
};

export { Callout };
