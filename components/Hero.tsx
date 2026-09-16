"use client";

import { useEffect, useState, useRef } from "react";
import { useScrambleText } from "../hooks/useScrambleText";

export function Hero() {
  const [timeStr, setTimeStr] = useState("00:00:00 UTC+8");
  const [asciiFrame, setAsciiFrame] = useState<string>("");
  const animFrameRef = useRef<number | null>(null);
  const angleRef = useRef({ A: 0, B: 0 });

  const { displayText: titleDisplay, scramble: scrambleTitle } = useScrambleText("ZEUS", 40);

  // Live Philippine Clock
  useEffect(() => {
    const updateTime = () => {
      try {
        const d = new Date();
        const str = d.toLocaleTimeString("en-US", {
          timeZone: "Asia/Manila",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });
        setTimeStr(`${str} PHT`);
      } catch {
        setTimeStr("14:35:10 PHT");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // 3D ASCII Rotating Polyhedron/Cube Renderer (Expanded Wide Matrix)
  useEffect(() => {
    const width = 56;
    const height = 26;

    const renderCube = () => {
      angleRef.current.A += 0.022;
      angleRef.current.B += 0.016;
      const { A, B } = angleRef.current;

      const cosA = Math.cos(A), sinA = Math.sin(A);
      const cosB = Math.cos(B), sinB = Math.sin(B);

      const buffer: string[] = Array(width * height).fill(" ");
      const zBuffer: number[] = Array(width * height).fill(0);

      // Points along 12 edges of a cube
      const cubeWidth = 14;
      const step = 0.65;

      const calculateForSurface = (cubeX: number, cubeY: number, cubeZ: number, ch: string) => {
        // Rotations
        const x = cubeX * cosB - cubeY * sinB;
        const y = cubeX * sinB + cubeY * cosB;
        const z = cubeZ;

        const x2 = x;
        const y2 = y * cosA - z * sinA;
        const z2 = y * sinA + z * cosA + 38;

        const ooz = 1 / z2;
        const xp = Math.floor(width / 2 + 30 * ooz * x2);
        const yp = Math.floor(height / 2 + 15 * ooz * y2);

        const idx = xp + yp * width;
        if (idx >= 0 && idx < width * height && xp >= 0 && xp < width && yp >= 0 && yp < height) {
          if (ooz > zBuffer[idx]) {
            zBuffer[idx] = ooz;
            buffer[idx] = ch;
          }
        }
      };

      for (let x = -cubeWidth; x < cubeWidth; x += step) {
        calculateForSurface(x, -cubeWidth, -cubeWidth, "─");
        calculateForSurface(x, cubeWidth, -cubeWidth, "─");
        calculateForSurface(x, -cubeWidth, cubeWidth, "═");
        calculateForSurface(x, cubeWidth, cubeWidth, "═");

        calculateForSurface(-cubeWidth, x, -cubeWidth, "│");
        calculateForSurface(cubeWidth, x, -cubeWidth, "│");
        calculateForSurface(-cubeWidth, x, cubeWidth, "║");
        calculateForSurface(cubeWidth, x, cubeWidth, "║");

        calculateForSurface(-cubeWidth, -cubeWidth, x, "/");
        calculateForSurface(cubeWidth, -cubeWidth, x, "\\");
        calculateForSurface(-cubeWidth, cubeWidth, x, "\\");
        calculateForSurface(cubeWidth, cubeWidth, x, "/");
      }

      // Format output string
      let out = "";
      for (let k = 0; k < width * height; k++) {
        out += buffer[k];
        if ((k + 1) % width === 0) out += "\n";
      }

      setAsciiFrame(out);
      animFrameRef.current = requestAnimationFrame(renderCube);
    };

    animFrameRef.current = requestAnimationFrame(renderCube);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-24 md:pt-32 pb-16 flex flex-col justify-between brutalist-border-b bg-[#0c0d0e] overflow-hidden"
    >
      {/* Background technical coordinates watermark */}
      <div id="hero-watermark" className="absolute right-4 top-24 font-mono text-[9px] text-[#25282e] select-none pointer-events-none hidden md:block text-right leading-relaxed">
        LAT: 14°35&apos;58&quot;N<br />
        LON: 120°58&apos;55&quot;E<br />
        REF: MNL_SYS_CORE<br />
        ENCODING: UTF-8 / MONO
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Editorial Index Header */}
        <div className="flex items-center justify-between py-2.5 sm:py-3 brutalist-border-b font-mono text-[10px] sm:text-[11px] text-[#a2a7af] uppercase tracking-wider mb-6 sm:mb-8">
          <div>
            <span className="text-[#646872] mr-1.5">LOC</span>
            <span>PHILIPPINES [MNL]</span>
          </div>
          <div className="text-right">
            <span className="text-[#646872] mr-1.5">SYS_TIME</span>
            <span className="text-[#7aa287]">{timeStr}</span>
          </div>
        </div>

        {/* Main Hero Split Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          {/* Left / Editorial Typography Column (Cols 1-7) */}
          <div className="w-full lg:col-span-7 flex flex-col justify-between">
            <div>

              {/* Huge Brutalist Title */}
              <h1
                className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[0.88] font-display text-[#edece6] hover:text-[#7aa287] transition-colors cursor-default break-words"
                onMouseEnter={scrambleTitle}
                data-cursor="SCRAMBLE"
              >
                {titleDisplay}
              </h1>

              {/* Sub-headline stack */}
              <div id="hero-subhead" className="mt-3 sm:mt-6 font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#a2a7af] leading-[0.95]">
                <div className="text-[#edece6]">DIGITAL CRAFT</div>
                <div className="text-[#646872] hover:text-[#62829a] transition-colors">/ SYSTEMS</div>
                <div className="text-[#8f80a3] text-lg sm:text-2xl md:text-3xl font-mono font-normal tracking-normal mt-1 sm:mt-2">
                  &amp; ARCHITECTURAL WEB
                </div>
              </div>
            </div>

            {/* Editorial Manifesto */}
            <div className="mt-8 sm:mt-12 lg:mt-14 pt-4 sm:pt-6 brutalist-border-t flex flex-col sm:grid sm:grid-cols-12 gap-2 sm:gap-4">
              <div className="sm:col-span-4 font-mono text-[10px] text-[#7aa287] uppercase tracking-wider">
                DESIGN × DEV × RESEARCH
              </div>
              <div className="sm:col-span-8 font-sans text-xs sm:text-sm md:text-base text-[#a2a7af] leading-relaxed">
                I build digital experiences that sit somewhere between high-performance technology, editorial typography, and the strange, nostalgic corners of the early web.
              </div>
            </div>
          </div>

          {/* Right / ASCII Art Wireframe Composition (Cols 8-12) */}
          <div className="w-full lg:col-span-5 flex flex-col items-center justify-center mt-6 lg:mt-0">
            {/* Direct ASCII Wireframe Display (Expanded Width) */}
            <div id="hero-wireframe-box" className="w-full flex items-center justify-center py-2 sm:py-4 select-none overflow-x-auto">
              <pre
                className="font-mono text-[9.5px] xs:text-[11px] sm:text-[12.5px] md:text-[14px] lg:text-[15px] xl:text-[16.5px] text-[#7aa287] leading-none select-none filter contrast-125 hover:text-[#edece6] transition-colors"
                aria-label="3D Rotating ASCII Art"
              >
                {asciiFrame}
              </pre>
            </div>

            {/* Quick-stats badges */}
            <div className="w-full mt-3 sm:mt-4 grid grid-cols-2 gap-2 font-mono text-[9px] sm:text-[10px] text-[#a2a7af]">
              <div className="p-2 bg-[#141618] border border-[#25282e]">
                <div className="text-[#646872] text-[8px] sm:text-[9px]">STACK</div>
                <div className="font-semibold text-[#edece6] truncate">NEXT / SQL</div>
              </div>
              <div className="p-2 bg-[#141618] border border-[#25282e]">
                <div className="text-[#646872] text-[8px] sm:text-[9px]">FOCUS</div>
                <div className="font-semibold text-[#edece6] truncate">WEB &amp; UI</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom scroll anchor strip */}
        <div className="mt-12 pt-4 brutalist-border-t flex items-center justify-between font-mono text-xs text-[#646872]">
          <div className="flex items-center space-x-2">
            <span className="animate-bounce">↓</span>
            <span className="text-[#a2a7af]">SCROLL TO EXPLORE ARCHIVE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
