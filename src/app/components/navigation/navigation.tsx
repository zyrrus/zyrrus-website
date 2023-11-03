"use client";

import * as Separator from "@radix-ui/react-separator";
import { cva } from "class-variance-authority";
import Link from "next/link";
import {
  GoHome,
  GoPerson,
  GoCommandPalette,
  GoPencil,
  GoMail,
} from "react-icons/go";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/app/components/ui/tooltip";

import { type IconType } from "react-icons/lib";
import { SidebarCommand } from "~/app/components/navigation/sidebar-command";
import { ThemeToggle } from "~/app/components/theme/theme-toggle";
import { Button } from "~/app/components/ui/button";
import { type PropsWithChildren } from "react";

const navigation = cva([
  // Shared
  "fixed z-30",
  "border-neutral-200 bg-neutral-50/75 backdrop-blur-lg",
  "dark:border-r-neutral-700 dark:bg-neutral-800/75",
  "bottom-0 left-0",
  // Mobile
  "right-0 border-t",
  // Desktop
  "xl:top-0 xl:border-r xl:right-auto xl:border-t-0",
]);

const navigationList = cva([
  "flex h-full w-full items-center justify-center gap-3",
  // Mobile
  "flex-row py-2",
  // Desktop
  "xl:flex-col xl:px-4 xl:py-0",
]);

const separator = cva([
  "rounded-full bg-neutral-900 dark:bg-neutral-50 h-0.5 w-0.5 shrink-0",
  // Mobile
  "mx-2 hidden",
  // Desktop
  "xl:my-2 xl:mx-0 sm:block",
]);

// TODO: Finish setting up "current page" state
const icon = cva("h-6 w-6", {
  variants: {
    status: { inactive: "text-neutral-400", active: "text-primary" },
  },
});

const links: {
  tooltip: string;
  href: string;
  icon: IconType;
}[] = [
  {
    tooltip: "Home",
    href: "/",
    icon: GoHome,
  },
  {
    tooltip: "About",
    href: "/about",
    icon: GoPerson,
  },
  {
    tooltip: "Projects",
    href: "/projects",
    icon: GoCommandPalette,
  },
  {
    tooltip: "Articles",
    href: "/articles",
    icon: GoPencil,
  },
];

const Navigation = () => {
  return (
    <nav className={navigation()}>
      <ul className={navigationList()}>
        {links.map(({ tooltip, href, icon: Icon }) => (
          <li key={href}>
            <WithTooltip tooltip={tooltip}>
              <Button variant="ghost" size="icon" asChild>
                <Link href={href}>
                  <Icon className={icon({ status: "active" })} />
                </Link>
              </Button>
            </WithTooltip>
          </li>
        ))}
        <li>
          <WithTooltip tooltip="Contact">
            <Button variant="ghost" size="icon">
              <GoMail className={icon({ status: "active" })} />
            </Button>
          </WithTooltip>
        </li>
        <Separator.Root decorative className={separator()} />
        <li className="hidden sm:block">
          <WithTooltip tooltip="Toggle theme">
            <div>
              <ThemeToggle />
            </div>
          </WithTooltip>
        </li>
        <li className="hidden sm:block">
          <WithTooltip tooltip="Search">
            <div>
              <SidebarCommand />
            </div>
          </WithTooltip>
        </li>
      </ul>
    </nav>
  );
};

const WithTooltip = ({
  children,
  tooltip,
}: PropsWithChildren<{ tooltip: string }>) => {
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side="right">
          <p className="">{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export { Navigation };
