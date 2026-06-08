'use client'

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

/**
 * Site-wide premium animated background.
 * Layered: grid + moon-glow + constellation canvas + drifting data points.
 * Tuned for performance: single canvas, low node count, reduced-motion aware.
 */
export function SiteBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    type P = { x: number; y: number; vx: number; vy: number; r: number };
    let points: P[] = [];

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const target = Math.min(70, Math.floor((w * h) / 22000));
      points = Array.from({ length: target }).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.4 + 0.6,
      }));
    };

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      // Lines
      for (let i = 0; i < points.length; i++) {
        const a = points[i];
        a.x += a.vx;
        a.y += a.vy;
        if (a.x < 0 || a.x > w) a.vx *= -1;
        if (a.y < 0 || a.y > h) a.vy *= -1;
        for (let j = i + 1; j < points.length; j++) {
          const b = points[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 140 * 140) {
            const o = 1 - Math.sqrt(d2) / 140;
            ctx.strokeStyle = `rgba(245,200,66,${o * 0.18})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      // Dots
      for (const p of points) {
        ctx.fillStyle = "rgba(245,200,66,0.55)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener("resize", resize);
    if (!reduced) raf = requestAnimationFrame(tick);
    else {
      // single static frame
      tick();
      cancelAnimationFrame(raf);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base radial vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 800px at 75% -10%, rgba(245,200,66,0.10), transparent 60%), radial-gradient(900px 700px at 10% 110%, rgba(79,70,229,0.18), transparent 60%), radial-gradient(700px 500px at 50% 50%, rgba(30,58,138,0.18), transparent 70%)",
        }}
      />
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 85%)",
        }}
      />
      {/* Drifting aurora blobs */}
      <motion.div
        className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full blur-[140px]"
        style={{ background: "radial-gradient(circle, rgba(245,200,66,0.22), transparent 60%)" }}
        animate={{ x: [0, 80, -40, 0], y: [0, 60, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 -right-40 h-[620px] w-[620px] rounded-full blur-[160px]"
        style={{ background: "radial-gradient(circle, rgba(79,70,229,0.28), transparent 60%)" }}
        animate={{ x: [0, -90, 30, 0], y: [0, -50, 40, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full blur-[140px]"
        style={{ background: "radial-gradient(circle, rgba(30,58,138,0.32), transparent 60%)" }}
        animate={{ x: [0, 60, -60, 0], y: [0, -40, 20, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Moon */}
      <motion.div
        className="absolute right-[8%] top-[12%] h-40 w-40 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, #FCE9A8 0%, #F5C842 35%, #8a6a1f 75%, transparent 78%)",
          boxShadow: "0 0 80px 10px rgba(245,200,66,0.25)",
        }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Constellation canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* Scanline shimmer (data stream feel) */}
      <motion.div
        className="absolute inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(245,200,66,0.55), transparent)" }}
        animate={{ y: ["0vh", "100vh"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      />

      {/* Subtle noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.7'/></svg>\")",
        }}
      />
    </div>
  );
}
