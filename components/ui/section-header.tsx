"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { GradientText } from "./gradient-text";
import { ScrollReveal } from "../../animations/scroll-reveal";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  dark?: boolean;
  className?: string;
  centered?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  dark = true,
  className,
  centered = true,
}) => {
  return (
    <ScrollReveal>
      <div
        className={cn(
          "mb-16",
          centered && "text-center",
          className
        )}
      >
        {dark ? (
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            {title.split(" ").map((word, i) => {
              const isLast = i === title.split(" ").length - 1;
              const isSecondToLast =
                i === title.split(" ").length - 2 &&
                title.split(" ").length > 2;
              return isLast || isSecondToLast ? (
                <GradientText key={i}>{word} </GradientText>
              ) : (
                <span key={i}>{word} </span>
              );
            })}
          </h2>
        ) : (
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-4 tracking-tight">
            {title}
          </h2>
        )}
        {subtitle && (
          <p
            className={cn(
              "text-lg md:text-xl max-w-2xl font-light",
              centered && "mx-auto",
              dark ? "text-slate-400" : "text-secondary-500"
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
};
