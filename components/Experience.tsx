"use client";

import { motion } from "framer-motion";
import { experience, education, certifications, strengths } from "@/lib/config";

export default function Experience() {
  return (
    <section
      id="experience"
      data-hud-section="experience"
      className="border-b-2 border-ink px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Title */}
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4 border-b-2 border-ink pb-4">
          <h2 className="font-display text-5xl sm:text-7xl">EXPERIENCE_RECORD</h2>
          <p className="font-mono text-xs tracking-widest text-ink-soft sm:text-sm">
            JOBS({experience.length}) EDU({education.length}) CERTS({certifications.length})
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          
          {/* Left Column: Work Experience */}
          <div className="space-y-8">
            <h3 className="font-mono text-xs font-semibold tracking-widest text-stamp mb-4">
              {"// PROFESSIONAL_HISTORY"}
            </h3>
            
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="shadow-hard-sm border-2 border-ink bg-paper"
              >
                {/* Header Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-ink bg-ink px-4 py-2.5 font-mono text-xs tracking-wider text-paper sm:text-sm">
                  <span>{exp.role.toUpperCase()} @ {exp.company.toUpperCase()}</span>
                  <span className="text-marker font-semibold">{exp.period}</span>
                </div>
                
                {/* Content */}
                <div className="p-5 sm:p-6 space-y-4">
                  <div className="font-mono text-[10px] text-ink-soft tracking-wider">
                    LOCATION: {exp.location.toUpperCase()}
                  </div>
                  
                  <ul className="space-y-2.5 font-mono text-xs leading-relaxed text-ink sm:text-sm">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex gap-2 items-start">
                        <span className="text-stamp select-none">›</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Education, certifications, and strengths */}
          <div className="space-y-8">
            
            {/* Education Box */}
            <div className="space-y-4">
              <h3 className="font-mono text-xs font-semibold tracking-widest text-stamp">
                {"// EDUCATION_METRICS"}
              </h3>
              
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.45 }}
                  className="shadow-hard-sm border-2 border-ink bg-paper p-5 sm:p-6 space-y-4"
                >
                  <div>
                    <h4 className="font-display text-xl leading-snug sm:text-2xl text-ink">
                      {edu.degree}
                    </h4>
                    <p className="font-mono text-xs text-stamp mt-1">
                      {edu.institution} | {edu.period}
                    </p>
                  </div>
                  
                  <div className="border-t border-ink/20 pt-3">
                    <p className="font-mono text-xs leading-relaxed text-ink-soft">
                      {edu.details}
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <span className="font-mono text-[10px] tracking-widest text-ink-soft block">{"// COURSEWORK:"}</span>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((course, cIdx) => (
                        <span
                          key={cIdx}
                          className="border border-ink bg-paper-dim px-2 py-0.5 font-mono text-[10px] tracking-wide"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certifications and strengths grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              
              {/* Certifications */}
              <div className="space-y-4">
                <h3 className="font-mono text-xs font-semibold tracking-widest text-stamp">
                  {"// CERTIFICATIONS"}
                </h3>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.45, delay: 0.1 }}
                  className="shadow-hard-sm border-2 border-ink bg-paper p-5"
                >
                  <ul className="space-y-3 font-mono text-xs">
                    {certifications.map((cert, idx) => (
                      <li key={idx} className="border-b border-ink/10 pb-2 last:border-b-0 last:pb-0">
                        <div className="font-semibold text-ink">{cert.name}</div>
                        <div className="text-[10px] text-stamp mt-0.5">
                          ISSUED_BY: {cert.issuer.toUpperCase()} · {cert.period.toUpperCase()}
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Strengths */}
              <div className="space-y-4">
                <h3 className="font-mono text-xs font-semibold tracking-widest text-stamp">
                  {"// STRENGTHS"}
                </h3>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.45, delay: 0.2 }}
                  className="shadow-hard-sm border-2 border-ink bg-paper p-5"
                >
                  <ul className="space-y-3 font-mono text-xs">
                    {strengths.map((strength, idx) => (
                      <li key={idx} className="flex gap-2 items-start last:border-b-0">
                        <span className="text-stamp">▪</span>
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
