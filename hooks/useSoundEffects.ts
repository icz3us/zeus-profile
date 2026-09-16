"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export function useSoundEffects() {
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    // Check localStorage preference
    const saved = localStorage.getItem("zeus_sound_fx");
    if (saved === "true") {
      setSoundEnabled(true);
    }
  }, []);

  const toggleSound = useCallback(() => {
    setSoundEnabled((prev) => {
      const next = !prev;
      localStorage.setItem("zeus_sound_fx", String(next));
      if (next && !audioCtxRef.current) {
        try {
          const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
          audioCtxRef.current = new AudioContextClass();
        } catch {
          // Ignore if audio context not supported
        }
      }
      return next;
    });
  }, []);

  const playBlip = useCallback((freq = 780, duration = 0.04, type: OscillatorType = "sine") => {
    if (!soundEnabled) return;
    try {
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioContextClass();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.7, ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Audio context error handler
    }
  }, [soundEnabled]);

  const playClick = useCallback(() => {
    playBlip(1200, 0.02, "triangle");
  }, [playBlip]);

  const playHum = useCallback(() => {
    playBlip(320, 0.08, "square");
  }, [playBlip]);

  const playSuccess = useCallback(() => {
    playBlip(520, 0.04, "sine");
    setTimeout(() => playBlip(880, 0.06, "sine"), 40);
  }, [playBlip]);

  return {
    soundEnabled,
    toggleSound,
    playBlip,
    playClick,
    playHum,
    playSuccess,
  };
}
