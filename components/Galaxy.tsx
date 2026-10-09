"use client";

import { useEffect, useRef } from "react";

const COLORS = ["#a9f5c1", "#74d89a", "#c4b4ff", "#8d54ff", "#a2f4fd", "#ffffff"];

type Star = { x: number; y: number; z: number; r: number; tw: number };
type Particle = { d: number; a: number; off: number; r: number; c: string };

/** Animated spiral galaxy + parallax starfield rendered behind the page. */
export default function Galaxy() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current!;
    const ctx = cv.getContext("2d")!;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W = 0, H = 0, DPR = 1, t = 0, raf = 0;
    let mx = 0, my = 0, tmx = 0, tmy = 0;
    let stars: Star[] = [];
    let arms: Particle[] = [];

    const resize = () => {
      DPR = Math.min(devicePixelRatio || 1, 2);
      W = cv.width = innerWidth * DPR;
      H = cv.height = innerHeight * DPR;
      cv.style.width = innerWidth + "px";
      cv.style.height = innerHeight + "px";
      const n = Math.min(260, Math.floor((innerWidth * innerHeight) / 7000));
      stars = Array.from({ length: n }, () => ({
        x: Math.random() * W, y: Math.random() * H, z: Math.random() * 0.9 + 0.1,
        r: Math.random() * 1.3 + 0.2, tw: Math.random() * Math.PI * 2,
      }));
      const m = innerWidth < 700 ? 900 : 1800;
      arms = Array.from({ length: m }, () => {
        const arm = Math.floor(Math.random() * 3);
        const d = Math.pow(Math.random(), 1.6);
        return {
          d,
          a: arm * ((Math.PI * 2) / 3) + d * 5.2 + (Math.random() - 0.5) * (0.9 - d * 0.5),
          off: (Math.random() - 0.5) * 0.08,
          r: Math.random() * 1.3 + 0.3,
          c: COLORS[Math.random() < 0.6 ? (Math.random() < 0.5 ? 0 : 1) : Math.floor(Math.random() * COLORS.length)],
        };
      });
    };

    const frame = () => {
      t += 0.0009;
      mx += (tmx - mx) * 0.05;
      my += (tmy - my) * 0.05;
      ctx.clearRect(0, 0, W, H);

      for (const s of stars) {
        s.tw += 0.02;
        ctx.globalAlpha = (0.35 + Math.sin(s.tw) * 0.3) * s.z;
        ctx.fillStyle = "#e2e8f0";
        ctx.beginPath();
        ctx.arc(s.x + mx * 30 * s.z * DPR, s.y + my * 30 * s.z * DPR, s.r * DPR, 0, 7);
        ctx.fill();
      }

      const cx = W * (innerWidth < 1024 ? 0.5 : 0.72) + mx * 40 * DPR;
      const cy = H * 0.42 + my * 30 * DPR;
      const R = Math.min(W, H) * 0.52;
      const tilt = 0.42 + my * 0.05;
      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 0.45);
      glow.addColorStop(0, "rgba(169,245,193,.22)");
      glow.addColorStop(0.4, "rgba(141,84,255,.08)");
      glow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.globalAlpha = 1;
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.ellipse(cx, cy, R * 0.45, R * 0.45 * tilt * 1.6, 0, 0, 7);
      ctx.fill();

      for (const p of arms) {
        const a = p.a + t * (1.6 - p.d);
        const rr = p.d * R;
        ctx.globalAlpha = (1 - p.d) * 0.85 + 0.1;
        ctx.fillStyle = p.c;
        ctx.beginPath();
        ctx.arc(cx + Math.cos(a) * rr + p.off * R, cy + Math.sin(a) * rr * tilt + p.off * R * tilt, p.r * DPR, 0, 7);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      if (!reduce) raf = requestAnimationFrame(frame);
    };

    const onMove = (e: PointerEvent) => {
      tmx = e.clientX / innerWidth - 0.5;
      tmy = e.clientY / innerHeight - 0.5;
    };

    resize();
    frame();
    addEventListener("resize", resize);
    addEventListener("pointermove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("resize", resize);
      removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <>
      <canvas id="galaxy" ref={ref} aria-hidden="true" />
      <div className="fx" aria-hidden="true">
        <div className="hero-orb orb-a" />
        <div className="hero-orb orb-b" />
        <div className="depth-orb d1" />
        <div className="depth-orb d2" />
        <div className="depth-orb d3" />
        <div className="grid-bg" />
      </div>
    </>
  );
}
