"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { brandsData } from "@/data/brands";
import { SectionHeader } from "@/components/ui/section-header";
import { GlowOrb } from "@/components/ui/glow-orb";

export const Brands = () => {
  const t = useTranslations("brands");

  return (
    <section
      id="brands"
      className="py-24 bg-slate-950 relative overflow-hidden gradient-top-border"
    >
      <GlowOrb color="primary" size="lg" className="-top-48 left-1/4 animate-glow-pulse" />
      <GlowOrb color="blue" size="md" className="bottom-0 right-1/4" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} dark />
      </div>

      <div className="relative w-full overflow-hidden flex flex-col gap-12 group">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

        <div className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused] w-max items-center">
          {[...brandsData, ...brandsData].map((brand, index) => (
            <div
              key={`${brand.id}-${index}`}
              className="inline-flex items-center justify-center w-56 h-32 mx-12 transition-all duration-500 hover:scale-110 cursor-pointer"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={200}
                height={100}
                className="w-auto h-auto max-w-[180px] max-h-[90px] object-contain brightness-0 invert opacity-60 hover:brightness-100 hover:invert-0 hover:opacity-100 transition-all duration-500 drop-shadow-[0_0_8px_rgba(255,255,255,0.05)] hover:drop-shadow-[0_0_12px_rgba(45,150,218,0.4)]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
