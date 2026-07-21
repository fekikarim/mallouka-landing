import React from "react";
import { cn } from "@/lib/utils";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  level?: 1 | 2 | 3 | 4;
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, className, level = 2, ...props }, ref) => {
    const styles = {
      1: "text-4xl md:text-5xl lg:text-6xl font-bold",
      2: "text-3xl md:text-4xl lg:text-5xl font-bold",
      3: "text-2xl md:text-3xl lg:text-4xl font-semibold",
      4: "text-xl md:text-2xl lg:text-3xl font-semibold",
    };
    
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;
    
    return (
      <Tag
        ref={ref as any}
        className={cn(styles[level], "text-secondary", className)}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);

Heading.displayName = "Heading";

interface SubheadingProps {
  children: React.ReactNode;
  className?: string;
}

export const Subheading = React.forwardRef<HTMLParagraphElement, SubheadingProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn("text-lg md:text-xl text-secondary-600 mt-2", className)}
        {...props}
      >
        {children}
      </p>
    );
  }
);

Subheading.displayName = "Subheading";

interface BodyProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Body = React.forwardRef<HTMLParagraphElement, BodyProps>(
  ({ children, className, size = "md", ...props }, ref) => {
    const sizes = {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    };
    
    return (
      <p
        ref={ref}
        className={cn(sizes[size], "text-secondary-600 leading-relaxed", className)}
        {...props}
      >
        {children}
      </p>
    );
  }
);

Body.displayName = "Body";
