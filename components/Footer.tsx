'use client'

import { Linkedin, Github, Mail } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10 pb-10 border-b border-white/5">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group"
            aria-label="Lunar Analytics home"
          >
            <span className="text-2xl">🌙</span>
            <span className="font-syne font-bold text-lg text-[#F8FAFC] group-hover:text-[#F5C842] transition-colors duration-200">
              Lunar Analytics
            </span>
          </button>

          {/* Nav */}
          <nav className="flex items-center gap-6 flex-wrap justify-center" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleScroll(link.href)}
                className="font-inter text-sm text-[#94A3B8] hover:text-[#F8FAFC] transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Email + Socials */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:hello@lunaranalytics.co.uk"
              className="font-inter text-sm text-[#94A3B8] hover:text-[#F5C842] transition-colors duration-200 flex items-center gap-2"
              aria-label="Email Lunar Analytics"
            >
              <Mail size={16} />
              hello@lunaranalytics.co.uk
            </a>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/company/lunar-analytics-uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-[#F5C842] hover:border-[#F5C842]/40 transition-all duration-200"
                aria-label="Lunar Analytics on LinkedIn"
                id="footer-linkedin"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="https://github.com/mayankjoshiii"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-[#F5C842] hover:border-[#F5C842]/40 transition-all duration-200"
                aria-label="Lunar Analytics on GitHub"
                id="footer-github"
              >
                <Github size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-sm text-[#94A3B8]">
            © 2026 Lunar Analytics Ltd · Swansea, Wales
          </p>
          <p className="font-inter text-xs text-[#94A3B8]/50">
            Registered in England & Wales · ICO Registered · GDPR Compliant
          </p>
        </div>
      </div>
    </footer>
  )
}
