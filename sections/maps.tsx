"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { ScrollReveal } from "../animations/scroll-reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { GlowOrb } from "@/components/ui/glow-orb";
import { companyData } from "@/data/company";
import { MapPin } from "lucide-react";

export const Maps = () => {
  const t = useTranslations("contact");

  return (
    <section id="maps" className="py-24 bg-white relative overflow-hidden">
      <GlowOrb color="primary" size="sm" className="top-20 left-1/4 opacity-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <SectionHeader
          title={t("mapTitle")}
          subtitle={t("mapSubtitle")}
          dark={false}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ScrollReveal variant="fadeInLeft">
            <div className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-soft hover:shadow-medium transition-shadow duration-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11613.589924733538!2d10.29569869385474!3d36.87381151316347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2b5c51ab7fc99%3A0xb4e49c021f204324!2sAllo%20Casse%20Auto!5e0!3m2!1sen!2stn!4v1784739724586!5m2!1sen!2stn"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Branch 1 - ${companyData.branches[0].name}`}
              />
              <div className="p-5 bg-white border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900">
                      {companyData.branches[0].name}
                    </h3>
                    <p className="text-sm text-secondary-500">
                      {companyData.branches[0].address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fadeInRight" delay={0.2}>
            <div className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-soft hover:shadow-medium transition-shadow duration-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11613.589924733538!2d10.29569869385474!3d36.87381151316347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2b5005c1ee90f%3A0x1c69edfea2c1ec9e!2sAllo%20Casse%20Auto%20-%20Montage%20Moteur%20%26%20Entretien!5e0!3m2!1sen!2stn!4v1784739760422!5m2!1sen!2stn"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Branch 2 - ${companyData.branches[1].name}`}
              />
              <div className="p-5 bg-white border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900">
                      {companyData.branches[1].name}
                    </h3>
                    <p className="text-sm text-secondary-500">
                      {companyData.branches[1].address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
