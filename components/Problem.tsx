'use client'

import { AlertCircle, DollarSign, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, SectionLabel, Stagger, Item, itemVariants } from "./Reveal";

const pains = [
  { icon: AlertCircle, title: "Tools without analysts", text: "You have Power BI, GA4, or a CRM — but no one to turn the data into action." },
  { icon: DollarSign, title: "£50k+ for a full-time hire", text: "A senior analyst is out of budget, and junior hires can't deliver strategy." },
  { icon: HelpCircle, title: "You don't know what you don't know", text: "Decisions are made on instinct. The data is there. The insight isn't." },
];

export function Problem() {
  return (
    <section id="problem" className="py-32 section-alt">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <Reveal><SectionLabel>The Problem</SectionLabel></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
              Your data is sitting idle while <span className="gold-text">decisions are made on gut feel</span>
            </h2>
          </Reveal>
          <Stagger className="mt-10 space-y-4">
            {pains.map((p) => (
              <Item key={p.title} variants={itemVariants} className="glass-card p-5 flex gap-4 hover:gold-glow transition">
                <div className="w-10 h-10 rounded-lg bg-[#F5C842]/10 border border-[#F5C842]/20 flex items-center justify-center shrink-0">
                  <p.icon className="w-5 h-5 text-[#F5C842]" />
                </div>
                <div>
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{p.text}</p>
                </div>
              </Item>
            ))}
          </Stagger>
        </div>
        <Reveal delay={0.2}>
          <div className="glass-card p-8">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Industry reality</div>
            <h3 className="mt-2 text-xl font-semibold">Data spent vs decisions made</h3>
            <div className="mt-8 space-y-6">
              {[
                { label: "Data Spend", value: 85, gold: false },
                { label: "Decisions Made", value: 24, gold: true },
              ].map((b) => (
                <div key={b.label}>
                  <div className="flex justify-between text-sm mb-2">
                    <span>{b.label}</span>
                    <span className={b.gold ? "gold-text font-semibold" : "text-muted-foreground"}>{b.value}%</span>
                  </div>
                  <div className="h-3 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${b.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className={`h-full rounded-full ${b.gold ? "bg-gradient-to-r from-[#F5C842] to-[#E0B232]" : "bg-white/30"}`}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-10 italic text-center text-lg">
              "The gap is where <span className="gold-text">money is lost.</span>"
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
