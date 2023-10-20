"use client";

import React from "react";
import { clamp01 } from "~/app/_utils/math";
import { random, randomInt0 } from "~/app/_utils/random";

const RingBackground = () => {
  const numRings = 10; // Adjust the number of rings as needed

  const getRandomPosition = () => {
    const randomValueX = randomInt0(100);

    const randomWeightY = random();

    // Choose a random percentage for the second value with a bias towards 100%
    // 80% of the time, generate a number close to 100%
    // 20% of the time, generate a completely random number
    const randomValueY =
      randomWeightY < 0.5 ? 50 + randomInt0(50) : randomInt0(100);

    return { x: randomValueX, y: randomValueY };
  };

  function getColorByDepth(percentage: number) {
    const color1 = "#92beb8";
    const color2 = "#272828";

    // Ensure the percentage is within the range [0, 1]
    percentage = clamp01(percentage);

    // Parse the input colors as hex values
    const hexColor1 = parseInt(color1.slice(1), 16);
    const hexColor2 = parseInt(color2.slice(1), 16);

    // Interpolate between the two colors
    const r1 = (hexColor1 >> 16) & 255;
    const g1 = (hexColor1 >> 8) & 255;
    const b1 = hexColor1 & 255;
    const r2 = (hexColor2 >> 16) & 255;
    const g2 = (hexColor2 >> 8) & 255;
    const b2 = hexColor2 & 255;

    const r = Math.round(r1 + (r2 - r1) * percentage);
    const g = Math.round(g1 + (g2 - g1) * percentage);
    const b = Math.round(b1 + (b2 - b1) * percentage);

    // Convert the interpolated RGB values back to a hex color
    const interpolatedColor = `#${((1 << 24) | (r << 16) | (g << 8) | b)
      .toString(16)
      .slice(1)}`;

    return interpolatedColor;
  }

  const renderRings = () => {
    const rings = [];

    for (let i = 0; i < numRings; i++) {
      const position = getRandomPosition();
      const color = getColorByDepth((randomInt0(50) + position.y) / 100);

      rings.push(
        <circle
          key={i}
          cx={position.x + "%"}
          cy={Math.max(5, position.y) + "%"}
          r={24}
          stroke={color}
          strokeWidth={16}
          fillOpacity={0}
        />,
      );
    }

    return rings;
  };

  return (
    <div className="absolute inset-0 top-[100vh] -z-40">
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        {renderRings()}
      </svg>
    </div>
  );
};

export { RingBackground };
