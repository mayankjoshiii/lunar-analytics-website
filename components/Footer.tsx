'use client'

import { Linkedin, Github } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Case Study", href: "#case-study" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <div className="font-display font-bold text-lg">🌙 Lunar Analytics</div>
            <p className="mt-2 text-sm text-muted-foreground max-w-sm">
              Fractional data consultancy for UK SMEs. Enterprise insight at startup pricing.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-[#F5C842] transition">{l.label}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href="https://linkedin.com/in/mayankjoshi" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center hover:border-[#F5C842]/40 hover:text-[#F5C842] transition">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://github.com/mayankjoshiii" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center hover:border-[#F5C842]/40 hover:text-[#F5C842] transition">
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col md:flex-row gap-4 justify-between text-xs text-muted-foreground">
          <div>
            © 2026 Lunar Analytics Ltd · Swansea, Wales · <a href="mailto:hello@lunaranalytics.co.uk" className="gold-text">hello@lunaranalytics.co.uk</a>
          </div>
          <div>Registered in England & Wales · ICO Registered · GDPR Compliant</div>
        </div>
      </div>
    </footer>
  );
}
