"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { brandsData } from "@/data/brands";
import { SectionHeader } from "@/components/ui/section-header";
import { GlowOrb } from "@/components/ui/glow-orb";

interface BrandItemProps {
  brand: (typeof brandsData)[0];
}

const BrandLogo: React.FC<BrandItemProps> = ({ brand }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setIsLoaded(true);
    }
  }, [brand.logo]);

  if (hasError) {
    return (
      <span className="px-3 py-1.5 rounded-lg bg-slate-900/40 border border-slate-800 text-xs font-semibold tracking-widest text-slate-400 group-hover/brand:text-primary-400 uppercase font-mono transition-colors">
        {brand.name}
      </span>
    );
  }

  return (
    <img
      ref={imgRef}
      src={brand.logo}
      alt={brand.name}
      width={160}
      height={70}
      loading="eager"
      decoding="async"
      style={{ aspectRatio: "160 / 70" }}
      onLoad={() => setIsLoaded(true)}
      onError={() => setHasError(true)}
      className={`max-w-[160px] max-h-[70px] w-auto h-auto aspect-[16/7] object-contain brightness-0 invert transition-all duration-500 filter ${
        isLoaded
          ? "opacity-50 group-hover/brand:opacity-100 group-hover/brand:drop-shadow-[0_0_18px_rgba(255,255,255,0.65)]"
          : "opacity-0"
      }`}
    />
  );
};

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
              className="inline-flex items-center justify-center w-52 h-24 mx-8 group/brand cursor-pointer select-none transition-transform duration-500 hover:scale-110"
            >
              <BrandLogo brand={brand} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

