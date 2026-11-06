"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { CalendarDays } from "lucide-react";
import { hero } from "@/content/site";
import { LiquidMetalButton } from "@/components/ui/liquid-metal";
import TextAnimation from "@/components/ui/staggerText";
import { HeroDashboard } from "./hero-dashboard";
import { LiquidMoon } from "./liquid-moon";
import { ease } from "./reveal";
import { useScrollTo } from "./smooth-scroll";

function enter(i: number) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: 0.1 + i * 0.1, ease },
  };
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const scrollTo = useScrollTo();
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const tilt = useTransform(scrollYProgress, [0, 0.4], reduce ? [0, 0] : [18, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], reduce ? [1, 1] : [0.92, 1]);
  const moonY = useTransform(scrollYProgress, [0, 0.6], reduce ? ["0%", "0%"] : ["22%", "-18%"]);

  return (
    <section id="top" ref={ref} aria-labelledby="hero-title" className="relative isolate overflow-hidden pt-36 pb-24 md:pt-40 md:pb-32">
      <div aria-hidden className="grid-fade absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[56rem]"
        style={{ background: "radial-gradient(55% 45% at 50% 0%, rgb(245 200 66 / 0.11), transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 text-center md:px-8">
        <motion.p {...enter(0)} className="flex items-center justify-center gap-3 font-mono text-[11px] tracking-[0.22em] text-gold uppercase">
          <span className="h-px w-8 bg-gold/70" aria-hidden />
          {hero.eyebrow}
          <span className="h-px w-8 bg-gold/70" aria-hidden />
        </motion.p>

        <h1 id="hero-title" className="mx-auto mt-8 max-w-[14ch] font-display text-[clamp(2.75rem,5.6vw,5.4rem)] leading-[1.02] tracking-[-0.05em] md:max-w-none">
          <span className="block">
            <TextAnimation delay={0.15}>{hero.titleTop}</TextAnimation>
          </span>
          <span className="block">
            <TextAnimation delay={0.45} wordClassName="text-gold-gradient pb-[0.08em]">
              {hero.titleBottom}
            </TextAnimation>
          </span>
        </h1>

        <motion.p {...enter(6)} className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          {hero.sub}
        </motion.p>

        <motion.div {...enter(7)} className="mt-11 flex flex-wrap items-center justify-center gap-4">
          <LiquidMetalButton
            onClick={() => scrollTo("contact")}
            icon={<CalendarDays className="size-[18px]" aria-hidden />}
            metalConfig={{ colorBack: "#00000000", colorTint: "#f5c842", speed: 0.45, repetition: 4, distortion: 0.15, shiftRed: 0, shiftBlue: 0 }}
            borderWidth={3}
          >
            {hero.primary}
          </LiquidMetalButton>
          <a
            href="#pricing"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("pricing");
            }}
            className="inline-flex h-14 items-center rounded-full px-7 text-[15px] font-medium shadow-[0_0_0_1px_rgb(255_255_255/0.16)] transition-[background-color,scale] duration-150 hover:bg-white/5 active:scale-[0.96]"
          >
            {hero.secondary}
          </a>
        </motion.div>

        <motion.p {...enter(8)} className="mt-6 flex items-start justify-center gap-2.5 text-sm text-muted-foreground">
          <span className="pulse-dot mt-1.5 size-2 shrink-0 rounded-full bg-mint" aria-hidden />
          <span className="text-balance">
            <span className="text-foreground/90">{hero.status}.</span> {hero.micro}
          </span>
        </motion.p>

        <motion.ul
          {...enter(9)}
          className="mt-10 flex flex-wrap justify-center gap-x-7 gap-y-2.5 font-mono text-[11px] tracking-[0.14em] text-muted-foreground uppercase"
        >
          {hero.creds.map((c) => (
            <li key={c} className="flex items-center gap-2">
              <span className="size-1 rotate-45 bg-gold/80" aria-hidden />
              {c}
            </li>
          ))}
        </motion.ul>
      </div>

      <div className="relative mx-auto mt-28 max-w-6xl px-4 md:mt-36 md:px-8" style={{ perspective: 1600 }}>
        <motion.div
          style={{ y: moonY }}
          className="pointer-events-none absolute top-0 left-1/2 -z-10 size-[20rem] -translate-x-1/2 -translate-y-[40%] sm:size-[28rem] lg:size-[36rem]"
        >
          <LiquidMoon className="size-full" />
        </motion.div>
        <motion.div style={{ rotateX: tilt, scale, transformOrigin: "50% 0%" }}>
          <HeroDashboard />
        </motion.div>
      </div>
    </section>
  );
}
