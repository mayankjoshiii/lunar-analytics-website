"use client";

import { motion, type Variants } from "motion/react";
import TextAnimation from "@/components/ui/staggerText";

export const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.6, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

export function Stagger({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-12% 0px" }}
      variants={staggerParent}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`flex items-center gap-3 font-mono text-[11px] tracking-[0.22em] text-gold uppercase ${className}`}>
      <span className="h-px w-8 bg-gold/70" aria-hidden />
      {children}
    </p>
  );
}

export function SectionHead({
  id,
  eyebrow,
  titleTop,
  titleAccent,
  intro,
  center = false,
}: {
  id?: string;
  eyebrow: string;
  titleTop: string;
  titleAccent?: string;
  intro?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <Reveal>
        <Eyebrow className={center ? "justify-center" : ""}>{eyebrow}</Eyebrow>
      </Reveal>
      <h2 id={id} className="mt-6 font-display text-[clamp(2.1rem,4.4vw,3.75rem)] leading-[1.06] tracking-[-0.03em]">
        <TextAnimation delay={0.1}>{titleTop}</TextAnimation>
        {titleAccent && (
          <>
            {" "}
            <TextAnimation delay={0.1 + titleTop.split(" ").length * 0.05} wordClassName="text-gold-gradient pb-[0.08em]">
              {titleAccent}
            </TextAnimation>
          </>
        )}
      </h2>
      {intro && (
        <Reveal delay={0.2}>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{intro}</p>
        </Reveal>
      )}
    </div>
  );
}

export function Corners({ className = "border-white/25" }: { className?: string }) {
  return (
    <>
      <span aria-hidden className={`pointer-events-none absolute top-0 left-0 size-2.5 rounded-tl-[3px] border-t border-l ${className}`} />
      <span aria-hidden className={`pointer-events-none absolute top-0 right-0 size-2.5 rounded-tr-[3px] border-t border-r ${className}`} />
      <span aria-hidden className={`pointer-events-none absolute bottom-0 left-0 size-2.5 rounded-bl-[3px] border-b border-l ${className}`} />
      <span aria-hidden className={`pointer-events-none absolute right-0 bottom-0 size-2.5 rounded-br-[3px] border-r border-b ${className}`} />
    </>
  );
}
