"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { hero } from "@/content/site";
import { HeroDashboard } from "./hero-dashboard";
import { Moon } from "./moon";
import { ease } from "./reveal";
import { useScrollTo } from "./smooth-scroll";

function enter(i: number) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: 0.12 + i * 0.1, ease },
  };
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const scrollTo = useScrollTo();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const moonY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const moonOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.2]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section id="top" ref={ref} aria-labelledby="hero-title" className="relative isolate overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div aria-hidden className="grid-fade absolute inset-0 -z-10" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div>
          <motion.p {...enter(0)} className="flex items-center gap-3 font-mono text-[11px] tracking-[0.22em] text-gold uppercase">
            <span className="h-px w-8 bg-gold/70" aria-hidden />
            {hero.eyebrow}
          </motion.p>

          <h1 id="hero-title" className="mt-7 font-display text-[clamp(2.75rem,6.2vw,5.25rem)] leading-[1.02] tracking-[-0.045em]">
            <motion.span {...enter(1)} className="block">
              {hero.titleTop}
            </motion.span>
            <motion.span {...enter(2)} className="text-gold-gradient block pb-2">
              {hero.titleBottom}
            </motion.span>
          </h1>

          <motion.p {...enter(3)} className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {hero.sub}
          </motion.p>

          <motion.div {...enter(4)} className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("contact");
              }}
              className="gold-gradient group inline-flex h-13 items-center gap-2 rounded-full px-7 text-[15px] font-semibold text-background shadow-[0_12px_32px_-12px_rgb(245_200_66/0.65)] transition-transform duration-150 active:scale-[0.96]"
            >
              {hero.primary}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
            </a>
            <a
              href="#pricing"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("pricing");
              }}
              className="inline-flex h-13 items-center rounded-full px-6 text-[15px] font-medium shadow-[0_0_0_1px_rgb(255_255_255/0.16)] transition-[background-color,scale] duration-150 hover:bg-white/5 active:scale-[0.96]"
            >
              {hero.secondary}
            </a>
          </motion.div>

          <motion.p {...enter(5)} className="mt-5 flex items-start gap-2.5 text-sm text-muted-foreground">
            <span className="pulse-dot mt-1.5 size-2 shrink-0 rounded-full bg-mint" aria-hidden />
            <span>
              <span className="text-foreground/90">{hero.status}.</span> {hero.micro}
            </span>
          </motion.p>

          <motion.ul
            {...enter(6)}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-2.5 border-t border-line pt-6 font-mono text-[11px] tracking-[0.14em] text-muted-foreground uppercase"
          >
            {hero.creds.map((c) => (
              <li key={c} className="flex items-center gap-2">
                <span className="size-1 rotate-45 bg-gold/80" aria-hidden />
                {c}
              </li>
            ))}
          </motion.ul>
        </div>

        <div className="relative">
          <motion.div
            style={{ y: moonY, opacity: moonOpacity }}
            className="pointer-events-none absolute -top-20 -right-4 -z-10 size-[12rem] sm:-right-10 sm:size-[15rem] lg:-top-28 lg:-right-14 lg:size-[18rem]"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              className="size-full"
            >
              <Moon className="size-full" />
            </motion.div>
          </motion.div>
          <motion.div style={{ y: cardY }}>
            <HeroDashboard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
