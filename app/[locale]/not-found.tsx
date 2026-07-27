"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="text-center relative z-10"
      >
        <h1 className="text-[10rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-slate-800 to-slate-900 leading-none select-none">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-4xl md:text-5xl font-bold text-white">
            Page Not Found
          </span>
        </div>

        <p className="mt-8 text-lg text-slate-400 mb-10 max-w-md mx-auto relative z-10 leading-relaxed">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <Link
          href="/"
          className="relative z-10 inline-flex items-center gap-3 bg-gradient-to-r from-primary-500 to-blue-500 hover:from-primary-600 hover:to-blue-600 text-white font-semibold py-3.5 px-8 rounded-xl transition-all duration-300 shadow-glow hover:shadow-glow-lg"
        >
          <Home className="w-5 h-5" />
          Return to Homepage
        </Link>
      </motion.div>
    </div>
  );
}
