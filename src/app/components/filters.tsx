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
import useFilters from "~/app/hooks/useFilters";

type SortOption = "title-asc" | "title-desc" | "latest" | "oldest";
const SORT_OPTIONS: { value: SortOption; children: string }[] = [
  { value: "latest", children: "Date (Latest)" },
  { value: "oldest", children: "Date (Oldest)" },
  { value: "title-asc", children: "Title (A-Z)" },
  { value: "title-desc", children: "Title (Z-A)" },
];

export type Filterable = {
  title: string;
  date: string;
  tags?: string[];
};

interface Props<T extends Filterable> {
  filterNames: string[];
  originalItems: T[];
  items: T[];
  setItems: (value: T[]) => void;
}

export default function Filters<T extends Filterable>({
  filterNames,
  originalItems,
  items,
  setItems,
}: Props<T>) {
  const [animationParent] = useAutoAnimate();

  const [sortMethod, setSortMethod] = useState<SortOption>("latest");
  const { filters, handleResetFilters, handleToggleFilter } =
    useFilters(filterNames);

  const handleFilter = (index: number) => {
    handleToggleFilter(index);

    const activeFilters = filters
      .filter((filter) => filter.isActive)
      .map(({ name }) => name);
    const filterResults = originalItems.filter(
      (item) =>
        item.tags && item.tags.some((tag) => activeFilters.includes(tag)),
    );

    console.log("FILTERS:", filters);
    console.log("ACTIVE FITLERS:", activeFilters);
    console.log("ORIGINAL ITEMS:", originalItems);
    console.log("FILTER RESULTS:", filterResults);

    setItems(filterResults.length > 0 ? filterResults : originalItems);
  };

  const handleReset = () => {
    handleResetFilters();
    setItems(originalItems);
  };

  const handleSortMethodChanged = (value: string) => {
    const method = value as SortOption;
    setSortMethod(method);

    const newItems = [...items];
    switch (method) {
      case "latest":
        newItems.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        );
        break;
      case "oldest":
        newItems.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
        );
        break;
      case "title-asc":
        newItems.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "title-desc":
        newItems.sort((a, b) => b.title.localeCompare(a.title));
        break;
    }
    setItems(newItems);
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
              {SORT_OPTIONS.map((props) => (
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
