"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, ProjectItem, ProjectStatus } from "@/lib/config";

const STATUS_BADGE: Record<
  ProjectStatus,
  { label: string; style: string; dot: string }
> = {
  RUNNING: {
    label: "RUNNING",
    style: "border-amber-500/30 bg-amber-500/10 text-amber-300",
    dot: "bg-amber-400 animate-pulse",
  },
  DEPLOYED: {
    label: "DEPLOYED",
    style: "border-red-500/30 bg-red-500/10 text-red-400",
    dot: "bg-red-500",
  },
  EXPERIMENT: {
    label: "EXPERIMENT",
    style: "border-purple-500/30 bg-purple-500/10 text-purple-300",
    dot: "bg-purple-400",
  },
  ARCHIVED: {
    label: "ARCHIVED",
    style: "border-zinc-500/30 bg-zinc-500/10 text-zinc-400",
    dot: "bg-zinc-500",
  },
};

export default function Projects() {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const openModal = (p: ProjectItem) => {
    setActiveProject(p);
  };

  return (
    <section id="work" data-hud-section="work" className="relative px-3.5 sm:px-6 py-16 sm:py-32 bg-[#0A0A0C]">


      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-14 text-center"
        >
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Selected Work
          </span>
          <h2 className="mt-4 text-2xl sm:text-5xl font-bold tracking-tight text-white">
            Featured{" "}
            <span className="font-serif italic font-normal text-[#FFD1D6]">
              projects
            </span>{" "}
            & AI systems.
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
            From company-wide agent marketplaces to WhatsApp outreach automations and mobile apps. Click any card for architecture deep-dives.
          </p>
        </motion.div>

        {/* Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {projects.map((p, i) => {
            const st = STATUS_BADGE[p.status];
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                onClick={() => openModal(p)}
                className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-[#111114]/90 p-7 backdrop-blur-md transition-all duration-300 hover:border-red-500/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-950/20 cursor-pointer overflow-hidden"
              >
                {/* Background subtle glow */}
                <div className="absolute top-0 right-0 -mt-8 -mr-8 h-32 w-32 rounded-full bg-red-500/5 blur-2xl group-hover:bg-red-500/15 transition-colors pointer-events-none" />

                <div>
                  {/* Top Card Header */}
                  <div className="flex items-center justify-between font-mono text-xs mb-4">
                    <span className="text-zinc-500">{p.pid}</span>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-medium ${st.style}`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${st.dot}`}
                        aria-hidden
                      />
                      {st.label}
                    </span>
                  </div>

                  {/* Impact Highlight Badge (if available) */}
                  {p.impactBadge && (
                    <div className="mb-3 inline-flex items-center gap-1.5 rounded-lg border border-red-500/25 bg-red-500/10 px-2.5 py-1 text-xs font-mono font-medium text-red-300">
                      <span className="text-red-400">📈</span>
                      <span>{p.impactBadge}</span>
                    </div>
                  )}

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-red-400 transition-colors break-words">
                    {p.title.replace(/_/g, " ")}
                  </h3>
                  <p className="mt-2.5 text-sm text-zinc-400 leading-relaxed break-words">
                    {p.description}
                  </p>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[11px] text-zinc-300 break-words"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Links & Architecture Trigger */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(p);
                      }}
                      className="inline-flex items-center gap-1 text-red-400 hover:text-red-300 transition-colors font-mono text-[11px] min-h-[36px]"
                    >
                      <span>⚡ ARCHITECTURE</span>
                      <span>➔</span>
                    </button>

                    <div className="flex items-center gap-3">
                      {p.liveUrl && (
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-white hover:text-red-400 transition-colors"
                        >
                          <span>Live</span>
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                      {!p.liveUrl && !p.repoUrl && (
                        <span className="text-zinc-500 font-mono text-[10px]">
                          INTERNAL PRODUCTION
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* System Architecture & Deep Dive Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl max-h-[85vh] sm:max-h-[90vh] overflow-y-auto rounded-3xl border border-white/20 bg-[#121216] p-5 sm:p-8 text-white shadow-2xl no-scrollbar my-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
              >
                ✕
              </button>

              <div className="flex items-center gap-3 text-xs font-mono text-red-400 mb-2">
                <span>{activeProject.pid}</span>
                <span>•</span>
                <span>SYSTEM ARCHITECTURE DEEP DIVE</span>
              </div>

              <h3 className="text-xl sm:text-3xl font-bold tracking-tight text-white mb-3 break-words pr-8">
                {activeProject.title.replace(/_/g, " ")}
              </h3>

              <p className="text-zinc-300 text-sm leading-relaxed mb-6 break-words">
                {activeProject.description}
              </p>

              {/* Architecture Flow Pipeline */}
              {activeProject.architecture && activeProject.architecture.length > 0 && (
                <div className="mb-6 rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-red-400 mb-3 flex items-center gap-2">
                    <span>⚡ ARCHITECTURE & DATA PIPELINE</span>
                  </h4>
                  <div className="space-y-2 font-mono text-xs text-zinc-200">
                    {activeProject.architecture.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 bg-black/40 p-2.5 rounded-xl border border-white/5 break-words">
                        <span className="text-red-400 font-bold flex-shrink-0">{idx + 1}.</span>
                        <span className="break-words">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}


              {/* Key Highlights */}
              {activeProject.highlights && activeProject.highlights.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                    ENGINEERING HIGHLIGHTS & IMPACT
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                    {activeProject.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold">✓</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack Pills */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {activeProject.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/10 px-3 py-1 font-mono text-xs text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setActiveProject(null)}
                  className="rounded-full bg-white px-5 py-2 text-xs font-semibold text-black hover:bg-zinc-200 transition-colors"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
