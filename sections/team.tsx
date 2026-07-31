"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { AlertTriangle, RefreshCw, Users } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { GlowOrb } from "@/components/ui/glow-orb";
import { TeamMemberCard } from "@/components/ui/team-member-card";
import { TeamLoadingGrid } from "@/components/ui/team-card-skeleton";
import { teamData } from "@/data/team";

const validateTeamData = (
  data: typeof teamData
): { valid: typeof teamData; errors: string[] } => {
  const errors: string[] = [];
  const valid = data.filter((member, index) => {
    if (!member.id && member.id !== 0) {
      errors.push(`Team member at index ${index}: missing id`);
      return false;
    }
    if (!member.name || typeof member.name !== "string") {
      errors.push(`Team member ${member.id}: invalid name`);
      return false;
    }
    if (!member.role || typeof member.role !== "string") {
      errors.push(`Team member ${member.id}: invalid role`);
      return false;
    }
    if (!member.image || typeof member.image !== "string") {
      errors.push(`Team member ${member.id}: missing image`);
      return false;
    }
    if (!member.phone || typeof member.phone !== "string") {
      errors.push(`Team member ${member.id}: missing phone`);
      return false;
    }
    return true;
  });

  return { valid, errors };
};

export const Team = () => {
  const t = useTranslations("team");
  const [isLoading, setIsLoading] = useState(true);
  const [members, setMembers] = useState<typeof teamData>([]);
  const [loadError, setLoadError] = useState<string | null>(null);

  const loadTeam = useCallback(() => {
    setIsLoading(true);
    setLoadError(null);

    try {
      const { valid, errors } = validateTeamData(teamData);

      if (errors.length > 0) {
        console.warn("[Team] Validation warnings:", errors);
      }

      if (valid.length === 0) {
        setLoadError("No valid team members available");
        setMembers([]);
        return;
      }

      setMembers(valid);
    } catch (err) {
      console.error("[Team] Failed to load team data:", err);
      setLoadError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
      setMembers([]);
    } finally {
      const timer = setTimeout(() => setIsLoading(false), 400);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(loadTeam, 300);
    return () => clearTimeout(timer);
  }, [loadTeam]);

  const handleRetry = useCallback(() => {
    loadTeam();
  }, [loadTeam]);

  return (
    <section
      id="team"
      className="py-24 bg-slate-950 relative overflow-hidden gradient-top-border"
    >
      <GlowOrb color="primary" size="md" className="top-1/4 -right-32 opacity-30" />
      <GlowOrb color="blue" size="sm" className="bottom-1/4 -left-32" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} dark />

        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <TeamLoadingGrid />
            </motion.div>
          ) : loadError ? (
            <motion.div
              key="error"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center justify-center py-16 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center mb-4">
                <AlertTriangle className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {t("errorTitle")}
              </h3>
              <p className="text-slate-400 mb-6 max-w-md">{loadError}</p>
              <button
                onClick={handleRetry}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-blue-500 hover:from-primary-600 hover:to-blue-600 text-white font-medium transition-all duration-300 shadow-glow-sm hover:shadow-glow"
              >
                <RefreshCw className="w-4 h-4" />
                {t("retry")}
              </button>
            </motion.div>
          ) : members.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-16 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {t("emptyTitle")}
              </h3>
              <p className="text-slate-400">{t("emptyDesc")}</p>
            </motion.div>
          ) : (
            <motion.div
              key="members"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
            >
              {members.map((member, index) => (
                <TeamMemberCard
                  key={member.id}
                  member={member}
                  roleLabel={t(`roles.${member.role}`)}
                  callLabel={t("call")}
                  whatsappLabel={t("whatsapp")}
                  imageErrorLabel={t("imageError")}
                  index={index}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
