"use client";

import { motion } from "framer-motion";
import { stack } from "@/lib/config";

export default function Stack() {
  const categories = Object.entries(stack);

  return (
    <section id="stack" data-hud-section="stack" className="relative px-3.5 sm:px-6 py-16 sm:py-32 bg-[#0A0A0C]">

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
            Toolbox
          </span>
          <h2 className="mt-4 text-2xl sm:text-5xl font-bold tracking-tight text-white">
            Technical{" "}
            <span className="font-serif italic font-normal text-[#FFD1D6]">
              capabilities
            </span>{" "}
            & stack.
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
            Languages, frameworks, AI libraries, and cloud infrastructure battle-tested in production.
          </p>
        </motion.div>

        {/* Stack Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {categories.map(([cat, tools], ci) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.08 }}
              className="rounded-3xl border border-white/10 bg-[#111114]/90 p-6 sm:p-7 backdrop-blur-md hover:border-red-500/30 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-red-400 uppercase tracking-wider block mb-4">
                  ./{cat.replace(/-/g, "_")}
                </span>
                <div className="flex flex-wrap gap-2">
                  {tools.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-zinc-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

