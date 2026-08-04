"use client";

import { motion } from "framer-motion";
import { projects, ProjectStatus } from "@/lib/config";
import { logToHud } from "./DebugHUD";

const STATUS_STYLE: Record<
  ProjectStatus,
  { dot: string; text: string; blink?: boolean }
> = {
  RUNNING: { dot: "bg-stamp", text: "text-stamp", blink: true },
  DEPLOYED: { dot: "bg-ink", text: "text-ink" },
  EXPERIMENT: { dot: "bg-marker", text: "text-ink" },
  ARCHIVED: { dot: "bg-ink-soft", text: "text-ink-soft" },
};

const STATUS_ORDER: ProjectStatus[] = [
  "RUNNING",
  "DEPLOYED",
  "EXPERIMENT",
  "ARCHIVED",
];

export default function Projects() {
  const counts = STATUS_ORDER.map((status) => ({
    status,
    count: projects.filter((p) => p.status === status).length,
  })).filter((c) => c.count > 0);

  return (
    <section
      id="work"
      data-hud-section="work"
      className="border-b-2 border-ink px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4 border-b-2 border-ink pb-4">
          <h2 className="font-display text-5xl sm:text-7xl">PROCESS_LIST</h2>
          <p className="font-mono text-xs tracking-widest text-ink-soft sm:text-sm">
            {counts.map((c) => `${c.status}(${c.count})`).join(" ")}
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const st = STATUS_STYLE[p.status];
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 24, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: p.rotation }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                whileHover={{ rotate: 0, y: -4 }}
                onHoverStart={() => logToHud(`hover ${p.title}`)}
                className="group shadow-hard-sm flex h-full flex-col border-2 border-ink bg-paper transition-shadow hover:shadow-hard"
              >
                {/* card header */}
                <div className="flex items-center justify-between border-b-2 border-ink px-4 py-2 font-mono text-[11px] tracking-widest">
                  <span className="text-ink-soft">{p.pid}</span>
                  <span className={`flex items-center gap-1.5 ${st.text}`}>
                    <span
                      className={`inline-block h-1.5 w-1.5 ${st.dot} ${
                        st.blink ? "blink" : ""
                      }`}
                      aria-hidden
                    />
                    {p.status}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="glitch-on-hover font-display text-2xl leading-tight sm:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {p.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="border border-ink px-2 py-0.5 font-mono text-[10px] tracking-wide"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex gap-4 pt-5 font-mono text-xs font-semibold tracking-widest">
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        className="underline-offset-4 hover:text-stamp hover:underline"
                      >
                        VIEW_LIVE ↗
                      </a>
                    )}
                    {p.repoUrl && (
                      <a
                        href={p.repoUrl}
                        className="underline-offset-4 hover:text-stamp hover:underline"
                      >
                        OPEN_REPO →
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
