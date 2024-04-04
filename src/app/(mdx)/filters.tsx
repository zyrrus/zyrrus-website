"use client";

import { GoCheck, GoFilter, GoSortDesc } from "react-icons/go";
import { Button } from "~/app/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/app/components/ui/dropdown-menu";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { DropdownMenuRadioGroup } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { type HighlightCardProps } from "~/app/components/highlight-card";
import useFilters from "~/app/hooks/useFilters";
import { type PostFrontmatter } from "~/utils/server/mdx/types";

export type CardMatter = HighlightCardProps &
  PostFrontmatter & { slug: string };

type SortOption = "title-asc" | "title-desc" | "latest" | "oldest";
const sortOptions: { value: SortOption; children: string }[] = [
  { value: "latest", children: "Date (Latest)" },
  { value: "oldest", children: "Date (Oldest)" },
  { value: "title-asc", children: "Title (A-Z)" },
  { value: "title-desc", children: "Title (Z-A)" },
];

interface Props {
  originalPosts: CardMatter[];
  posts: CardMatter[];
  setPosts: (value: CardMatter[]) => void;
}

export default function Filters({ originalPosts, posts, setPosts }: Props) {
  const [animationParent] = useAutoAnimate();

  const { filters, handleResetFilters, handleToggleFilter } = useFilters(
    posts.flatMap((p) => p.tags ?? []),
  );

  const handleFilter = (index: number) => {
    handleToggleFilter(index);

    const filterResults = posts.filter(
      (post) =>
        post.tags &&
        post.tags.some((tag) =>
          filters.some((filter) => filter.isActive && filter.name === tag),
        ),
    );

    setPosts(filterResults.length > 0 ? filterResults : originalPosts);
  };

  const handleReset = () => {
    handleResetFilters();
    setPosts(originalPosts);
  };

  const [sortMethod, setSortMethod] = useState<SortOption>("latest");

  const handleSortMethodChanged = (value: string) => {
    const method = value as SortOption;
    setSortMethod(method);

    const newPosts = [...posts];
    switch (method) {
      case "latest":
        newPosts.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        );
        break;
      case "oldest":
        newPosts.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
        );
        break;
      case "title-asc":
        newPosts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "title-desc":
        newPosts.sort((a, b) => b.title.localeCompare(a.title));
        break;
    }
    setPosts(newPosts);
  };

  return (
    <div className="col-span-full max-w-lg lg:max-w-[970px] xl:max-w-[900px] 2xl:max-w-7xl">
      <div className="mb-2 flex flex-row gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm">
              <GoSortDesc />
              Sort
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuLabel>Sort By</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={sortMethod}
              onValueChange={handleSortMethodChanged}
            >
              {sortOptions.map((props) => (
                <DropdownMenuRadioItem key={props.value} {...props} />
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant="ghost" size="sm" onClick={handleReset}>
          <GoFilter />
          Reset filters
        </Button>
      </div>
      <ul ref={animationParent} className="flex flex-row flex-wrap gap-2">
        {filters.map(({ name, isActive }, index) => (
          <li key={name}>
            <Button
              variant={isActive ? "default" : "outline"}
              size="sm"
              onClick={() => handleFilter(index)}
            >
              {isActive && <GoCheck />}
              {name}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
