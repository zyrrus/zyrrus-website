"use client";

import * as Separator from "@radix-ui/react-separator";
import Link from "next/link";
import {
  GoHome,
  GoPerson,
  GoCommandPalette,
  GoPencil,
  GoMail,
} from "react-icons/go";
import { SidebarCommand } from "~/app/_components/sidebar-command";
import { ThemeToggle } from "~/app/_components/theme-toggle";
import { Button } from "~/app/_components/ui/button";

const Sidebar = () => {
  return (
    <nav className="fixed bottom-0 left-0 top-0 z-30 border-r border-r-neutral-200 bg-neutral-50/75 px-4 backdrop-blur-lg dark:border-r-neutral-700 dark:bg-neutral-800/75">
      <ul className="flex h-full flex-col items-center justify-center gap-y-3 ">
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
        <Separator.Root
          decorative
          className="my-2 h-px w-full rounded-full bg-neutral-200 dark:bg-neutral-700"
        />
        <li>
          <ThemeToggle />
        </li>
        <li>
          <SidebarCommand />
        </li>
      </ul>
    </nav>
  );
};

export { Sidebar };
