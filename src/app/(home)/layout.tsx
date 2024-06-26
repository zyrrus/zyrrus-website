import { type PropsWithChildren } from "react";
import { Navigation } from "~/app/components/navigation/main-navigation";
import { Footer } from "~/app/components/navigation/footer";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
