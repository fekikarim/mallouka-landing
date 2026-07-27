import React from "react";
import { cn } from "@/lib/utils";

interface GlowOrbProps {
  className?: string;
  color?: "primary" | "blue" | "mixed";
  size?: "sm" | "md" | "lg";
}

export const GlowOrb: React.FC<GlowOrbProps> = ({
  className,
  color = "primary",
  size = "lg",
}) => {
  const colors = {
    primary: "bg-primary-600/15",
    blue: "bg-blue-500/10",
    mixed: "bg-gradient-to-br from-primary-500/15 to-blue-500/10",
  };

  const sizes = {
    sm: "w-64 h-64",
    md: "w-96 h-96",
    lg: "w-[30rem] h-[30rem]",
  };

  return (
    <div
      className={cn(
        "absolute rounded-full blur-3xl pointer-events-none",
        colors[color],
        sizes[size],
        className
      )}
    />
  );
};
