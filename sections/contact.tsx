"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ScrollReveal } from "../animations/scroll-reveal";
import { GlowCard } from "@/components/ui/glow-card";
import { SectionHeader } from "@/components/ui/section-header";
import { GlowOrb } from "@/components/ui/glow-orb";
import { IconWrapper } from "@/components/ui/icon-wrapper";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  AlertTriangle,
} from "lucide-react";
import { companyData } from "@/data/company";

export const Contact = () => {
  const t = useTranslations("contact");
  const [imgError, setImgError] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="bg-slate-950 py-24 relative">
        <GlowOrb color="primary" size="lg" className="top-0 left-1/3 opacity-30" />
        <GlowOrb color="blue" size="md" className="bottom-1/4 right-0" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          <SectionHeader title={t("title")} subtitle={t("subtitle")} dark />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Email + Illustration */}
            <div className="space-y-6">
              {/* Email */}
              <ScrollReveal variant="fadeInLeft">
                <a
                  href={`mailto:${companyData.email}`}
                  className="group/email flex items-center gap-4 p-5 rounded-2xl border border-slate-700/50 bg-slate-900/60 backdrop-blur-sm hover:border-primary-500/40 hover:bg-slate-800/60 transition-all duration-500"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-500/15 flex items-center justify-center group-hover/email:bg-primary-500/25 transition-colors duration-500">
                    <Mail className="w-5 h-5 text-primary-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">
                      {t("email")}
                    </p>
                    <p className="text-primary-300 group-hover/email:text-primary-200 text-sm sm:text-base font-medium truncate transition-colors duration-300">
                      {companyData.email}
                    </p>
                  </div>
                </a>
              </ScrollReveal>

              {/* Illustration */}
              <ScrollReveal variant="fadeInLeft" delay={0.1}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-blue-500/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700" />
                  <div className="relative rounded-3xl overflow-hidden border border-slate-700/50 shadow-glass bg-slate-900/50">
                    {imgError ? (
                      <div className="flex flex-col items-center justify-center py-20 text-center gap-4">
                        <AlertTriangle className="w-10 h-10 text-slate-500" />
                        <p className="text-slate-400 text-sm">
                          {t("imageError")}
                        </p>
                      </div>
                    ) : (
                      <Image
                        src="/assets/components/auto-repair-advice-illustration.png"
                        alt="Auto Repair Advice"
                        width={600}
                        height={500}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                        priority={false}
                        onError={() => setImgError(true)}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Contact Info */}
            <ScrollReveal variant="fadeInRight" delay={0.2}>
              <div className="space-y-6">
                {/* Branch 1 */}
                <GlowCard variant="dark" hover>
                  <h3 className="text-lg font-bold text-white mb-4">
                    {t("branch1")}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <IconWrapper variant="primary">
                        <MapPin className="w-5 h-5" />
                      </IconWrapper>
                      <div>
                        <p className="font-medium text-white mb-1">{t("address")}</p>
                        <p className="text-slate-400 text-sm">
                          {companyData.branches[0].address}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <IconWrapper variant="primary">
                        <Phone className="w-5 h-5" />
                      </IconWrapper>
                      <div>
                        <p className="font-medium text-white mb-1">{t("phone")}</p>
                        <a
                          href={`tel:${companyData.branches[0].phone.replace(/\s/g, "")}`}
                          className="text-primary-400 hover:text-primary-300 text-sm underline underline-offset-2 decoration-primary-400/30 hover:decoration-primary-300/60 transition-colors duration-300"
                        >
                          {companyData.branches[0].phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </GlowCard>

                {/* Branch 2 */}
                <GlowCard variant="dark" hover>
                  <h3 className="text-lg font-bold text-white mb-4">
                    {t("branch2")}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <IconWrapper variant="primary">
                        <MapPin className="w-5 h-5" />
                      </IconWrapper>
                      <div>
                        <p className="font-medium text-white mb-1">{t("address")}</p>
                        <p className="text-slate-400 text-sm">
                          {companyData.branches[1].address}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <IconWrapper variant="primary">
                        <Phone className="w-5 h-5" />
                      </IconWrapper>
                      <div>
                        <p className="font-medium text-white mb-1">{t("phone")}</p>
                        <a
                          href={`tel:${companyData.branches[1].phone.replace(/\s/g, "")}`}
                          className="text-primary-400 hover:text-primary-300 text-sm underline underline-offset-2 decoration-primary-400/30 hover:decoration-primary-300/60 transition-colors duration-300"
                        >
                          {companyData.branches[1].phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </GlowCard>

                {/* WhatsApp */}
                <GlowCard variant="dark" hover>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{t("whatsapp")}</p>
                      <p className="text-slate-400 text-sm">{companyData.whatsapp}</p>
                    </div>
                  </div>
                  <button
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold h-12 rounded-xl transition-all duration-300 border-0 cursor-pointer flex items-center justify-center gap-2"
                    onClick={() =>
                      window.open(
                        `https://wa.me/${companyData.whatsapp.replace(/\s/g, "")}`,
                        "_blank"
                      )
                    }
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>{t("whatsapp")}</span>
                  </button>
                </GlowCard>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
