"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heading } from "@/components/ui/typography";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="text-center"
      >
        <h1 className="text-9xl font-black text-gray-200 dark:text-gray-800">404</h1>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Heading className="text-gray-900 dark:text-white">Page Not Found</Heading>
        </div>
        <p className="mt-8 text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto relative z-10">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          href="/"
          className="relative z-10 inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-full transition-all hover:shadow-lg transform hover:-translate-y-1"
        >
          Return to Homepage
        </Link>
      </motion.div>
    </div>
  );
}
