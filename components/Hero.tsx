"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { profile } from "@/lib/config";

export default function Hero() {
  return (
    <section id="hero" data-hud-section="hero" className="relative px-2 sm:px-4 lg:px-6 pt-3 sm:pt-4 pb-6 sm:pb-10 bg-[#0A0A0C]">

      {/* Outer Rounded Hero Canvas Container */}
      <div className="relative mx-auto max-w-[1720px] min-h-[82vh] sm:min-h-[88vh] md:min-h-[92vh] rounded-[1.75rem] sm:rounded-[3rem] overflow-hidden border border-white/10 flex flex-col justify-end pt-20 pb-7 px-5 sm:p-10 lg:p-12 shadow-2xl">
        {/* Background Artwork Image */}
        <Image
          src="/hero_background.jpg"
          alt="Prathyush S Panicker Hero Artwork"
          fill
          priority
          className="object-cover object-[22%_center] lg:object-center brightness-[0.78] contrast-[1.05]"
        />

        {/* Gradient Overlay for Crisp Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/60 to-black/30 pointer-events-none" />

        {/* Content Overlay */}
        <div className="relative z-10 w-full flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 sm:gap-8 lg:gap-12 mt-auto">
          {/* Left: Giant Display Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-bold text-white tracking-tight leading-[0.95] drop-shadow-2xl break-words">
              Prathyush<span className="text-red-500 font-serif italic ml-1">*</span>
            </h1>

          </motion.div>

          {/* Right: Tagline & CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col items-start max-w-full sm:max-w-md space-y-4 sm:space-y-5"
          >
            <p className="text-zinc-200 text-xs sm:text-sm md:text-base font-normal leading-relaxed drop-shadow-md">
              {profile.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-black transition-all hover:bg-zinc-200 hover:scale-[1.02] shadow-xl"
              >
                <span>Get in touch</span>
                <div className="flex h-6 sm:h-7 w-6 sm:w-7 items-center justify-center rounded-full bg-black text-white transition-transform group-hover:translate-x-0.5">
                  <svg
                    className="w-3 sm:w-3.5 h-3 sm:h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

