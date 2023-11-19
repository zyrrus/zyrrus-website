import { useState } from "react";

export default function useFilters(filterNames: string[]) {
  const [filters, setFilters] = useState(
    filterNames.map((filter) => ({ name: filter, isActive: false })),
  );

  const handleResetFilters = () => {
    setFilters(filters.map((filter) => ({ ...filter, isActive: false })));
  };

  const handleToggleFilter = (index: number) => {
    const newFilters = [...filters];
    if (newFilters[index] !== undefined) {
      newFilters[index]!.isActive = !newFilters[index]!.isActive;
    }
    newFilters.sort((a, b) => (b.isActive ? 1 : 0) - (a.isActive ? 1 : 0));
    setFilters(newFilters);
  };

  return { filters, handleResetFilters, handleToggleFilter };
}
