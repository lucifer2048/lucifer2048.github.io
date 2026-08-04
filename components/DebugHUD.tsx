"use client";

import { useEffect, useRef, useState } from "react";

type LogLine = { time: string; text: string };

const stamp = () =>
  new Date().toLocaleTimeString("en-GB", { hour12: false });

export default function DebugHUD() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [scrollPct, setScrollPct] = useState(0);
  const [section, setSection] = useState("hero");
  const [logs, setLogs] = useState<LogLine[]>([
    { time: stamp(), text: "boot sequence complete" },
    { time: stamp(), text: "watching viewport…" },
  ]);
  const [collapsed, setCollapsed] = useState(false);
  const lastSection = useRef("hero");

  const pushLog = (text: string) => {
    setLogs((prev) => [...prev.slice(-5), { time: stamp(), text }]);
  };

  // collapse by default on small screens (one-time check; window is
  // unavailable during SSR so this must run in an effect, not in render)
  useEffect(() => {
    if (window.innerWidth < 768) setCollapsed(true);
  }, []);

  // mouse coords
  useEffect(() => {
    const move = (e: MouseEvent) =>
      setCoords({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // scroll depth
  useEffect(() => {
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
  }, []);

  // active section via IntersectionObserver
  useEffect(() => {
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
  }, []);

  // listen for custom interaction events dispatched elsewhere (project hovers, form submits, etc.)
  useEffect(() => {
    const onHudLog = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      if (detail) pushLog(detail);
    };
    window.addEventListener("hud:log", onHudLog as EventListener);
    return () =>
      window.removeEventListener("hud:log", onHudLog as EventListener);
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-3 left-3 z-50 font-mono text-[11px] leading-tight sm:bottom-5 sm:left-5">
      <div className="pointer-events-auto w-[230px] border-2 border-ink bg-console text-paper shadow-hard-sm sm:w-[270px]">
        <button
          onClick={() => setCollapsed((c) => !c)}
          className="flex w-full items-center justify-between border-b-2 border-paper/20 px-2.5 py-1.5 text-left"
          aria-expanded={!collapsed}
        >
          <span className="flex items-center gap-1.5 tracking-wider">
            <span
              className="blink inline-block h-2 w-2 bg-stamp"
              aria-hidden
            />
            HUD.SYS
          </span>
          <span aria-hidden>{collapsed ? "[ + ]" : "[ — ]"}</span>
        </button>

        {!collapsed && (
          <div className="space-y-2 px-2.5 py-2.5">
            <div className="grid grid-cols-2 gap-1 text-paper/80">
              <span>CURSOR</span>
              <span className="text-right text-paper">
                {coords.x},{coords.y}
              </span>
              <span>SCROLL</span>
              <span className="text-right text-paper">{scrollPct}%</span>
              <span>SECTION</span>
              <span className="text-right text-marker">#{section}</span>
            </div>
            <div className="border-t-2 border-paper/20 pt-1.5">
              {logs.map((l, i) => (
                <div key={i} className="flex gap-1.5 truncate text-paper/70">
                  <span className="text-paper/40">{l.time}</span>
                  <span className="truncate">{l.text}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/** Helper other components can import to push a line into the HUD log. */
export function logToHud(text: string) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("hud:log", { detail: text }));
  }
}
