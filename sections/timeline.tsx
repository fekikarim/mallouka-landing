"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { ScrollReveal } from "../animations/scroll-reveal";
import { GlowCard } from "@/components/ui/glow-card";
import { SectionHeader } from "@/components/ui/section-header";
import { GlowOrb } from "@/components/ui/glow-orb";
import { GradientText } from "@/components/ui/gradient-text";
import { timelineData } from "@/data/timeline";

export const Timeline = () => {
  const t = useTranslations("timeline");

  return (
    <section id="timeline" className="py-24 bg-slate-950 relative overflow-hidden">
      <GlowOrb color="primary" size="lg" className="top-1/4 -left-48 opacity-30" />
      <GlowOrb color="blue" size="md" className="bottom-1/4 -right-32" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} dark />

        <div className="relative">
          {/* Glowing center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-primary-500/50 via-primary-400/30 to-transparent hidden md:block" />
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-8 bg-primary-500/5 blur-xl hidden md:block" />

          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <ScrollReveal
                key={item.id}
                delay={index * 0.2}
                variant={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
              >
                <div
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1">
                    <GlowCard variant="dark" hover>
                      <div className="relative">
                        <span className="inline-block px-5 py-2 bg-gradient-to-r from-primary-500 to-blue-500 text-white rounded-full text-sm font-bold mb-4 shadow-glow-sm">
                          {item.year}
                        </span>
                        <h3 className="text-2xl font-bold text-white mb-3">
                          {item.title}
                        </h3>
                        <p className="text-slate-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </GlowCard>
                  </div>

                  <div className="hidden md:flex w-14 h-14 bg-gradient-to-br from-primary-500 to-blue-500 rounded-full items-center justify-center z-10 shadow-glow border-4 border-slate-950">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>

                  <div className="flex-1" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
