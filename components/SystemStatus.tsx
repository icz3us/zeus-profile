"use client";

import { useEffect, useState } from "react";
import { useSoundEffects } from "../hooks/useSoundEffects";

export function SystemStatus() {
  const { playClick, playSuccess, playHum } = useSoundEffects();
  const [coffeeLevel, setCoffeeLevel] = useState(98);
  const [internetStatus, setInternetStatus] = useState<"OK" | "SYNCING" | "ONLINE">("ONLINE");
  const [designStatus, setDesignStatus] = useState<"OK" | "ACTIVE" | "REFINED">("OK");
  const [codeStatus, setCodeStatus] = useState<"OK" | "COMPILED" | "OPTIMIZED">("OK");
  const [uptime, setUptime] = useState(0);
  const [viewportSize, setViewportSize] = useState("1920x1080");

  useEffect(() => {
    const timer = setInterval(() => {
      setUptime((prev) => prev + 1);
    }, 1000);
    const updateSize = () => {
      setViewportSize(`${window.innerWidth}×${window.innerHeight}`);
    };
    updateSize();
    window.addEventListener("resize", updateSize);

    return () => {
      clearInterval(timer);
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  const formatUptime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}s`;
  };

  const handleCoffeeClick = () => {
    playSuccess();
    setCoffeeLevel((prev) => (prev >= 100 ? 54 : Math.min(100, prev + 12)));
  };

  const cycleDesign = () => {
    playClick();
    setDesignStatus((prev) => (prev === "OK" ? "ACTIVE" : prev === "ACTIVE" ? "REFINED" : "OK"));
  };

  const cycleCode = () => {
    playClick();
    setCodeStatus((prev) => (prev === "OK" ? "COMPILED" : prev === "COMPILED" ? "OPTIMIZED" : "OK"));
  };

  const cycleInternet = () => {
    playHum();
    setInternetStatus((prev) => (prev === "ONLINE" ? "SYNCING" : prev === "SYNCING" ? "OK" : "ONLINE"));
  };

  const clampedCoffee = Math.max(0, Math.min(100, coffeeLevel));
  const progressChars = Math.max(0, Math.min(16, Math.round((clampedCoffee / 100) * 16)));
  const emptyChars = Math.max(0, 16 - progressChars);
  const progressBar = "█".repeat(progressChars) + "░".repeat(emptyChars);

  return (
    <section id="status" className="py-10 sm:py-12 brutalist-border-b bg-[#141618]/50">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between font-mono text-xs text-[#646872] mb-6 pb-2 border-b border-[#25282e] gap-2">
          <div className="flex items-center space-x-2">
            <span className="text-[#7aa287]">/* 01 */</span>
            <span className="text-[#edece6] font-bold uppercase tracking-wider">SYSTEM DIAGNOSTICS</span>
          </div>
          <div className="text-[11px] text-[#a2a7af]">
            UPTIME: <span className="text-[#7aa287]">{formatUptime(uptime)}</span>
          </div>
        </div>

        {/* Telemetry Grid */}
        <div className="flex flex-col md:grid md:grid-cols-12 gap-6 items-stretch">
          {/* Main ASCII Status Terminal (Cols 1-7) */}
          <div className="md:col-span-7 bg-[#0c0d0e] border border-[#25282e] p-4 sm:p-5 font-mono text-xs shadow-inner">
            <div className="flex flex-wrap justify-between items-center text-[#646872] pb-3 border-b border-[#25282e] text-[10px] sm:text-[11px] gap-2">
              <span className="text-[#7aa287]">HOST: MNL-DEV-01</span>
              <span>BUFFER: OK</span>
              <span>VP: {viewportSize}</span>
            </div>

            <div className="py-3 sm:py-4 space-y-2">
              <div className="flex items-center justify-between hover:bg-[#141618] active:bg-[#1a1d20] px-3 py-2.5 transition-colors cursor-pointer border border-transparent hover:border-[#25282e]" onClick={cycleDesign}>
                <span className="text-[#a2a7af] text-xs">DESIGN SYSTEM</span>
                <span className="text-[#7aa287] font-semibold text-xs">[ {designStatus} ]</span>
              </div>

              <div className="flex items-center justify-between hover:bg-[#141618] active:bg-[#1a1d20] px-3 py-2.5 transition-colors cursor-pointer border border-transparent hover:border-[#25282e]" onClick={cycleCode}>
                <span className="text-[#a2a7af] text-xs">CODE INTEGRITY</span>
                <span className="text-[#62829a] font-semibold text-xs">[ {codeStatus} ]</span>
              </div>

              <div className="flex items-center justify-between hover:bg-[#141618] active:bg-[#1a1d20] px-3 py-2.5 transition-colors cursor-pointer border border-transparent hover:border-[#25282e]" onClick={handleCoffeeClick}>
                <span className="text-[#a2a7af] text-xs">COFFEE RESERVES</span>
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] text-[#8f80a3] hidden sm:inline">{progressBar}</span>
                  <span className="text-[#8f80a3] font-semibold text-xs">[ {coffeeLevel}% ]</span>
                </div>
              </div>

              <div className="flex items-center justify-between hover:bg-[#141618] active:bg-[#1a1d20] px-3 py-2.5 transition-colors cursor-pointer border border-transparent hover:border-[#25282e]" onClick={cycleInternet}>
                <span className="text-[#a2a7af] text-xs">NETWORK LATENCY</span>
                <span className="text-[#7aa287] font-semibold text-xs">[ {internetStatus} ~ 24ms ]</span>
              </div>
            </div>

            {/* Terminal prompt note */}
            <div className="pt-3 border-t border-[#25282e] flex flex-wrap items-center justify-between text-[10px] sm:text-[11px] text-[#646872] gap-1">
              <div className="flex items-center space-x-1">
                <span className="text-[#7aa287]">$</span>
                <span>telemetry --interactive</span>
                <span className="w-1.5 h-3 bg-[#7aa287] inline-block animate-pulse ml-1" />
              </div>
              <span className="text-[#a2a7af] text-[9px] sm:text-[10px]">[ TAP ENTRIES TO TOGGLE ]</span>
            </div>
          </div>

          {/* Right Editorial Note / Soft Club Pill (Cols 8-12) */}
          <div className="md:col-span-5 bg-[#141618] border border-[#25282e] p-4 sm:p-5 flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-mono text-[#8f80a3] uppercase tracking-widest mb-1">
                DISCIPLINE PROFILE
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-[#edece6] mb-2 sm:mb-3">
                HYBRID CRAFT: CODE AS MATERIAL
              </h3>
              <p className="font-sans text-xs text-[#a2a7af] leading-relaxed">
                Approaching web development not as assembly of prefabricated templates, but as bespoke digital typography, reactive state machines, and resilient distributed architecture.
              </p>
            </div>

            <div className="mt-4 pt-4 border-t border-[#25282e] grid grid-cols-2 gap-3 font-mono text-[11px]">
              <div>
                <span className="text-[#646872] block text-[9px] uppercase">RUNTIME</span>
                <span className="text-[#edece6]">NEXT 16 / TURBO</span>
              </div>
              <div>
                <span className="text-[#646872] block text-[9px] uppercase">REGULATION</span>
                <span className="text-[#7aa287]">STRICT ACCESSIBILITY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
