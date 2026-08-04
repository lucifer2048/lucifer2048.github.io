"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CountUp from "./CountUp";
import { profile } from "@/lib/config";

export default function About() {
  return (
    <section
      id="about"
      data-hud-section="about"
      className="border-b-2 border-ink px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5 }}
          className="border-2 border-ink"
        >
          {/* header bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-ink bg-ink px-4 py-2.5 font-mono text-xs tracking-widest text-paper sm:text-sm">
            <span>LOG_ENTRY #001 — ABOUT.ME</span>
            <span className="text-marker">VERIFIED ✓</span>
          </div>

          <div className="grid gap-0 sm:grid-cols-[1.6fr_1fr]">
            {/* bio */}
            <div className="space-y-5 border-b-2 border-ink p-6 sm:border-b-0 sm:border-r-2 sm:p-10">
              <h2 className="font-display text-4xl leading-none sm:text-5xl">
                WHO&apos;S RUNNING THIS?
              </h2>
              {profile.bio.map((p, i) => (
                <p
                  key={i}
                  className="max-w-prose text-base leading-relaxed text-ink-soft sm:text-lg"
                >
                  {p}
                </p>
              ))}
            </div>

            {/* stat block */}
            <div className="grid grid-cols-2 divide-x-2 divide-y-2 divide-ink sm:grid-cols-1 sm:divide-x-0">
              {profile.stats.map((s) => {
                return <StatItem key={s.label} stat={s} />;
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatItem({ stat }: { stat: typeof profile.stats[0] & { baseDate?: string } }) {
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
    <div className="p-5 sm:p-6">
      <div className="font-display text-3xl text-stamp sm:text-4xl">
        <CountUp value={val} suffix={stat.suffix} />
      </div>
      <div className="mt-1 font-mono text-[10px] tracking-widest text-ink-soft sm:text-xs">
        {stat.label}
      </div>
    </div>
  );
}
