"use client";

import React from "react";
import { motion, useInView, type MotionProps } from "framer-motion";
import { useRef } from "react";
import {
  fadeIn,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "./variants";
import type { Variants } from "framer-motion";

type MarginValue = `${number}${"px" | "%"}`;
type MarginType = MarginValue | `${MarginValue} ${MarginValue}` | `${MarginValue} ${MarginValue} ${MarginValue}` | `${MarginValue} ${MarginValue} ${MarginValue} ${MarginValue}`;

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: "fadeIn" | "fadeInUp" | "fadeInDown" | "fadeInLeft" | "fadeInRight" | "scaleIn";
  margin?: MarginType;
}

const variantMap: Record<string, Variants> = {
  fadeIn,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
};

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = "",
  delay = 0,
  variant = "fadeInUp",
  margin = "-80px",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variantMap[variant]}
      transition={{ delay, duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
