"use client";

import { useEffect, useRef, useState } from "react";

// A warped torus sampled into a character field, without an image payload.
function field(time: number, pointer: number) {
  const width = 88, height = 48;
  const chars = " .,:;+*x%#@";
  const rows: string[] = [];
  for (let y = 0; y < height; y++) {
    let row = "";
    for (let x = 0; x < width; x++) {
      const px = (x - width / 2) / 22, py = (y - height / 2) / 13;
      const angle = Math.atan2(py, px);
      const radius = Math.hypot(px, py);
      const ring = 1.08 + .23 * Math.sin(angle * 3 + time) + .12 * Math.cos(angle * 5 - time * .6);
      const thickness = .34 + .13 * Math.sin(angle * 2 - time + pointer);
      const distance = Math.abs(radius - ring);
      const light = Math.max(0, 1 - distance / thickness);
      const shade = light * (.64 + .36 * Math.sin(angle - time * .2));
      row += distance < thickness ? chars[Math.max(1, Math.floor(shade * (chars.length - 1)))] : " ";
    }
    rows.push(row);
  }
  return rows.join("\n");
}

export function OrganicAscii() {
  const ref = useRef<HTMLDivElement>(null);
  const pre = useRef<HTMLPreElement>(null);
  const pointer = useRef(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false, frame = 0, last = 0;
    const draw = (now: number) => {
      frame = 0;
      if (!visible || document.hidden || media.matches || paused) return;
      if (now - last > 65) {
        if (pre.current) pre.current.textContent = field(now * .0003, pointer.current);
        last = now;
      }
      frame = requestAnimationFrame(draw);
    };
    const sync = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      if (visible && !document.hidden && !media.matches && !paused) frame = requestAnimationFrame(draw);
    };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); });
    if (ref.current) observer.observe(ref.current);
    media.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      media.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
    };
  }, [paused]);
  return <div ref={ref} className="organic-art" onPointerMove={e => { const bounds = e.currentTarget.getBoundingClientRect(); pointer.current = (e.clientX - bounds.left) / bounds.width * 3; }}>
    <pre ref={pre} aria-hidden="true">{field(0, 0)}</pre>
    <span className="sr-only">An organic acid-green sculpture rendered entirely from ASCII characters.</span>
    <div className="art-caption"><button type="button" aria-label={paused ? "Resume ASCII animation" : "Pause ASCII animation"} aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? "RESUME" : "PAUSE"} <span aria-hidden="true">{paused ? "+" : "Ⅱ"}</span></button></div>
  </div>;
}
