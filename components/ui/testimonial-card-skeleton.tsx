"use client";

import React from "react";
import { motion } from "framer-motion";

const shimmerKeyframes = `
@keyframes testimonial-shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
`;

interface TestimonialSkeletonProps {
  index?: number;
}

const shimmerBlock = (
  delay: string,
  rounded = "rounded-xl"
): React.CSSProperties => ({
  background:
    "linear-gradient(90deg, #f1f5f9 0%, #e2e8f0 50%, #f1f5f9 100%)",
  backgroundSize: "200% 100%",
  animation: "testimonial-shimmer 2s ease-in-out infinite",
  animationDelay: delay,
  borderRadius: rounded,
});

export const TestimonialSkeleton: React.FC<TestimonialSkeletonProps> = ({
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="relative bg-white rounded-2xl border border-slate-200/80 p-8 overflow-hidden h-full"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(45,150,218,0.04) 50%, transparent 100%)",
          backgroundSize: "200% 100%",
          animation: "testimonial-shimmer 2s ease-in-out infinite",
        }}
      />

      <div className="relative">
        <div className="flex items-center gap-1 mb-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="w-5 h-5 rounded" style={shimmerBlock("0.1s")} />
          ))}
        </div>

        <div className="space-y-2 mb-6">
          <div className="h-4 rounded-lg w-full" style={shimmerBlock("0.2s")} />
          <div className="h-4 rounded-lg w-11/12" style={shimmerBlock("0.3s")} />
          <div className="h-4 rounded-lg w-3/4" style={shimmerBlock("0.4s")} />
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
          <div className="w-10 h-10 rounded-full" style={shimmerBlock("0.5s", "9999px")} />
          <div className="space-y-2 flex-1">
            <div className="h-4 rounded-lg w-2/3" style={shimmerBlock("0.6s")} />
            <div className="h-3 rounded-lg w-1/2" style={shimmerBlock("0.7s")} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const TestimonialsLoadingGrid: React.FC = () => {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: shimmerKeyframes }} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <TestimonialSkeleton key={i} index={i} />
        ))}
      </div>
    </>
  );
};
