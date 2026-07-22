"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("error" as any); // Might not have translation for error, fallback to english

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-red-600 mb-4">Something went wrong!</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
          We apologize for the inconvenience. An unexpected error has occurred. Our team has been notified.
        </p>
        <button
          onClick={() => reset()}
          className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-full transition-colors"
        >
          Try again
        </button>
      </motion.div>
    </div>
  );
}
