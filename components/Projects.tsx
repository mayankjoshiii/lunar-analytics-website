'use client'

import { Github, ExternalLink } from "lucide-react";
import { Reveal, SectionLabel, Stagger, Item, itemVariants } from "./Reveal";

const projects = [
  {
    cat: "Machine Learning",
    title: "Customer Churn Prediction",
    desc: "End-to-end ML pipeline predicting customer churn with engineered features and explainability.",
    metrics: [{ v: "82%", l: "Accuracy" }, { v: "0.86", l: "AUC-ROC" }, { v: "£340K", l: "Savings" }],
    tags: ["Python", "scikit-learn", "Random Forest", "SQL", "Plotly"],
    live: "https://mayankjoshiii.github.io/customer-churn-prediction/",
    repo: "https://github.com/mayankjoshiii/customer-churn-prediction",
    highlight: true,
  },
  {
    cat: "Customer Analytics",
    title: "Customer Intelligence Platform",
    desc: "K-Means + PCA segmentation with 3D RFM space and cohort retention curves.",
    metrics: [{ v: "K-Means", l: "+ PCA" }, { v: "3D", l: "RFM Space" }, { v: "Cohort", l: "Retention" }],
    tags: ["Python", "PCA", "K-Means", "Plotly"],
    live: "https://mayankjoshiii.github.io/customer-intelligence-dashboard/",
    repo: "https://github.com/mayankjoshiii/customer-intelligence-dashboard",
  },
  {
    cat: "Finance",
    title: "Financial KPI Dashboard",
    desc: "Live financial performance dashboard with margin, EBITDA and cash-flow tracking.",
    metrics: [{ v: "£4.92M", l: "Tracked" }, { v: "41.9%", l: "Gross Margin" }, { v: "17.6%", l: "EBITDA" }],
    tags: ["Power BI", "DAX", "SQL"],
    live: "https://mayankjoshiii.github.io/financial-kpi-dashboard/",
    repo: "https://github.com/mayankjoshiii/financial-kpi-dashboard",
  },
  {
    cat: "ML Ops",
    title: "ML Model Explainability Platform",
    desc: "SHAP-based explainability with PSI drift monitoring and fairness auditing.",
    metrics: [{ v: "SHAP", l: "Explainability" }, { v: "PSI", l: "Drift" }, { v: "Fairness", l: "Audit" }],
    tags: ["SHAP", "Python", "Streamlit"],
    live: "https://mayankjoshiii.github.io/ml-explainability-dashboard/",
    repo: "https://github.com/mayankjoshiii/ml-explainability-dashboard",
  },
  {
    cat: "Experimentation",
    title: "A/B Testing Analytics Engine",
    desc: "Bayesian + frequentist test analytics with sequential testing and sample-size calc.",
    metrics: [{ v: "Bayesian", l: "+ Freq." }, { v: "Sequential", l: "Testing" }, { v: "Auto", l: "Sample Calc" }],
    tags: ["Python", "Stats", "Plotly"],
    live: "https://mayankjoshiii.github.io/ab-testing-dashboard/",
    repo: "https://github.com/mayankjoshiii/ab-testing-dashboard",
  },
];

function Card({ p }: { p: typeof projects[number] }) {
  return (
    <div className={`relative glass-card p-6 h-full flex flex-col hover:gold-glow transition ${p.highlight ? "gold-glow border-[#F5C842]/40" : ""}`}>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#F5C842] to-transparent" />
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-widest gold-text">{p.cat}</span>
        <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-green-400">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse-dot" /> Live
        </span>
      </div>
      <h3 className="mt-3 font-display font-bold text-xl">{p.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground flex-1">{p.desc}</p>

      <div className="mt-5 grid grid-cols-3 gap-2 p-3 rounded-xl bg-black/30 border border-white/5">
        {p.metrics.map((m) => (
          <div key={m.l} className="text-center">
            <div className="font-display font-bold text-sm gold-text">{m.v}</div>
            <div className="text-[10px] uppercase text-muted-foreground mt-0.5">{m.l}</div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {p.tags.map((t) => (
          <span key={t} className="px-2 py-0.5 text-[11px] rounded-md bg-white/5 border border-white/10 text-muted-foreground">{t}</span>
        ))}
      </div>

      <div className="mt-5 flex gap-2">
        <a href={p.live} target="_blank" rel="noreferrer" className="btn-gold flex-1 justify-center text-sm py-2">
          <ExternalLink className="w-3.5 h-3.5" /> View Live Dashboard
        </a>
        <a href={p.repo} target="_blank" rel="noreferrer" className="px-3 rounded-lg border border-white/10 hover:border-[#F5C842]/40 hover:text-[#F5C842] flex items-center justify-center transition">
          <Github className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

export function Projects() {
  const top = projects.slice(0, 3);
  const bottom = projects.slice(3);
  return (
    <section id="projects" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal><SectionLabel>GitHub Projects</SectionLabel></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold">
              Real projects. <span className="gold-text">Live and working.</span>
            </h2>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid md:grid-cols-3 gap-6">
          {top.map((p) => (
            <Item key={p.title} variants={itemVariants}><Card p={p} /></Item>
          ))}
        </Stagger>
        <Stagger className="mt-6 grid md:grid-cols-2 gap-6 md:max-w-4xl md:mx-auto">
          {bottom.map((p) => (
            <Item key={p.title} variants={itemVariants}><Card p={p} /></Item>
          ))}
        </Stagger>

        <div className="mt-12 text-center">
          <a href="https://github.com/mayankjoshiii" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-[#F5C842] transition">
            View all projects — <span className="gold-text">github.com/mayankjoshiii</span> →
          </a>
        </div>
      </div>
    </section>
  );
}
