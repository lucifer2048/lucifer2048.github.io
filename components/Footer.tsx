import { profile } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0A0A0C] pt-10 pb-24 sm:pb-10 px-4">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 font-mono text-center sm:text-left">
        <div>
          © {new Date().getFullYear()} {profile.name} • Designed & Built with precision.
        </div>

        <div className="flex items-center gap-6">
          <span>{profile.location}</span>
          <a
            href="#hero"
            className="text-zinc-300 hover:text-white transition-colors flex items-center gap-1 min-h-[44px] px-2"
          >
            <span>Back to top</span>
            <span className="text-red-400 font-bold">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}


