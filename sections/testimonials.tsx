"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { ScrollReveal } from "../animations/scroll-reveal";
import { Heading, Subheading } from "@/components/ui/typography";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";

export const Testimonials = () => {
  const t = useTranslations("testimonials");

  return (
    <section id="testimonials" className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <ScrollReveal>
          <div className="text-center mb-12">
            <Heading>{t("title")}</Heading>
            <Subheading>{t("subtitle")}</Subheading>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={index * 0.1}>
              <Card hover>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-secondary-600 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-secondary">{testimonial.name}</p>
                  <p className="text-sm text-secondary-500">{testimonial.location}</p>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
