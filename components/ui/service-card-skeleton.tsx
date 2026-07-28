"use client";

import React from "react";
import { motion } from "framer-motion";

const shimmerKeyframes = `
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
`;

interface ServiceCardSkeletonProps {
  index?: number;
}

export const ServiceCardSkeleton: React.FC<ServiceCardSkeletonProps> = ({
  index = 0,
}) => {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: shimmerKeyframes }} />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05, duration: 0.4 }}
        className="relative bg-white rounded-2xl border border-slate-200/80 p-8 overflow-hidden"
      >
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(45,150,218,0.04) 50%, transparent 100%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 2s ease-in-out infinite",
          }}
        />

        <div className="relative z-10">
          <div
            className="w-16 h-16 rounded-xl mb-6"
            style={{
              background:
                "linear-gradient(90deg, #f1f5f9 0%, #e2e8f0 50%, #f1f5f9 100%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 2s ease-in-out infinite",
              animationDelay: "0.1s",
            }}
          />

          <div
            className="h-6 rounded-lg w-3/4 mb-3"
            style={{
              background:
                "linear-gradient(90deg, #f1f5f9 0%, #e2e8f0 50%, #f1f5f9 100%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 2s ease-in-out infinite",
              animationDelay: "0.2s",
            }}
          />

          <div className="space-y-2">
            <div
              className="h-4 rounded-lg w-full"
              style={{
                background:
                  "linear-gradient(90deg, #f8fafc 0%, #e2e8f0 50%, #f8fafc 100%)",
                backgroundSize: "200% 100%",
                animation: "shimmer 2s ease-in-out infinite",
                animationDelay: "0.3s",
              }}
            />
            <div
              className="h-4 rounded-lg w-2/3"
              style={{
                background:
                  "linear-gradient(90deg, #f8fafc 0%, #e2e8f0 50%, #f8fafc 100%)",
                backgroundSize: "200% 100%",
                animation: "shimmer 2s ease-in-out infinite",
                animationDelay: "0.4s",
              }}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

interface ServicesLoadingGridProps {
  count?: number;
}

export const ServicesLoadingGrid: React.FC<ServicesLoadingGridProps> = ({
  count = 6,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <ServiceCardSkeleton key={i} index={i} />
      ))}
    </div>
  );
};
