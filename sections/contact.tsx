"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { ScrollReveal } from "../animations/scroll-reveal";
import { Heading, Subheading } from "@/components/ui/typography";
import { Card } from "@/components/ui/card";
import { Input, Textarea } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IconWrapper } from "@/components/ui/icon-wrapper";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { companyData } from "@/data/company";

export const Contact = () => {
  const t = useTranslations("contact");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
  };

  return (
    <section id="contact" className="py-20 bg-secondary-50">
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label={t("name")}
                  placeholder="Your name"
                  required
                />
                <Input
                  label={t("email")}
                  type="email"
                  placeholder="your@email.com"
                  required
                />
                <Input
                  label={t("phone")}
                  type="tel"
                  placeholder="+216 XX XXX XXX"
                />
                <Textarea
                  label={t("message")}
                  placeholder="Your message..."
                  rows={5}
                  required
                />
                <Button type="submit" size="lg" className="w-full">
                  {t("send")}
                </Button>
              </form>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-6">
              <Card>
                <h3 className="text-xl font-semibold text-secondary mb-6">{t("branch1")}</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <IconWrapper variant="primary">
                      <MapPin className="w-5 h-5" />
                    </IconWrapper>
                    <div>
                      <p className="font-medium text-secondary mb-1">Address</p>
                      <p className="text-secondary-600">{companyData.branches[0].address}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <IconWrapper variant="primary">
                      <Phone className="w-5 h-5" />
                    </IconWrapper>
                    <div>
                      <p className="font-medium text-secondary mb-1">{t("phone")}</p>
                      <p className="text-secondary-600">{companyData.branches[0].phone}</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold text-secondary mb-6">{t("branch2")}</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <IconWrapper variant="primary">
                      <MapPin className="w-5 h-5" />
                    </IconWrapper>
                    <div>
                      <p className="font-medium text-secondary mb-1">Address</p>
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

              <Card className="bg-primary text-white">
                <div className="flex items-center space-x-4">
                  <IconWrapper variant="secondary" size="lg">
                    <MessageCircle className="w-6 h-6" />
                  </IconWrapper>
                  <div>
                    <p className="font-semibold mb-1">{t("whatsapp")}</p>
                    <p className="text-primary-100">{companyData.whatsapp}</p>
                  </div>
                </div>
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full mt-4"
                  onClick={() => window.open(`https://wa.me/${companyData.whatsapp.replace(/\s/g, "")}`, "_blank")}
                >
                  {t("whatsapp")}
                </Button>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
