"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { GlowOrb } from "@/components/ui/glow-orb";
import { statisticsData } from "@/data/statistics";

export const Statistics = () => {
  const t = useTranslations("stats");

  return (
    <section
      id="stats"
      className="py-24 bg-gradient-to-br from-primary-600 via-primary-500 to-blue-500 relative overflow-hidden"
    >
      <GlowOrb color="primary" size="lg" className="-top-32 -left-32 opacity-30" />
      <GlowOrb color="blue" size="md" className="-bottom-32 -right-32 opacity-20" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <SectionHeader title={t("title")} dark={false} />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statisticsData.map((stat, index) => (
            <div
              key={stat.id}
              className="text-center group"
            >
              <div className="inline-flex flex-col items-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-500 hover:-translate-y-1 w-full">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  className="text-5xl md:text-6xl font-extrabold text-white mb-2"
                />
                <p className="text-primary-100 text-lg font-medium">
                  {t(stat.label)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
