import type { MDXComponents } from "mdx/types";

// [Docs](https://nextjs.org/docs/pages/building-your-application/configuring/mdx#custom-elements)

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
