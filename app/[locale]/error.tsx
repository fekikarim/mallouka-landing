"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("errors");

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center relative z-10"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-red-500/10 border border-red-500/20 mb-8">
          <AlertTriangle className="w-10 h-10 text-red-400" />
        </div>

        <h2 className="text-3xl font-bold text-white mb-4">
          {t("title")}
        </h2>
        <p className="text-slate-400 mb-8 max-w-md mx-auto leading-relaxed">
          {t("description")}
        </p>

        <button
          onClick={() => reset()}
          className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-500 to-blue-500 hover:from-primary-600 hover:to-blue-600 text-white font-semibold py-3.5 px-8 rounded-xl transition-all duration-300 shadow-glow hover:shadow-glow-lg"
        >
          <RefreshCw className="w-5 h-5" />
          {t("retry")}
        </button>
      </motion.div>
    </div>
  );
}
