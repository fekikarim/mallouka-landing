"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ScrollReveal } from "../animations/scroll-reveal";
import { Heading, Subheading } from "@/components/ui/typography";
import { statisticsData } from "@/data/statistics";

export const Statistics = () => {
  const t = useTranslations("stats");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [counts, setCounts] = useState(statisticsData.map(() => 0));

  useEffect(() => {
    if (isInView) {
      statisticsData.forEach((stat, index) => {
        let start = 0;
        const end = stat.value;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCounts((prev) => {
              const newCounts = [...prev];
              newCounts[index] = end;
              return newCounts;
            });
            clearInterval(timer);
          } else {
            setCounts((prev) => {
              const newCounts = [...prev];
              newCounts[index] = Math.floor(start);
              return newCounts;
            });
          }
        }, 16);

        return () => clearInterval(timer);
      });
    }
  }, [isInView]);

  return (
    <section ref={ref} id="stats" className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <ScrollReveal>
          <div className="text-center mb-12">
            <Heading className="text-white">{t("title")}</Heading>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statisticsData.map((stat, index) => (
            <ScrollReveal key={stat.id} delay={index * 0.1}>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-5xl md:text-6xl font-bold mb-2"
                >
                  {counts[index]}{stat.suffix}
                </motion.div>
                <p className="text-primary-100 text-lg">{t(stat.label)}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
