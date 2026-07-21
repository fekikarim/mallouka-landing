"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { ScrollReveal } from "../animations/scroll-reveal";
import { Heading, Subheading, Body } from "@/components/ui/typography";
import { Card } from "@/components/ui/card";
import { IconWrapper } from "@/components/ui/icon-wrapper";
import { Wrench, MapPin, Phone } from "lucide-react";
import { companyData } from "@/data/company";

export const Workshop = () => {
  const t = useTranslations("workshop");

  return (
    <section id="workshop" className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <ScrollReveal>
          <div className="text-center mb-12">
            <Heading>{t("title")}</Heading>
            <Subheading>{t("subtitle")}</Subheading>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollReveal>
            <Card>
              <div className="flex items-start space-x-4 mb-6">
                <IconWrapper variant="primary" size="lg">
                  <Wrench className="w-6 h-6" />
                </IconWrapper>
                <div>
                  <h3 className="text-2xl font-semibold text-secondary mb-3">{t("services")}</h3>
                  <Body size="lg">{t("description")}</Body>
                </div>
              </div>
              
              <div className="space-y-4 mt-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-secondary-700">Engine Installation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-secondary-700">Vehicle Diagnostics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-secondary-700">Maintenance & Repairs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-secondary-700">Electrical Systems</span>
                </div>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Card>
              <h3 className="text-2xl font-semibold text-secondary mb-6">{companyData.branches[1].name}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <IconWrapper variant="primary">
                    <MapPin className="w-5 h-5" />
                  </IconWrapper>
                  <div>
                    <p className="font-medium text-secondary mb-1">{t("address")}</p>
                    <p className="text-secondary-600">{companyData.branches[1].address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <IconWrapper variant="primary">
                    <Phone className="w-5 h-5" />
                  </IconWrapper>
                  <div>
                    <p className="font-medium text-secondary mb-1">{t("phone")}</p>
                    <p className="text-secondary-600">{companyData.branches[1].phone}</p>
                  </div>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
