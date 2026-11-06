"use client";

import { useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Check } from "lucide-react";
import { challenges } from "@/content/site";
import { Corners, Reveal, SectionHead, ease } from "./reveal";

export function Challenges() {
  const [active, setActive] = useState(challenges.items[0].id);
  const pillId = useId();
  const tabsRef = useRef<HTMLDivElement>(null);
  const index = challenges.items.findIndex((c) => c.id === active);
  const item = challenges.items[index];

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const n = challenges.items.length;
    const next = (index + (e.key === "ArrowRight" ? 1 : -1) + n) % n;
    setActive(challenges.items[next].id);
    tabsRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]?.focus();
  };

  return (
    <section id="services" aria-labelledby="services-title" className="relative border-y border-line bg-surface/30 py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead id="services-title" eyebrow={challenges.eyebrow} titleTop={challenges.title} />

        <Reveal delay={0.2}>
          <div
            ref={tabsRef}
            role="tablist"
            aria-label="Common problems"
            onKeyDown={onKeyDown}
            className="-mx-5 mt-12 flex gap-1.5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] md:mx-0 md:flex-wrap md:px-0"
          >
            {challenges.items.map((c) => {
              const on = c.id === active;
              return (
                <button
                  key={c.id}
                  type="button"
                  role="tab"
                  id={`tab-${c.id}`}
                  aria-selected={on}
                  aria-controls={`panel-${c.id}`}
                  tabIndex={on ? 0 : -1}
                  onClick={() => setActive(c.id)}
                  className={`relative flex h-11 shrink-0 items-center gap-2 rounded-full px-4 text-sm font-medium transition-colors duration-200 ${
                    on ? "text-background" : "text-muted-foreground shadow-[inset_0_0_0_1px_rgb(255_255_255/0.09)] hover:text-foreground"
                  }`}
                >
                  {on && (
                    <motion.span
                      layoutId={pillId}
                      className="gold-gradient absolute inset-0 rounded-full"
                      transition={{ type: "spring", bounce: 0, duration: 0.45 }}
                    />
                  )}
                  <c.icon className="relative size-4" aria-hidden />
                  <span className="relative whitespace-nowrap">{c.tab}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="relative mt-6">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={item.id}
              role="tabpanel"
              id={`panel-${item.id}`}
              aria-labelledby={`tab-${item.id}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease }}
              className="card relative grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.2fr_1fr]"
            >
              <Corners />
              <div>
                <span className="flex size-12 items-center justify-center rounded-2xl bg-gold/10 text-gold shadow-[inset_0_0_0_1px_rgb(245_200_66/0.22)]">
                  <item.icon className="size-6" aria-hidden />
                </span>
                <h3 className="mt-6 font-display text-3xl leading-tight md:text-[2.5rem]">{item.title}</h3>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">{item.text}</p>
                {item.demo && (
                  <a
                    href={item.demo.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-gold transition-colors hover:text-gold-soft"
                  >
                    {item.demo.label}
                    <ArrowUpRight className="size-4" aria-hidden />
                  </a>
                )}
              </div>
              <div className="rounded-2xl bg-white/[0.025] p-6 shadow-[inset_0_0_0_1px_rgb(255_255_255/0.06)]">
                <p className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">What you get</p>
                <ul className="mt-5 space-y-4">
                  {item.deliver.map((x) => (
                    <li key={x} className="flex gap-3">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                        <Check className="size-3" strokeWidth={3} aria-hidden />
                      </span>
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
