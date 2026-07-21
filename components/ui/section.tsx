import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ children, className, id, fullWidth = false, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          "py-20 px-4 md:px-8 lg:px-16",
          fullWidth ? "w-full" : "max-w-7xl mx-auto",
          className
        )}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";
