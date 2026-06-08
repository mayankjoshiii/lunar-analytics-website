'use client'

import { useState } from "react";
import { Send, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, SectionLabel } from "./Reveal";

export function Contact() {
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="py-32 section-alt">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center">
          <Reveal><SectionLabel>Free Discovery Call</SectionLabel></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold">
              Book your <span className="gold-text">free discovery call.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-muted-foreground">30 minutes. No pressure. We'll tell you exactly what's possible.</p>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12 glass-card p-8 md:p-10 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 14 }}
                    className="w-20 h-20 rounded-full mx-auto bg-[#F5C842]/15 border border-[#F5C842]/40 flex items-center justify-center"
                  >
                    <Check className="w-10 h-10 text-[#F5C842]" />
                  </motion.div>
                  <h3 className="mt-6 font-display font-bold text-2xl">Thanks — we'll be in touch.</h3>
                  <p className="mt-2 text-muted-foreground">Expect an email from <span className="gold-text">hello@lunaranalytics.co.uk</span> within 24 hours.</p>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={submit} className="space-y-5" exit={{ opacity: 0 }}>
                  <div className="grid md:grid-cols-2 gap-5">
                    <Field label="Full Name" name="name" required />
                    <Field label="Work Email" name="email" type="email" required />
                  </div>
                  <Field label="Company Name" name="company" required />
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Service Interest</label>
                    <select required className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#F5C842]/50">
                      <option value="">Select a plan…</option>
                      <option>Starter — £1,500/mo</option>
                      <option>Growth — £2,500/mo (Most Popular)</option>
                      <option>Scale — £4,000/mo</option>
                      <option>Custom / Not sure yet</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Message</label>
                    <textarea rows={4} className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#F5C842]/50" placeholder="Tell us about your data and what you'd like to figure out…" />
                  </div>
                  <button type="submit" className="btn-gold w-full justify-center text-base py-3.5">
                    Book Free Discovery Call <Send className="w-4 h-4" />
                  </button>
                  <p className="text-xs text-center text-muted-foreground">
                    Or email us directly — <a href="mailto:hello@lunaranalytics.co.uk" className="gold-text">hello@lunaranalytics.co.uk</a>
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

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#F5C842]/50 transition"
      />
    </div>
  );
}
