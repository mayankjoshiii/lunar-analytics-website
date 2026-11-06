"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Loader2, Mail, MapPin, Send } from "lucide-react";
import { contact, site } from "@/content/site";
import { LinkedinIcon } from "./icons";
import { Corners, Reveal, SectionHead, ease } from "./reveal";

const field =
  "w-full rounded-xl bg-black/30 px-4 py-3 text-[15px] text-foreground placeholder:text-muted-foreground/60 shadow-[inset_0_0_0_1px_rgb(255_255_255/0.1)] outline-none transition-shadow duration-200 focus:shadow-[inset_0_0_0_1px_rgb(245_200_66/0.6),0_0_0_4px_rgb(245_200_66/0.12)]";
const label = "mb-2 block font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase";

export function Contact() {
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    setError(null);
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.success) throw new Error(json.message || "Something went wrong.");
      setState("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : `Something went wrong. Please email ${site.email}.`);
      setState("idle");
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative border-t border-line bg-surface/30 py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHead id="contact-title" eyebrow={contact.eyebrow} titleTop={contact.titleTop} titleAccent={contact.titleAccent} intro={contact.sub} />

          <Reveal delay={0.25}>
            <p className="mt-10 font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">What happens on the call</p>
            <ol className="mt-5 space-y-4">
              {contact.steps.map((s, i) => (
                <li key={s} className="flex gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gold/10 font-mono text-xs text-gold shadow-[inset_0_0_0_1px_rgb(245_200_66/0.3)]">
                    {i + 1}
                  </span>
                  <span className="pt-1 leading-relaxed">{s}</span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.3}>
            <ul className="mt-10 space-y-3 border-t border-line pt-8 text-[15px]">
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-3 transition-colors hover:text-gold">
                  <Mail className="size-4 text-gold" aria-hidden />
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.linkedinCompany} target="_blank" rel="noreferrer" className="flex items-center gap-3 transition-colors hover:text-gold">
                  <LinkedinIcon className="size-4 text-gold" />
                  Lunar Analytics on LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="size-4 text-gold" aria-hidden />
                {site.location}, working across the UK
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="card relative overflow-hidden p-7 sm:p-10">
            <Corners className="border-gold/45" />
            <AnimatePresence mode="wait" initial={false}>
              {state === "sent" ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease }}
                  className="flex min-h-[28rem] flex-col items-center justify-center text-center"
                  role="status"
                >
                  <motion.span
                    initial={{ scale: 0.25, opacity: 0, filter: "blur(4px)" }}
                    animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                    transition={{ type: "spring", duration: 0.3, bounce: 0, delay: 0.1 }}
                    className="flex size-16 items-center justify-center rounded-full bg-gold/15 text-gold shadow-[inset_0_0_0_1px_rgb(245_200_66/0.4)]"
                  >
                    <Check className="size-8" strokeWidth={2.5} aria-hidden />
                  </motion.span>
                  <p className="mt-6 font-display text-3xl">{contact.success}</p>
                  <p className="mt-2 max-w-sm text-muted-foreground">{contact.successSub}</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={onSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className={label}>
                        Full name
                      </label>
                      <input id="name" name="name" required autoComplete="name" className={field} />
                    </div>
                    <div>
                      <label htmlFor="email" className={label}>
                        Work email
                      </label>
                      <input id="email" name="email" type="email" required autoComplete="email" className={field} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className={label}>
                      Company
                    </label>
                    <input id="company" name="company" required autoComplete="organization" className={field} />
                  </div>
                  <div>
                    <label htmlFor="service" className={label}>
                      Plan you're interested in
                    </label>
                    <select id="service" name="service" required defaultValue="" className={`${field} appearance-none`}>
                      <option value="" disabled>
                        Choose one
                      </option>
                      {contact.plans.map((p) => (
                        <option key={p} value={p} className="bg-surface">
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className={label}>
                      What would you like to figure out?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="A sentence or two about your data and the question you want answered"
                      className={field}
                    />
                  </div>
                  <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
                    <label htmlFor="company_site">Leave this empty</label>
                    <input id="company_site" name="company_site" tabIndex={-1} autoComplete="off" />
                  </div>
                  {error && (
                    <p className="text-sm text-rose" role="alert">
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={state === "sending"}
                    className="gold-gradient flex h-13 w-full items-center justify-center gap-2 rounded-full text-[15px] font-semibold text-background shadow-[0_12px_32px_-12px_rgb(245_200_66/0.6)] transition-[opacity,scale] duration-150 active:scale-[0.96] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {state === "sending" ? (
                      <>
                        <Loader2 className="size-4 animate-spin" aria-hidden />
                        Sending
                      </>
                    ) : (
                      <>
                        Book my free call
                        <Send className="size-4" aria-hidden />
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-muted-foreground">
                    Or email me directly at{" "}
                    <a href={`mailto:${site.email}`} className="text-gold transition-colors hover:text-gold-soft">
                      {site.email}
                    </a>
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
