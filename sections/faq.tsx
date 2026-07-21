"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { ScrollReveal } from "../animations/scroll-reveal";
import { Heading, Subheading } from "@/components/ui/typography";
import { Card } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqsData } from "@/data/faqs";

export const FAQ = () => {
  const t = useTranslations("faq");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <ScrollReveal>
          <div className="text-center mb-12">
            <Heading>{t("title")}</Heading>
            <Subheading>{t("subtitle")}</Subheading>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqsData.map((faq, index) => (
            <ScrollReveal key={faq.id} delay={index * 0.05}>
              <Card>
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <h3 className="text-lg font-semibold text-secondary pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="mt-4 pt-4 border-t border-secondary-200">
                    <p className="text-secondary-600">{faq.answer}</p>
                  </div>
                )}
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
