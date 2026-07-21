"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { ScrollReveal } from "../animations/scroll-reveal";
import { Heading, Subheading } from "@/components/ui/typography";
import { brandsData } from "@/data/brands";

export const Brands = () => {
  const t = useTranslations("brands");

  return (
    <section id="brands" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <ScrollReveal>
          <div className="text-center mb-12">
            <Heading>{t("title")}</Heading>
            <Subheading>{t("subtitle")}</Subheading>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-8">
          {brandsData.map((brand) => (
            <ScrollReveal key={brand.id} delay={brand.id * 0.05}>
              <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-secondary-50 hover:bg-primary-50 transition-colors cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-white shadow-soft flex items-center justify-center mb-2">
                  <span className="text-2xl font-bold text-primary">{brand.name[0]}</span>
                </div>
                <span className="text-sm font-medium text-secondary-700 text-center">{brand.name}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
