"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/lib/config";
import { logToHud } from "./DebugHUD";

interface Message {
  id: string;
  sender: "user" | "agent";
  text: string;
  timestamp: string;
}

const PRESET_QUESTIONS = [
  "What is Prathyush's tech stack?",
  "Tell me about his AI & MCP work",
  "What does he do at Tata Elxsi?",
  "Is he available for hire?",
];

const sanitizeInput = (raw: string): string => {
  return raw
    .replace(/<[^>]*>?/gm, "")
    .replace(/javascript:/gi, "")
    .trim()
    .slice(0, 200);
};

const getAgentResponse = (userQuery: string): string => {
  const clean = sanitizeInput(userQuery);
  const query = clean.toLowerCase();

  // 1. Guardrail check for prompt injection or malicious attempts
  const injectionPatterns = [
    "ignore previous",
    "ignore all instructions",
    "system prompt",
    "dan mode",
    "jailbreak",
    "override",
    "eval(",
    "<script",
    "bypass",
    "forget your instructions",
    "sudo",
  ];
  if (injectionPatterns.some((pattern) => query.includes(pattern))) {
    return "I am Kep, an AI assistant dedicated strictly to providing authentic information about Prathyush S Panicker's portfolio, skills, and engineering work.";
  }

  // 2. Check for common greetings
  const greetings = [
    "hi",
    "hello",
    "hey",
    "good morning",
    "good afternoon",
    "good evening",
    "greetings",
    "sup",
    "yo",
    "howdy",
  ];
  const words = query.split(/[\s,!?.]+/).filter(Boolean);
  if (
    greetings.some(
      (g) => query === g || words.includes(g) || query.startsWith(g)
    )
  ) {
    return "Hello! I'm Kep, Prathyush's portfolio assistant. How can I help you evaluate his background today?";
  }

  // 3. Known Intent Matching
  if (
    query.includes("stack") ||
    query.includes("technology") ||
    query.includes("language") ||
    query.includes("python") ||
    query.includes("react") ||
    query.includes("fastapi")
  ) {
    return `Prathyush specializes in fullstack AI engineering:\n\n• Languages: Python, TypeScript, JavaScript\n• AI/ML: Model Context Protocol (MCP), LangChain, LangGraph, Playwright Agents, MLOps\n• Frontend: React, Next.js, React Native\n• Backend: FastAPI, Node.js, Express, PostgreSQL (SQLAlchemy, Alembic), PgBouncer\n• DevOps: Docker, Docker Compose, Nginx, AWS EC2/ECR`;
  }

  if (
    query.includes("mcp") ||
    query.includes("agent") ||
    query.includes("project") ||
    query.includes("work") ||
    query.includes("ai")
  ) {
    return `Here are key AI projects Prathyush has built:\n\n1. AI Agent Marketplace: Enterprise SaaS platform for AI agents & MCP tools with 160+ registered users.\n2. Autonomous Testing Agent: Playwright browser agent running zero-manual-QA smoke tests.\n3. News Intelligence Agent: Multimodal agent generating text, audio, and podcasts from breaking tech news.`;
  }

  if (
    query.includes("tata") ||
    query.includes("elxsi") ||
    query.includes("experience") ||
    query.includes("role") ||
    query.includes("job") ||
    query.includes("career")
  ) {
    return `At Tata Elxsi (Dec 2024 – Present), Prathyush is an AI Fullstack Software Engineer. He co-built the company-wide AI agent marketplace (160+ users), built automated HR outreach via WhatsApp reaching 1,000+ candidates, and manages DevOps & Docker deployments across 2-4 production systems.`;
  }

  if (
    query.includes("hire") ||
    query.includes("available") ||
    query.includes("contact") ||
    query.includes("email") ||
    query.includes("reach") ||
    query.includes("resume")
  ) {
    return `Yes! Prathyush is currently open for Fullstack AI Software Engineering roles.\n\n• Email: ${profile.email}\n• Location: ${profile.location}\n\nYou can click "Get in touch" or use the navbar RESUME button to download his resume!`;
  }

  if (
    query.includes("who") ||
    query.includes("prathyush") ||
    query.includes("about") ||
    query.includes("bio")
  ) {
    return `Prathyush S Panicker is an AI Fullstack Software Engineer based in Bengaluru. He specializes in building LLM-powered agentic products, Model Context Protocol (MCP) tooling, FastAPI backends, and React/Next.js frontends.`;
  }

  // 4. Catch-all for unrecognized short/random/single-letter queries (e.g., "e", "x", "asdf", "???")
  return `Sorry, I didn't quite catch that! I'm Kep, Prathyush's portfolio assistant. Feel free to ask me about his tech stack, AI projects, or experience at Tata Elxsi!`;
};

export default function PortfolioAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init",
      sender: "agent",
      text: `Hello! I'm Kep, Prathyush's portfolio assistant. How can I help you evaluate his background today?`,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend?: string) => {
    const rawText = textToSend || input;
    const text = sanitizeInput(rawText);
    if (!text) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");

    logToHud(`agent: query "${text.slice(0, 18)}..."`);

    setTimeout(() => {
      const responseText = getAgentResponse(text);
      const agentMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "agent",
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, agentMsg]);
      logToHud(`agent: kep replied`);
    }, 350);
  };

  return (
    <div className="fixed bottom-6 right-3.5 sm:bottom-6 sm:right-6 z-50 font-sans">
      {/* Floating Trigger Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setIsOpen(true);
            logToHud("agent: opened Kep assistant");
          }}
          className="flex items-center gap-2.5 rounded-full border border-red-500/40 bg-[#121216]/95 px-4 py-3 text-white shadow-2xl backdrop-blur-md hover:border-red-500 hover:bg-[#18181f] transition-all"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
          </span>
          <span className="text-xs font-mono font-bold tracking-wider">
            CHAT WITH KEP
          </span>
        </motion.button>
      )}


      {/* Expanded Chat Dialog */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-[calc(100vw-2rem)] sm:w-[380px] h-[480px] max-h-[82vh] rounded-3xl border border-white/20 bg-[#111115]/95 shadow-2xl backdrop-blur-xl flex flex-col overflow-hidden"
          >
            {/* Chat Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3.5 bg-black/40">
              <div className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-red-500/20 text-red-400 font-mono text-xs font-bold border border-red-500/30">
                  K
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white tracking-wide">
                    Kep — Portfolio Assistant
                  </h4>
                  <p className="text-[10px] font-mono text-emerald-400">
                    ● ONLINE • AI ASSISTANT
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="h-7 w-7 rounded-full bg-white/10 hover:bg-white/20 text-zinc-400 hover:text-white flex items-center justify-center text-xs transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Messages Area with Hidden Scrollbar */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 font-sans text-xs no-scrollbar">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex flex-col ${
                    m.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3 leading-relaxed ${
                      m.sender === "user"
                        ? "bg-red-600 text-white rounded-br-none"
                        : "bg-white/10 border border-white/10 text-zinc-200 rounded-bl-none"
                    }`}
                  >
                    <p className="whitespace-pre-line">{m.text}</p>
                  </div>
                  <span className="text-[9px] font-mono text-zinc-500 mt-1 px-1">
                    {m.timestamp}
                  </span>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Preset Question Chips with Hidden Scrollbar */}
            <div className="px-3 py-2 border-t border-white/5 flex gap-1.5 overflow-x-auto no-scrollbar bg-black/20">
              {PRESET_QUESTIONS.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q)}
                  className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-mono text-zinc-300 hover:bg-white/15 hover:text-white transition-colors flex-shrink-0"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 border-t border-white/10 bg-black/40 flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                maxLength={200}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Kep about stack, projects, or experience..."
                className="flex-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white placeholder-zinc-500 focus:border-red-500 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="rounded-xl bg-red-600 px-3.5 py-2 text-xs font-semibold text-white hover:bg-red-500 transition-colors flex-shrink-0"
              >
                Send
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
