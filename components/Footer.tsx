"use client";

import { useSoundEffects } from "../hooks/useSoundEffects";

export function Footer() {
  const { playClick } = useSoundEffects();

  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 bg-[#0c0d0e] text-[#a2a7af] font-mono text-xs">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top rule */}
        <div className="border-t border-[#25282e] pt-8 mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <span className="text-[#7aa287] font-bold text-sm">[ ZEUS / PORTFOLIO ]</span>
            <span className="text-[#646872]">//</span>
            <span className="text-xs text-[#edece6]">BUILT WITH CODE + CURIOSITY</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            data-cursor="TOP"
            className="self-start sm:self-auto px-3 py-1 bg-[#141618] hover:bg-[#edece6] text-[#edece6] hover:text-[#0c0d0e] border border-[#25282e] transition-colors uppercase text-[11px] flex items-center space-x-1"
          >
            <span>↑ BACK TO TOP</span>
            <span>[ 00 ]</span>
          </button>
        </div>

        {/* System & Copyright Strip */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 py-6 border-y border-[#25282e]/60">
          {/* Col 1: System info */}
          <div className="space-y-1 text-[#646872] text-[10px] sm:text-[11px]">
            <div>SYS_VERSION: v2.6.4-TURBO</div>
            <div>RENDER: TEXT/HTML + CSS</div>
            <div>TIMEZONE: ASIA/MANILA (UTC+8)</div>
          </div>

          {/* Col 2: Copyright & Principles */}
          <div className="sm:text-right space-y-1 text-[#646872] text-[10px] sm:text-[11px]">
            <div className="text-[#edece6] font-semibold">© 2026 ZEUS. ALL RIGHTS RESERVED.</div>
            <div>NO AI TEMPLATES · HAND-CRAFTED SYSTEMS</div>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="mt-8 text-center text-[10px] text-[#646872]">
          DESIGNED FOR MONITORS OF ALL GEOMETRIES. ZERO COOKIES TRACKED.
        </div>
      </div>
    </footer>
  );
}
