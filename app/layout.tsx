import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/lib/config";

export const metadata: Metadata = {
  metadataBase: new URL("https://lucifer2048.github.io"),
  title: `${profile.name} — ${profile.role}`,
  description: profile.tagline,
  keywords: [
    "AI Fullstack Engineer",
    "Model Context Protocol",
    "MCP Tooling",
    "FastAPI",
    "React",
    "Next.js",
    "Playwright Agents",
    "Tata Elxsi",
    "Prathyush S Panicker"
  ],
  referrer: "strict-origin-when-cross-origin",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
  },
  openGraph: {
    title: `${profile.name} | ${profile.role}`,
    description: profile.tagline,
    type: "website",
    siteName: `${profile.name} Portfolio`,
    images: [
      {
        url: "/hero_background.jpg",
        width: 1200,
        height: 630,
        alt: `${profile.name} — ${profile.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.role}`,
    description: profile.tagline,
    images: ["/hero_background.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </head>
      <body className="min-h-screen bg-[#0A0A0C] text-[#F4F4F5] font-sans antialiased selection:bg-red-600/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
