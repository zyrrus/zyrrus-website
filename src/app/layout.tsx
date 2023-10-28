import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { headers } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import { ThemeProvider } from "~/app/components/theme/theme-provider";
import { Navigation } from "~/app/components/navigation/navigation";
import { type PropsWithChildren } from "react";
import { Button } from "~/app/components/ui/button";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Zeke Abshire",
  description: "Zeke Abshire's software development portfolio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${inter.variable} relative text-primary bg-0 `}
      >
        <TRPCReactProvider headers={headers()}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navigation />
            {children}
            <Footer />
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}

function Footer() {
  return (
    <p className="container mb-24 mt-10 text-center">
      <Button variant="link" asChild>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/zyrrus"
        >
          github.com/zyrrus
        </a>
      </Button>
      {" · "}
      <Button variant="link" asChild>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://linkedin.com/in/zyrrus"
        >
          linkedin.com/in/zyrrus
        </a>
      </Button>
    </p>
  );
}
