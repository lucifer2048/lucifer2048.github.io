"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { profile, socials } from "@/lib/config";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const safeName = form.name.trim().replace(/[\r\n]+/g, " ").slice(0, 80);
    const safeEmail = form.email.trim().replace(/[\r\n]+/g, " ").slice(0, 254);
    const safeMessage = form.message.trim().slice(0, 2000);
    const subject = encodeURIComponent(`Portfolio contact from ${safeName}`);
    const body = encodeURIComponent(
      `${safeMessage}\n\n— ${safeName} (${safeEmail})`,
    );

    setSent(true);
    window.location.assign(
      `mailto:${profile.email}?subject=${subject}&body=${body}`,
    );
  };

  return (
    <section id="contact" data-hud-section="contact" className="relative px-3.5 sm:px-6 py-16 sm:py-32 bg-[#0A0A0C]">

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
            Get In Touch
          </span>
          <h2 className="mt-4 text-2xl sm:text-5xl font-bold tracking-tight text-white">
            Let&apos;s build something{" "}
            <span className="font-serif italic font-normal text-[#FFD1D6]">
              extraordinary
            </span>{" "}
            together.
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
            Open for fullstack AI roles, custom agent development, or technical consultation.
          </p>
        </motion.div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Left: Interactive Form (Col Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 rounded-3xl border border-white/10 bg-[#111114]/90 p-5 sm:p-8 backdrop-blur-md hover:border-red-500/30 transition-all shadow-xl"
          >
            {sent ? (
              <div className="py-12 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-500/20 text-red-400 mb-4">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-white">Email Client Launched!</h3>
                <p className="text-zinc-400 text-sm mt-2">
                  Thank you for reaching out. I&apos;ll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-2">
                    YOUR NAME
                  </label>
                  <input
                    required
                    autoComplete="name"
                    maxLength={80}
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-base sm:text-sm text-white placeholder-zinc-500 focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-2">
                    YOUR EMAIL
                  </label>
                  <input
                    required
                    type="email"
                    autoComplete="email"
                    maxLength={254}
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-base sm:text-sm text-white placeholder-zinc-500 focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="jane@company.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    required
                    rows={4}
                    minLength={10}
                    maxLength={2000}
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-base sm:text-sm text-white placeholder-zinc-500 focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-white px-7 py-4 text-sm sm:text-base font-semibold text-black transition-all hover:bg-zinc-200 active:scale-[0.98] flex items-center justify-center gap-2 min-h-[48px] shadow-lg shadow-white/5"
                >
                  <span>Send Message via Email</span>
                  <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            )}
          </motion.div>

          {/* Right: Direct Email Copy & Social Badges (Col Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-between gap-6"
          >
            {/* Quick Email Copy Card */}
            <div className="rounded-3xl border border-white/10 bg-[#111114]/90 p-5 sm:p-6 backdrop-blur-md hover:border-red-500/30 transition-all shadow-xl">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-3">
                Direct Email
              </span>
              <div className="flex items-center justify-between gap-2 rounded-2xl border border-white/10 bg-white/5 p-3.5">
                <span className="text-xs sm:text-sm font-mono text-white truncate">
                  {profile.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="rounded-xl border border-red-500/30 bg-red-500/10 px-3.5 py-2 text-xs font-mono font-semibold text-red-300 hover:bg-red-500/20 active:scale-95 transition-all flex-shrink-0 min-h-[38px]"
                >
                  {copied ? "Copied! ✓" : "Copy"}
                </button>
              </div>
            </div>

            {/* Social Links Cards */}
            <div className="rounded-3xl border border-white/10 bg-[#111114]/90 p-5 sm:p-6 backdrop-blur-md hover:border-red-500/30 transition-all flex-1 shadow-xl">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-4">
                Connect Online
              </span>
              <div className="space-y-2.5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-xs font-semibold text-white hover:bg-white/10 hover:border-red-500/30 active:scale-[0.98] transition-all min-h-[44px]"
                  >
                    <span>{s.label}</span>
                    <span className="text-red-400">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

