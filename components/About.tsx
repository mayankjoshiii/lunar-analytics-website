'use client'

import { Award, Briefcase, GraduationCap, Github, Linkedin } from "lucide-react";
import { Reveal, SectionLabel } from "./Reveal";

const skills = ["Python", "Machine Learning", "SQL", "Power BI", "Churn Prediction", "A/B Testing", "Financial Analytics", "Google Analytics", "R", "dbt"];

const timeline = [
  { year: "2019 – 2024", title: "Google LLC", text: "Analytics & data operations across global teams." },
  { year: "2024 – 2025", title: "MSc Distinction · Swansea University", text: "Business Analytics — distinction-grade capstone." },
  { year: "2025 – Present", title: "Founder · Lunar Analytics", text: "Fractional analytics for UK SMEs.", current: true },
];

const creds = [
  { icon: GraduationCap, text: "MSc Business Analytics — Distinction" },
  { icon: Briefcase, text: "4+ years at Google LLC" },
  { icon: Award, text: "CMI Level 7 — Strategic Management" },
  { icon: Github, text: "5+ live ML / analytics projects" },
];

export function About() {
  return (
    <section id="about" className="py-32">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <Reveal><SectionLabel>About Lunar</SectionLabel></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
              Google-trained analytics, <span className="gold-text">built for SMEs.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Mayank Joshi spent 4+ years inside Google LLC's analytics ecosystem before completing an MSc in
              Business Analytics with Distinction at Swansea University. Lunar Analytics brings that
              enterprise rigour to small and medium UK businesses — at a fraction of the cost.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-4 italic text-sm text-muted-foreground">
              "Lunar" comes from the Sanskrit meaning of <span className="gold-text">Mayank</span> — the moon. A quiet, constant signal in the dark.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-8 flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s} className="px-3 py-1.5 rounded-full text-xs border border-[#F5C842]/30 bg-[#F5C842]/5 text-[#F5C842]">{s}</span>
              ))}
            </div>
          </Reveal>

          <div className="mt-12 relative pl-8">
            <div className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-[#F5C842] via-[#F5C842]/40 to-transparent" />
            {timeline.map((t, i) => (
              <Reveal key={i} delay={0.1 * i}>
                <div className="relative mb-8 last:mb-0">
                  <span className={`absolute -left-[26px] top-1.5 w-3 h-3 rounded-full ${t.current ? "bg-green-500 animate-pulse-dot" : "bg-[#F5C842]"}`} />
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{t.year}</div>
                  <div className="font-semibold mt-1">{t.title}</div>
                  <div className="text-sm text-muted-foreground mt-0.5">{t.text}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.2}>
          <div className="glass-card p-8 lg:sticky lg:top-24">
            <div className="flex items-center gap-5">
              <div className="relative w-20 h-20">
                <div
                  className="absolute inset-0 rounded-full animate-spin-slow"
                  style={{ background: "conic-gradient(from 0deg, #F5C842, transparent 70%)" }}
                />
                <div className="absolute inset-[3px] rounded-full bg-[#0F1729] flex items-center justify-center">
                  <span className="font-display font-bold text-2xl bg-gradient-to-br from-[#F5C842] to-[#E0B232] bg-clip-text text-transparent">MJ</span>
                </div>
              </div>
              <div>
                <div className="font-display font-bold text-xl">Mayank Joshi</div>
                <div className="text-sm text-muted-foreground">Founder & Lead Analyst</div>
                <div className="mt-2 flex items-center gap-2 text-xs">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-dot" />
                  <span className="text-green-400">Open to clients</span>
                </div>
              </div>
            </div>

            <ul className="mt-8 space-y-3">
              {creds.map((c) => (
                <li key={c.text} className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <c.icon className="w-4 h-4 text-[#F5C842]" />
                  </div>
                  {c.text}
                </li>
              ))}
            </ul>

            <blockquote className="mt-8 pl-4 border-l-2 border-[#F5C842] italic text-sm text-muted-foreground">
              "I built Lunar because every SME deserves the same analytics edge as a Fortune 500 — without the price tag."
            </blockquote>

            <a
              href="https://linkedin.com/in/mayankjoshi"
              target="_blank"
              rel="noreferrer"
              className="mt-8 btn-gold-outline w-full justify-center hover:bg-[#F5C842]/10"
            >
              <Linkedin className="w-4 h-4" /> Connect on LinkedIn →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
