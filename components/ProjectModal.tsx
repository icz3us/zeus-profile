"use client";

import { useEffect } from "react";
import { useSoundEffects } from "../hooks/useSoundEffects";

export interface ProjectData {
  id: string;
  num: string;
  total: string;
  fileTag?: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  stack: string[];
  description: string;
  architecture: string[];
  challenge: string;
  solution: string;
  metrics: string[];
  asciiArt?: string;
  demoUrl?: string;
  githubUrl?: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { playClick } = useSoundEffects();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 md:p-10 bg-[#0c0d0e]/85 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#0c0d0e] border sm:border-2 border-[#edece6] shadow-[4px_4px_0px_#7aa287] sm:shadow-[8px_8px_0px_#7aa287] p-4 sm:p-8">
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-[#25282e] font-mono text-xs">
          <div className="flex items-center space-x-2">
            <span className="text-[#7aa287]">[{project.num} / {project.total}]</span>
            <span className="text-[#edece6] uppercase font-bold tracking-wider text-[11px] sm:text-xs truncate">{project.category}</span>
          </div>
          <button
            type="button"
            onClick={() => {
              playClick();
              onClose();
            }}
            data-cursor="CLOSE"
            className="px-3 py-1.5 bg-[#141618] hover:bg-[#edece6] text-[#edece6] hover:text-[#0c0d0e] border border-[#25282e] transition-colors uppercase text-[10px] sm:text-[11px] font-bold shrink-0"
          >
            [ CLOSE ]
          </button>
        </div>

        {/* Title */}
        <div className="my-4 sm:my-6">
          <div className="font-mono text-[10px] sm:text-xs text-[#7aa287] uppercase tracking-wider">{project.category}</div>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase text-[#edece6] tracking-tight mt-1 break-words">
            {project.title}
          </h2>
          <p className="font-mono text-[11px] sm:text-xs text-[#a2a7af] mt-2">
            STACK: {project.stack.join(" · ")}
          </p>
        </div>

        {/* Architectural Blueprint Spec */}
        <div className="bg-[#141618] border border-[#25282e] p-3.5 sm:p-5 my-4 sm:my-6 font-mono text-xs">
          <div className="text-[10px] text-[#646872] mb-3 pb-2 border-b border-[#25282e] flex justify-between">
            <span>CORE ARCHITECTURE &amp; WORKFLOW</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {project.architecture.map((step, idx) => (
              <div key={idx} className="p-2.5 bg-[#0c0d0e] border border-[#25282e]">
                <div className="text-[9px] text-[#7aa287] mb-1">0{idx + 1}</div>
                <div className="text-[#edece6] text-[11px] font-semibold leading-snug">{step}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Deep Dive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 my-4 sm:my-6 font-sans text-xs text-[#a2a7af] leading-relaxed">
          <div className="p-3.5 sm:p-4 bg-[#141618] border border-[#25282e]">
            <h4 className="font-mono text-[11px] font-bold text-[#edece6] uppercase mb-1.5 sm:mb-2">
              THE CHALLENGE
            </h4>
            <p>{project.challenge}</p>
          </div>
          <div className="p-3.5 sm:p-4 bg-[#141618] border border-[#25282e]">
            <h4 className="font-mono text-[11px] font-bold text-[#7aa287] uppercase mb-1.5 sm:mb-2">
              THE SOLUTION
            </h4>
            <p>{project.solution}</p>
          </div>
        </div>

        {/* Performance metrics & Architecture pills */}
        <div className="border-t border-[#25282e] pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
          <div>
            <span className="text-[#646872] block text-[10px] uppercase mb-1">KEY CAPABILITIES &amp; RESULTS</span>
            <ul className="space-y-1 text-[#edece6] text-[11px] sm:text-xs">
              {project.metrics.map((m, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <span className="text-[#7aa287] mt-0.5">▸</span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="text-[#646872] block text-[10px] uppercase mb-1">CORE MODULES</span>
            <ul className="space-y-1 text-[#edece6] text-[11px] sm:text-xs">
              {project.architecture.map((a, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <span className="text-[#62829a] mt-0.5">■</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action buttons */}
        <div className="mt-6 sm:mt-8 pt-4 border-t border-[#25282e] flex flex-wrap gap-3 font-mono text-xs">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playClick()}
              data-cursor="LAUNCH"
              className="w-full sm:w-auto px-5 py-3 bg-[#7aa287] text-[#0c0d0e] font-bold uppercase tracking-wider hover:bg-[#edece6] active:bg-[#edece6] transition-colors min-h-[44px] flex items-center justify-center space-x-2"
            >
              <span>[ LAUNCH DEMO / LIVE SITE ↗ ]</span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playClick()}
              data-cursor="CODE"
              className="w-full sm:w-auto px-5 py-3 bg-[#141618] text-[#edece6] border border-[#25282e] uppercase tracking-wider hover:border-[#7aa287] hover:text-[#7aa287] transition-colors min-h-[44px] flex items-center justify-center space-x-2"
            >
              <span>[ SOURCE REPO ARCHIVE ↗ ]</span>
            </a>
          )}
          <a
            href="https://github.com/icz3us"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playClick()}
            data-cursor="ALL REPOS"
            className="w-full sm:w-auto px-5 py-3 bg-[#0c0d0e] text-[#a2a7af] border border-[#25282e] uppercase tracking-wider hover:border-[#edece6] hover:text-[#edece6] transition-colors min-h-[44px] flex items-center justify-center space-x-2"
          >
            <span>[ ALL REPOSITORIES ↗ ]</span>
          </a>
        </div>
      </div>
    </div>
  );
}
