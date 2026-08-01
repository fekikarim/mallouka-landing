"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ScrollReveal } from "../animations/scroll-reveal";
import { GlowCard } from "@/components/ui/glow-card";
import { SectionHeader } from "@/components/ui/section-header";
import { GlowOrb } from "@/components/ui/glow-orb";
import { IconWrapper } from "@/components/ui/icon-wrapper";
import { Wrench, MapPin, Phone, Check } from "lucide-react";
import { companyData } from "@/data/company";

export const Workshop = () => {
  const t = useTranslations("workshop");

  const services = [
    t("service1"),
    t("service2"),
    t("service3"),
    t("service4"),
  ];

  return (
    <section id="workshop" className="relative overflow-hidden">
      <div className="bg-slate-950 py-24 relative">
        <GlowOrb color="primary" size="lg" className="top-0 left-1/4 opacity-25" />
        <GlowOrb color="blue" size="md" className="bottom-1/4 right-0" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          <SectionHeader title={t("title")} subtitle={t("subtitle")} dark />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal variant="fadeInLeft">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-blue-500/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700" />
                <div className="relative rounded-3xl overflow-hidden border border-slate-700/50 shadow-glass">
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src="/assets/components/auto-diagnostics.avif"
                      alt="Mallouka Motors Workshop"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <IconWrapper variant="primary" size="sm">
                          <Wrench className="w-5 h-5" />
                        </IconWrapper>
                        <h3 className="text-xl font-bold text-white">{t("services")}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeInRight" delay={0.2}>
              <div className="space-y-8">
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800/50 hover:border-primary-500/30 transition-all duration-300"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary-400" />
                      </div>
                      <span className="text-slate-300 font-medium">{service}</span>
                    </div>
                  ))}
                </div>

                <GlowCard variant="dark" hover>
                  <h3 className="text-xl font-bold text-white mb-6">
                    {companyData.branches[1].name}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <IconWrapper variant="primary">
                        <MapPin className="w-5 h-5" />
                      </IconWrapper>
                      <div>
                        <p className="font-medium text-white mb-1">{t("address")}</p>
                        <p className="text-slate-400">
                          {companyData.branches[1].address}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <IconWrapper variant="primary">
                        <Phone className="w-5 h-5" />
                      </IconWrapper>
                      <div>
                        <p className="font-medium text-white mb-1">{t("phone")}</p>
                        <p className="text-slate-400">
                          {companyData.branches[1].phone}
                        </p>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
