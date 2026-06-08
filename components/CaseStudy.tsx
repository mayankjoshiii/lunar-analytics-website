'use client'

import { ArrowRight } from "lucide-react";
import { Reveal, SectionLabel, Stagger, Item, itemVariants } from "./Reveal";

const metrics = [
  { v: "2,495", l: "Customers surveyed" },
  { v: "25%", l: "Churn identified (18–25)" },
  { v: "15%", l: "Churn reduction potential" },
  { v: "85%+", l: "Retention in stable segments" },
];

const techniques = ["Logistic regression modelling", "K-Means customer clustering", "NLP sentiment analysis", "Geospatial heatmaps", "Power BI & Tableau dashboards", "Maturity benchmarking framework"];

const findings = [
  "Younger renters (18–25) churned at 3× the rate of any other segment",
  "Price sensitivity peaked in urban metro corridors",
  "Loyalty programme members showed 85%+ retention",
  "Sentiment NLP flagged 'wait time' as the #1 dissatisfaction driver",
  "Targeted retention plays could lift LTV by an estimated £4.2M annually",
];

export function CaseStudy() {
  return (
    <section id="case-study" className="py-32 section-alt">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal><SectionLabel>Real Work · MSc Capstone</SectionLabel></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
              Enterprise Mobility: <span className="gold-text">Data-Driven Customer Retention Strategy</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-muted-foreground">
              Distinction-grade MSc capstone project completed for Enterprise Mobility (Enterprise Rent-A-Car), modelling
              churn drivers across 2,495 surveyed customers across the UK.
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
