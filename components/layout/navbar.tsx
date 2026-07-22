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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center relative group">
            <div className="absolute inset-0 bg-primary-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <Image
              src="/assets/logo/mallouka_motors_logo.svg"
              alt="Mallouka Motors"
              width={180}
              height={50}
              className="h-12 w-auto relative z-10 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-slate-300 hover:text-primary-400 transition-colors font-medium text-sm tracking-wide uppercase group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-blue-500 transition-all duration-300 group-hover:w-full drop-shadow-[0_0_5px_rgba(59,130,246,0.8)]" />
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
                className="flex items-center space-x-2 text-slate-300 hover:text-white hover:bg-slate-800/50"
              >
                <Globe className="w-5 h-5 text-primary-400 drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]" />
                <span className="hidden sm:inline">
                  {locales.find((l) => l.code === currentLocale)?.flag}
                </span>
              </Button>

              {isLangMenuOpen && (
                <div className="absolute right-0 mt-3 w-40 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.5)] py-2 overflow-hidden">
                  {locales.map((locale) => (
                    <button
                      key={locale.code}
                      onClick={() => changeLocale(locale.code)}
                      className="w-full px-4 py-2 text-left text-slate-300 hover:bg-slate-800 hover:text-primary-400 transition-colors flex items-center space-x-3"
                    >
                      <span className="text-lg">{locale.flag}</span>
                      <span className="font-medium tracking-wide">{locale.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-slate-300 hover:text-white hover:bg-slate-800/50"
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
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-white/10 shadow-inner">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 rounded-lg hover:bg-slate-800/80 text-slate-300 hover:text-primary-400 transition-all font-medium tracking-wide uppercase border border-transparent hover:border-white/5"
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
