"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Navbar = () => {
  const t = useTranslations("nav");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const locales = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "ar", name: "العربية", flag: "🇹🇳" },
  ];

  const currentLocale = pathname.split("/")[1] || "en";

  const changeLocale = (locale: string) => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${locale}`);
    router.push(newPath);
    setIsLangMenuOpen(false);
  };

  const navItems = [
    { name: t("home"), href: "#hero" },
    { name: t("about"), href: "#about" },
    { name: t("services"), href: "#services" },
    { name: t("brands"), href: "#brands" },
    { name: t("contact"), href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-soft">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/assets/logo/mallouka_motors_logo.svg"
              alt="Mallouka Motors"
              width={180}
              height={50}
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-secondary-700 hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-2"
              >
                <Globe className="w-5 h-5" />
                <span className="hidden sm:inline">
                  {locales.find((l) => l.code === currentLocale)?.flag}
                </span>
              </Button>

              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-medium py-2">
                  {locales.map((locale) => (
                    <button
                      key={locale.code}
                      onClick={() => changeLocale(locale.code)}
                      className="w-full px-4 py-2 text-left hover:bg-primary-50 transition-colors flex items-center space-x-2"
                    >
                      <span>{locale.flag}</span>
                      <span>{locale.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-secondary-200">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 rounded-lg hover:bg-primary-50 text-secondary-700 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
