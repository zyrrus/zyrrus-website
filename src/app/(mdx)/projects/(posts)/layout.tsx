import { type PropsWithChildren } from "react";
import MdxLayout from "~/app/(mdx)/mdx-layout";

export default function ProjectsLayout({ children }: PropsWithChildren) {
  return <MdxLayout source="projects">{children}</MdxLayout>;
}
