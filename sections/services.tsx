"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { ScrollReveal } from "../animations/scroll-reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { GlowOrb } from "@/components/ui/glow-orb";
import { servicesData } from "@/data/services";
import * as Icons from "lucide-react";

export const Services = () => {
  const t = useTranslations("services");

  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
    return IconComponent ? <IconComponent className="w-7 h-7" /> : null;
  };

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <GlowOrb color="primary" size="sm" className="top-20 -right-32 opacity-20" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} dark={false} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 0.08}>
              <div className="group relative bg-white rounded-2xl border border-slate-200/80 p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-medium hover:border-primary-200 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary-50 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 mb-6 group-hover:shadow-glow-sm">
                  {getIcon(service.icon)}
                </div>

                <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-secondary-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
