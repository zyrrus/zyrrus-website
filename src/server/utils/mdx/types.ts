export const sourceRoutes = ["articles", "projects"] as const;
export type SourceRoute = (typeof sourceRoutes)[number];

export const isSourceRoute = (x: string): x is SourceRoute =>
  sourceRoutes.includes(x as SourceRoute);
