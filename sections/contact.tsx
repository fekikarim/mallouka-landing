"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ScrollReveal } from "../animations/scroll-reveal";
import { GlowCard } from "@/components/ui/glow-card";
import { SectionHeader } from "@/components/ui/section-header";
import { GlowOrb } from "@/components/ui/glow-orb";
import { Button } from "@/components/ui/button";
import { IconWrapper } from "@/components/ui/icon-wrapper";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle,
} from "lucide-react";
import { companyData } from "@/data/company";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const Contact = () => {
  const t = useTranslations("contact");
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="bg-slate-950 py-24 relative">
        <GlowOrb color="primary" size="lg" className="top-0 left-1/3 opacity-30" />
        <GlowOrb color="blue" size="md" className="bottom-1/4 right-0" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          <SectionHeader title={t("title")} subtitle={t("subtitle")} dark />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form - 2 cols */}
            <ScrollReveal variant="fadeInLeft" className="lg:col-span-3">
              <GlowCard variant="dark">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                      <CheckCircle className="w-10 h-10 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {t("successTitle") || "Message Sent!"}
                    </h3>
                    <p className="text-slate-400">
                      {t("successMessage") || "We will get back to you soon."}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        {t("name")}
                      </label>
                      <input
                        {...register("name")}
                        className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-300"
                        placeholder={t("namePlaceholder") || "Your name"}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        {t("email")}
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-300"
                        placeholder={t("emailPlaceholder") || "your@email.com"}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        {t("phone")}
                      </label>
                      <input
                        {...register("phone")}
                        type="tel"
                        className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-300"
                        placeholder={t("phonePlaceholder") || "+216 XX XXX XXX"}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        {t("message")}
                      </label>
                      <textarea
                        {...register("message")}
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-300 resize-none"
                        placeholder={t("messagePlaceholder") || "Your message..."}
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-400">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-primary-500 to-blue-500 hover:from-primary-600 hover:to-blue-600 text-white font-semibold h-14 text-lg shadow-glow hover:shadow-glow-lg transition-all duration-500 border-0 rounded-xl disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>{t("sending") || "Sending..."}</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="w-5 h-5" />
                          <span>{t("send")}</span>
                        </div>
                      )}
                    </Button>
                  </form>
                )}
              </GlowCard>
            </ScrollReveal>

            {/* Info - 3 cols */}
            <ScrollReveal variant="fadeInRight" delay={0.2} className="lg:col-span-2">
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
                        <p className="text-slate-400 text-sm">
                          {companyData.branches[0].phone}
                        </p>
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
                        <p className="text-slate-400 text-sm">
                          {companyData.branches[1].phone}
                        </p>
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
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold h-12 rounded-xl transition-all duration-300 border-0"
                    onClick={() =>
                      window.open(
                        `https://wa.me/${companyData.whatsapp.replace(/\s/g, "")}`,
                        "_blank"
                      )
                    }
                  >
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-5 h-5" />
                      <span>{t("whatsapp")}</span>
                    </div>
                  </Button>
                </GlowCard>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
