// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE TO CUSTOMIZE YOUR PORTFOLIO.
// Every word on the site is pulled from here. Nothing else needs
// to change unless you want to alter layout/animation behavior.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "PRATHYUSH S PANICKER",
  shortName: "PSP",
  role: "AI FULLSTACK / SOFTWARE ENGINEER",
  location: "BENGALURU, IN",
  tagline:
    "I build production AI agents, MCP tooling, and the React/FastAPI systems that ship them — with hands-on ownership from product and APIs through DevOps.",
  status: "BUILDING",
  email: "panickerprathyush20@gmail.com",
  resumeUrl: "/Prathyush_Panicker_AI_Fullstack_Developer.docx",
  bio: [
    "I'm an AI full-stack engineer based in Bengaluru, working where product, code, and intelligence meet. I build agentic, LLM-powered products and the full-stack systems that make them useful in production.",
    "My work spans React and React Native frontends, FastAPI and Node.js services, PostgreSQL data layers, browser automation, external API integrations, and containerized deployments on internal infrastructure and AWS.",
  ],
  stats: [
    { label: "REGISTERED_USERS", value: 160, suffix: "+" },
    { label: "CANDIDATES_REACHED", value: 1000, suffix: "+" },
    { label: "CONCURRENT_PROJECTS", value: 4, suffix: " MAX" },
    { label: "DAYS_AT_TATA_ELXSI", value: 0, suffix: "+", baseDate: "2024-12-01" },
  ],
};

export const socials = [
  { label: "GITHUB", href: "https://github.com/prathyushspanicker" },
  { label: "LINKEDIN", href: "https://linkedin.com/in/prathyush-s-panicker-8345b517b" },
  { label: "LEETCODE", href: "https://leetcode.com/u/prathyushspanicker" },
  { label: "HACKERRANK", href: "https://hackerrank.com/prathyushspanicker" },
  { label: "EMAIL", href: "mailto:panickerprathyush20@gmail.com" },
];

export const marqueeItems = [
  "PYTHON",
  "JAVASCRIPT",
  "TYPESCRIPT",
  "REACT.JS",
  "REACT NATIVE",
  "NEXT.JS",
  "NODE.JS",
  "EXPRESS",
  "FASTAPI",
  "SQLALCHEMY",
  "ALEMBIC",
  "PGBOUNCER",
  "POSTGRESQL",
  "MONGODB",
  "MYSQL",
  "SUPABASE",
  "LANGCHAIN",
  "LANGGRAPH",
  "MODEL CONTEXT PROTOCOL",
  "PLAYWRIGHT AGENTS",
  "MLOPS",
  "DOCKER",
  "DOCKER COMPOSE",
  "NGINX",
  "AWS EC2",
  "AWS ECR",
  "KUBERNETES",
  "JENKINS",
  "LOCUST",
  "GIT / GITHUB",
  "LINUX",
];

export type ProjectStatus = "RUNNING" | "DEPLOYED" | "EXPERIMENT" | "ARCHIVED";

export const projects: {
  id: string;
  pid: string;
  title: string;
  status: ProjectStatus;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  rotation: number;
}[] = [
  {
    id: "ai-agent-marketplace",
    pid: "PID_01",
    title: "AI_AGENT_MARKETPLACE",
    status: "DEPLOYED",
    description:
      "A company-wide SaaS marketplace for AI agents, MCP servers, and tools with authentication and RBAC. The pilot reached 160+ registered users and supports sales, research, presentation, and audio workflows.",
    tags: ["AI Agents", "MCP", "FastAPI", "React", "PostgreSQL"],
    rotation: -1.5,
  },
  {
    id: "autonomous-testing-agent",
    pid: "PID_02",
    title: "AUTONOMOUS_TEST_AGENT",
    status: "DEPLOYED",
    description:
      "A browser-driven testing agent that autonomously runs smoke and functional tests against the AI marketplace, reducing repetitive manual QA work.",
    tags: ["Playwright", "AI Agents", "Browser Automation", "Testing"],
    rotation: 1,
  },
  {
    id: "hr-automation-platform",
    pid: "PID_03",
    title: "HR_AUTOMATION_PLATFORM",
    status: "DEPLOYED",
    description:
      "An independently owned HR workflow that finds stale candidate resumes, triggers WhatsApp outreach, and syncs new resumes back to internal systems. It has reached 1,000+ candidates.",
    tags: ["FastAPI", "WhatsApp API", "Webhooks", "Scheduling", "PostgreSQL"],
    rotation: -0.75,
  },
  {
    id: "news-intelligence-agent",
    pid: "PID_04",
    title: "NEWS_INTELLIGENCE_AGENT",
    status: "RUNNING",
    description:
      "An in-development agent that transforms the latest news into each user's preferred format: concise text, audio, video, an explainer, or a podcast.",
    tags: ["AI Agents", "Multimodal", "Content Generation", "FastAPI"],
    rotation: 1.25,
  },
  {
    id: "fitness-wellbeing-app",
    pid: "PID_05",
    title: "FITNESS_WELLBEING_APP",
    status: "RUNNING",
    description:
      "A self-directed, Strava-style fitness and daily-assistant app in pilot, combining workout tools, push-up-gated alarms, habits, notes, lists, and a secure personal vault.",
    tags: ["React Native", "Mobile", "Fitness", "Product Design"],
    rotation: -1,
  },
  {
    id: "sme-business-platform",
    pid: "PID_06",
    title: "SME_BUSINESS_PLATFORM",
    status: "DEPLOYED",
    description:
      "An end-to-end multi-branch business platform with inventory, customer ordering, vendor approvals, role-based access, marketing automation, and a drag-and-drop webstore builder.",
    tags: ["MERN", "PostgreSQL", "RBAC", "Meta APIs", "DevOps"],
    rotation: 0.75,
  },
];

export const stack = {
  languages: ["python", "javascript", "typescript"],
  frontend: ["react.js", "react-native", "next.js"],
  backend: [
    "node.js",
    "express",
    "fastapi",
    "sqlalchemy",
    "alembic",
    "pgbouncer",
  ],
  databases: ["postgresql", "mongodb", "mysql", "supabase"],
  "ai-agents": [
    "langchain",
    "langgraph",
    "model-context-protocol-mcp",
    "playwright-automation-agents",
    "mlops",
  ],
  "devops-cloud": [
    "docker",
    "docker-compose",
    "nginx",
    "aws-ec2-ecr",
    "kubernetes",
    "jenkins",
    "linux-windows",
  ],
  tools: ["git-github", "locust", "whatsapp-business-api", "vs-code"],
};

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Fullstack AI Software Engineer",
    company: "Tata Elxsi Limited",
    location: "Bengaluru, India",
    period: "Dec 2024 – Present",
    bullets: [
      "Co-built a company-wide AI-agent, MCP-server, and tools marketplace with full authentication and RBAC, reaching 160+ registered pilot users.",
      "Built agents for sales-pitch generation, presentations, research, script-to-audio conversion, weekly tech news, and autonomous Playwright testing.",
      "Designed REST APIs with FastAPI, PostgreSQL, SQLAlchemy, and Alembic for AI marketplace and HR automation workflows.",
      "Sole owner of an HR automation web app that contacted 1,000+ candidates with stale resumes through WhatsApp and synced updates back into internal systems.",
      "Turned the WhatsApp integration into a reusable internal platform with messaging APIs and team/token-volume usage tracking.",
      "Own DevOps across 2–4 concurrent dev and production projects using Docker, Docker Compose, Nginx, AWS EC2/ECR, and Locust performance testing.",
    ],
  },
  {
    role: "Fullstack Developer",
    company: "Freelance Projects",
    location: "Bengaluru, India",
    period: "Jan 2024 – Dec 2024",
    bullets: [
      "Sole developer of an end-to-end SME management platform, owning UI/UX, frontend, backend, database, and production delivery.",
      "Built multi-branch inventory, customer ordering, vendor approval, and role-based workflows for staff and business managers.",
      "Delivered MERN products for finance and healthcare clients, including dashboards, billing flows, and WhatsApp automation.",
      "Built email and social marketing tools, a drag-and-drop webstore builder, and managed servers, domains, DNS, and email hosting.",
    ],
  },
];

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details: string;
  coursework: string[];
}

export const education: EducationItem[] = [
  {
    degree: "B.Tech, Computer Science (AI & ML)",
    institution: "Presidency University, Bengaluru",
    period: "Jul 2020 – Jul 2024",
    details: "CGPA: 8.5/10 | Super 60 — Top Performers cohort",
    coursework: ["DSA", "Algorithms", "Machine Learning", "Deep Learning", "Web Development", "Cloud Computing"],
  },
];

export interface CertificationItem {
  name: string;
  issuer: string;
  period: string;
}

export const certifications: CertificationItem[] = [
  {
    name: "Complete MLOps Bootcamp with 10+ End-to-End ML Projects",
    issuer: "Udemy",
    period: "Apr 2025",
  },
  {
    name: "The Complete Machine Learning Course with Python",
    issuer: "Udemy",
    period: "May 2023",
  },
];

export const strengths: string[] = [
  "Ownership of ambiguous 0→1 problems",
  "Cross-team collaboration and stakeholder communication",
  "Detail-oriented, adaptable, and fast-learning",
  "Creative and logical problem solving",
];
