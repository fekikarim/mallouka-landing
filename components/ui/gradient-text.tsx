"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "h4" | "p";
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  className,
  as: Tag = "span",
}) => {
  return (
    <Tag
      className={cn(
        "text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-blue-400 to-primary-300",
        className
      )}
    >
      {children}
    </Tag>
  );
};
