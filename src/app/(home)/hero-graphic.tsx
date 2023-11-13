"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  type Cell,
  radius,
  rotation,
  orchestrateCells,
} from "~/app/(home)/hero-graphic-generation";

const HeroGraphic: React.FC = () => {
  const points = orchestrateCells();

  return (
    <div className="absolute right-0 top-0 -z-50 h-[1000px] max-w-[1000px] bg-cover sm:left-1/2">
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
                <MotionCell
                  key={`(${start.x}, ${start.y}) - (${end.x}, ${end.y})`}
                  start={start}
                  end={end}
                  delay={(i + 1) / 10}
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

            <feFlood floodColor="#000" floodOpacity="1" />
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

            <feFlood floodColor="#000" floodOpacity="1" />
            <feComposite in2="shadowDiff" operator="in" />
            <feComposite in2="firstfilter" operator="over" />
          </filter>
        </defs>

        <image
          x="0"
          y="0"
          width="100%"
          height="100%"
          href="/images/wave.webp"
          preserveAspectRatio="xMinYMin slice"
          clipPath="url(#cut-off-bottom)"
        />

        {points.map(({ start, end }, i) => {
          return (
            <MotionCell
              key={`(${start.x}, ${start.y}) - (${end.x}, ${end.y})`}
              start={start}
              end={end}
              delay={(i + 1) / 10}
              isShadow
            />
          );
        })}
      </svg>
    </div>
  );
};

const MotionCell = ({
  start,
  end,
  delay = 0,
  isShadow = false,
}: {
  start: Cell;
  end: Cell;
  delay?: number;
  isShadow?: boolean;
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.rect
      key={`(${start.x}, ${start.y}) - (${end.x}, ${end.y})`}
      width={end.width}
      height={end.height}
      rx={radius}
      // Need to set initial position to start well
      initial
      x={start.x}
      y={start.y}
      // Setting origin to (0, 0) fixes rotation pivot point
      style={{ originX: 0, originY: 0 }}
      // Translation is relative to the initial (x, y)
      animate={
        shouldReduceMotion
          ? { rotate: [rotation] }
          : {
              x: [0, end.x - start.x],
              y: [0, end.y - start.y],
              rotate: [rotation],
            }
      }
      transition={{
        delay: delay,
        repeat: Infinity,
        duration: 2,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
      // Box shadow props
      filter={isShadow ? "url(#inner-shadow)" : undefined}
      fill={isShadow ? "#00000008" : undefined}
    />
  );
};

export { HeroGraphic };
