"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { ScrollReveal } from "../animations/scroll-reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { GlowOrb } from "@/components/ui/glow-orb";
import { Star, Clock, Shield, Headphones, DollarSign, Zap, Check, Heart } from "lucide-react";

export const WhyChoose = () => {
  const t = useTranslations("whyChoose");

  const features = [
    { icon: Star, title: t("quality"), desc: t("qualityDesc") },
    { icon: Clock, title: t("experience"), desc: t("experienceDesc") },
    { icon: Shield, title: t("warranty"), desc: t("warrantyDesc") },
    { icon: Headphones, title: t("support"), desc: t("supportDesc") },
    { icon: DollarSign, title: t("pricing"), desc: t("pricingDesc") },
    { icon: Zap, title: t("fast"), desc: t("fastDesc") },
    { icon: Check, title: t("genuine"), desc: t("genuineDesc") },
    { icon: Heart, title: t("service"), desc: t("serviceDesc") },
  ];

  return (
    <section id="why-choose" className="py-24 bg-white relative overflow-hidden">
      <GlowOrb color="primary" size="sm" className="bottom-0 left-1/4 opacity-15" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} dark={false} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.08}>
              <div className="group relative bg-white rounded-2xl border border-slate-200/80 p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-medium hover:border-primary-200 overflow-hidden h-full">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary-50 to-blue-50 text-primary group-hover:from-primary group-hover:to-blue-500 group-hover:text-white transition-all duration-500 mb-6 group-hover:shadow-glow-sm">
                  <feature.icon className="w-7 h-7" />
                </div>

                <h3 className="text-lg font-semibold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-secondary-500 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
