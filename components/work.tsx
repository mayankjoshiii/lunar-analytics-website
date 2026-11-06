"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { demos, msc, site, work, type DataKind } from "@/content/site";
import { CountingNumber } from "./counting-number";
import { GithubIcon } from "./icons";
import { Corners, Reveal, SectionHead, Stagger, staggerChild } from "./reveal";

const badge: Record<DataKind, string> = {
  real: "bg-mint/10 text-mint shadow-[inset_0_0_0_1px_rgb(74_222_128/0.28)]",
  sample: "bg-gold/10 text-gold shadow-[inset_0_0_0_1px_rgb(245_200_66/0.28)]",
  simulated: "bg-white/[0.05] text-muted-foreground shadow-[inset_0_0_0_1px_rgb(255_255_255/0.12)]",
};

export function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead id="work-title" eyebrow={work.eyebrow} titleTop={work.titleTop} titleAccent={work.titleAccent} intro={work.intro} />

        <Reveal delay={0.1}>
          <article className="card relative mt-14 grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
            <Corners className="border-gold/45" />
            <div>
              <p className="font-mono text-[10px] tracking-[0.16em] text-gold uppercase">{msc.label}</p>
              <h3 className="mt-4 font-display text-2xl leading-tight md:text-[2.1rem]">{msc.title}</h3>
              <p className="mt-5 leading-relaxed text-muted-foreground">{msc.text}</p>
              <p className="mt-4 leading-relaxed text-foreground/85">{msc.role}</p>
              <ul className="mt-6 space-y-3">
                {msc.findings.map((f) => (
                  <li key={f} className="flex gap-3 text-[15px] leading-relaxed">
                    <span className="mt-2.5 size-1.5 shrink-0 rotate-45 bg-gold" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-3 self-center">
              {msc.stats.map((s) => (
                <div key={s.label} className="rounded-2xl bg-white/[0.03] p-5 shadow-[inset_0_0_0_1px_rgb(255_255_255/0.06)]">
                  <p className="font-display text-3xl text-gold sm:text-4xl">
                    <CountingNumber value={s.value} decimals={s.decimals} suffix={s.suffix} />
                  </p>
                  <p className="mt-2 font-mono text-[10px] tracking-[0.14em] text-muted-foreground uppercase">{s.label}</p>
                </div>
              ))}
            </div>
          </article>
        </Reveal>

        <Stagger className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {demos.map((p) => (
            <motion.article
              key={p.title}
              variants={staggerChild}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", bounce: 0, duration: 0.35 }}
              className="card relative flex flex-col p-6"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">{p.category}</span>
                <span className={`shrink-0 rounded-full px-2.5 py-1 font-mono text-[9.5px] tracking-[0.12em] uppercase ${badge[p.data]}`}>
                  {p.dataLabel}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl leading-snug">{p.title}</h3>
              <p className="mt-2.5 flex-1 leading-relaxed text-muted-foreground">{p.desc}</p>
              {p.metrics && (
                <div className="mt-5 grid grid-cols-3 gap-2 rounded-2xl bg-black/25 p-3 shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]">
                  {p.metrics.map((m) => (
                    <div key={m.label} className="text-center">
                      <p className="font-display text-lg text-gold tabular-nums">{m.value}</p>
                      <p className="mt-0.5 font-mono text-[9px] tracking-[0.1em] text-muted-foreground uppercase">{m.label}</p>
                    </div>
                  ))}
                </div>
              )}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-md bg-white/[0.04] px-2 py-0.5 text-[11.5px] text-muted-foreground shadow-[inset_0_0_0_1px_rgb(255_255_255/0.07)]">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-2">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 flex-1 items-center justify-center gap-1.5 rounded-full bg-gold/10 text-sm font-medium text-gold shadow-[inset_0_0_0_1px_rgb(245_200_66/0.3)] transition-[background-color,scale] duration-150 hover:bg-gold/20 active:scale-[0.96]"
                >
                  Open demo
                  <ArrowUpRight className="size-4" aria-hidden />
                </a>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${p.title} source code on GitHub`}
                  className="flex size-10 items-center justify-center rounded-full text-muted-foreground shadow-[inset_0_0_0_1px_rgb(255_255_255/0.12)] transition-colors hover:text-foreground"
                >
                  <GithubIcon className="size-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </Stagger>

        <Reveal>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Everything is public on{" "}
            <a href={site.github} target="_blank" rel="noreferrer" className="text-gold transition-colors hover:text-gold-soft">
              github.com/mayankjoshiii
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
