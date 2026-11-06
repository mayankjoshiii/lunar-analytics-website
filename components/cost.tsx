"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { cost } from "@/content/site";
import { CountingNumber } from "./counting-number";
import { Corners, Reveal, SectionHead, Stagger, ease, staggerChild } from "./reveal";

const barTone = {
  hire: "bg-rose/70",
  featured: "gold-gradient",
  plan: "bg-gold/35",
} as const;

const valueTone = {
  hire: "text-rose",
  featured: "text-gold",
  plan: "text-foreground",
} as const;

export function Cost() {
  const max = Math.max(...cost.bars.map((b) => b.value));
  const listRef = useRef<HTMLUListElement>(null);
  const inView = useInView(listRef, { once: true, margin: "-10% 0px" });

  return (
    <section id="why" aria-labelledby="why-title" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHead id="why-title" eyebrow={cost.eyebrow} titleTop={cost.titleTop} titleAccent={cost.titleAccent} />
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{cost.body}</p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="card relative p-6 sm:p-8">
              <Corners />
              <p className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">Cost per year</p>
              <ul ref={listRef} className="mt-6 space-y-6">
                {cost.bars.map((b, i) => (
                  <li key={b.label}>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="flex flex-wrap items-center gap-2 text-[15px]">
                        {b.label}
                        {b.kind === "featured" && (
                          <span className="rounded-full bg-gold/12 px-2 py-0.5 font-mono text-[9.5px] tracking-[0.12em] text-gold uppercase shadow-[inset_0_0_0_1px_rgb(245_200_66/0.3)]">
                            Recommended
                          </span>
                        )}
                      </span>
                      <span className={`font-display text-2xl sm:text-[1.7rem] ${valueTone[b.kind]}`}>
                        <CountingNumber value={b.value} prefix="£" delay={0.1 * i} />
                      </span>
                    </div>
                    <div className="mt-2.5 h-2.5 overflow-hidden rounded-full bg-white/[0.05]">
                      <motion.div
                        className={`h-full rounded-full ${barTone[b.kind]}`}
                        style={{ width: `${(b.value / max) * 100}%`, transformOrigin: "left" }}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: inView ? 1 : 0 }}
                        transition={{ duration: 1, delay: 0.15 + i * 0.12, ease }}
                      />
                    </div>
                    <p className="mt-1.5 text-xs text-muted-foreground">{b.note}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-8 border-t border-line pt-5 text-xs leading-relaxed text-muted-foreground">{cost.footnote}</p>
            </div>
          </Reveal>
        </div>

        <Stagger className="mt-16 grid gap-4 md:grid-cols-3">
          {cost.pains.map((p) => (
            <motion.div key={p.title} variants={staggerChild} className="card relative p-6 sm:p-7">
              <span className="flex size-10 items-center justify-center rounded-xl bg-gold/10 text-gold shadow-[inset_0_0_0_1px_rgb(245_200_66/0.2)]">
                <p.icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-5 text-lg font-medium">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{p.text}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
