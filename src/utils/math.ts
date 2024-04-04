export const clamp = (min: number, value: number, max: number): number => {
  if (min >= max) {
    throw new Error("Min must be less than max");
  }

  return Math.min(max, Math.max(min, value));
};

export const clamp01 = (value: number): number => clamp(0, value, 1);
