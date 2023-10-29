import type { MDXComponents } from "mdx/types";

// [Docs](https://nextjs.org/docs/pages/building-your-application/configuring/mdx#custom-elements)

export function useMDXComponents(
  defaultComponents: MDXComponents,
): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-2xl font-medium">{children}</h1>,
    h2: ({ children }) => (
      <h2 className="text-lg text-secondary">{children}</h2>
    ),
    h3: ({ children }) => <h3 className="text-lg">{children}</h3>,
    ...defaultComponents,
  };
}
