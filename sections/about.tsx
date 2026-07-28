"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ScrollReveal } from "../animations/scroll-reveal";
import { GlowCard } from "@/components/ui/glow-card";
import { SectionHeader } from "@/components/ui/section-header";
import { GlowOrb } from "@/components/ui/glow-orb";
import { Crosshair, Eye, Gem } from "lucide-react";

export const About = () => {
  const t = useTranslations("about");

  return (
    <section id="about" className="relative overflow-hidden">
      <div className="bg-slate-950 py-24 relative">
        <GlowOrb color="primary" size="md" className="top-0 right-0 opacity-40" />
        <GlowOrb color="blue" size="sm" className="bottom-0 left-1/4" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          <SectionHeader
            title={t("title")}
            subtitle={t("subtitle")}
            dark
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal variant="fadeInLeft">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-blue-500/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700" />
                <div className="relative rounded-3xl overflow-hidden border border-slate-700/50 shadow-glass">
                  <Image
                    src="/assets/components/auto-service-illustration.png"
                    alt="Mallouka Motors Service"
                    width={600}
                    height={500}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                </div>


              </div>
            </ScrollReveal>

            <div className="space-y-6">
              <ScrollReveal variant="fadeInRight" delay={0.1}>
                <p className="text-lg text-slate-300 leading-relaxed">
                  {t("description")}
                </p>
              </ScrollReveal>

              <ScrollReveal variant="fadeInRight" delay={0.2}>
                <GlowCard variant="dark" hover>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary-500/15 flex items-center justify-center">
                      <Crosshair className="w-6 h-6 text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {t("mission")}
                      </h3>
                      <p className="text-slate-400">{t("missionText")}</p>
                    </div>
                  </div>
                </GlowCard>
              </ScrollReveal>

              <ScrollReveal variant="fadeInRight" delay={0.3}>
                <GlowCard variant="dark" hover>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary-500/15 flex items-center justify-center">
                      <Eye className="w-6 h-6 text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {t("vision")}
                      </h3>
                      <p className="text-slate-400">{t("visionText")}</p>
                    </div>
                  </div>
                </GlowCard>
              </ScrollReveal>

              <ScrollReveal variant="fadeInRight" delay={0.4}>
                <GlowCard variant="dark" hover>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary-500/15 flex items-center justify-center">
                      <Gem className="w-6 h-6 text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {t("values")}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {[t("quality"), t("integrity"), t("reliability")].map(
                          (value) => (
                            <span
                              key={value}
                              className="px-4 py-1.5 bg-primary-500/10 border border-primary-500/20 text-primary-300 rounded-full text-sm font-medium"
                            >
                              {value}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
