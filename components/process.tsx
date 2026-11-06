"use client";

import { useRef } from "react";
import { motion, useScroll } from "motion/react";
import { processSteps } from "@/content/site";
import { LightLines } from "@/components/ui/light-lines";
import { SectionHead, ease } from "./reveal";

export function Process() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 55%"] });

  return (
    <section id="process" aria-labelledby="process-title" className="relative isolate overflow-hidden border-y border-line bg-surface/30 py-28 md:py-36">
      <div aria-hidden className="absolute inset-0 -z-10 [mask-image:linear-gradient(180deg,transparent,black_25%,black_75%,transparent)]">
        <LightLines
          gradientFrom="transparent"
          gradientTo="transparent"
          lineColor="#ffffff"
          lightColor="#f5c842"
          linesOpacity={0.035}
          lightsOpacity={0.45}
          speedMultiplier={0.5}
        />
      </div>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          id="process-title"
          eyebrow={processSteps.eyebrow}
          titleTop={processSteps.titleTop}
          titleAccent={processSteps.titleAccent}
        />

        <div className="relative mt-16">
          <div aria-hidden className="absolute top-6 right-[12.5%] left-[12.5%] hidden h-px bg-white/10 lg:block">
            <motion.div style={{ scaleX: scrollYProgress }} className="gold-gradient h-full origin-left" />
          </div>
          <div aria-hidden className="absolute top-6 bottom-6 left-6 w-px bg-white/10 lg:hidden">
            <motion.div style={{ scaleY: scrollYProgress }} className="gold-gradient size-full origin-top" />
          </div>

          <ol ref={ref} className="relative grid gap-12 lg:grid-cols-4 lg:gap-6">
            {processSteps.steps.map((s, i) => (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.55, delay: i * 0.1, ease }}
                className="relative pl-20 lg:pl-0 lg:text-center"
              >
                <span className="absolute top-0 left-0 flex size-12 items-center justify-center rounded-full bg-background text-gold shadow-[0_0_0_1px_rgb(245_200_66/0.35),0_0_28px_-8px_rgb(245_200_66/0.55)] lg:relative lg:mx-auto">
                  <s.icon className="size-5" aria-hidden />
                </span>
                <p className="pt-1 font-mono text-[10px] tracking-[0.18em] text-gold uppercase lg:mt-6 lg:pt-0">
                  Step 0{i + 1} · {s.when}
                </p>
                <h3 className="mt-2 font-display text-[1.4rem] leading-tight">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground lg:mx-auto lg:max-w-[17rem]">{s.text}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
