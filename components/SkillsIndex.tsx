"use client";

import { AnimatedHeading, SectionLabel } from "./Editorial";

interface SkillCategory {
  id: string;
  num: string;
  name: string;
  summary: string;
  items: { name: string }[];
}

const CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    num: "01",
    name: "WEB DEVELOPMENT",
    summary: "Websites that work across phones and desktops.",
    items: [
      { name: "React & Next.js" },
      { name: "TypeScript" },
      { name: "HTML & CSS" },
    ],
  },
  {
    id: "backend",
    num: "02",
    name: "APP FEATURES",
    summary: "The tools behind bookings, forms, and online services.",
    items: [
      { name: "PHP & Laravel" },
      { name: "Node.js" },
      { name: "Payment integrations" },
    ],
  },
  {
    id: "database",
    num: "03",
    name: "DATA MANAGEMENT",
    summary: "Organized records and controlled access to information.",
    items: [
      { name: "PostgreSQL" },
      { name: "Supabase" },
      { name: "MySQL & SQLite" },
    ],
  },
  {
    id: "systems",
    num: "04",
    name: "DESIGN & DELIVERY",
    summary: "Clear layouts, accessible pages, and ready-to-use websites.",
    items: [
      { name: "Website design" },
      { name: "Accessibility" },
      { name: "Git & website hosting" },
    ],
  },
];

export function SkillsIndex() {

  return (
    <section id="skills" className="skills-section folio-section">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel number="02">EXPERTISE</SectionLabel>
        <AnimatedHeading>Skills &<span className="outline-type"> tools.</span></AnimatedHeading>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
               className="skill-category-card bg-[#0c0d0e] border border-[#25282e] p-6 grid grid-rows-subgrid row-span-4 hover:border-[#7aa287] transition-colors"
            >
              <div className="contents">
                <div className="flex items-center justify-between font-mono text-xs text-[#7aa287] pb-3 border-b border-[#25282e]">
                  <span className="text-xl font-bold">{cat.num}</span>
                </div>

                <h3 className="font-display text-lg font-bold text-[#edece6] tracking-wide uppercase">
                  {cat.name}
                </h3>

                <p className="font-sans text-xs text-[#646872] leading-relaxed">
                  {cat.summary}
                </p>

                <div className="space-y-3 font-mono text-xs">
                  {cat.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-2 min-h-12 flex items-center bg-[#141618] border border-[#25282e] hover:border-[#7aa287] hover:bg-[#1a1d20] transition-all cursor-default group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[#edece6] group-hover:text-[#7aa287] font-semibold transition-colors">
                          {item.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
