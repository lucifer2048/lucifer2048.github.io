# Prathyush S Panicker — Portfolio

A high-performance, responsive portfolio website built with Next.js App Router, React 19, TypeScript, and Tailwind CSS. Designed around a modern **Dark Obsidian & Crimson Red Bento Grid** aesthetic featuring an interactive system telemetry HUD and an AI assistant named Kep.

---

## Code Architecture & Project Structure

The project follows senior engineering best practices with strict separation of concerns, single-file content configuration, typed interfaces, and zero unnecessary external UI dependencies.

```
├── app/                      # Next.js App Router Pages & Global Styles
│   ├── layout.tsx            # Global Root Layout & Metadata SEO
│   ├── page.tsx              # Main Page Composition
│   ├── globals.css           # Custom CSS Design System Tokens & Animations
│   └── icon.svg              # Favicon Asset
│
├── components/               # Modular & Reusable UI Components
│   ├── Nav.tsx               # Top Responsive Floating Header
│   ├── Hero.tsx              # Full-Width Masterpiece Artwork Canvas
│   ├── Marquee.tsx           # 4 Engineering Focus Cards + Tech Drawer
│   ├── About.tsx             # 12-Column Bento Grid, Stats & Enterprise Banner
│   ├── Experience.tsx        # Work History (Tata Elxsi & Freelance) & Education
│   ├── Projects.tsx          # Production Bento Work Cards + Architecture Deep Dive Modal
│   ├── Stack.tsx             # Technical Capabilities & Tooling Inventory
│   ├── Contact.tsx           # Interactive Form, Direct Email Copy & Socials
│   ├── Footer.tsx            # Copyright & Back-to-Top Navigation
│   ├── PortfolioAgent.tsx    # Interactive Kep AI Chatbot Assistant
│   ├── DebugHUD.tsx          # Real-Time Telemetry Monitoring Panel
│   ├── CustomCursor.tsx      # Precision Crosshair Pointer
│   ├── Preloader.tsx         # Multilingual Greeting Loader
│   └── CountUp.tsx           # Animated Numerical Counters
│
├── lib/                      # Data Layer & Configuration (Single Source of Truth)
│   └── config.ts             # Profile, Bio, Stats, Projects, Stack & Social Config
│
├── public/                   # Static Production Assets
│   ├── hero_background.jpg   # Serene Hero Artwork Image
│   └── *.docx                # Resume Document File
│
├── next.config.ts            # Next.js Static Export Configuration
├── tsconfig.json             # TypeScript Compiler Config & Path Aliases (@/*)
└── package.json              # Dependencies & Production Scripts
```

---

## ⚡ 1-File Content Customization

All personal data, work history, projects, stats, tech stack inventory, and social links are centralized in **[`lib/config.ts`](file:///Users/prathyushspanicker/Desktop/Projects/Personal/Portfolio/lib/config.ts)**:

```ts
// Example: Modifying project or bio configuration in lib/config.ts
export const profile = {
  name: "PRATHYUSH S PANICKER",
  role: "AI FULLSTACK / SOFTWARE ENGINEER",
  location: "BENGALURU, IN",
  email: "panickerprathyush20@gmail.com",
  ...
};
```

Any new developer can update text, projects, or experience items by editing `lib/config.ts` without touching React component markup or layout logic.

---

## Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev
```

Open `http://localhost:3000` in your browser.

---

## 📦 Production Static Build

To build the static HTML export:

```bash
npm run build
```

This generates an optimized static export bundle in `out/`, ready to deploy to GitHub Pages or any static CDN host.

