"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { faqs, site } from "@/content/site";
import { Link003 } from "@/components/ui/skiper-ui/skiper40";
import { Reveal, SectionHead, ease } from "./reveal";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const base = useId();

  return (
    <section id="faq" aria-labelledby="faq-title" className="relative py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <SectionHead id="faq-title" eyebrow="Questions" titleTop="Before you" titleAccent="ask." />
          <Reveal delay={0.2}>
            <p className="mt-6 text-muted-foreground">Something else on your mind? Email me.</p>
            <Link003 href={`mailto:${site.email}`} className="mt-2 inline-flex text-gold">
              {site.email}
            </Link003>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <ul className="divide-y divide-line border-y border-line">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              const btnId = `${base}-q${i}`;
              const panelId = `${base}-a${i}`;
              return (
                <li key={f.q}>
                  <h3>
                    <button
                      type="button"
                      id={btnId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-medium transition-colors hover:text-gold"
                    >
                      {f.q}
                      <span
                        className={`flex size-9 shrink-0 items-center justify-center rounded-full shadow-[inset_0_0_0_1px_rgb(255_255_255/0.14)] transition-transform duration-300 ${
                          isOpen ? "rotate-45 text-gold" : "text-muted-foreground"
                        }`}
                      >
                        <Plus className="size-4" aria-hidden />
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        id={panelId}
                        role="region"
                        aria-labelledby={btnId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ height: { duration: 0.3, ease }, opacity: { duration: 0.2 } }}
                        style={{ overflow: "hidden" }}
                      >
                        <p className="max-w-2xl pr-12 pb-6 leading-relaxed text-muted-foreground">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
