"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, ZoomIn, ImageOff, AlertTriangle } from "lucide-react";
import type { GalleryItem } from "@/data/gallery";

interface GalleryCardProps {
  item: GalleryItem;
  title: string;
  index: number;
  onClick: (item: GalleryItem) => void;
}

interface GalleryCardState {
  hasError: boolean;
}

class GalleryCardErrorBoundary extends React.Component<
  React.PropsWithChildren<{ fallback?: React.ReactNode }>,
  GalleryCardState
> {
  constructor(props: React.PropsWithChildren<{ fallback?: React.ReactNode }>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): GalleryCardState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("[GalleryCard] Render error:", error.message, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 flex flex-col items-center justify-center gap-3">
            <AlertTriangle className="w-8 h-8 text-red-400" />
            <p className="text-sm text-slate-400">Unable to load this item</p>
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
      delay: index * 0.05,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

export const GalleryCard: React.FC<GalleryCardProps> = ({
  item,
  title,
  index,
  onClick,
}) => {
  const [imgError, setImgError] = useState(false);
  const isVideo = item.type === "video";

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick(item);
    }
  };

  return (
    <GalleryCardErrorBoundary>
      <motion.div
        custom={index}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className={item.featured ? "lg:col-span-2" : ""}
      >
        <div
          role="button"
          tabIndex={0}
          aria-label={title}
          onClick={() => onClick(item)}
          onKeyDown={handleKeyDown}
          className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer border border-slate-800/50 hover:border-primary-500/30 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:ring-offset-2 focus:ring-offset-slate-950"
        >
          {isVideo ? (
            <div className="relative w-full h-full bg-slate-900">
              {imgError ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <ImageOff className="w-8 h-8 text-slate-500" />
                  <span className="text-slate-500 text-sm">Video unavailable</span>
                </div>
              ) : (
                <>
                  {item.poster ? (
                    <Image
                      src={item.poster}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={() => setImgError(true)}
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary-500/80 flex items-center justify-center shadow-glow backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-primary-500">
                      <Play className="w-7 h-7 text-white ml-1" />
                    </div>
                  </div>
                </>
              )}
            </div>
          ) : (
            <>
              {imgError ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-slate-900">
                  <ImageOff className="w-8 h-8 text-slate-500" />
                  <span className="text-slate-500 text-sm">Image unavailable</span>
                </div>
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={() => setImgError(true)}
                />
              )}
            </>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <div className="flex items-center justify-between gap-3">
              <span className="text-white font-medium truncate">{title}</span>
              <ZoomIn className="w-5 h-5 text-primary-400 flex-shrink-0" />
            </div>
          </div>
        </div>
      </motion.div>
    </GalleryCardErrorBoundary>
  );
};
