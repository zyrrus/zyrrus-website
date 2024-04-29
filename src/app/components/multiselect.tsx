"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "~/utils/client/styles";
import { Button } from "~/app/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "~/app/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/app/components/ui/popover";

export interface MultiSelectItem {
  label: string;
  value: string;
  group?: string;
}

export interface MultiSelectProps {
  options: MultiSelectItem[];
  selected?: MultiSelectItem[];
  onSelectToggle?: (item: MultiSelectItem) => void;
  label?: string;
  placeholder?: string;
  emptyResult?: React.ReactNode;
  buttonClassName?: string;
}

export function MultiSelect({
  options,
  selected = [],
  onSelectToggle,
  label,
  placeholder,
  emptyResult,
  buttonClassName,
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false);

  const groupedOptions = React.useMemo(() => groupItems(options), [options]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-[250px] justify-between", buttonClassName)}
        >
          {label}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-[250px] p-0">
        <Command>
          <CommandInput placeholder={placeholder} />
          <CommandEmpty>{emptyResult}</CommandEmpty>

          <div className="max-h-52 overflow-auto">
            {Object.entries(groupedOptions).map(([group, items]) => {
              return (
                <CommandGroup heading={group} key={group}>
                  {items.map((item) => (
                    <CommandItem
                      key={item.value}
                      value={item.value}
                      onSelect={() => {
                        onSelectToggle?.(item);
                        // setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          selected.includes(item) ? "opacity-100" : "opacity-0",
                        )}
                      />
                      {item.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              );
            })}
          </div>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

const groupItems = (items: MultiSelectItem[]) => {
  const groups: Record<string, MultiSelectItem[]> = {};

  items.forEach((item) => {
    const { group } = item;
    if (!group) return;

    if (!groups[group]) {
      groups[group] = [];
    }

    groups[group]!.push(item);
  });

  return groups;
};
