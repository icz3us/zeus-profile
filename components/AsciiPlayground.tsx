"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useSoundEffects } from "../hooks/useSoundEffects";

type AsciiMode = "donut" | "wave" | "matrix" | "sphere";

export function AsciiPlayground() {
  const [mode, setMode] = useState<AsciiMode>("donut");
  const [output, setOutput] = useState<string>("");
  const [densityChar, setDensityChar] = useState<string>("default");
  const { playClick, playBlip } = useSoundEffects();
  const reqRef = useRef<number | null>(null);
  const stateRef = useRef({
    A: 0,
    B: 0,
    wavePhase: 0,
    mouseX: 0,
    mouseY: 0,
  });

  const chars = densityChar === "heavy" ? "@#%*+=-:. " : densityChar === "cyber" ? "10/\\<>[]{} " : ".,-~:;=!*#$@";

  // Donut Generator
  const renderDonut = useCallback((width: number, height: number) => {
    stateRef.current.A += 0.04;
    stateRef.current.B += 0.025;
    const { A, B } = stateRef.current;

    const cosA = Math.cos(A), sinA = Math.sin(A);
    const cosB = Math.cos(B), sinB = Math.sin(B);

    const b: string[] = Array(width * height).fill(" ");
    const z: number[] = Array(width * height).fill(0);

    for (let j = 0; j < 6.28; j += 0.07) {
      const ct = Math.cos(j), st = Math.sin(j);
      for (let i = 0; i < 6.28; i += 0.02) {
        const sp = Math.sin(i), cp = Math.cos(i);
        const h = ct + 2;
        const D = 1 / (sp * h * sinA + st * cosA + 5);
        const t = sp * h * cosA - st * sinA;

        const x = Math.floor(width / 2 + (width / 2 - 2) * D * (cp * h * cosB - t * sinB));
        const y = Math.floor(height / 2 + (height / 2 - 1) * D * (cp * h * sinB + t * cosB));
        const o = x + width * y;

        const N = Math.floor(
          8 * ((st * sinA - sp * ct * cosA) * cosB - sp * ct * sinA - st * cosA - cp * ct * sinB)
        );

        if (y >= 0 && y < height && x >= 0 && x < width && D > z[o]) {
          z[o] = D;
          const charIndex = Math.max(0, Math.min(chars.length - 1, N > 0 ? N % chars.length : 0));
          b[o] = chars[charIndex];
        }
      }
    }

    let res = "";
    for (let k = 0; k < width * height; k++) {
      res += b[k];
      if ((k + 1) % width === 0) res += "\n";
    }
    return res;
  }, [chars]);

  // Sine Waveform
  const renderWave = useCallback((width: number, height: number) => {
    stateRef.current.wavePhase += 0.08;
    const { wavePhase } = stateRef.current;
    const b: string[] = Array(width * height).fill(" ");

    for (let x = 0; x < width; x++) {
      const freq1 = Math.sin(x * 0.15 + wavePhase);
      const freq2 = Math.cos(x * 0.08 - wavePhase * 0.7);
      const combined = (freq1 + freq2) * 0.5;

      const y = Math.floor(height / 2 + combined * (height / 2 - 2));
      if (y >= 0 && y < height) {
        const idx = x + y * width;
        b[idx] = "●";

        // Vertical harmonic tracer lines
        for (let traceY = y + 1; traceY < height; traceY += 2) {
          const tIdx = x + traceY * width;
          if (b[tIdx] === " ") b[tIdx] = "·";
        }
      }
    }

    let res = "";
    for (let k = 0; k < width * height; k++) {
      res += b[k];
      if ((k + 1) % width === 0) res += "\n";
    }
    return res;
  }, []);

  // Matrix Rain
  const matrixDrops = useRef<number[]>([]);
  const renderMatrix = useCallback((width: number, height: number) => {
    if (matrixDrops.current.length !== width) {
      matrixDrops.current = Array(width).fill(0).map(() => Math.floor(Math.random() * height));
    }

    const b: string[] = Array(width * height).fill(" ");
    const alphabet = "0123456789ABCDEF!@#$%^&*<>[]{}";

    for (let x = 0; x < width; x++) {
      const dropY = matrixDrops.current[x];
      for (let trail = 0; trail < 6; trail++) {
        const y = dropY - trail;
        if (y >= 0 && y < height) {
          const idx = x + y * width;
          const char = alphabet[Math.floor(Math.random() * alphabet.length)];
          b[idx] = trail === 0 ? "█" : char;
        }
      }

      if (Math.random() > 0.05) {
        matrixDrops.current[x] = (dropY + 1) % (height + 6);
      }
    }

    let res = "";
    for (let k = 0; k < width * height; k++) {
      res += b[k];
      if ((k + 1) % width === 0) res += "\n";
    }
    return res;
  }, []);

  // Sphere 3D
  const renderSphere = useCallback((width: number, height: number) => {
    stateRef.current.A += 0.03;
    stateRef.current.B += 0.02;
    const { A, B } = stateRef.current;

    const b: string[] = Array(width * height).fill(" ");
    const radius = Math.min(width, height * 2) * 0.38;

    for (let theta = 0; theta < Math.PI; theta += 0.12) {
      for (let phi = 0; phi < 2 * Math.PI; phi += 0.12) {
        const x = radius * Math.sin(theta) * Math.cos(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(theta);

        // Rotate
        const x1 = x * Math.cos(B) - z * Math.sin(B);
        const z1 = x * Math.sin(B) + z * Math.cos(B);

        const y2 = y * Math.cos(A) - z1 * Math.sin(A);
        const z2 = y * Math.sin(A) + z1 * Math.cos(A);

        const ooz = 1 / (z2 + radius * 2.2);
        const xp = Math.floor(width / 2 + x1 * ooz * 32);
        const yp = Math.floor(height / 2 + y2 * ooz * 16);

        if (xp >= 0 && xp < width && yp >= 0 && yp < height) {
          const idx = xp + yp * width;
          const charIdx = Math.floor(((z2 + radius) / (2 * radius)) * (chars.length - 1));
          b[idx] = chars[Math.max(0, Math.min(chars.length - 1, charIdx))];
        }
      }
    }

    let res = "";
    for (let k = 0; k < width * height; k++) {
      res += b[k];
      if ((k + 1) % width === 0) res += "\n";
    }
    return res;
  }, [chars]);

  useEffect(() => {
    const width = 52;
    const height = 20;

    let lastTick = 0;
    const interval = mode === "matrix" ? 50 : 33; // ~30-20fps for authentic retro terminal feel

    const loop = (time: number) => {
      if (time - lastTick > interval) {
        lastTick = time;
        if (mode === "donut") setOutput(renderDonut(width, height));
        else if (mode === "wave") setOutput(renderWave(width, height));
        else if (mode === "matrix") setOutput(renderMatrix(width, height));
        else if (mode === "sphere") setOutput(renderSphere(width, height));
      }
      reqRef.current = requestAnimationFrame(loop);
    };

    reqRef.current = requestAnimationFrame(loop);
    return () => {
      if (reqRef.current) cancelAnimationFrame(reqRef.current);
    };
  }, [mode, renderDonut, renderWave, renderMatrix, renderSphere]);

  return (
    <section id="lab" className="py-20 brutalist-border-b bg-[#141618]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 brutalist-border-b">
          <div>
            <div className="font-mono text-xs text-[#7aa287] uppercase tracking-widest mb-1">
              /* 03 // INTERACTIVE EXPERIMENT */
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-[#edece6] tracking-tight uppercase">
              ASCII MATRIX LAB
            </h2>
          </div>
          <div className="mt-3 md:mt-0 font-mono text-xs text-[#a2a7af]">
            REAL-TIME TEXT-MODE RASTERIZER // 0-CANVAS OVERHEAD
          </div>
        </div>

        {/* Interactive Workspace */}
        <div className="lab-terminal-container flex flex-col lg:grid lg:grid-cols-12 gap-6 items-stretch">
          {/* Main ASCII Screen (Cols 1-8) */}
          <div className="lg:col-span-8 bg-[#0c0d0e] border border-[#25282e] p-3.5 sm:p-5 shadow-2xl flex flex-col justify-between">
            <div className="flex items-center justify-between font-mono text-[10px] sm:text-[11px] text-[#646872] pb-3 border-b border-[#25282e]">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#7aa287]" />
                <span className="text-[#edece6] uppercase font-bold text-xs">MODE: {mode.toUpperCase()}</span>
              </div>
              <span>BUFFER: 52×20</span>
            </div>

            {/* ASCII Output Screen */}
            <div className="my-3 sm:my-4 p-2 sm:p-4 bg-[#0c0d0e] border border-[#25282e]/50 flex items-center justify-center overflow-x-auto min-h-[260px] sm:min-h-[300px]">
              <pre
                className={`font-mono text-[8px] xs:text-[9.5px] sm:text-[11px] md:text-xs leading-none select-none tracking-normal ${
                  mode === "wave"
                    ? "text-[#62829a]"
                    : mode === "matrix"
                    ? "text-[#7aa287]"
                    : mode === "sphere"
                    ? "text-[#8f80a3]"
                    : "text-[#edece6]"
                }`}
              >
                {output}
              </pre>
            </div>

            {/* Bottom Status bar */}
            <div className="pt-2 border-t border-[#25282e] flex flex-wrap items-center justify-between font-mono text-[9px] sm:text-[10px] text-[#646872] gap-1">
              <span>ENCODING: US-ASCII 7-BIT</span>
              <span className="text-[#7aa287]">[ REACTIVE TO TICK ]</span>
            </div>
          </div>

          {/* Control Console (Cols 9-12) */}
          <div className="lg:col-span-4 bg-[#0c0d0e] border border-[#25282e] p-4 sm:p-5 flex flex-col justify-between">
            <div>
              <div className="font-mono text-[10px] text-[#646872] uppercase tracking-wider mb-2.5 sm:mb-3">
                GEOMETRY ENGINE
              </div>
              <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                {(["donut", "sphere", "wave", "matrix"] as AsciiMode[]).map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => {
                      playClick();
                      setMode(m);
                    }}
                    data-cursor="SELECT"
                    className={`p-3 sm:p-2.5 border text-left uppercase transition-all min-h-[44px] flex flex-col justify-center ${
                      mode === m
                        ? "border-[#7aa287] bg-[#7aa287]/15 text-[#edece6] font-bold"
                        : "border-[#25282e] text-[#a2a7af] hover:text-[#edece6] hover:border-[#646872] active:bg-[#141618]"
                    }`}
                  >
                    <span className="text-[9px] text-[#7aa287] block mb-0.5">
                      {mode === m ? "● ACTIVE" : "○ SELECT"}
                    </span>
                    <span className="text-xs font-semibold">{m}</span>
                  </button>
                ))}
              </div>

              {/* Character set density palette */}
              <div className="mt-6 pt-4 border-t border-[#25282e]">
                <div className="font-mono text-[10px] text-[#646872] uppercase tracking-wider mb-2">
                  CHARACTER DENSITY PALETTE
                </div>
                <div className="space-y-1.5 font-mono text-xs">
                  {[
                    { id: "default", label: "STANDARD GLYPHS (.,-~:;=!*#$@)" },
                    { id: "cyber", label: "CYBER PROTOCOL (10/\\<>[]{})" },
                    { id: "heavy", label: "HIGH CONTRAST (@#%*+=-:. )" },
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => {
                        playBlip(680, 0.02);
                        setDensityChar(p.id);
                      }}
                      className={`w-full text-left p-2 border transition-colors text-[11px] ${
                        densityChar === p.id
                          ? "border-[#62829a] bg-[#62829a]/15 text-[#edece6]"
                          : "border-[#25282e] text-[#646872] hover:text-[#a2a7af]"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
