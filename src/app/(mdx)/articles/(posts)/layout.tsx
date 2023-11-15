import { type PropsWithChildren } from "react";
import MdxLayout from "~/app/(mdx)/mdx-layout";

export default function ArticlesLayout({ children }: PropsWithChildren) {
  return <MdxLayout source="articles">{children}</MdxLayout>;
}
