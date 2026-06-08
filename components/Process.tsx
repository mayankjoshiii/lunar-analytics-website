'use client'

import { Phone, BarChart, Cpu, TrendingUp } from "lucide-react";
import { Reveal, SectionLabel, Stagger, Item, itemVariants } from "./Reveal";

const steps = [
  { n: "01", icon: Phone, title: "Discovery Call", text: "30-min free call. We map your data sources, KPIs and goals." },
  { n: "02", icon: BarChart, title: "Data Audit", text: "Deep dive into your current stack. Quick wins identified within a week." },
  { n: "03", icon: Cpu, title: "Build & Deliver", text: "Dashboards, models and pipelines built. First insight in under 30 days." },
  { n: "04", icon: TrendingUp, title: "Iterate & Grow", text: "Weekly reports, monthly reviews. Continuously sharpen the edge." },
];

export function Process() {
  return (
    <section id="process" className="py-32 section-alt relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal><SectionLabel>How It Works</SectionLabel></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold">
              From first call to first insight in <span className="gold-text">30 days.</span>
            </h2>
          </Reveal>
        </div>

        <div className="relative mt-20">
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-[#F5C842]/50 to-transparent" />
          <Stagger className="grid md:grid-cols-4 gap-6 relative">
            {steps.map((s) => (
              <Item key={s.n} variants={itemVariants} className="relative glass-card p-6 hover:gold-glow transition group">
                <span className="absolute -top-8 right-4 font-display font-bold text-7xl text-white/[0.04] select-none">{s.n}</span>
                <div className="w-12 h-12 rounded-xl bg-[#F5C842]/10 border border-[#F5C842]/20 flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-[#F5C842]" />
                </div>
                <div className="mt-5 text-xs uppercase tracking-widest gold-text">Step {s.n}</div>
                <h3 className="mt-2 font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </Item>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
