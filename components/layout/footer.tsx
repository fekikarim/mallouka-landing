"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { companyData } from "@/data/company";
import Image from "next/image";

export const Footer = () => {
  const t = useTranslations("footer");

  const quickLinks = [
    { name: t("homeLink") || "Home", href: "#hero" },
    { name: t("aboutLink") || "About", href: "#about" },
    { name: t("servicesLink") || "Services", href: "#services" },
    { name: t("brandsLink") || "Brands", href: "#brands" },
    { name: t("contactLink") || "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: companyData.socialMedia.facebook, label: "Facebook" },
    { icon: Instagram, href: companyData.socialMedia.instagram, label: "Instagram" },
    { icon: Linkedin, href: companyData.socialMedia.linkedin, label: "LinkedIn" },
  ];

  return (
    <footer className="bg-slate-950 relative overflow-hidden gradient-top-border">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="/assets/logo/mallouka_motors_logo.svg"
              alt="Mallouka Motors"
              width={180}
              height={50}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-slate-400 text-sm leading-relaxed">
              {t("aboutText")}
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:bg-primary-500/20 hover:border-primary-500/30 hover:text-primary-400 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-primary-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-primary-400 transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              {t("contact")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-primary-400" />
                </div>
                <span className="text-slate-400 text-sm leading-relaxed">
                  {companyData.branches[0].address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-primary-400" />
                </div>
                <span className="text-slate-400 text-sm">
                  {companyData.phone}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-primary-400" />
                </div>
                <span className="text-slate-400 text-sm">
                  {companyData.email}
                </span>
              </li>
            </ul>
          </div>

          {/* Company Hours */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              {t("hours") || "Business Hours"}
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">{t("weekdays") || "Monday - Saturday"}</span>
                <span className="text-slate-300 font-medium">8:00 - 18:00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">{t("sunday") || "Sunday"}</span>
                <span className="text-slate-300 font-medium">{t("closed") || "Closed"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800/50 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} {companyData.name}. {t("rights")}
          </p>
          <p className="text-slate-600 text-xs">
            {companyData.formerName}
          </p>
        </div>
      </div>
    </footer>
  );
};
