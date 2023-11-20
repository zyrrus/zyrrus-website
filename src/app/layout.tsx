import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { headers } from "next/headers";
import { TRPCReactProvider } from "~/trpc/react";
import { ThemeProvider } from "~/app/components/theme/theme-provider";
import { Navigation } from "~/app/components/navigation/navigation";
import { type PropsWithChildren } from "react";
import { Footer } from "~/app/components/navigation/footer";
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
            <Toaster />
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
