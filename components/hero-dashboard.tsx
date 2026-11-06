"use client";

import { motion } from "motion/react";
import { heroDashboard as d } from "@/content/site";
import { BorderBeam } from "@/components/ui/border-beam";
import { Link001 } from "@/components/ui/skiper-ui/skiper40";
import { CountingNumber } from "./counting-number";
import { ease } from "./reveal";

const W = 560;
const H = 170;
const mixColors = ["bg-gold", "bg-gold/55", "bg-indigo"];
const toneClass = { down: "text-rose", up: "text-mint", flat: "text-muted-foreground" } as const;

function points(values: number[], min: number, max: number) {
  const step = W / (values.length - 1);
  return values.map((v, i) => [i * step, H - ((v - min) / (max - min)) * H] as const);
}

function toPath(pts: readonly (readonly [number, number])[]) {
  return pts.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
}

export function HeroDashboard() {
  const all = [...d.actual, ...d.budget];
  const min = Math.min(...all) - 30;
  const max = Math.max(...all) + 30;
  const actualPts = points(d.actual, min, max);
  const actual = toPath(actualPts);
  const budget = toPath(points(d.budget, min, max));
  const area = `${actual} L${W},${H} L0,${H} Z`;

  return (
    <motion.figure
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.75, ease }}
      className="card relative p-4 sm:p-6"
      style={{ background: "linear-gradient(180deg, rgb(17 25 44 / 0.97), rgb(8 12 24 / 0.98))" }}
      aria-label="Example dashboard from the Financial KPI demo, using illustrative sample data"
    >
      <BorderBeam size={280} duration={14} colorFrom="#f9dc85" colorTo="#f5c842" borderWidth={1.5} />

      <div className="flex items-center justify-between gap-3 border-b border-white/[0.06] pb-4">
        <div className="flex min-w-0 items-center gap-3">
          <span className="hidden gap-1.5 sm:flex" aria-hidden>
            <span className="size-2.5 rounded-full bg-white/15" />
            <span className="size-2.5 rounded-full bg-white/15" />
            <span className="size-2.5 rounded-full bg-white/15" />
          </span>
          <span className="truncate text-sm font-medium">{d.title}</span>
          <span className="hidden font-mono text-[10px] tracking-[0.12em] text-muted-foreground uppercase md:inline">
            {d.period} · all regions
          </span>
        </div>
        <span className="shrink-0 rounded-full bg-gold/10 px-2.5 py-1 font-mono text-[9.5px] tracking-[0.14em] text-gold uppercase shadow-[inset_0_0_0_1px_rgb(245_200_66/0.25)]">
          {d.badge}
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4">
        {d.kpis.map((k, i) => (
          <div key={k.label} className="rounded-2xl bg-white/[0.03] p-3 shadow-[inset_0_0_0_1px_rgb(255_255_255/0.06)] sm:p-4">
            <p className="font-mono text-[9px] tracking-[0.13em] text-muted-foreground uppercase sm:text-[10px]">{k.label}</p>
            <p className="mt-2.5 font-display text-2xl leading-none sm:text-[2rem]">
              <CountingNumber value={k.value} decimals={k.decimals} prefix={k.prefix} suffix={k.suffix} delay={1.1 + i * 0.12} />
            </p>
            <p className={`mt-2 text-[11px] leading-tight ${toneClass[k.tone]}`}>{k.delta}</p>
          </div>
        ))}
      </div>

      <div className="mt-3 grid gap-3 lg:grid-cols-[1.75fr_1fr]">
        <div className="rounded-2xl bg-white/[0.02] p-4 shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)] sm:p-5">
          <div className="flex items-center justify-between gap-2">
            <p className="font-mono text-[9px] tracking-[0.13em] text-muted-foreground uppercase sm:text-[10px]">Monthly revenue, £K</p>
            <div className="flex items-center gap-3 text-[10.5px] text-muted-foreground">
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
          <svg viewBox={`0 0 ${W} ${H}`} className="mt-4 h-auto w-full overflow-visible" aria-hidden>
            <defs>
              <linearGradient id="hero-area" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#F5C842" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#F5C842" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[0.25, 0.5, 0.75].map((t) => (
              <line key={t} x1="0" x2={W} y1={H * t} y2={H * t} stroke="rgb(255 255 255 / 0.06)" strokeWidth="1" />
            ))}
            <motion.path d={area} fill="url(#hero-area)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8, duration: 0.8 }} />
            <motion.path
              d={budget}
              fill="none"
              stroke="rgb(255 255 255 / 0.45)"
              strokeWidth="1.5"
              strokeDasharray="5 6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
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
              transition={{ delay: 1.15, duration: 1.4, ease }}
            />
            {actualPts.map(([x, y], i) => (
              <motion.circle
                key={i}
                cx={x}
                cy={y}
                r="4"
                fill="#070b15"
                stroke="#F5C842"
                strokeWidth="2"
                initial={{ opacity: 0, scale: 0.25 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.35 + i * 0.25, type: "spring", duration: 0.35, bounce: 0 }}
              />
            ))}
          </svg>
          <div className="mt-2 flex justify-between font-mono text-[9.5px] text-muted-foreground">
            {d.months.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        </div>

        <div className="flex flex-col rounded-2xl bg-white/[0.02] p-4 shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)] sm:p-5">
          <p className="font-mono text-[9px] tracking-[0.13em] text-muted-foreground uppercase sm:text-[10px]">Revenue mix by category</p>
          <ul className="mt-5 flex-1 space-y-4">
            {d.mix.map((m, i) => (
              <li key={m.label}>
                <div className="flex items-center justify-between text-[12.5px]">
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <span className={`size-2 rounded-full ${mixColors[i]}`} aria-hidden />
                    {m.label}
                  </span>
                  <span className="text-foreground/90 tabular-nums">{m.share}%</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/[0.05]">
                  <motion.div
                    className={`h-full rounded-full ${mixColors[i]}`}
                    style={{ width: `${m.share}%`, transformOrigin: "left" }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.45 + i * 0.15, duration: 0.8, ease }}
                  />
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-5 border-t border-white/[0.06] pt-4 font-mono text-[9.5px] tracking-[0.12em] text-muted-foreground uppercase">
            {d.note}
          </p>
        </div>
      </div>

      <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs">
        <span className="text-muted-foreground">Illustrative sample data, not a client</span>
        <Link001 href={d.href} className="text-gold">
          Open the live demo
        </Link001>
      </figcaption>
    </motion.figure>
  );
}
