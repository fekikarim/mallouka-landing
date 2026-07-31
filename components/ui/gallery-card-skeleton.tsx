"use client";

import React from "react";
import { motion } from "framer-motion";

const shimmerKeyframes = `
@keyframes gallery-shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
`;

interface GallerySkeletonProps {
  index?: number;
}

const shimmerBlock = (
  delay: string,
  rounded = "rounded-xl"
): React.CSSProperties => ({
  background:
    "linear-gradient(90deg, #1e293b 0%, #334155 50%, #1e293b 100%)",
  backgroundSize: "200% 100%",
  animation: "gallery-shimmer 2s ease-in-out infinite",
  animationDelay: delay,
  borderRadius: rounded,
});

export const GallerySkeleton: React.FC<GallerySkeletonProps> = ({
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="relative rounded-2xl overflow-hidden bg-slate-900/60 border border-slate-800 aspect-video"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(45,150,218,0.05) 50%, transparent 100%)",
          backgroundSize: "200% 100%",
          animation: "gallery-shimmer 2s ease-in-out infinite",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, #1e293b 0%, #334155 50%, #1e293b 100%)",
          backgroundSize: "200% 100%",
          animation: "gallery-shimmer 2s ease-in-out infinite",
          animationDelay: "0.1s",
        }}
      />
      <div className="absolute bottom-0 inset-x-0 p-5 space-y-2">
        <div className="h-4 rounded-lg w-1/2" style={shimmerBlock("0.3s")} />
        <div className="h-3 rounded-lg w-1/3" style={shimmerBlock("0.4s")} />
      </div>
    </motion.div>
  );
};

export const GalleryLoadingGrid: React.FC = () => {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: shimmerKeyframes }} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <GallerySkeleton key={i} index={i} />
        ))}
      </div>
    </>
  );
};
