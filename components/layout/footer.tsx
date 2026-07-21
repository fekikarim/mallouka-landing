"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { companyData } from "@/data/company";
import Image from "next/image";

export const Footer = () => {
  const t = useTranslations("footer");

  const navItems = [
    { name: t("quickLinks"), links: [
      { name: "Home", href: "#hero" },
      { name: "About", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Contact", href: "#contact" },
    ]},
  ];

  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
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
            <p className="text-secondary-300 text-sm leading-relaxed">
              {t("aboutText")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("quickLinks")}</h3>
            <ul className="space-y-2">
              {navItems[0].links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-secondary-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("contact")}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-secondary-300 text-sm">
                  {companyData.branches[0].address}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-secondary-300 text-sm">
                  {companyData.phone}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-secondary-300 text-sm">
                  {companyData.email}
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("followUs")}</h3>
            <div className="flex space-x-4">
              <a
                href={companyData.socialMedia.facebook}
                className="w-10 h-10 rounded-full bg-secondary-700 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={companyData.socialMedia.instagram}
                className="w-10 h-10 rounded-full bg-secondary-700 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={companyData.socialMedia.linkedin}
                className="w-10 h-10 rounded-full bg-secondary-700 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary-700 mt-12 pt-8 text-center">
          <p className="text-secondary-400 text-sm">
            © {new Date().getFullYear()} {companyData.name}. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};
