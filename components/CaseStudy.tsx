'use client'

import { ArrowRight } from "lucide-react";
import { Reveal, SectionLabel, Stagger, Item, itemVariants } from "./Reveal";

const metrics = [
  { v: "2,495", l: "UK survey respondents" },
  { v: "0.81", l: "R² on loyalty drivers" },
  { v: "25%", l: "Churn in 18–25s" },
  { v: ">85%", l: "Retention, older cohorts" },
];

const techniques = ["Multiple regression (R² = 0.81)", "Customer cluster analysis", "NLP sentiment analysis", "Geographic heatmaps", "Power BI & Tableau dashboards", "Analytics maturity benchmarking"];

const findings = [
  "Negative online sentiment predicted churn more strongly than any brand metric",
  "18–25 year olds churned at 25%, against over 85% retention in older cohorts, driven by price sensitivity and digital expectations",
  "Medium-density urban centres outperformed megacities on satisfaction and retention",
  "Customers saw little value in existing loyalty schemes",
  "Current analytics were largely descriptive, leaving room for predictive retention tools",
];

export function CaseStudy() {
  return (
    <section id="case-study" className="py-32 section-alt">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal><SectionLabel>MSc Business Project · Team of Six</SectionLabel></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
              Enterprise Mobility: <span className="gold-text">Data-Driven Customer Retention Strategy</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-muted-foreground">
              Distinction-level MSc business project built on an Enterprise Mobility (Enterprise Rent-A-Car) case study, analysing
              churn and loyalty drivers from secondary survey data on 2,495 UK respondents aged 18–64.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((m) => (
            <Item key={m.l} variants={itemVariants} className="glass-card p-6 text-center hover:gold-glow transition">
              <div className="font-display font-bold text-3xl gold-text">{m.v}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{m.l}</div>
            </Item>
          ))}
        </Stagger>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="glass-card p-8 h-full">
              <h3 className="font-display font-bold text-xl">Analytical Techniques</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {techniques.map((t) => (
                  <li key={t} className="flex gap-2"><span className="gold-text">✦</span>{t}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass-card p-8 h-full">
              <h3 className="font-display font-bold text-xl">Key Findings</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {findings.map((f) => (
                  <li key={f} className="flex gap-2"><span className="gold-text">✦</span>{f}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 rounded-2xl p-8 md:p-10 relative overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(245,200,66,0.12), rgba(79,70,229,0.12))", border: "1px solid rgba(245,200,66,0.25)" }}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <p className="font-display font-semibold text-xl md:text-2xl max-w-2xl">
                🌙 This project powers our <span className="gold-text">Churn Shield</span> product — from MSc research to production SaaS.
              </p>
              <a href="#contact" className="btn-gold shrink-0">
                Get Early Access <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
