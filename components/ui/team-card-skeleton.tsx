"use client";

import React from "react";
import { motion } from "framer-motion";

const shimmerKeyframes = `
@keyframes team-shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
`;

interface TeamCardSkeletonProps {
  index?: number;
}

const shimmerBlock = (
  delay: string,
  rounded = "rounded-xl"
): React.CSSProperties => ({
  background:
    "linear-gradient(90deg, #1e293b 0%, #334155 50%, #1e293b 100%)",
  backgroundSize: "200% 100%",
  animation: "team-shimmer 2s ease-in-out infinite",
  animationDelay: delay,
  borderRadius: rounded,
});

export const TeamCardSkeleton: React.FC<TeamCardSkeletonProps> = ({
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="relative bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(45,150,218,0.04) 50%, transparent 100%)",
          backgroundSize: "200% 100%",
          animation: "team-shimmer 2s ease-in-out infinite",
        }}
      />
      <div className="relative">
        <div className="aspect-[3/4]" style={shimmerBlock("0.1s", "0px")} />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 space-y-3">
          <div className="h-6 rounded-lg w-3/4" style={shimmerBlock("0.2s")} />
          <div className="h-4 rounded-lg w-1/3" style={shimmerBlock("0.3s")} />
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="h-11 rounded-xl" style={shimmerBlock("0.4s")} />
            <div className="h-11 rounded-xl" style={shimmerBlock("0.5s")} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const TeamLoadingGrid: React.FC = () => {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: shimmerKeyframes }} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
        {[0, 1].map((i) => (
          <TeamCardSkeleton key={i} index={i} />
        ))}
      </div>
    </>
  );
};
