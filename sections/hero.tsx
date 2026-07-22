"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeInUp, fadeInDown } from "../animations/variants";
import { Button } from "@/components/ui/button";
import { companyData } from "@/data/company";

export const Hero = () => {
  const t = useTranslations("hero");

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 pt-20">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-20 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-left space-y-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInDown}
            >
              <span className="inline-block px-5 py-2 bg-slate-900/80 border border-slate-700/50 text-primary-400 rounded-full text-sm font-semibold tracking-wider uppercase backdrop-blur-sm shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                {t("tagline")}
              </span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight"
            >
              {t("title").split(' ').map((word, i) => (
                <React.Fragment key={i}>
                  {i === t("title").split(' ').length - 1 ? (
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-300">
                      {word}
                    </span>
                  ) : (
                    word + " "
                  )}
                </React.Fragment>
              ))}
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-400 max-w-xl font-light"
            >
              {t("subtitle")}
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-5 pt-4"
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-600 text-white font-semibold h-14 px-8 text-lg shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] border-0"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t("contactBtn")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg font-semibold border-slate-700 text-white hover:bg-slate-800 hover:text-white bg-slate-900/50 backdrop-blur-sm"
                onClick={() => window.open(`https://wa.me/${companyData.whatsapp.replace(/\s/g, "")}`, "_blank")}
              >
                {t("whatsappBtn")}
              </Button>
            </motion.div>
          </div>

          {/* Image Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-transparent rounded-full blur-3xl" />
            <div className="relative w-full h-[400px] lg:h-full group">
              <Image
                src="/assets/components/auto-service.png"
                alt="Auto Service"
                fill
                className="object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
