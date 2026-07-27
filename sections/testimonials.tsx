"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { ScrollReveal } from "../animations/scroll-reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { GlowOrb } from "@/components/ui/glow-orb";
import { Star, Quote } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";

export const Testimonials = () => {
  const t = useTranslations("testimonials");

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      <GlowOrb color="primary" size="sm" className="top-20 right-1/4 opacity-15" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} dark={false} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={index * 0.1}>
              <div className="group relative bg-white rounded-2xl border border-slate-200/80 p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-medium hover:border-primary-200 overflow-hidden h-full flex flex-col">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-12 h-12 text-primary" />
                </div>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-accent-400 text-accent-400"
                    />
                  ))}
                </div>

                <p className="text-secondary-600 mb-6 italic leading-relaxed flex-1">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-secondary-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-secondary-400">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
