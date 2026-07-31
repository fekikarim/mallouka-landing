"use client";

import React, { useCallback, useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { AlertTriangle, RefreshCw, Images, Clapperboard } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { GlowOrb } from "@/components/ui/glow-orb";
import { GalleryCard } from "@/components/ui/gallery-card";
import { GalleryLightbox } from "@/components/ui/gallery-lightbox";
import { GalleryLoadingGrid } from "@/components/ui/gallery-card-skeleton";
import { galleryData, galleryCategories } from "@/data/gallery";
import type { GalleryItem, GalleryCategory } from "@/data/gallery";

const validateGalleryData = (
  data: typeof galleryData
): { valid: typeof galleryData; errors: string[] } => {
  const errors: string[] = [];
  const valid = data.filter((item, index) => {
    if (!item.id && item.id !== 0) {
      errors.push(`Gallery item at index ${index}: missing id`);
      return false;
    }
    if (!item.title || typeof item.title !== "string") {
      errors.push(`Gallery item ${item.id}: invalid title`);
      return false;
    }
    if (item.type !== "image" && item.type !== "video") {
      errors.push(`Gallery item ${item.id}: invalid type "${item.type}"`);
      return false;
    }
    if (!item.src || typeof item.src !== "string") {
      errors.push(`Gallery item ${item.id}: missing src`);
      return false;
    }
    if (
      !galleryCategories.includes(item.category as GalleryCategory)
    ) {
      errors.push(`Gallery item ${item.id}: invalid category "${item.category}"`);
      return false;
    }
    return true;
  });

  return { valid, errors };
};

export const Gallery = () => {
  const t = useTranslations("gallery");
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState<typeof galleryData>([]);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] =
    useState<GalleryCategory>("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const loadGallery = useCallback(() => {
    setIsLoading(true);
    setLoadError(null);

    try {
      const { valid, errors } = validateGalleryData(galleryData);

      if (errors.length > 0) {
        console.warn("[Gallery] Validation warnings:", errors);
      }

      if (valid.length === 0) {
        setLoadError("No valid gallery items available");
        setItems([]);
        return;
      }

      setItems(valid);
    } catch (err) {
      console.error("[Gallery] Failed to load gallery data:", err);
      setLoadError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
      setItems([]);
    } finally {
      const timer = setTimeout(() => setIsLoading(false), 400);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(loadGallery, 300);
    return () => clearTimeout(timer);
  }, [loadGallery]);

  const handleRetry = useCallback(() => {
    loadGallery();
  }, [loadGallery]);

  const filteredItems = useMemo(
    () =>
      activeCategory === "all"
        ? items
        : items.filter((item) => item.category === activeCategory),
    [items, activeCategory]
  );

  const getItemTitle = useCallback(
    (item: GalleryItem) => t(`galleryItems.${item.title}Title`),
    [t]
  );

  return (
    <section
      id="gallery"
      className="py-24 bg-slate-950 relative overflow-hidden gradient-top-border"
    >
      <GlowOrb color="primary" size="md" className="top-1/4 -left-32 opacity-30" />
      <GlowOrb color="blue" size="sm" className="bottom-1/4 right-1/4" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} dark />

        {/* Category filters */}
        {!isLoading && !loadError && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10 md:mb-14"
          >
            {galleryCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 md:px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-primary-500 to-blue-500 text-white border-transparent shadow-glow-sm"
                    : "bg-slate-900/50 text-slate-400 border-slate-700/50 hover:text-white hover:border-primary-500/40"
                }`}
              >
                {category === "videos" ? (
                  <span className="inline-flex items-center gap-2">
                    <Clapperboard className="w-4 h-4" />
                    {t(`categories.${category}`)}
                  </span>
                ) : (
                  t(`categories.${category}`)
                )}
              </button>
            ))}
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <GalleryLoadingGrid />
            </motion.div>
          ) : loadError ? (
            <motion.div
              key="error"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center justify-center py-16 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center mb-4">
                <AlertTriangle className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {t("errorTitle")}
              </h3>
              <p className="text-slate-400 mb-6 max-w-md">{loadError}</p>
              <button
                onClick={handleRetry}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-blue-500 hover:from-primary-600 hover:to-blue-600 text-white font-medium transition-all duration-300 shadow-glow-sm hover:shadow-glow"
              >
                <RefreshCw className="w-4 h-4" />
                {t("retry")}
              </button>
            </motion.div>
          ) : filteredItems.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-16 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center mb-4">
                <Images className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {t("emptyTitle")}
              </h3>
              <p className="text-slate-400">{t("emptyDesc")}</p>
            </motion.div>
          ) : (
            <motion.div
              key={`grid-${activeCategory}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
            >
              {filteredItems.map((item, index) => (
                <GalleryCard
                  key={item.id}
                  item={item}
                  title={getItemTitle(item)}
                  index={index}
                  onClick={setSelectedItem}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <GalleryLightbox
            items={filteredItems}
            current={selectedItem}
            title={getItemTitle(selectedItem)}
            onClose={() => setSelectedItem(null)}
            onNavigate={setSelectedItem}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
