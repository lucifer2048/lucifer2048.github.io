"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { profile, socials } from "@/lib/config";
import { logToHud } from "./DebugHUD";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // This portfolio is hosted as a static site. Keeping contact client-only
    // means there is no public API, database, or server secret to attack.
    const safeName = form.name.trim().replace(/[\r\n]+/g, " ").slice(0, 80);
    const safeEmail = form.email.trim().replace(/[\r\n]+/g, " ").slice(0, 254);
    const safeMessage = form.message.trim().slice(0, 2000);
    const subject = encodeURIComponent(`Portfolio contact from ${safeName}`);
    const body = encodeURIComponent(
      `${safeMessage}\n\n— ${safeName} (${safeEmail})`,
    );

    logToHud("opening local email client");
    setSent(true);
    window.location.assign(
      `mailto:${profile.email}?subject=${subject}&body=${body}`,
    );
  };

  return (
    <section
      id="contact"
      data-hud-section="contact"
      className="border-b-2 border-ink px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-[1400px]">
        <h2 className="mb-12 font-display text-5xl sm:text-7xl">
          GET_IN_TOUCH
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5 }}
          className="grid gap-0 border-2 border-ink sm:grid-cols-[1.4fr_1fr]"
        >
          <div className="border-b-2 border-ink p-6 sm:border-b-0 sm:border-r-2 sm:p-10">
            <p className="mb-6 font-mono text-sm text-ink-soft">
              guest@portfolio:~$ contact --send
            </p>

            {sent ? (
              <p className="font-mono text-lg text-stamp">
                ✓ MAIL_CLIENT_OPENED — talk soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="mb-1 block font-mono text-xs text-ink-soft">
                    {"// name"}
                  </label>
                  <input
                    required
                    autoComplete="name"
                    maxLength={80}
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    className="w-full border-2 border-ink bg-paper px-3 py-2.5 font-mono text-sm outline-none"
                    placeholder="jane_doe"
                  />
                </div>
                <div>
                  <label className="mb-1 block font-mono text-xs text-ink-soft">
                    {"// email"}
                  </label>
                  <input
                    required
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    maxLength={254}
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    className="w-full border-2 border-ink bg-paper px-3 py-2.5 font-mono text-sm outline-none"
                    placeholder="jane@company.com"
                  />
                </div>
                <div>
                  <label className="mb-1 block font-mono text-xs text-ink-soft">
                    {"// message"}
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
                    className="w-full border-2 border-ink bg-paper px-3 py-2.5 font-mono text-sm outline-none"
                    placeholder="let's build something..."
                  />
                </div>
                <button
                  type="submit"
                  className="shadow-hard-stamp border-2 border-ink bg-ink px-6 py-3 font-mono text-xs font-semibold tracking-widest text-paper transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none sm:text-sm"
                >
                  OPEN_EMAIL ↵
                </button>
              </form>
            )}
          </div>

          <div className="flex flex-col justify-center gap-3 p-6 sm:p-10">
            <p className="mb-2 font-mono text-xs tracking-widest text-ink-soft">
              FIND_ME_ELSEWHERE
            </p>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="shadow-hard-sm flex items-center justify-between border-2 border-ink px-4 py-3 font-mono text-xs font-semibold tracking-widest transition-transform hover:-translate-y-0.5 hover:bg-ink hover:text-paper"
              >
                {s.label}
                <span aria-hidden>↗</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
