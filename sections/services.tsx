"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/ui/section-header";
import { GlowOrb } from "@/components/ui/glow-orb";
import { ServiceCard } from "@/components/ui/service-card";
import { ServicesLoadingGrid } from "@/components/ui/service-card-skeleton";
import { servicesData } from "@/data/services";
import * as Icons from "lucide-react";

const validateServicesData = (
  data: typeof servicesData
): { valid: typeof servicesData; errors: string[] } => {
  const errors: string[] = [];
  const valid = data.filter((service, index) => {
    if (!service.id && service.id !== 0) {
      errors.push(`Service at index ${index}: missing id`);
      return false;
    }
    if (!service.title || typeof service.title !== "string") {
      errors.push(`Service ${service.id}: invalid title`);
      return false;
    }
    if (!service.description || typeof service.description !== "string") {
      errors.push(`Service ${service.id}: invalid description`);
      return false;
    }
    if (!service.icon || typeof service.icon !== "string") {
      errors.push(`Service ${service.id}: missing icon name`);
      return false;
    }
    try {
      const icon = Icons[service.icon as keyof typeof Icons];
      if (!icon || typeof icon !== "function") {
        errors.push(
          `Service ${service.id}: icon "${service.icon}" not found in lucide-react`
        );
      }
    } catch {
      errors.push(
        `Service ${service.id}: failed to resolve icon "${service.icon}"`
      );
    }
    return true;
  });

  return { valid, errors };
};

export const Services = () => {
  const t = useTranslations("services");
  const [isLoading, setIsLoading] = useState(true);
  const [services, setServices] = useState<typeof servicesData>([]);
  const [loadError, setLoadError] = useState<string | null>(null);

  const loadServices = useCallback(() => {
    setIsLoading(true);
    setLoadError(null);

    try {
      const { valid, errors } = validateServicesData(servicesData);

      if (errors.length > 0) {
        console.warn("[Services] Validation warnings:", errors);
      }

      if (valid.length === 0) {
        setLoadError("No valid services available");
        setServices([]);
        return;
      }

      setServices(valid);
    } catch (err) {
      console.error("[Services] Failed to load services:", err);
      setLoadError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
      setServices([]);
    } finally {
      const timer = setTimeout(() => setIsLoading(false), 400);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(loadServices, 300);
    return () => clearTimeout(timer);
  }, [loadServices]);

  const handleRetry = useCallback(() => {
    loadServices();
  }, [loadServices]);

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      <GlowOrb color="primary" size="sm" className="top-20 -right-32 opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
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
              <ServicesLoadingGrid count={Math.min(servicesData.length, 6)} />
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
                <Icons.AlertTriangle className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-800 mb-2">
                {t("errorTitle")}
              </h3>
              <p className="text-secondary-500 mb-6 max-w-md">{loadError}</p>
              <button
                onClick={handleRetry}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary-600 transition-colors duration-300 shadow-glow-sm hover:shadow-glow"
              >
                <Icons.RefreshCw className="w-4 h-4" />
                {t("retry")}
              </button>
            </motion.div>
          ) : services.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-16 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
                <Icons.PackageOpen className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-800 mb-2">
                {t("emptyTitle")}
              </h3>
              <p className="text-secondary-500">
                {t("emptyDesc")}
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="services"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
            >
              {services.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  title={t(`item${service.id}`)}
                  description={t(`item${service.id}Desc`)}
                  icon={service.icon}
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
