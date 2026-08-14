"use client";

import { profile } from "@/lib/config";

const LINKS = [
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "WORK", href: "#work" },
  { label: "CONTACT", href: "#contact" },
];

export default function Nav() {
  return (
    <header className="fixed top-2 sm:top-0 inset-x-0 z-50 flex justify-center pointer-events-none px-2 sm:px-0">
      <div className="pointer-events-auto max-w-[95vw] sm:max-w-max rounded-full sm:rounded-none sm:rounded-b-2xl border sm:border-t-0 border-white/10 bg-[#161618]/95 backdrop-blur-md px-4 sm:px-8 py-2 sm:py-3 flex items-center justify-center shadow-2xl shadow-black/80">
        <nav className="flex items-center gap-2.5 sm:gap-6 md:gap-8 overflow-x-auto no-scrollbar max-w-full">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[10px] sm:text-[11px] md:text-xs font-semibold uppercase tracking-wider sm:tracking-widest text-zinc-300 hover:text-white transition-colors whitespace-nowrap"
            >
              {l.label}
            </a>
          ))}
          <span className="h-3 w-px bg-white/15 flex-shrink-0" aria-hidden />
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="text-[10px] sm:text-[11px] md:text-xs font-semibold uppercase tracking-wider sm:tracking-widest text-red-400 hover:text-red-300 transition-colors flex items-center gap-1 whitespace-nowrap flex-shrink-0"
          >
            <span>RESUME</span>
            <span className="text-[9px] sm:text-[10px]">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}


