"use client";

import { useState } from "react";
import { useSoundEffects } from "../hooks/useSoundEffects";

interface SkillCategory {
  id: string;
  num: string;
  name: string;
  summary: string;
  items: { name: string; tag: string; description: string }[];
}

const CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    num: "01",
    name: "FRONTEND ARCHITECTURE",
    summary: "High-performance reactive user interfaces with sub-second time-to-interactive.",
    items: [
      { name: "Next.js 16 (App Router / Turbopack)", tag: "SSR / RSC", description: "Modern React architecture with server components and streaming hydration." },
      { name: "React 19 & TypeScript", tag: "CORE", description: "Strictly typed component state trees and custom hook ecosystems." },
      { name: "Tailwind CSS & Vanilla CSS", tag: "STYLING", description: "Bespoke design systems, CSS grid matrices, and scanline/texture shaders." },
      { name: "HTML5 Canvas & Web Audio API", tag: "KINETIC", description: "Procedural sound synthesis and hardware-accelerated 2D/3D graphics." },
    ],
  },
  {
    id: "backend",
    num: "02",
    name: "BACKEND & RUNTIMES",
    summary: "Resilient server architecture, API routing, and event-driven worker threads.",
    items: [
      { name: "PHP 8.3 & Laravel", tag: "SERVER", description: "Robust MVC systems, queue processing, and enterprise application backends." },
      { name: "Node.js & Express / Fastify", tag: "RUNTIME", description: "High-throughput asynchronous microservices and API gateways." },
      { name: "REST & Webhook Protocols", tag: "INTEGRATION", description: "PayMongo, Stripe, and third-party webhook idempotent handlers." },
      { name: "WebSockets & SSE", tag: "REALTIME", description: "Bi-directional persistent channels for live state telemetry." },
    ],
  },
  {
    id: "database",
    num: "03",
    name: "DATABASE & PERSISTENCE",
    summary: "ACID transactional integrity, spatial indices, and relational data modeling.",
    items: [
      { name: "PostgreSQL & PostGIS", tag: "RDBMS", description: "Relational modeling, advisory locks, and geospatial queries." },
      { name: "Supabase & Row Level Security", tag: "BAAS", description: "Cloud database hosting with granular token auth policies." },
      { name: "MySQL & SQLite", tag: "STORAGE", description: "Embedded lightweight datastores and legacy client data migration." },
      { name: "Redis / In-Memory Cache", tag: "CACHE", description: "Distributed session stores and rate-limiting buffers." },
    ],
  },
  {
    id: "systems",
    num: "04",
    name: "SYSTEMS, DESIGN & DEV-OPS",
    summary: "End-to-end craft from typography design to containerized infrastructure.",
    items: [
      { name: "UI/UX & Editorial Art Direction", tag: "CRAFT", description: "Bespoke typography, grid systems, and brutalist brand identity." },
      { name: "Git & CI/CD Pipelines", tag: "TOOLING", description: "Semantic versioning, trunk-based workflow, and automated verification." },
      { name: "Linux / Nginx Deployment", tag: "INFRA", description: "Hardened server configurations, reverse proxies, and SSL termination." },
      { name: "Accessibility (WCAG 2.1)", tag: "STANDARDS", description: "Semantic markup, keyboard navigation, and screen-reader compliance." },
    ],
  },
];

export function SkillsIndex() {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const { playBlip } = useSoundEffects();

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 brutalist-border-b bg-[#141618]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 md:mb-16 pb-4 brutalist-border-b gap-2">
          <div>
            <div className="font-mono text-[11px] sm:text-xs text-[#7aa287] uppercase tracking-widest mb-1">
              /* 02 // TAXONOMY */
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-[#edece6] tracking-tight uppercase">
              TECHNICAL INDEX
            </h2>
          </div>
          <div className="font-mono text-[11px] sm:text-xs text-[#646872]">
            CLASSIFICATION MATRIX // NO ARBITRARY PROGRESS BARS
          </div>
        </div>

        {/* Editorial Index Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="skill-category-card bg-[#0c0d0e] border border-[#25282e] p-6 flex flex-col justify-between hover:border-[#7aa287] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-[#7aa287] pb-3 border-b border-[#25282e] mb-4">
                  <span className="text-xl font-bold">{cat.num}</span>
                  <span className="text-[10px] text-[#646872]">INDEX GROUP</span>
                </div>

                <h3 className="font-display text-lg font-bold text-[#edece6] tracking-wide mb-2 uppercase">
                  {cat.name}
                </h3>

                <p className="font-sans text-xs text-[#646872] mb-6 leading-relaxed">
                  {cat.summary}
                </p>

                {/* Skill List */}
                <div className="space-y-3 font-mono text-xs">
                  {cat.items.map((item, idx) => (
                    <div
                      key={idx}
                      onMouseEnter={() => {
                        playBlip(740, 0.02);
                        setActiveItem(item.name);
                      }}
                      className="p-2 bg-[#141618] border border-[#25282e] hover:border-[#7aa287] hover:bg-[#1a1d20] transition-all cursor-default group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[#edece6] group-hover:text-[#7aa287] font-semibold transition-colors">
                          {item.name}
                        </span>
                        <span className="text-[9px] px-1.5 py-0.5 bg-[#0c0d0e] text-[#a2a7af] border border-[#25282e]">
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-[10px] text-[#646872] group-hover:text-[#a2a7af] mt-1 font-sans leading-tight">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom footer stamp */}
              <div className="mt-6 pt-3 border-t border-[#25282e] flex items-center justify-between font-mono text-[9px] text-[#646872]">
                <span>CAT: {cat.id.toUpperCase()}</span>
                <span className="text-[#7aa287]">VERIFIED 2026</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
