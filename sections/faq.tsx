"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { ScrollReveal } from "../animations/scroll-reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { GlowOrb } from "@/components/ui/glow-orb";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { faqsData } from "@/data/faqs";

export const FAQ = () => {
  const t = useTranslations("faq");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-slate-950 relative overflow-hidden gradient-top-border">
      <GlowOrb color="primary" size="md" className="top-1/4 right-0 opacity-25" />
      <GlowOrb color="blue" size="sm" className="bottom-1/4 left-1/3" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} dark />

        <div className="max-w-3xl mx-auto space-y-4">
          {faqsData.map((faq, index) => (
            <ScrollReveal key={faq.id} delay={index * 0.05}>
              <div
                className={`rounded-2xl border transition-all duration-500 overflow-hidden ${
                  openIndex === index
                    ? "bg-slate-900/60 border-primary-500/30 shadow-glow-sm"
                    : "bg-slate-900/30 border-slate-800/50 hover:border-slate-700/50"
                }`}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between text-left p-6 gap-4"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        openIndex === index
                          ? "bg-primary-500/20 text-primary-400"
                          : "bg-slate-800/50 text-slate-500"
                      }`}
                    >
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <h3
                      className={`text-lg font-semibold transition-colors ${
                        openIndex === index ? "text-white" : "text-slate-300"
                      }`}
                    >
                      {t(`faqItems.q${faq.id}`)}
                    </h3>
                  </div>
                  <div
                    className={`flex-shrink-0 transition-all duration-300 ${
                      openIndex === index
                        ? "text-primary-400 rotate-0"
                        : "text-slate-500 rotate-0"
                    }`}
                  >
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0">
                        <div className="pl-14 border-l-2 border-primary-500/30 ml-0">
                          <p className="text-slate-400 leading-relaxed">
                            {t(`faqItems.a${faq.id}`)}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
