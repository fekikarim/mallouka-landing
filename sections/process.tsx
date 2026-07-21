"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { ScrollReveal } from "../animations/scroll-reveal";
import { Heading, Subheading } from "@/components/ui/typography";
import { Card } from "@/components/ui/card";
import { IconWrapper } from "@/components/ui/icon-wrapper";
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
    <section id="process" className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <ScrollReveal>
          <div className="text-center mb-12">
            <Heading>{t("title")}</Heading>
            <Subheading>{t("subtitle")}</Subheading>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card hover>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full text-xl font-bold mb-4">
                    {index + 1}
                  </div>
                  <IconWrapper variant="primary" size="lg" className="mb-4">
                    <step.icon className="w-6 h-6" />
                  </IconWrapper>
                  <h3 className="text-xl font-semibold text-secondary mb-3">{step.title}</h3>
                  <p className="text-secondary-600">{step.desc}</p>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center">
            <Card className="max-w-2xl mx-auto bg-primary text-white">
              <h3 className="text-2xl font-semibold mb-4">{t("customRequest")}</h3>
              <Button size="lg" variant="secondary" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                {t("contactUs")}
              </Button>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
