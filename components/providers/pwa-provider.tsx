"use client";

import React, { useEffect, useState } from "react";
import { WifiOff, Wifi, CheckCircle2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export const PWAProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOffline, setIsOffline] = useState(false);
  const [showReconnected, setShowReconnected] = useState(false);

  useEffect(() => {
    // Check initial online status
    if (typeof window !== "undefined") {
      setIsOffline(!navigator.onLine);
    }

    // Service Worker Management: auto-clean in dev/localhost, register in production
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
        navigator.serviceWorker.getRegistrations().then((registrations) => {
          for (const reg of registrations) {
            reg.unregister();
          }
        });
      } else {
        navigator.serviceWorker
          .register("/service-worker.js")
          .then((registration) => {
            console.log("[PWA] Service Worker registered:", registration.scope);
          })
          .catch((error) => {
            console.warn("[PWA] Service Worker registration failed:", error);
          });
      }
    }

    const handleOffline = () => {
      setIsOffline(true);
      setShowReconnected(false);
    };

    const handleOnline = () => {
      setIsOffline(false);
      setShowReconnected(true);
      const timer = setTimeout(() => setShowReconnected(false), 3500);
      return () => clearTimeout(timer);
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return (
    <>
      {children}

      {/* Floating Offline / Reconnected Banner */}
      <aside aria-label="Statut du réseau">
        <AnimatePresence>
          {isOffline && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="fixed bottom-6 left-6 right-6 sm:left-auto sm:right-6 z-50 max-w-md bg-slate-900/95 backdrop-blur-xl border border-amber-500/40 rounded-2xl p-4 shadow-[0_10px_35px_rgba(0,0,0,0.6)] flex items-center gap-3.5"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center flex-shrink-0 text-amber-400">
                <WifiOff className="w-5 h-5 animate-pulse" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-white truncate">
                  Mode hors ligne actif
                </h4>
                <p className="text-xs text-slate-400 truncate">
                  Navigation via le contenu mis en cache.
                </p>
              </div>
            </motion.div>
          )}

          {showReconnected && !isOffline && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="fixed bottom-6 left-6 right-6 sm:left-auto sm:right-6 z-50 max-w-md bg-slate-900/95 backdrop-blur-xl border border-emerald-500/40 rounded-2xl p-4 shadow-[0_10px_35px_rgba(0,0,0,0.6)] flex items-center gap-3.5"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 text-emerald-400">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-white truncate">
                  Connexion rétablie
                </h4>
                <p className="text-xs text-emerald-400/90 truncate">
                  Toutes les fonctionnalités sont à jour.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </aside>
    </>
  );
};
