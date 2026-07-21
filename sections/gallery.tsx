"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { ScrollReveal } from "../animations/scroll-reveal";
import { Heading, Subheading } from "@/components/ui/typography";
import { galleryData } from "@/data/gallery";
import Image from "next/image";
import { X } from "lucide-react";

export const Gallery = () => {
  const t = useTranslations("gallery");
  const [selectedImage, setSelectedImage] = useState<typeof galleryData[0] | null>(null);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <ScrollReveal>
          <div className="text-center mb-12">
            <Heading>{t("title")}</Heading>
            <Subheading>{t("subtitle")}</Subheading>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryData.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.1}>
              <div
                className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer shadow-soft hover:shadow-medium transition-shadow"
                onClick={() => setSelectedImage(item)}
              >
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <video
                    src={item.src}
                    controls
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">{item.title}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative max-w-4xl max-h-[90vh]">
            {selectedImage.type === "image" ? (
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="rounded-2xl"
              />
            ) : (
              <video
                src={selectedImage.src}
                controls
                className="rounded-2xl max-w-full max-h-[90vh]"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
};
