"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { ScrollReveal } from "../animations/scroll-reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { GlowOrb } from "@/components/ui/glow-orb";
import { galleryData } from "@/data/gallery";
import Image from "next/image";
import { X, Play, ZoomIn } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export const Gallery = () => {
  const t = useTranslations("gallery");
  const [selectedItem, setSelectedItem] = useState<(typeof galleryData)[0] | null>(null);

  return (
    <section id="gallery" className="py-24 bg-slate-950 relative overflow-hidden gradient-top-border">
      <GlowOrb color="primary" size="md" className="top-1/4 -left-32 opacity-30" />
      <GlowOrb color="blue" size="sm" className="bottom-1/4 right-1/4" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} dark />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryData.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.1}>
              <div
                className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer group border border-slate-800/50 hover:border-primary-500/30 transition-all duration-500"
                onClick={() => setSelectedItem(item)}
              >
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="relative w-full h-full bg-slate-900">
                    <video
                      src={item.src}
                      className="w-full h-full object-cover"
                      muted
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary-500/80 flex items-center justify-center shadow-glow backdrop-blur-sm">
                        <Play className="w-7 h-7 text-white ml-1" />
                      </div>
                    </div>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">{item.title}</span>
                    <ZoomIn className="w-5 h-5 text-primary-400" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/95 backdrop-blur-xl z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center text-white hover:bg-primary-500/80 transition-colors"
              onClick={() => setSelectedItem(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedItem.type === "image" ? (
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  width={1200}
                  height={800}
                  className="rounded-2xl w-full h-auto max-h-[85vh] object-contain"
                />
              ) : (
                <video
                  src={selectedItem.src}
                  controls
                  className="rounded-2xl w-full max-h-[85vh]"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
