"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { ScrollReveal } from "../animations/scroll-reveal";
import { Heading, Subheading, Body } from "@/components/ui/typography";
import { Card } from "@/components/ui/card";
import { IconWrapper } from "@/components/ui/icon-wrapper";
import { Award, Target, Heart } from "lucide-react";

export const About = () => {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <ScrollReveal>
          <div className="text-center mb-12">
            <Heading>{t("title")}</Heading>
            <Subheading>{t("subtitle")}</Subheading>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <ScrollReveal>
            <Body size="lg">{t("description")}</Body>
          </ScrollReveal>

          <div className="space-y-6">
            <ScrollReveal delay={0.2}>
              <Card hover>
                <div className="flex items-start space-x-4">
                  <IconWrapper variant="primary">
                    <Target className="w-6 h-6" />
                  </IconWrapper>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary mb-2">{t("mission")}</h3>
                    <Body>{t("missionText")}</Body>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <Card hover>
                <div className="flex items-start space-x-4">
                  <IconWrapper variant="primary">
                    <Award className="w-6 h-6" />
                  </IconWrapper>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary mb-2">{t("vision")}</h3>
                    <Body>{t("visionText")}</Body>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <Card hover>
                <div className="flex items-start space-x-4">
                  <IconWrapper variant="primary">
                    <Heart className="w-6 h-6" />
                  </IconWrapper>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary mb-2">{t("values")}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="px-3 py-1 bg-primary-100 text-primary rounded-full text-sm">{t("quality")}</span>
                      <span className="px-3 py-1 bg-primary-100 text-primary rounded-full text-sm">{t("integrity")}</span>
                      <span className="px-3 py-1 bg-primary-100 text-primary rounded-full text-sm">{t("reliability")}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
