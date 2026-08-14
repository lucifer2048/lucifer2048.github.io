"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Expanded multi-lingual greetings in native scripts
const GREETINGS = [
  { text: "Hello", lang: "EN" },
  { text: "नमस्ते", lang: "HI" },
  { text: "Bonjour", lang: "FR" },
  { text: "നമസ്കാരം", lang: "ML" },
  { text: "Ciao", lang: "IT" },
  { text: "こんにちは", lang: "JA" },
  { text: "Hola", lang: "ES" },
  { text: "你好", lang: "ZH" },
  { text: "Hallo", lang: "DE" },
  { text: "مرحبا", lang: "AR" },
  { text: "안녕하세요", lang: "KO" },
  { text: "Olá", lang: "PT" },
];

const WORD_DURATION = 220; // 220ms per word for dynamic, fast-paced greeting reel

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling while preloader is active
    document.body.style.overflow = "hidden";

    // Fast, energetic greeting cycle
    const greetingInterval = setInterval(() => {
      setIndex((prev) => (prev + 1) % GREETINGS.length);
    }, WORD_DURATION);

    // Smooth progress counter over ~2.6 seconds total
    const totalTime = GREETINGS.length * WORD_DURATION;
    const intervalTime = totalTime / 100;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(greetingInterval);
          clearInterval(progressInterval);
          setTimeout(() => {
            setLoading(false);
            document.body.style.overflow = "auto";
          }, 200);
          return 100;
        }
        return prev + 1;
      });
    }, intervalTime);

    return () => {
      clearInterval(greetingInterval);
      clearInterval(progressInterval);
      document.body.style.overflow = "auto";
    };
  }, []);

  const current = GREETINGS[index];

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.83, 0, 0.17, 1] }}
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#050507] p-5 sm:p-14 text-white select-none shadow-2xl"
        >
          {/* Top Status Bar */}
          <div className="flex items-center justify-between font-mono text-[10px] sm:text-xs text-zinc-500 gap-2">
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="h-2 w-2 rounded-full bg-red-500 animate-ping" />
              <span className="text-zinc-300 font-semibold tracking-wider">
                PRATHYUSH.DEV
              </span>
            </div>
            <div className="font-mono text-[10px] sm:text-xs text-zinc-500 tracking-wider text-right flex-shrink-0">
              <span className="hidden sm:inline">SYSTEM_INITIALIZATION</span>
              <span className="sm:hidden">SYSTEM_INIT</span>
            </div>
          </div>

          {/* Center Greeting (Instant Text Replacement without Fade or Subtext) */}
          <div className="flex flex-col items-center justify-center my-auto text-center px-2">
            <div className="h-20 sm:h-32 flex items-center justify-center max-w-full">
              <div className="flex items-center gap-2 sm:gap-4 text-4xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white max-w-full">
                <span className="text-red-500 font-serif italic flex-shrink-0">✦</span>
                <span className="truncate">{current.text}</span>
              </div>
            </div>
          </div>


          {/* Bottom Progress Bar & Percentage */}
          <div className="w-full max-w-2xl mx-auto">
            <div className="flex justify-between items-center font-mono text-xs text-zinc-400 mb-2">
              <span>LOADING PORTFOLIO</span>
              <span className="text-red-500 font-bold">{progress}%</span>
            </div>
            <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-red-600 via-rose-500 to-red-500 transition-all duration-75 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
