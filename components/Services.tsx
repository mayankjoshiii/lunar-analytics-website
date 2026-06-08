'use client'

import { useState } from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, SectionLabel } from "./Reveal";

const tiers = [
  {
    name: "Starter",
    monthly: 1500,
    annual: 13500,
    desc: "For SMEs starting their data journey",
    features: [
      "Monthly data health report",
      "KPI dashboard setup (Power BI)",
      "2 data sources connected",
      "Fortnightly strategy call",
      "Email support",
      "GA4 setup & tracking",
    ],
  },
  {
    name: "Growth",
    monthly: 2500,
    annual: 22500,
    desc: "Our most popular plan",
    featured: true,
    features: [
      "Everything in Starter",
      "Weekly insight reports",
      "Custom ML model (e.g. churn)",
      "5 data sources connected",
      "Weekly strategy call",
      "A/B testing framework",
      "Financial analytics",
      "Slack channel access",
    ],
  },
  {
    name: "Scale",
    monthly: 4000,
    annual: 36000,
    desc: "Fractional Head of Analytics",
    features: [
      "Everything in Growth",
      "Dedicated data roadmap",
      "Unlimited data sources",
      "Custom Python pipelines",
      "Real-time analytics",
      "Bi-weekly exec briefings",
      "Priority same-day support",
      "Quarterly business review",
    ],
  },
];

export function Services() {
  const [annual, setAnnual] = useState(false);
  return (
    <section id="services" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal><SectionLabel>Services & Pricing</SectionLabel></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold">
              Enterprise analytics. <span className="gold-text">SME pricing.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-muted-foreground">Transparent monthly retainers. Cancel anytime. No setup fees.</p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 inline-flex p-1 rounded-full glass-card">
              {(["Monthly", "Annual"] as const).map((opt, i) => {
                const active = (i === 1) === annual;
                return (
                  <button
                    key={opt}
                    onClick={() => setAnnual(i === 1)}
                    className={`px-5 py-2 text-sm rounded-full transition ${active ? "bg-[#F5C842] text-[#0B1120] font-semibold" : "text-muted-foreground"}`}
                  >
                    {opt} {i === 1 && <span className="ml-1 text-[10px] opacity-70">Save 25%</span>}
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-px ${t.featured ? "" : ""}`}
            >
              {t.featured && (
                <div className="absolute -inset-px rounded-2xl overflow-hidden">
                  <div
                    className="absolute inset-[-50%] animate-spin-slow"
                    style={{ background: "conic-gradient(from 0deg, transparent, #F5C842, transparent 40%)" }}
                  />
                </div>
              )}
              <div className={`relative h-full glass-card p-8 ${t.featured ? "bg-[#0F1729]" : ""}`}>
                {t.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#F5C842] text-[#0B1120] text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <h3 className="font-display font-bold text-2xl">{t.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{t.desc}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display font-bold text-5xl">£{(annual ? t.annual : t.monthly).toLocaleString()}</span>
                  <span className="text-muted-foreground">/{annual ? "yr" : "mo"}</span>
                </div>
                {annual && (
                  <p className="mt-2 text-xs text-[#F5C842]/90">
                    Save £{(t.monthly * 12 - t.annual).toLocaleString()} vs monthly
                  </p>
                )}
                <a href="#contact" className={`mt-6 w-full justify-center ${t.featured ? "btn-gold" : "btn-gold-outline"}`}>
                  Get started
                </a>
                <ul className="mt-8 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm">
                      <Check className="w-4 h-4 text-[#F5C842] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
