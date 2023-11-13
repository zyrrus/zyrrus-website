import { type PropsWithChildren } from "react";

const MainContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="container prose prose-neutral mb-24 mt-10 dark:prose-invert">
      {children}
    </main>
  );
};

export { MainContainer };
