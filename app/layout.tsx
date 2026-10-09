import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const description =
  "William Greenwood is a Senior Software Engineer and Full Stack Developer with 11+ years building high-performance distributed systems, cloud infrastructure, and production AI workflows.";

export const metadata: Metadata = {
  title: "William Greenwood — Senior Software Engineer",
  description,
  authors: [{ name: "William Greenwood", url: "https://github.com/williamgreenwood1027" }],
  keywords: ["William Greenwood", "Senior Software Engineer", "Full Stack Developer", "Go", "Python", "Java", "Ruby on Rails", "Next.js", "RAG", "Distributed Systems"],
  openGraph: {
    title: "William Greenwood — Senior Software Engineer",
    description: "Senior Backend & Full-Stack Engineer: distributed systems, cloud infrastructure, and production AI (RAG) workflows.",
    type: "website",
  },
  icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/icon.svg` },
};

export const viewport: Viewport = { themeColor: "#030611" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
