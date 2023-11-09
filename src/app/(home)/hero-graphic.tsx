"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

interface Point {
  x: number;
  y: number;
}

interface Cell extends Point {
  width: number;
  height: number;
}

const width = 200;
const height = 150;
const rowGap = 30;
const columnGap = 30;
const radius = 27;
const rotation = 60;

const grid = [
  [1, 1, 2],
  [1, 2, 1, 1],
  [1, 2, 1],
];
const initOffsets = [(width * 2) / 3, 0, width / 2];

const _pivotY = (grid.length * height + (grid.length - 1) * rowGap) / 2;
const origin = { x: 200, y: -150 - _pivotY };
const pivot = {
  x: origin.x,
  y: origin.y + _pivotY,
};
const distance = 100;

const getCell = (
  prevWidths: number,
  column: number,
  rowIndex: number,
): Cell => {
  const x = (width + columnGap) * prevWidths;
  const y = (height + rowGap) * rowIndex;
  const w = width * column + columnGap * (column - 1);
  const h = height;

  return { x, y, width: w, height: h };
};

function translate(points: Cell[], translation: Point): Cell[] {
  return points.map((point) => ({
    ...point,
    x: point.x + translation.x,
    y: point.y + translation.y,
  }));
}

function rotate(points: Cell[], pivot: Point, angleInDegrees: number): Cell[] {
  const cosTheta = Math.cos((angleInDegrees * Math.PI) / 180);
  const sinTheta = Math.sin((angleInDegrees * Math.PI) / 180);

  return points.map((point) => {
    const relativeX = point.x - pivot.x;
    const relativeY = point.y - pivot.y;

    const rotatedX = relativeX * cosTheta - relativeY * sinTheta + pivot.x;
    const rotatedY = relativeX * sinTheta + relativeY * cosTheta + pivot.y;

    return {
      ...point,
      x: rotatedX,
      y: rotatedY,
    };
  });
}

function generateGrid() {
  return grid.flatMap((row, rowIndex) => {
    let prevWidths = 0;
    const r = row.map((column) => {
      const cell = getCell(prevWidths, column, rowIndex);
      prevWidths += column;
      return cell;
    });
    return translate(r, { x: initOffsets[rowIndex] ?? 0, y: 0 });
  });
}

function orchestrateCells(): { start: Cell; end: Cell }[] {
  const core = generateGrid();

  const start = rotate(translate(core, origin), pivot, rotation);
  const end = rotate(
    translate(core, { x: origin.x + distance, y: origin.y }),
    pivot,
    rotation,
  );
  const pts: { start: Cell; end: Cell }[] = [];

  core.forEach((_, i) => {
    if (start[i] !== undefined && end[i] !== undefined) {
      pts.push({ start: start[i]!, end: end[i]! });
    }
  });

  return pts;
}

const HeroGraphic: React.FC = () => {
  const points = useMemo(orchestrateCells, []);

  return (
    <div className="absolute left-1/2 right-0 top-0 -z-50 h-[200vh] bg-cover">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <motion.clipPath id="cut-off-bottom">
            {points.map(({ start, end }, i) => {
              return (
                <motion.rect
                  key={`(${start.x}, ${start.y}) - (${end.x}, ${end.y})`}
                  width={end.width}
                  height={end.height}
                  rx={radius}
                  style={{ originX: 0, originY: 0 }}
                  animate={{
                    x: [start.x, end.x],
                    y: [start.y, end.y],
                    rotate: [rotation],
                  }}
                  transition={{
                    delay: (i + 1) / 10,
                    repeat: Infinity,
                    duration: 2,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  }}
                />
              );
            })}
          </motion.clipPath>
          <filter
            id="inner-shadow"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur in="SourceAlpha" stdDeviation="5" result="blur" />
            <feOffset dy="15" dx="20" />
            <feComposite
              in2="SourceAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
              result="shadowDiff"
            />

            <feFlood flood-color="#000" flood-opacity="1" />
            <feComposite in2="shadowDiff" operator="in" />
            <feComposite
              in2="SourceGraphic"
              operator="over"
              result="firstfilter"
            />

            <feGaussianBlur in="firstfilter" stdDeviation="30" result="blur2" />
            <feOffset dy="-3" dx="-5" />
            <feComposite
              in2="firstfilter"
              operator="arithmetic"
              k2="-1"
              k3="1"
              result="shadowDiff"
            />

            <feFlood flood-color="#444444" flood-opacity="0.75" />
            <feComposite in2="shadowDiff" operator="in" />
            <feComposite in2="firstfilter" operator="over" />
          </filter>
        </defs>

        <image
          x="0"
          y="0"
          width="100%"
          height="100%"
          href="/images/wave.png"
          preserveAspectRatio="xMinYMin slice"
          clipPath="url(#cut-off-bottom)"
        />

        {points.map(({ start, end }, i) => {
          return (
            <motion.rect
              key={`(${start.x}, ${start.y}) - (${end.x}, ${end.y})`}
              width={end.width}
              height={end.height}
              rx={radius}
              style={{ originX: 0, originY: 0 }}
              animate={{
                x: [start.x, end.x],
                y: [start.y, end.y],
                rotate: [rotation],
              }}
              transition={{
                delay: (i + 1) / 10,
                repeat: Infinity,
                duration: 2,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
              filter="url(#inner-shadow)"
              fill="#00000008"
            />
          );
        })}
      </svg>
    </div>
  );
};

export { HeroGraphic };
