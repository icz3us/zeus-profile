import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
  title: "ZEUS / PORTFOLIO — 2026 // Digital Craft × Systems",
  description:
    "Personal portfolio of Zeus. Design × Development × Experimentation. Web, UI, and architectural digital systems.",
  keywords: [
    "Zeus",
    "Portfolio",
    "Editorial Brutalism",
    "ASCII Art",
    "Creative Developer",
    "Full-stack",
    "Next.js",
    "Philippines",
  ],
  authors: [{ name: "Zeus" }],
  creator: "Zeus",
  openGraph: {
    title: "ZEUS / PORTFOLIO — 2026",
    description: "Digital Craft, Systems & Architectural Code.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0d0e",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[#0c0d0e] text-[#edece6] font-sans antialiased selection:bg-[#7aa287] selection:text-[#0c0d0e] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
