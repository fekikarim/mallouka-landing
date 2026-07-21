"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { ScrollReveal } from "../animations/scroll-reveal";
import { Heading, Subheading } from "@/components/ui/typography";
import { Card } from "@/components/ui/card";
import { IconWrapper } from "@/components/ui/icon-wrapper";
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
    <section id="why-choose" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <ScrollReveal>
          <div className="text-center mb-12">
            <Heading>{t("title")}</Heading>
            <Subheading>{t("subtitle")}</Subheading>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card hover>
                <IconWrapper variant="primary" size="lg" className="mb-4">
                  <feature.icon className="w-6 h-6" />
                </IconWrapper>
                <h3 className="text-xl font-semibold text-secondary mb-3">{feature.title}</h3>
                <p className="text-secondary-600">{feature.desc}</p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
