import { profile } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-3 font-mono text-[11px] tracking-widest text-ink-soft">
        <span>
          © {new Date().getFullYear()} {profile.name} — PROCESS_TERMINATED(0)
        </span>
        <span className="hidden sm:inline">
          built from scratch. no templates harmed.
        </span>
        <a href="#hero" className="hover:text-stamp">
          BACK_TO_TOP ↑
        </a>
      </div>
    </footer>
  );
}
