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
import { SidebarCommand } from "~/app/components/navigation/sidebar-command";
import { ThemeToggle } from "~/app/components/theme/theme-toggle";
import { Button } from "~/app/components/ui/button";

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

const Navigation = () => {
  return (
    <nav className={navigation()}>
      <ul className={navigationList()}>
        <li>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/">
              <GoHome className="h-6 w-6" />
            </Link>
          </Button>
        </li>
        <li>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/about">
              <GoPerson className="h-6 w-6" />
            </Link>
          </Button>
        </li>
        <li>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/projects">
              <GoCommandPalette className="h-6 w-6" />
            </Link>
          </Button>
        </li>
        <li>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/articles">
              <GoPencil className="h-6 w-6" />
            </Link>
          </Button>
        </li>
        <li>
          <Button variant="ghost" size="icon">
            <GoMail className="h-6 w-6" />
          </Button>
        </li>
        <Separator.Root decorative className={separator()} />
        <li className="hidden sm:block">
          <ThemeToggle />
        </li>
        <li className="hidden sm:block">
          <SidebarCommand />
        </li>
      </ul>
    </nav>
  );
};

export { Navigation };
