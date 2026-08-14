"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CountUp from "./CountUp";
import { profile, strengths, education } from "@/lib/config";

export default function About() {
  return (
    <section id="about" data-hud-section="about" className="relative px-3.5 sm:px-6 py-16 sm:py-32 bg-[#0A0A0C]">

      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-12 text-center"
        >
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-zinc-400">
            About Me
          </span>
          <h2 className="mt-4 text-2xl sm:text-5xl font-bold tracking-tight text-white">
            Engineering{" "}
            <span className="font-serif italic font-normal text-[#FFD1D6]">
              intelligence
            </span>{" "}
            with end-to-end ownership.
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {/* Card 1: Bio (Col Span 8) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-8 rounded-3xl border border-white/10 bg-[#111114]/90 p-6 sm:p-10 backdrop-blur-md relative overflow-hidden flex flex-col justify-between group hover:border-red-500/30 transition-all duration-300 shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-red-400 mb-6">
                <span>// LOG ENTRY</span>
                <span>•</span>
                <span>AI FULLSTACK ENGINEER</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
                Where product vision meets scalable system design.
              </h3>
              <div className="space-y-4 text-zinc-400 text-base sm:text-lg leading-relaxed font-normal">
                {profile.bio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Strengths Pills */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2">
              {strengths.map((str, idx) => (
                <span
                  key={idx}
                  className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-zinc-300 font-medium"
                >
                  <span className="text-red-400 mr-1.5">✓</span> {str}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Location & Education (Col Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            {/* Location Card */}
            <div className="rounded-3xl border border-white/10 bg-[#111114]/90 p-6 backdrop-blur-md relative overflow-hidden group hover:border-red-500/30 transition-all duration-300 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Location
                </span>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
                </span>
              </div>
              <p className="text-xl font-bold text-white">{profile.location}</p>
              <p className="text-xs text-zinc-400 mt-1">
                India&apos;s Tech Capital • IST (UTC+5:30)
              </p>
            </div>

            {/* Education Card */}
            <div className="rounded-3xl border border-white/10 bg-[#111114]/90 p-6 backdrop-blur-md flex-1 flex flex-col justify-between group hover:border-red-500/30 transition-all duration-300 shadow-xl">
              <div>
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-3">
                  Education & Distinction
                </span>
                <h4 className="text-lg font-bold text-white">
                  {education[0].degree}
                </h4>
                <p className="text-sm text-zinc-300 mt-1">
                  {education[0].institution}
                </p>
                <div className="mt-3 inline-block rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs text-red-300 font-semibold">
                  ★ {education[0].details}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                {education[0].coursework.map((course) => (
                  <span
                    key={course}
                    className="text-[11px] font-mono text-zinc-400 bg-white/5 px-2 py-0.5 rounded"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Live Stats Row */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {profile.stats.map((s, idx) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * idx }}
              className="rounded-2xl border border-white/10 bg-[#111114]/80 p-6 text-center hover:border-red-500/30 transition-all shadow-xl"
            >
              <StatItem stat={s} />
            </motion.div>
          ))}
        </div>

        {/* Enterprise Trust & Distinction Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 rounded-2xl border border-red-500/20 bg-red-500/5 p-4 sm:p-5 backdrop-blur-md flex flex-wrap items-center justify-around gap-4 text-center sm:text-left shadow-xl"
        >
          <div className="flex items-center gap-3">
            <span className="text-red-400 text-lg">✦</span>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">Tata Elxsi Limited</p>
              <p className="text-[11px] text-zinc-400 font-mono">Enterprise AI Fullstack Engineer</p>
            </div>
          </div>

          <div className="hidden sm:block h-6 w-px bg-white/10" />

          <div className="flex items-center gap-3">
            <span className="text-red-400 text-lg">★</span>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">Super 60 Distinction</p>
              <p className="text-[11px] text-zinc-400 font-mono">Top 1% Performers Cohort</p>
            </div>
          </div>

          <div className="hidden sm:block h-6 w-px bg-white/10" />

          <div className="flex items-center gap-3">
            <span className="text-red-400 text-lg">⚡</span>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">Proven Scale & Impact</p>
              <p className="text-[11px] text-zinc-400 font-mono">160+ Pilot Users & 1,000+ Reached</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatItem({
  stat,
}: {
  stat: (typeof profile.stats)[0] & { baseDate?: string };
}) {
  const [val, setVal] = useState(stat.value);

  useEffect(() => {
    if (stat.baseDate) {
      const start = new Date(stat.baseDate);
      const now = new Date();
      const diffMs = now.getTime() - start.getTime();
      const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      setVal(diffDays > 0 ? diffDays : 0);
    }
  }, [stat.baseDate]);

  return (
    <div>
      <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
        <CountUp value={val} suffix={stat.suffix} />
      </div>
      <div className="mt-1.5 text-xs font-mono tracking-wider text-zinc-400">
        {stat.label}
      </div>
    </div>
  );
}

