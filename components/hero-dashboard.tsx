"use client";

import { motion } from "motion/react";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { heroDashboard as d } from "@/content/site";
import { CountingNumber } from "./counting-number";
import { Corners, ease } from "./reveal";

const W = 300;
const H = 110;
const mixColors = ["bg-gold", "bg-gold/50", "bg-indigo"];

function linePath(values: number[], min: number, max: number) {
  const step = W / (values.length - 1);
  return values
    .map((v, i) => `${i === 0 ? "M" : "L"}${(i * step).toFixed(1)},${(H - ((v - min) / (max - min)) * H).toFixed(1)}`)
    .join(" ");
}

export function HeroDashboard() {
  const all = [...d.actual, ...d.budget];
  const min = Math.min(...all) - 25;
  const max = Math.max(...all) + 25;
  const actual = linePath(d.actual, min, max);
  const budget = linePath(d.budget, min, max);
  const area = `${actual} L${W},${H} L0,${H} Z`;

  return (
    <motion.figure
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.4, ease }}
      className="card relative mx-auto w-full max-w-[30rem] p-5 sm:p-6"
      style={{ background: "linear-gradient(180deg, rgb(17 25 44 / 0.96), rgb(9 14 27 / 0.97))" }}
      aria-label="Example dashboard from the Financial KPI demo, using illustrative sample data"
    >
      <Corners className="border-gold/45" />

      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="hidden gap-1.5 sm:flex" aria-hidden>
            <span className="size-2 rounded-full bg-white/15" />
            <span className="size-2 rounded-full bg-white/15" />
            <span className="size-2 rounded-full bg-white/15" />
          </span>
          <span className="truncate text-[13px] font-medium">{d.title}</span>
        </div>
        <span className="shrink-0 rounded-full bg-gold/10 px-2.5 py-1 font-mono text-[9.5px] tracking-[0.14em] text-gold uppercase shadow-[inset_0_0_0_1px_rgb(245_200_66/0.25)]">
          {d.badge}
        </span>
      </div>
      <p className="mt-1.5 font-mono text-[10px] tracking-[0.12em] text-muted-foreground uppercase">{d.period} · all regions</p>

      <div className="mt-5 grid grid-cols-3 gap-2.5">
        {d.kpis.map((k, i) => (
          <div key={k.label} className="rounded-2xl bg-white/[0.03] p-2.5 shadow-[inset_0_0_0_1px_rgb(255_255_255/0.06)] sm:p-3">
            <p className="font-mono text-[9px] tracking-[0.13em] text-muted-foreground uppercase">{k.label}</p>
            <p className="mt-2 font-display text-[1.2rem] leading-none sm:text-2xl">
              <CountingNumber value={k.value} decimals={k.decimals} prefix={k.prefix} suffix={k.suffix} delay={0.75 + i * 0.12} />
            </p>
            <p className={`mt-1.5 text-[10.5px] leading-tight ${k.tone === "down" ? "text-rose" : "text-muted-foreground"}`}>{k.delta}</p>
          </div>
        ))}
      </div>

      <div className="mt-3 rounded-2xl bg-white/[0.02] p-3.5 shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]">
        <div className="flex items-center justify-between gap-2">
          <p className="font-mono text-[9px] tracking-[0.13em] text-muted-foreground uppercase">Monthly revenue, £K</p>
          <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="h-0.5 w-3 rounded bg-gold" aria-hidden />
              Actual
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 border-t border-dashed border-white/55" aria-hidden />
              Budget
            </span>
          </div>
        </div>
        <svg viewBox={`0 0 ${W} ${H}`} className="mt-3 h-auto w-full overflow-visible" aria-hidden>
          <defs>
            <linearGradient id="hero-area" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#F5C842" stopOpacity="0.26" />
              <stop offset="100%" stopColor="#F5C842" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[0.25, 0.5, 0.75].map((t) => (
            <line key={t} x1="0" x2={W} y1={H * t} y2={H * t} stroke="rgb(255 255 255 / 0.06)" strokeWidth="1" />
          ))}
          <motion.path d={area} fill="url(#hero-area)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.8 }} />
          <motion.path
            d={budget}
            fill="none"
            stroke="rgb(255 255 255 / 0.45)"
            strokeWidth="1.5"
            strokeDasharray="4 5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          />
          <motion.path
            d={actual}
            fill="none"
            stroke="#F5C842"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.85, duration: 1.4, ease }}
          />
          {d.actual.map((v, i) => (
            <motion.circle
              key={i}
              cx={(i * W) / (d.actual.length - 1)}
              cy={H - ((v - min) / (max - min)) * H}
              r="3.5"
              fill="#070b15"
              stroke="#F5C842"
              strokeWidth="2"
              initial={{ opacity: 0, scale: 0.25 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.05 + i * 0.25, type: "spring", duration: 0.35, bounce: 0 }}
            />
          ))}
        </svg>
        <div className="mt-2 flex justify-between font-mono text-[9.5px] text-muted-foreground">
          {d.months.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
      </div>

      <div className="mt-3 rounded-2xl bg-white/[0.02] p-3.5 shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]">
        <div className="flex items-center justify-between gap-2">
          <p className="font-mono text-[9px] tracking-[0.13em] text-muted-foreground uppercase">Revenue mix</p>
          <p className="flex items-center gap-1 text-[10.5px] text-mint">
            <TrendingUp className="size-3" aria-hidden />
            {d.growth}
          </p>
        </div>
        <div className="mt-2.5 flex h-2.5 gap-0.5 overflow-hidden rounded-full">
          {d.mix.map((m, i) => (
            <motion.span
              key={m.label}
              style={{ width: `${m.share}%`, transformOrigin: "left" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2 + i * 0.15, duration: 0.7, ease }}
              className={`h-full rounded-full ${mixColors[i]}`}
            />
          ))}
        </div>
        <div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1 text-[10.5px] text-muted-foreground">
          {d.mix.map((m, i) => (
            <span key={m.label} className="flex items-center gap-1.5">
              <span className={`size-2 rounded-full ${mixColors[i]}`} aria-hidden />
              {m.label} <span className="text-foreground/80 tabular-nums">{m.share}%</span>
            </span>
          ))}
        </div>
      </div>

      <figcaption className="mt-4 flex items-center justify-between gap-3 text-[11px]">
        <span className="text-muted-foreground">Illustrative sample data, not a client</span>
        <a
          href={d.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center gap-1 text-gold transition-colors hover:text-gold-soft"
        >
          Open the live demo
          <ArrowUpRight className="size-3.5" aria-hidden />
        </a>
      </figcaption>
    </motion.figure>
  );
}
