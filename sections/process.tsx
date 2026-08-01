"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ScrollReveal } from "../animations/scroll-reveal";
import { GlowCard } from "@/components/ui/glow-card";
import { SectionHeader } from "@/components/ui/section-header";
import { GlowOrb } from "@/components/ui/glow-orb";
import { Search, CheckCircle, Truck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Process = () => {
  const t = useTranslations("process");

  const steps = [
    { icon: Search, title: t("step1"), desc: t("step1Desc") },
    { icon: CheckCircle, title: t("step2"), desc: t("step2Desc") },
    { icon: Truck, title: t("step3"), desc: t("step3Desc") },
    { icon: Wrench, title: t("step4"), desc: t("step4Desc") },
  ];

  return (
    <section id="process" className="py-24 bg-slate-950 relative overflow-hidden gradient-top-border">
      <GlowOrb color="primary" size="lg" className="top-0 right-1/4 opacity-30" />
      <GlowOrb color="blue" size="md" className="bottom-0 left-1/3" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} dark />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <GlowCard variant="dark" hover className="text-center h-full">
                <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-blue-500 rounded-2xl text-white text-2xl font-bold mb-6 shadow-glow group-hover:shadow-glow-lg transition-shadow duration-500">
                  {index + 1}
                  <div className="absolute inset-0 bg-primary-500/20 rounded-2xl blur-xl" />
                </div>

                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary-500/10 text-primary-400 mb-4">
                  <step.icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">{step.desc}</p>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA with illustration */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            {/* Illustration */}
            <div className="lg:col-span-2 hidden lg:block">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/15 to-blue-500/10 rounded-3xl blur-2xl" />
                <div className="relative rounded-3xl overflow-hidden border border-slate-800/50 shadow-glass">
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src="/assets/components/roadside-service-illustration.avif"
                      alt="Roadside Service"
                      fill
                      sizes="400px"
                      className="object-contain transition-transform duration-700 group-hover:scale-105 p-4"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="lg:col-span-3">
              <GlowCard variant="dark" className="h-full">
                <div className="flex flex-col items-center gap-6 p-6 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-blue-500 flex items-center justify-center shadow-glow">
                    <Truck className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-semibold text-white">
                    {t("customRequest")}
                  </div>
                  <p className="text-slate-400 max-w-md">
                    {t("customRequestDesc")}
                  </p>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary-500 to-blue-500 hover:from-primary-600 hover:to-blue-600 text-white font-semibold h-14 px-10 text-lg shadow-glow hover:shadow-glow-lg transition-all duration-500 border-0 rounded-xl"
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    {t("contactUs")}
                  </Button>
                </div>
              </GlowCard>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
