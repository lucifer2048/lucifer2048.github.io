"use client";

import { useEffect, useRef, useState } from "react";

type LogLine = { time: string; text: string };

const stamp = () =>
  new Date().toLocaleTimeString("en-GB", { hour12: false });

export default function DebugHUD() {
  const [mounted, setMounted] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [scrollPct, setScrollPct] = useState(0);
  const [section, setSection] = useState("hero");
  const [logs, setLogs] = useState<LogLine[]>([]);
  const [collapsed, setCollapsed] = useState(false);
  const lastSection = useRef("hero");

  const pushLog = (text: string) => {
    setLogs((prev) => [...prev.slice(-4), { time: stamp(), text }]);
  };

  useEffect(() => {
    setMounted(true);
    setLogs([
      { time: stamp(), text: "system initialized" },
      { time: stamp(), text: "monitoring viewport…" },
    ]);
    if (window.innerWidth < 768) setCollapsed(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const move = (e: MouseEvent) =>
      setCoords({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    const onScroll = () => {
      const h = document.documentElement;
      const pct =
        h.scrollHeight - h.clientHeight > 0
          ? (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100
          : 0;
      setScrollPct(Math.round(pct));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-hud-section]")
    );
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const name = (visible.target as HTMLElement).dataset.hudSection!;
          if (name !== lastSection.current) {
            lastSection.current = name;
            setSection(name);
            pushLog(`entered #${name}`);
          }
        }
      },
      { threshold: [0.4, 0.6] }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    const onHudLog = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      if (detail) pushLog(detail);
    };
    window.addEventListener("hud:log", onHudLog as EventListener);
    return () =>
      window.removeEventListener("hud:log", onHudLog as EventListener);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="hidden md:block pointer-events-none fixed bottom-4 left-4 z-40 font-mono text-[11px]">
      <div className="pointer-events-auto w-[200px] sm:w-[250px] rounded-2xl border border-white/10 bg-[#0C0C0E]/90 backdrop-blur-md text-zinc-300 shadow-xl overflow-hidden">
        <button
          onClick={() => setCollapsed((c) => !c)}
          className="flex w-full items-center justify-between border-b border-white/10 px-3 py-2 text-left hover:bg-white/5 transition-colors"
          aria-expanded={!collapsed}
        >
          <span className="flex items-center gap-2 font-semibold text-white">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
            <span>SYSTEM_HUD</span>
          </span>
          <span className="text-zinc-500">{collapsed ? "+" : "—"}</span>
        </button>

        {!collapsed && (
          <div className="space-y-2 p-3 text-[10px]">
            <div className="grid grid-cols-2 gap-1 text-zinc-400">
              <span>CURSOR</span>
              <span className="text-right font-semibold text-white">
                {coords.x},{coords.y}
              </span>
              <span>SCROLL</span>
              <span className="text-right font-semibold text-white">{scrollPct}%</span>
              <span>SECTION</span>
              <span className="text-right font-semibold text-red-400">#{section}</span>
            </div>
            <div className="border-t border-white/10 pt-2 space-y-1">
              {logs.map((l, i) => (
                <div key={i} className="flex gap-1.5 truncate text-zinc-400">
                  <span className="text-zinc-600" suppressHydrationWarning>{l.time}</span>
                  <span className="truncate text-zinc-300">{l.text}</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export function logToHud(text: string) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("hud:log", { detail: text }));
  }
}
