import { type PropsWithChildren } from "react";
import { MainContainer } from "~/app/components/mdx/main-container";

export default function AboutLayout({ children }: PropsWithChildren) {
  return <MainContainer>{children}</MainContainer>;
}
