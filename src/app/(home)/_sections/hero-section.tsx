"use client";

import { Button } from "~/app/components/ui/button";
import { GoPaperAirplane, GoCopy } from "react-icons/go";
import { useCopyToClipboard } from "~/app/hooks/useCopyToClipboard";

export default function Hero() {
  const copy = useCopyToClipboard();

  return (
    <section className="container flex flex-col gap-y-5 pb-48">
      <div className="flex flex-col gap-y-2">
        <h1 className="display-text-['Zeke'] text-2xl">Zeke Abshire</h1>
        <p className="text-xl text-secondary">Software Engineer</p>
      </div>
      <div className="flex flex-row items-center gap-x-2">
        <div className="relative h-2 w-2 rounded-full bg-[#34D399] before:absolute before:inset-0 before:animate-ping before:rounded-full before:bg-[#34D399] before:content-['']"></div>
        <p className="text-secondary">Available for new opportunities</p>
      </div>
      <div className="flex flex-row items-center gap-x-7"></div>
      <div className="flex flex-col items-stretch gap-x-4 gap-y-2 sm:flex-row sm:items-center">
        <Button size="lg" asChild>
          <a href="mailto:zekeabshire@gmail.com">
            Contact me
            <GoPaperAirplane strokeWidth="1.25" />
          </a>
        </Button>
        <span className="text-center text-secondary">or</span>
        <Button
          variant="outline"
          size="lg"
          onClick={() => copy("zekeabshire@gmail.com")}
        >
          Copy email
          <GoCopy strokeWidth="0.5" />
        </Button>
      </div>
    </section>
  );
}
