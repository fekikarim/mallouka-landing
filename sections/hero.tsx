"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeInUp, fadeInDown } from "../animations/variants";
import { Button } from "@/components/ui/button";
import { Heading, Subheading } from "@/components/ui/typography";
import { companyData } from "@/data/company";

export const Hero = () => {
  const t = useTranslations("hero");

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-20">
        <div className="text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInDown}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary rounded-full text-sm font-medium">
              {t("tagline")}
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-secondary mb-6"
          >
            {t("title")}
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-secondary-600 mb-8 max-w-3xl mx-auto"
          >
            {t("subtitle")}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              {t("contactBtn")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open(`https://wa.me/${companyData.whatsapp.replace(/\s/g, "")}`, "_blank")}
            >
              {t("whatsappBtn")}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
