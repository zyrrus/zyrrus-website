import seedrandom from "seedrandom";

const rng = seedrandom("zyrrus");

export const random = rng;

export const randomFloat = (min: number, max: number): number => {
  if (min >= max) {
    throw new Error("Min must be less than max");
  }
  return rng() * (max - min) + min;
};

export const randomInt = (min: number, max: number): number => {
  if (min >= max) {
    throw new Error("Min must be less than max");
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const randomInt0 = (max: number): number => {
  if (0 >= max) {
    throw new Error("Max must be >= 0");
  }
  return Math.floor(Math.random() * (max + 1));
};
