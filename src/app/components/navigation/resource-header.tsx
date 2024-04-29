import {
  BreadcrumbNav,
  type BreadcrumbNavProps,
} from "~/app/components/navigation/breadcrumb-nav";
import { ThemeToggle } from "~/app/components/theme/theme-toggle";

export const ResourceHeader = (props: BreadcrumbNavProps) => {
  return (
    <div className="mx-auto mt-10 flex max-w-7xl flex-row items-center justify-between px-6">
      <BreadcrumbNav {...props} />
      <ThemeToggle />
    </div>
  );
};
