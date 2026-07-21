"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { ScrollReveal } from "../animations/scroll-reveal";
import { Heading, Subheading } from "@/components/ui/typography";
import { timelineData } from "@/data/timeline";

export const Timeline = () => {
  const t = useTranslations("timeline");

  return (
    <section id="timeline" className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <ScrollReveal>
          <div className="text-center mb-12">
            <Heading>{t("title")}</Heading>
            <Subheading>{t("subtitle")}</Subheading>
          </div>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200 hidden md:block" />
          
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 0.2}>
                <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  <div className="flex-1">
                    <div className="bg-white rounded-2xl shadow-soft p-6 md:p-8">
                      <span className="inline-block px-4 py-2 bg-primary text-white rounded-full text-sm font-bold mb-4">
                        {item.year}
                      </span>
                      <h3 className="text-2xl font-bold text-secondary mb-3">{item.title}</h3>
                      <p className="text-secondary-600">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="hidden md:flex w-12 h-12 bg-primary rounded-full items-center justify-center z-10">
                    <div className="w-4 h-4 bg-white rounded-full" />
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
