import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("max-w-7xl mx-auto px-4 md:px-8 lg:px-16", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";
