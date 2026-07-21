"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { ScrollReveal } from "../animations/scroll-reveal";
import { Heading, Subheading } from "@/components/ui/typography";
import { Card } from "@/components/ui/card";
import { IconWrapper } from "@/components/ui/icon-wrapper";
import { servicesData } from "@/data/services";
import * as Icons from "lucide-react";

export const Services = () => {
  const t = useTranslations("services");

  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
    return IconComponent ? <IconComponent className="w-6 h-6" /> : null;
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <ScrollReveal>
          <div className="text-center mb-12">
            <Heading>{t("title")}</Heading>
            <Subheading>{t("subtitle")}</Subheading>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 0.1}>
              <Card hover>
                <IconWrapper variant="primary" size="lg" className="mb-4">
                  {getIcon(service.icon)}
                </IconWrapper>
                <h3 className="text-xl font-semibold text-secondary mb-3">{service.title}</h3>
                <p className="text-secondary-600">{service.description}</p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
