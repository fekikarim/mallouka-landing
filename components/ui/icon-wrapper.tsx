import React from "react";
import { cn } from "@/lib/utils";

interface IconWrapperProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "accent";
}

export const IconWrapper = React.forwardRef<HTMLDivElement, IconWrapperProps>(
  ({ children, className, size = "md", variant = "primary", ...props }, ref) => {
    const sizes = {
      sm: "w-10 h-10",
      md: "w-14 h-14",
      lg: "w-16 h-16",
    };
    
    const variants = {
      primary: "bg-primary-100 text-primary",
      secondary: "bg-secondary-100 text-secondary",
      accent: "bg-accent-100 text-accent",
    };
    
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl flex items-center justify-center",
          sizes[size],
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

IconWrapper.displayName = "IconWrapper";
