"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Navbar = () => {
  const t = useTranslations("nav");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = () => setIsLangMenuOpen(false);
    if (isLangMenuOpen) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [isLangMenuOpen]);

  const locales = [
    { code: "fr", name: "Français", flag: "FR" },
    { code: "en", name: "English", flag: "GB" },
    { code: "ar", name: "العربية", flag: "TN" },
  ];

  const currentLocale = pathname.split("/")[1] || "fr";

  const changeLocale = (locale: string) => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${locale}`);
    router.push(newPath);
    setIsLangMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: t("home"), href: "#hero" },
    { name: t("about"), href: "#about" },
    { name: t("services"), href: "#services" },
    { name: t("brands"), href: "#brands" },
    { name: t("contact"), href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-slate-950/95 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-slate-950/60 backdrop-blur-md border-b border-white/5"
      }`}
    >
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
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLangMenuOpen(!isLangMenuOpen);
                }}
                className="flex items-center space-x-2 text-slate-300 hover:text-white hover:bg-slate-800/50"
              >
                <Globe className="w-5 h-5 text-primary-400 drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]" />
                <span className="hidden sm:inline text-xs font-bold tracking-wider">
                  {currentLocale.toUpperCase()}
                </span>
              </Button>

              {isLangMenuOpen && (
                <div className="absolute right-0 mt-3 w-44 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-glass py-2 overflow-hidden">
                  {locales.map((locale) => (
                    <button
                      key={locale.code}
                      onClick={() => changeLocale(locale.code)}
                      className={`w-full px-4 py-2.5 text-left transition-all flex items-center space-x-3 ${
                        currentLocale === locale.code
                          ? "text-primary-400 bg-primary-500/10"
                          : "text-slate-300 hover:bg-slate-800 hover:text-white"
                      }`}
                    >
                      <span className="text-sm font-bold tracking-wider w-7">
                        {locale.flag}
                      </span>
                      <span className="font-medium tracking-wide text-sm">
                        {locale.name}
                      </span>
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
        <div className="md:hidden bg-slate-950/98 backdrop-blur-xl border-t border-white/5 shadow-glass-lg">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3.5 rounded-xl hover:bg-slate-800/80 text-slate-300 hover:text-primary-400 transition-all font-medium tracking-wide uppercase border border-transparent hover:border-white/5 text-sm"
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
