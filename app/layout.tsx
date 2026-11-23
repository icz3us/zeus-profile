import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Michroma } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Michroma({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Zeus | Web Developer & Designer",
  description:
    "Meet Zeus, a web developer and designer in Manila. Explore scholarship and resort booking projects, skills, and contact details.",
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
    title: "ZEUS / PORTFOLIO, 2026",
    description: "Web developer and designer building easy-to-use websites and apps.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#F1F0E8",
  colorScheme: "light",
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
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
