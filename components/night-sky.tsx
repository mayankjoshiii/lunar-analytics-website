"use client";

import { useEffect, useRef } from "react";

const LINK = 130;
const LINK_SQ = LINK * LINK;

export function NightSky() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let n = 0;
    let raf = 0;
    let xs = new Float32Array(0);
    let ys = new Float32Array(0);
    let vx = new Float32Array(0);
    let vy = new Float32Array(0);
    let rs = new Float32Array(0);

    const seed = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      n = Math.min(64, Math.floor((w * h) / 24000));
      xs = new Float32Array(n);
      ys = new Float32Array(n);
      vx = new Float32Array(n);
      vy = new Float32Array(n);
      rs = new Float32Array(n);
      for (let i = 0; i < n; i++) {
        xs[i] = Math.random() * w;
        ys[i] = Math.random() * h;
        vx[i] = (Math.random() - 0.5) * 0.22;
        vy[i] = (Math.random() - 0.5) * 0.22;
        rs[i] = Math.random() * 1.3 + 0.5;
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < n; i++) {
        const x = xs[i] + vx[i];
        const y = ys[i] + vy[i];
        if (x < 0 || x > w) vx[i] = -vx[i];
        if (y < 0 || y > h) vy[i] = -vy[i];
        xs[i] = x;
        ys[i] = y;
      }
      ctx.strokeStyle = "rgb(245,200,66)";
      ctx.lineWidth = 0.6;
      for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
          const dx = xs[i] - xs[j];
          const dy = ys[i] - ys[j];
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK_SQ) {
            ctx.globalAlpha = (1 - Math.sqrt(d2) / LINK) * 0.16;
            ctx.beginPath();
            ctx.moveTo(xs[i], ys[i]);
            ctx.lineTo(xs[j], ys[j]);
            ctx.stroke();
          }
        }
      }
      ctx.fillStyle = "rgb(245,200,66)";
      ctx.globalAlpha = 0.5;
      for (let i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.arc(xs[i], ys[i], rs[i], 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const loop = () => {
      draw();
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      cancelAnimationFrame(raf);
      if (reduce) draw();
      else raf = requestAnimationFrame(loop);
    };

    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else start();
    };

    const onResize = () => {
      seed();
      if (reduce) draw();
    };

    seed();
    start();
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1100px 700px at 80% -10%, rgb(245 200 66 / 0.08), transparent 60%), radial-gradient(900px 700px at 5% 105%, rgb(79 70 229 / 0.16), transparent 60%), radial-gradient(800px 600px at 50% 45%, rgb(30 58 138 / 0.14), transparent 70%)",
        }}
      />
      <canvas ref={ref} className="absolute inset-0 size-full" />
    </div>
  );
}
