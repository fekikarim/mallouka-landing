"use client";

import React from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

interface ServiceCardState {
  hasError: boolean;
}

class ServiceCardErrorBoundary extends React.Component<
  React.PropsWithChildren<{ fallback?: React.ReactNode }>,
  ServiceCardState
> {
  constructor(props: React.PropsWithChildren<{ fallback?: React.ReactNode }>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ServiceCardState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("[ServiceCard] Render error:", error.message, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="relative bg-white rounded-2xl border border-red-200/80 p-8 overflow-hidden">
            <div className="flex flex-col items-center justify-center text-center gap-3 py-4">
              <Icons.AlertTriangle className="w-8 h-8 text-red-400" />
              <p className="text-sm text-secondary-400">
                Unable to load this service
              </p>
            </div>
          </div>
        )
      );
    }
    return this.props.children;
  }
}

const getValidIcon = (iconName: string): LucideIcon | null => {
  try {
    const icon = Icons[iconName as keyof typeof Icons];
    if (icon && typeof icon === "object" && "render" in icon) {
      return icon as unknown as LucideIcon;
    }
    return null;
  } catch {
    return null;
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.06,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  index,
}) => {
  const IconComponent = getValidIcon(icon);

  return (
    <ServiceCardErrorBoundary>
      <motion.div
        custom={index}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="group relative bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-medium hover:border-primary-200 overflow-hidden cursor-default"
      >
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-primary-50/50 via-transparent to-blue-50/30 pointer-events-none" />

        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10 mb-5">
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary-50 text-primary group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-600 group-hover:text-white transition-all duration-500 group-hover:shadow-glow-sm">
            {IconComponent ? (
              <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-500 group-hover:scale-110" />
            ) : (
              <Icons.Cog className="w-6 h-6 sm:w-7 sm:h-7" />
            )}
          </div>
        </div>

        <div className="relative z-10">
          <h3 className="text-lg sm:text-xl font-semibold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-secondary-500 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-primary-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      </motion.div>
    </ServiceCardErrorBoundary>
  );
};
