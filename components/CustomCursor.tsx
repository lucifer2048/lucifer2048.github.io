"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [pointerFine, setPointerFine] = useState(false);
  const [down, setDown] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)")
      .matches;

    if (reduceMotion || !fine) return; // keep native cursor

    setPointerFine(true);
    document.body.classList.add("custom-cursor-active");

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    const onDown = () => setDown(true);
    const onUp = () => setDown(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  if (!pointerFine || !visible) return null;

  const size = down ? 18 : 24;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[200] mix-blend-difference"
      style={{
        left: pos.x,
        top: pos.y,
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* crosshair */}
      <svg width={size} height={size} viewBox="0 0 24 24" className="block">
        <line x1="12" y1="0" x2="12" y2="7" stroke="white" strokeWidth="2" />
        <line x1="12" y1="17" x2="12" y2="24" stroke="white" strokeWidth="2" />
        <line x1="0" y1="12" x2="7" y2="12" stroke="white" strokeWidth="2" />
        <line x1="17" y1="12" x2="24" y2="12" stroke="white" strokeWidth="2" />
        <circle cx="12" cy="12" r="2" fill="white" />
      </svg>
      <span className="absolute left-6 top-0 whitespace-nowrap font-mono text-[10px] tracking-wider text-white">
        {pos.x},{pos.y}
      </span>
    </div>
  );
}
