"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  variant?: "dark" | "light" | "glass";
}

export const GlowCard = React.forwardRef<HTMLDivElement, GlowCardProps>(
  ({ children, className, hover = true, variant = "dark", ...props }, ref) => {
    const variants = {
      dark:
        "bg-slate-900/60 border border-slate-700/50 backdrop-blur-md shadow-[0_0_15px_rgba(45,150,218,0.08)]",
      light:
        "bg-white border border-slate-200/60 shadow-soft",
      glass:
        "bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl p-6 transition-all duration-500",
          variants[variant],
          hover && variant === "dark" &&
            "hover:border-primary-500/30 hover:shadow-[0_0_30px_rgba(45,150,218,0.15)] hover:-translate-y-1",
          hover && variant === "light" &&
            "hover:shadow-medium hover:-translate-y-1 hover:border-primary-200",
          hover && variant === "glass" &&
            "hover:border-white/20 hover:shadow-[0_8px_40px_rgba(45,150,218,0.12)] hover:-translate-y-1",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlowCard.displayName = "GlowCard";
