"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { WifiOff, RefreshCw, Phone, MessageCircle } from "lucide-react";
import { MallloukaLogoIcon } from "@/components/ui/mallouka-logo-icon";
import { companyData } from "@/data/company";

export default function OfflinePage() {
  const t = useTranslations("offline");
  const [checking, setChecking] = useState(false);

  const handleRetry = () => {
    setChecking(true);
    setTimeout(() => {
      window.location.reload();
    }, 400);
  };

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-lg w-full relative z-10">
        <div className="bg-slate-900/85 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.7)] text-center">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <MallloukaLogoIcon
              color="#47a7e3"
              className="h-12 w-auto drop-shadow-[0_0_12px_rgba(71,167,227,0.5)]"
            />
          </div>

          {/* Offline Icon */}
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto mb-5 text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.15)]">
            <WifiOff className="w-8 h-8 animate-pulse" />
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            {t("title")}
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
            {t("subtitle")}
          </p>

          {/* Retry Button */}
          <button
            onClick={handleRetry}
            disabled={checking}
            className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-blue-500 hover:from-primary-600 hover:to-blue-600 text-white font-semibold h-13 px-6 rounded-xl transition-all duration-300 shadow-glow hover:shadow-glow-lg text-base disabled:opacity-60 cursor-pointer"
          >
            <RefreshCw
              className={`w-5 h-5 ${checking ? "animate-spin" : ""}`}
            />
            <span>{checking ? "..." : t("retry")}</span>
          </button>

          {/* Emergency Direct Phone Actions */}
          <div className="mt-8 pt-6 border-t border-white/10 text-left">
            <h2 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-4 text-center">
              {t("emergencyTitle")}
            </h2>

            <div className="space-y-3">
              {/* Branch 1 */}
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-xs text-slate-400 font-medium">{t("parts")}</p>
                  <p className="text-sm font-semibold text-white truncate">
                    {companyData.branches[0].phone}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={`tel:${companyData.branches[0].phone.replace(/\s/g, "")}`}
                    aria-label={`Appeler ${t("parts")}`}
                    className="w-9 h-9 rounded-lg bg-primary-500/20 text-primary-400 hover:bg-primary-500 hover:text-white flex items-center justify-center transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                  <a
                    href={`https://wa.me/${companyData.whatsapp.replace(/\s/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`WhatsApp ${t("parts")}`}
                    className="w-9 h-9 rounded-lg bg-green-500/20 text-green-400 hover:bg-green-500 hover:text-white flex items-center justify-center transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Branch 2 */}
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-xs text-slate-400 font-medium">
                    {t("workshop")}
                  </p>
                  <p className="text-sm font-semibold text-white truncate">
                    {companyData.branches[1].phone}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={`tel:${companyData.branches[1].phone.replace(/\s/g, "")}`}
                    aria-label={`Appeler ${t("workshop")}`}
                    className="w-9 h-9 rounded-lg bg-primary-500/20 text-primary-400 hover:bg-primary-500 hover:text-white flex items-center justify-center transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                  <a
                    href={`https://wa.me/${companyData.whatsapp.replace(/\s/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`WhatsApp ${t("workshop")}`}
                    className="w-9 h-9 rounded-lg bg-green-500/20 text-green-400 hover:bg-green-500 hover:text-white flex items-center justify-center transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
