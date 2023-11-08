"use client";

import React, { useRef, useEffect, useState } from "react";

const HeroGraphic: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [clipPathX, setClipPathX] = useState(0);
  const [clipPathY, setClipPathY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const svgElement = svgRef.current;

      if (svgElement) {
        const svgRect = svgElement.getBoundingClientRect();
        const mouseX = event.clientX - svgRect.left - 250;
        const mouseY = event.clientY - svgRect.top - 250;

        // Adjust clip path position based on mouse coordinates
        setClipPathX(mouseX);
        setClipPathY(mouseY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute left-1/3 right-0 top-0 -z-50 h-screen bg-cover">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        ref={svgRef}
      >
        <defs>
          <clipPath id="cut-off-bottom">
            <rect
              x={clipPathX}
              y={clipPathY}
              width="500"
              height="500"
              transform={`rotate(15 ${clipPathX + 250} ${clipPathY + 250})`}
            />
            <rect
              x={clipPathX}
              y={clipPathY}
              width="500"
              height="500"
              transform={`rotate(75 ${clipPathX + 250} ${clipPathY + 250})`}
            />
            <rect
              x={clipPathX}
              y={clipPathY}
              width="500"
              height="500"
              transform={`rotate(135 ${clipPathX + 250} ${clipPathY + 250})`}
            />
          </clipPath>
        </defs>

        <image
          x="0"
          y="0"
          width="100%"
          height="100%"
          xlinkHref="https://picsum.photos/1000"
          clipPath="url(#cut-off-bottom)"
        />
      </svg>
    </div>
  );
};

export { HeroGraphic };
