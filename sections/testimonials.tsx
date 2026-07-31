"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { AlertTriangle, RefreshCw, MessageSquareQuote } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { GlowOrb } from "@/components/ui/glow-orb";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { TestimonialsLoadingGrid } from "@/components/ui/testimonial-card-skeleton";
import { testimonialsData } from "@/data/testimonials";

const validateTestimonialsData = (
  data: typeof testimonialsData
): { valid: typeof testimonialsData; errors: string[] } => {
  const errors: string[] = [];
  const valid = data.filter((testimonial, index) => {
    if (!testimonial.id && testimonial.id !== 0) {
      errors.push(`Testimonial at index ${index}: missing id`);
      return false;
    }
    if (!testimonial.name || typeof testimonial.name !== "string") {
      errors.push(`Testimonial ${testimonial.id}: invalid name`);
      return false;
    }
    if (!testimonial.location || typeof testimonial.location !== "string") {
      errors.push(`Testimonial ${testimonial.id}: invalid location`);
      return false;
    }
    if (typeof testimonial.rating !== "number") {
      errors.push(`Testimonial ${testimonial.id}: invalid rating`);
      return false;
    }
    return true;
  });

  return { valid, errors };
};

export const Testimonials = () => {
  const t = useTranslations("testimonials");
  const [isLoading, setIsLoading] = useState(true);
  const [testimonials, setTestimonials] = useState<typeof testimonialsData>([]);
  const [loadError, setLoadError] = useState<string | null>(null);

  const loadTestimonials = useCallback(() => {
    setIsLoading(true);
    setLoadError(null);

    try {
      const { valid, errors } = validateTestimonialsData(testimonialsData);

      if (errors.length > 0) {
        console.warn("[Testimonials] Validation warnings:", errors);
      }

      if (valid.length === 0) {
        setLoadError("No valid testimonials available");
        setTestimonials([]);
        return;
      }

      setTestimonials(valid);
    } catch (err) {
      console.error("[Testimonials] Failed to load testimonials:", err);
      setLoadError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
      setTestimonials([]);
    } finally {
      const timer = setTimeout(() => setIsLoading(false), 400);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(loadTestimonials, 300);
    return () => clearTimeout(timer);
  }, [loadTestimonials]);

  const handleRetry = useCallback(() => {
    loadTestimonials();
  }, [loadTestimonials]);

  return (
    <section
      id="testimonials"
      className="py-24 bg-white relative overflow-hidden"
    >
      <GlowOrb color="primary" size="sm" className="top-20 right-1/4 opacity-15" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} dark={false} />

        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <TestimonialsLoadingGrid />
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
              <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-4">
                <AlertTriangle className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-800 mb-2">
                {t("errorTitle")}
              </h3>
              <p className="text-secondary-500 mb-6 max-w-md">{loadError}</p>
              <button
                onClick={handleRetry}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary-600 transition-colors duration-300 shadow-glow-sm hover:shadow-glow"
              >
                <RefreshCw className="w-4 h-4" />
                {t("retry")}
              </button>
            </motion.div>
          ) : testimonials.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-16 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
                <MessageSquareQuote className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-800 mb-2">
                {t("emptyTitle")}
              </h3>
              <p className="text-secondary-500">{t("emptyDesc")}</p>
            </motion.div>
          ) : (
            <motion.div
              key="testimonials"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  text={t(`testimonialItems.item${testimonial.id}Text`)}
                  name={t(`testimonialItems.item${testimonial.id}Name`)}
                  location={t(`testimonialItems.item${testimonial.id}Location`)}
                  index={index}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
