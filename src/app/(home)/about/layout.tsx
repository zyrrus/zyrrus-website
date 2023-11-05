import { type PropsWithChildren } from "react";

export default function AboutLayout({ children }: PropsWithChildren) {
  return (
    <main className="container prose prose-neutral mb-24 mt-10 dark:prose-invert">
      {children}
    </main>
  );
}
