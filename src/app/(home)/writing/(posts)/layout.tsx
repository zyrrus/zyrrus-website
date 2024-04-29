import { type PropsWithChildren } from "react";
import MdxLayout from "~/app/components/mdx/mdx-layout";

export default function WritingLayout({ children }: PropsWithChildren) {
  return <MdxLayout>{children}</MdxLayout>;
}
