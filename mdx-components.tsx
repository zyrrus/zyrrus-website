import type { MDXComponents } from "mdx/types";
import { ScrollArea } from "~/app/components/ui/scroll-area";

// [Docs](https://nextjs.org/docs/pages/building-your-application/configuring/mdx#custom-elements)

export function useMDXComponents(
  defaultComponents: MDXComponents,
): MDXComponents {
  return {
    h1: (props) => <h1 className="text-2xl font-medium" {...props} />,
    h2: (props) => <h2 className="text-lg" {...props} />,
    h3: (props) => <h3 className="text-lg" {...props} />,
    pre: ({ children }) => (
      <pre>
        <ScrollArea className="-pb-5 pt-5">{children}</ScrollArea>
      </pre>
    ),
    a: (props) => <a target="_blank" rel="noopener noreferrer" {...props} />,
    // inlineCode: ({ children }) => (
    //   <code className="bg-blue-600">{children}</code>
    // ),
    // code: ({ children }) => <code className="bg-green-400">{children}</code>,

    ...defaultComponents,
  };
}
