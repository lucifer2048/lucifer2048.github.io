"use client";

import { motion } from "framer-motion";
import { stack } from "@/lib/config";

export default function Stack() {
  const categories = Object.entries(stack);

  return (
    <section
      id="stack"
      data-hud-section="stack"
      className="border-b-2 border-ink px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-[1400px]">
        <h2 className="mb-12 font-display text-5xl sm:text-7xl">TOOLBOX</h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5 }}
          className="shadow-hard border-2 border-ink bg-console p-6 font-mono text-sm leading-relaxed text-paper sm:p-10 sm:text-base"
        >
          <p className="mb-3 text-paper/50">
            guest@portfolio:~$ ls -la ./stack
          </p>
          {categories.map(([cat, tools], ci) => (
            <div key={cat} className="mb-1">
              <p className="text-marker">
                ./{cat}
              </p>
              {tools.map((tool, ti) => {
                const isLast = ti === tools.length - 1;
                return (
                  <p key={tool} className="pl-2">
                    <span className="text-paper/40">
                      {isLast ? "└─ " : "├─ "}
                    </span>
                    {tool}
                  </p>
                );
              })}
              {ci < categories.length - 1 && (
                <p className="text-paper/40">│</p>
              )}
            </div>
          ))}
          <p className="mt-3 text-paper/50">
            guest@portfolio:~$ <span className="blink">▮</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
