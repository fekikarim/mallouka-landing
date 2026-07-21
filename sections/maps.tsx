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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.5!2d10.3!3d36.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDU0JzAwLjAiTiAxMMKwMTgnMDAuMCJF!5e0!3m2!1sen!2stn!4v1600000000000!5m2!1sen!2stn"
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.5!2d10.2!3d36.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDQ4JzAwLjAiTiAxMMKwMTInMDAuMCJF!5e0!3m2!1sen!2stn!4v1600000000000!5m2!1sen!2stn"
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
