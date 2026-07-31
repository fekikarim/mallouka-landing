"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, AlertTriangle } from "lucide-react";

interface TestimonialData {
  id: number;
  name: string;
  location: string;
  rating: number;
}

interface TestimonialCardProps {
  testimonial: TestimonialData;
  text: string;
  name: string;
  location: string;
  index: number;
}

interface TestimonialCardState {
  hasError: boolean;
}

class TestimonialCardErrorBoundary extends React.Component<
  React.PropsWithChildren<{ fallback?: React.ReactNode }>,
  TestimonialCardState
> {
  constructor(props: React.PropsWithChildren<{ fallback?: React.ReactNode }>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): TestimonialCardState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("[TestimonialCard] Render error:", error.message, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="relative bg-white rounded-2xl border border-red-200/80 p-8 overflow-hidden h-full">
            <div className="flex flex-col items-center justify-center text-center gap-3 py-8">
              <AlertTriangle className="w-8 h-8 text-red-400" />
              <p className="text-sm text-secondary-400">
                Unable to load this testimonial
              </p>
            </div>
          </div>
        )
      );
    }
    return this.props.children;
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.06,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  text,
  name,
  location,
  index,
}) => {
  const rating = Math.max(0, Math.min(5, testimonial.rating));

  return (
    <TestimonialCardErrorBoundary>
      <motion.div
        custom={index}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="h-full"
      >
        <div className="group relative bg-white rounded-2xl border border-slate-200/80 p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-medium hover:border-primary-200 overflow-hidden h-full flex flex-col">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <Quote className="w-12 h-12 text-primary" />
          </div>

          <div className="flex items-center gap-1 mb-4" aria-label={`${rating} stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < rating
                    ? "fill-accent-400 text-accent-400"
                    : "fill-slate-100 text-slate-100"
                }`}
              />
            ))}
          </div>

          <p className="text-secondary-600 mb-6 italic leading-relaxed flex-1">
            &ldquo;{text}&rdquo;
          </p>

          <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
              {name.charAt(0)}
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-secondary-900 truncate">{name}</p>
              <p className="text-sm text-secondary-400 truncate">{location}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </TestimonialCardErrorBoundary>
  );
};
