"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type PropsWithChildren } from "react";

const height = -5;

const WiggleWrapper = ({ children }: PropsWithChildren) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      animate={false}
      initial={{ y: 0, rotate: 0 }}
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              y: [0, height, height, height, height, height, height],
              rotate: [0, 0, -3, 2, -2, 1, 0],
              transition: {
                delay: 0.025,
                duration: 0.75,
                times: [0, 0.2, 0.475, 0.625, 0.775, 0.925, 1],
              },
            }
      }
      style={{ originX: "50%", originY: "80%" }}
    >
      {children}
    </motion.div>
  );
};

export { WiggleWrapper };
