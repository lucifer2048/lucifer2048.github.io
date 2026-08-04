"use client";

import { profile } from "@/lib/config";

const LINKS = [
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "WORK", href: "#work" },
  { label: "STACK", href: "#stack" },
  { label: "CONTACT", href: "#contact" },
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b-2 border-ink bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-3 sm:px-8">
        <a
          href="#hero"
          className="font-mono text-sm font-semibold tracking-widest"
        >
          [{profile.shortName}]
        </a>

        <nav className="hidden items-center gap-5 font-mono text-xs tracking-widest sm:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-stamp"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 font-mono text-[11px] tracking-widest">
          <span className="blink inline-block h-2 w-2 bg-stamp" aria-hidden />
          {profile.status}
        </div>
      </div>
    </header>
  );
}
