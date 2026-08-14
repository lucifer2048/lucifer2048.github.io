"use client";

import { motion } from "framer-motion";
import { experience, education, certifications, strengths } from "@/lib/config";

export default function Experience() {
  return (
    <section id="experience" data-hud-section="experience" className="relative px-3.5 sm:px-6 py-16 sm:py-32 bg-[#0A0A0C]">

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
            Career Path
          </span>
          <h2 className="mt-4 text-2xl sm:text-5xl font-bold tracking-tight text-white">
            Work{" "}
            <span className="font-serif italic font-normal text-[#FFD1D6]">
              experience
            </span>{" "}
            & achievements.
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
            A track record of taking complex 0→1 AI initiatives and fullstack applications to production.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-12">
          {/* Left Column: Work Experience (Col Span 8) */}
          <div className="lg:col-span-8 space-y-6">
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group rounded-3xl border border-white/10 bg-[#111114]/90 p-5 sm:p-8 backdrop-blur-md transition-all duration-300 hover:border-red-500/30 hover:shadow-2xl shadow-xl"
              >
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-5 mb-5">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-red-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-red-400 mt-1">
                      {exp.company} • <span className="text-zinc-400 font-normal">{exp.location}</span>
                    </p>
                  </div>
                  <span className="rounded-full border border-red-500/30 bg-red-500/10 px-3.5 py-1 text-xs font-mono font-medium text-red-300">
                    {exp.period}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="space-y-3 text-sm text-zinc-300 leading-relaxed">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="text-red-500 font-bold flex-shrink-0 text-base">✦</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Education, Certifications & Strengths (Col Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-3xl border border-white/10 bg-[#111114]/90 p-6 backdrop-blur-md hover:border-red-500/30 transition-all shadow-xl"
            >
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-3">
                Education & Distinction
              </span>
              {education.map((edu, idx) => (
                <div key={idx} className="space-y-3">
                  <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                  <p className="text-xs text-zinc-300">{edu.institution} • {edu.period}</p>
                  <div className="inline-block rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs text-red-300 font-semibold">
                    ★ {edu.details}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Certifications Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-3xl border border-white/10 bg-[#111114]/90 p-6 backdrop-blur-md hover:border-red-500/30 transition-all shadow-xl"
            >
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-3">
                Certifications
              </span>
              <ul className="space-y-3">
                {certifications.map((cert, idx) => (
                  <li key={idx} className="border-b border-white/5 pb-2.5 last:border-b-0 last:pb-0">
                    <p className="text-xs font-semibold text-white">{cert.name}</p>
                    <p className="text-[11px] font-mono text-zinc-400 mt-0.5">
                      {cert.issuer} • {cert.period}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

