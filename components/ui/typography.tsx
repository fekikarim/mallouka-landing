import React from "react";
import { cn } from "@/lib/utils";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  level?: 1 | 2 | 3 | 4;
}

export const Heading: React.FC<HeadingProps> = ({ children, className, level = 2 }) => {
  const styles: Record<number, string> = {
    1: "text-4xl md:text-5xl lg:text-6xl font-bold",
    2: "text-3xl md:text-4xl lg:text-5xl font-bold",
    3: "text-2xl md:text-3xl lg:text-4xl font-semibold",
    4: "text-xl md:text-2xl lg:text-3xl font-semibold",
  };

  if (level === 1) return <h1 className={cn(styles[level], "text-secondary", className)}>{children}</h1>;
  if (level === 2) return <h2 className={cn(styles[level], "text-secondary", className)}>{children}</h2>;
  if (level === 3) return <h3 className={cn(styles[level], "text-secondary", className)}>{children}</h3>;
  return <h4 className={cn(styles[level], "text-secondary", className)}>{children}</h4>;
};

Heading.displayName = "Heading";

interface SubheadingProps {
  children: React.ReactNode;
  className?: string;
}

export const Subheading: React.FC<SubheadingProps> = ({ children, className }) => {
  return (
    <p
      className={cn("text-lg md:text-xl text-secondary-600 mt-2", className)}
    >
      {children}
    </p>
  );
};

Subheading.displayName = "Subheading";

interface BodyProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Body: React.FC<BodyProps> = ({ children, className, size = "md" }) => {
  const sizes: Record<string, string> = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  return (
    <p
      className={cn(sizes[size], "text-secondary-600 leading-relaxed", className)}
    >
      {children}
    </p>
  );
};

Body.displayName = "Body";
