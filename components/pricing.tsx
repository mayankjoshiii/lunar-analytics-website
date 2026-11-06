"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { Check } from "lucide-react";
import { pricing } from "@/content/site";
import { BorderBeam } from "@/components/ui/border-beam";
import { Corners, Reveal, SectionHead, Stagger, staggerChild } from "./reveal";
import { useScrollTo } from "./smooth-scroll";

const gbp = (n: number) => `£${n.toLocaleString("en-GB")}`;

const priceSwap: Variants = {
  enter: (dir: number) => ({ y: dir * 28, opacity: 0, filter: "blur(4px)" }),
  center: { y: 0, opacity: 1, filter: "blur(0px)" },
  exit: (dir: number) => ({ y: dir * -28, opacity: 0, filter: "blur(4px)" }),
};

const billing = [
  { annual: false, label: "Monthly" },
  { annual: true, label: "Annual" },
];

export function Pricing() {
  const [annual, setAnnual] = useState(false);
  const pillId = useId();
  const scrollTo = useScrollTo();
  const dir = annual ? 1 : -1;

  return (
    <section id="pricing" aria-labelledby="pricing-title" className="relative overflow-x-clip py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          id="pricing-title"
          center
          eyebrow={pricing.eyebrow}
          titleTop={pricing.titleTop}
          titleAccent={pricing.titleAccent}
          intro={pricing.sub}
        />

        <Reveal delay={0.25} className="mt-10 flex justify-center">
          <div
            role="radiogroup"
            aria-label="Billing period"
            className="relative flex rounded-full bg-white/[0.04] p-1 shadow-[inset_0_0_0_1px_rgb(255_255_255/0.08)]"
          >
            {billing.map((o) => {
              const on = annual === o.annual;
              return (
                <button
                  key={o.label}
                  type="button"
                  role="radio"
                  aria-checked={on}
                  onClick={() => setAnnual(o.annual)}
                  className={`relative flex h-10 items-center gap-2 rounded-full px-5 text-sm font-medium transition-colors duration-200 ${
                    on ? "text-background" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {on && (
                    <motion.span
                      layoutId={pillId}
                      className="gold-gradient absolute inset-0 rounded-full"
                      transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                    />
                  )}
                  <span className="relative">{o.label}</span>
                  {o.annual && (
                    <span
                      className={`relative rounded-full px-1.5 py-0.5 font-mono text-[9.5px] tracking-wider uppercase ${
                        on ? "bg-background/15" : "bg-gold/15 text-gold"
                      }`}
                    >
                      Save 25%
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </Reveal>

        <Stagger className="mt-14 grid gap-5 lg:grid-cols-3">
          {pricing.tiers.map((t) => {
            const price = annual ? t.annual : t.monthly;
            const save = t.monthly * 12 - t.annual;
            return (
              <motion.div key={t.name} variants={staggerChild} className="relative">
                {t.featured && <div aria-hidden className="absolute -inset-6 -z-10 rounded-[40px] bg-gold/[0.07] blur-2xl" />}
                <div className={`card relative flex h-full flex-col p-7 sm:p-8 ${t.featured ? "bg-surface" : ""}`}>
                  {t.featured && <BorderBeam size={190} duration={9} colorFrom="#f9dc85" colorTo="#f5c842" borderWidth={1.5} />}
                  <Corners className={t.featured ? "border-gold/60" : undefined} />
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-2xl">{t.name}</h3>
                    {t.featured && (
                      <span className="rounded-full bg-gold px-2.5 py-1 font-mono text-[10px] font-semibold tracking-[0.14em] text-background uppercase">
                        Recommended
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>

                  <div className="mt-7 flex items-end gap-1.5">
                    <span className="relative h-[3.4rem] overflow-hidden font-display text-[3rem] leading-[1.12] tracking-[-0.04em] tabular-nums">
                      <AnimatePresence mode="popLayout" initial={false} custom={dir}>
                        <motion.span
                          key={price}
                          custom={dir}
                          variants={priceSwap}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                          className="inline-block"
                        >
                          {gbp(price)}
                        </motion.span>
                      </AnimatePresence>
                    </span>
                    <span className="mb-2 text-muted-foreground">/{annual ? "year" : "month"}</span>
                  </div>
                  <p className="mt-1 h-5 text-sm text-gold/90" aria-live="polite">
                    {annual ? `You save ${gbp(save)} a year` : ""}
                  </p>

                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo("contact");
                    }}
                    className={`mt-6 flex h-12 items-center justify-center rounded-full text-[15px] font-semibold transition-[background-color,scale] duration-150 active:scale-[0.96] ${
                      t.featured
                        ? "gold-gradient text-background"
                        : "text-foreground shadow-[inset_0_0_0_1px_rgb(245_200_66/0.4)] hover:bg-gold/10"
                    }`}
                  >
                    Get started
                  </a>

                  <ul className="mt-8 space-y-3.5 border-t border-line pt-7">
                    {t.features.map((f) => (
                      <li key={f} className="flex gap-3 text-[15px]">
                        <Check className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={2.5} aria-hidden />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </Stagger>

        <Reveal>
          <p className="mt-8 text-center text-sm text-muted-foreground">{pricing.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
