import "~/styles/globals.css";

import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import { TRPCReactProvider } from "~/trpc/react";
import { ThemeProvider } from "~/app/components/theme/theme-provider";
import { type PropsWithChildren } from "react";
import { Toaster } from "~/app/components/ui/toaster";

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
        className={`font-sans ${inter.variable} relative bg-neutral-50 text-primary bg-dot-neutral-400/[0.2] selection:bg-accent selection:text-neutral-900 dark:bg-neutral-800 dark:bg-dot-neutral-600/[0.2]`}
      >
        <TRPCReactProvider headers={headers()}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
          <Analytics />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
