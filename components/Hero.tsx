"use client";

import { motion } from "framer-motion";
import ScrambleText from "./ScrambleText";
import { profile } from "@/lib/config";

export default function Hero() {
  const [lineA, lineB] = profile.role.split(" / ");

  return (
    <section
      id="hero"
      data-hud-section="hero"
      className="grid-paper relative flex min-h-screen flex-col justify-center overflow-hidden px-5 pt-24 pb-16 sm:px-8"
    >
      {/* corner annotations — blueprint-style */}
      <span className="absolute left-5 top-20 hidden font-mono text-[11px] text-ink-soft sm:block sm:left-8">
        {`// production ai systems — ${profile.location}`}
      </span>
      <span className="absolute right-5 top-20 hidden font-mono text-[11px] text-ink-soft sm:block sm:right-8">
        {"<ai-fullstack/> v3.0.0"}
      </span>

      <div className="mx-auto w-full max-w-[1400px]">
        <p className="mb-4 font-mono text-xs tracking-widest text-stamp sm:text-sm">
          SYSTEM.BOOT() — {profile.name}
        </p>

        <h1 className="font-display leading-[0.92] tracking-tight">
          <span className="block text-[18vw] sm:text-[12vw] lg:text-[9rem]">
            <ScrambleText text={lineA} />
          </span>
          <span className="-mt-2 block -rotate-1 text-[15vw] text-stamp sm:text-[10vw] lg:text-[7.5rem]">
            <ScrambleText text={lineB} delay={250} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-8 max-w-xl font-mono text-sm leading-relaxed text-ink-soft sm:text-base"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#work"
            className="shadow-hard-stamp -rotate-1 border-2 border-ink bg-ink px-5 py-3 font-mono text-xs font-semibold tracking-widest text-paper transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none sm:text-sm"
          >
            VIEW_PROJECTS ↓
          </a>
          <a
            href={profile.resumeUrl}
            className="shadow-hard-sm rotate-1 border-2 border-ink bg-paper px-5 py-3 font-mono text-xs font-semibold tracking-widest text-ink transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none sm:text-sm"
          >
            RESUME.DOCX ↗
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-widest text-ink-soft">
        scroll ↓
      </div>
    </section>
  );
}
