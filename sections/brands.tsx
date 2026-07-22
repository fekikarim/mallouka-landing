"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ScrollReveal } from "../animations/scroll-reveal";
import { Heading, Subheading } from "@/components/ui/typography";
import { brandsData } from "@/data/brands";

export const Brands = () => {
  const t = useTranslations("brands");

  return (
    <section id="brands" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Heading>{t("title")}</Heading>
            <Subheading>{t("subtitle")}</Subheading>
          </div>
        </ScrollReveal>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex flex-col gap-12 group">
        {/* Top Fade Gradients */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused] w-max items-center">
          {[...brandsData, ...brandsData].map((brand, index) => (
            <div
              key={`${brand.id}-${index}`}
              className="inline-flex items-center justify-center w-56 h-32 mx-12 transition-transform duration-300 hover:scale-110 cursor-pointer"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={200}
                height={100}
                className="w-auto h-auto max-w-[180px] max-h-[90px] object-contain filter grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
