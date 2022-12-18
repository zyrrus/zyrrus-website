import React from "react";
import text from "data/text.json";

type Props = {};

export default function Home({}: Props) {
  return (
    <div className="flex flex flex-col align-middle">
      <h1
        style={{ whiteSpace: "pre-line" }}
        className="mt-[20vh] text-3xl font-semibold xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl"
      >
        {text.home.title}
      </h1>

      <div className="text-l mt-2 font-light text-mix sm:text-2xl md:mt-5 md:text-3xl lg:text-3xl">
        <h2>{text.home.name}</h2>
      </div>
    </div>
  );
}
