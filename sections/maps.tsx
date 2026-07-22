"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { ScrollReveal } from "../animations/scroll-reveal";
import { Heading, Subheading } from "@/components/ui/typography";
import { companyData } from "@/data/company";

export const Maps = () => {
  const t = useTranslations("contact");

  return (
    <section id="maps" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <ScrollReveal>
          <div className="text-center mb-12">
            <Heading>Find Us</Heading>
            <Subheading>Visit Our Locations</Subheading>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden shadow-soft">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11613.589924733538!2d10.29569869385474!3d36.87381151316347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2b5c51ab7fc99%3A0xb4e49c021f204324!2sAllo%20Casse%20Auto!5e0!3m2!1sen!2stn!4v1784739724586!5m2!1sen!2stn"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Branch 1 - La Marsa"
              />
              <div className="p-4 bg-secondary-50">
                <h3 className="font-semibold text-secondary">{companyData.branches[0].name}</h3>
                <p className="text-sm text-secondary-600">{companyData.branches[0].address}</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="rounded-2xl overflow-hidden shadow-soft">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11613.589924733538!2d10.29569869385474!3d36.87381151316347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2b5005c1ee90f%3A0x1c69edfea2c1ec9e!2sAllo%20Casse%20Auto%20-%20Montage%20Moteur%20%26%20Entretien!5e0!3m2!1sen!2stn!4v1784739760422!5m2!1sen!2stn"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Branch 2 - Tunis"
              />
              <div className="p-4 bg-secondary-50">
                <h3 className="font-semibold text-secondary">{companyData.branches[1].name}</h3>
                <p className="text-sm text-secondary-600">{companyData.branches[1].address}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
