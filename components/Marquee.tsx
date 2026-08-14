"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { stack } from "@/lib/config";

const FOCUS_AREAS = [
  {
    num: "01",
    title: "FULLSTACK WEB & MOBILE APPS",
    description:
      "0-to-1 production web & mobile platforms engineered with Next.js, React Native, and Python services.",
    highlights: ["Next.js App Router", "React Native Mobile", "Tailwind CSS & Framer Motion"],
  },
  {
    num: "02",
    title: "CUSTOM AI AGENTS & MCP TOOLING",
    description:
      "Autonomous agent workflows, Model Context Protocol (MCP) servers, and Playwright browser testing agents.",
    highlights: ["LangChain & LangGraph", "MCP Tool Protocol", "Playwright Agents"],
  },
  {
    num: "03",
    title: "DEVOPS & CLOUD INFRASTRUCTURE",
    description:
      "Containerized microservice pipelines, Docker Compose, Nginx reverse proxying, and AWS deployment.",
    highlights: ["Docker & Docker Compose", "AWS EC2 / ECR", "Nginx & Reverse Proxies"],
  },
  {
    num: "04",
    title: "SYSTEM PERFORMANCE & TESTING",
    description:
      "High-throughput REST APIs, PostgreSQL schema optimization, PgBouncer connection pooling, and Locust load testing.",
    highlights: ["FastAPI & SQLAlchemy", "PgBouncer Connection Pooling", "Locust Load Testing"],
  },
];

export default function Marquee() {
  const [showExtended, setShowExtended] = useState(false);
  const allTech = Object.values(stack).flat();

  return (
    <section className="relative px-3.5 sm:px-6 py-12 sm:py-16 bg-[#0A0A0C] border-y border-white/10">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-red-400">
              Core Specialization
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Engineering Focus
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
            Uncrowded, production-ready capabilities across AI agents, fullstack platforms, and cloud infrastructure.
          </p>
        </div>

        {/* 4 Spacious Engineering Focus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {FOCUS_AREAS.map((card, idx) => (
            <motion.div
              key={card.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group rounded-3xl border border-white/10 bg-[#111114]/90 p-6 sm:p-8 backdrop-blur-md hover:border-red-500/30 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-red-400 mb-3">
                  <span>{card.num}</span>
                  <span className="text-zinc-500">// CAPABILITY</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-red-400 transition-colors">
                  {card.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                {card.highlights.map((h) => (
                  <span
                    key={h}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-zinc-300"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expandable Extended Tech List Toggle */}
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowExtended(!showExtended)}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-xs font-mono font-medium text-zinc-300 hover:text-white hover:border-red-500/30 transition-all"
          >
            <span>{showExtended ? "COLLAPSE TECH LIST ▲" : "VIEW EXTENDED TECH LIST ▼"}</span>
          </button>
        </div>

        {/* Extended Tech Pills Drawer */}
        <AnimatePresence>
          {showExtended && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-[#111114]/90 p-6 backdrop-blur-md"
            >
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-4">
                Full Tech Inventory ({allTech.length} Technologies)
              </span>
              <div className="flex flex-wrap gap-2">
                {allTech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

