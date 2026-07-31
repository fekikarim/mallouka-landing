"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MessageCircle, User, AlertTriangle } from "lucide-react";
import { GlowCard } from "@/components/ui/glow-card";

interface TeamMemberData {
  id: number;
  name: string;
  role: string;
  image: string;
  phone: string;
}

interface TeamMemberCardProps {
  member: TeamMemberData;
  roleLabel: string;
  callLabel: string;
  whatsappLabel: string;
  imageErrorLabel: string;
  index: number;
}

interface TeamCardState {
  hasError: boolean;
}

class TeamCardErrorBoundary extends React.Component<
  React.PropsWithChildren<{ fallback?: React.ReactNode }>,
  TeamCardState
> {
  constructor(props: React.PropsWithChildren<{ fallback?: React.ReactNode }>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): TeamCardState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("[TeamMemberCard] Render error:", error.message, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="relative bg-slate-900/60 border border-slate-800 rounded-2xl p-8 overflow-hidden">
            <div className="flex flex-col items-center justify-center text-center gap-3 py-4">
              <AlertTriangle className="w-8 h-8 text-red-400" />
              <p className="text-sm text-slate-400">
                Unable to load this team member
              </p>
            </div>
          </div>
        )
      );
    }
    return this.props.children;
  }
}

const formatPhoneForLinks = (phone: string): string =>
  phone.replace(/\s+/g, "").replace(/^\+/, "");

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.12,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  member,
  roleLabel,
  callLabel,
  whatsappLabel,
  imageErrorLabel,
  index,
}) => {
  const [imgError, setImgError] = useState(false);
  const phoneLink = formatPhoneForLinks(member.phone);

  return (
    <TeamCardErrorBoundary>
      <motion.div
        custom={index}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="h-full"
      >
        <GlowCard variant="dark" hover className="h-full p-0 overflow-hidden">
          <div className="group relative">
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

            {/* Image */}
            <div className="relative aspect-[3/4] overflow-hidden">
              {imgError ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-slate-900">
                  <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center">
                    <User className="w-8 h-8 text-slate-500" />
                  </div>
                  <p className="text-slate-500 text-sm">{imageErrorLabel}</p>
                </div>
              ) : (
                <Image
                  src={member.image}
                  alt={member.name}
                  width={864}
                  height={1237}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 420px"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  onError={() => setImgError(true)}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950/90 to-transparent pointer-events-none" />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 z-10 p-6 sm:p-7">
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 truncate">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary-400 font-medium">
                    {roleLabel}
                  </p>
                </div>
              </div>

              {/* Contact actions */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${phoneLink}`}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-blue-500 hover:from-primary-600 hover:to-blue-600 text-white font-semibold h-11 rounded-xl transition-all duration-300 shadow-glow-sm hover:shadow-glow text-sm sm:text-base"
                >
                  <Phone className="w-4 h-4" />
                  <span>{callLabel}</span>
                </a>
                <a
                  href={`https://wa.me/${phoneLink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold h-11 rounded-xl transition-all duration-300 text-sm sm:text-base"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{whatsappLabel}</span>
                </a>
              </div>

              {/* Phone number */}
              <p
                dir="ltr"
                className="mt-4 text-center text-slate-400 text-sm tabular-nums"
              >
                {member.phone}
              </p>
            </div>
          </div>
        </GlowCard>
      </motion.div>
    </TeamCardErrorBoundary>
  );
};
