"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, AlertTriangle } from "lucide-react";
import type { GalleryItem } from "@/data/gallery";

interface GalleryLightboxProps {
  items: GalleryItem[];
  current: GalleryItem;
  title: string;
  onClose: () => void;
  onNavigate: (item: GalleryItem) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  items,
  current,
  title,
  onClose,
  onNavigate,
}) => {
  const [mediaError, setMediaError] = useState(false);
  const currentIndex = items.findIndex((i) => i.id === current.id);

  useEffect(() => {
    setMediaError(false);
  }, [current.id]);

  const navigate = useCallback(
    (direction: number) => {
      if (items.length === 0) return;
      const nextIndex =
        (currentIndex + direction + items.length) % items.length;
      onNavigate(items[nextIndex]);
    },
    [items, currentIndex, onNavigate]
  );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, navigate]);

  const isVideo = current.type === "video";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-slate-950/95 backdrop-blur-xl z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center text-white hover:bg-primary-500/80 transition-colors"
        onClick={onClose}
        aria-label="Close"
      >
        <X className="w-6 h-6" />
      </motion.button>

      {items.length > 1 && (
        <>
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="absolute left-4 md:left-8 z-10 w-12 h-12 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center text-white hover:bg-primary-500/80 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              navigate(-1);
            }}
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute right-4 md:right-8 z-10 w-12 h-12 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center text-white hover:bg-primary-500/80 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              navigate(1);
            }}
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </>
      )}

      <motion.div
        key={current.id}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative max-w-5xl max-h-[90vh] w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {mediaError ? (
          <div className="flex flex-col items-center justify-center gap-4 py-24 rounded-2xl bg-slate-900 border border-slate-800">
            <AlertTriangle className="w-12 h-12 text-red-400" />
            <p className="text-slate-400 text-lg">Unable to display this media</p>
          </div>
        ) : isVideo ? (
          <video
            src={current.src}
            poster={current.poster}
            controls
            autoPlay
            playsInline
            preload="none"
            onError={() => setMediaError(true)}
            className="rounded-2xl w-full max-h-[85vh] bg-slate-900"
          />
        ) : (
          <Image
            src={current.src}
            alt={current.alt}
            width={1600}
            height={1200}
            onError={() => setMediaError(true)}
            className="rounded-2xl w-full h-auto max-h-[85vh] object-contain"
          />
        )}

        <div className="flex items-center justify-center gap-3 mt-4">
          {items.map((item, i) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                item.id === current.id
                  ? "bg-primary-400 w-8"
                  : "bg-slate-700 hover:bg-slate-500"
              }`}
              aria-label={`Go to item ${i + 1}`}
            />
          ))}
        </div>

        <div className="mt-4 text-center">
          <p className="text-white font-medium">{title}</p>
          <p className="text-slate-500 text-sm mt-1">
            {currentIndex + 1} / {items.length}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};
