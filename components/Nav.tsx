'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Case Study', href: '#case-study' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50)
    if (latest > lastScrollY && latest > 150) {
      setIsHidden(true)
    } else {
      setIsHidden(false)
    }
    setLastScrollY(latest)
  })

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.header
        animate={{ y: isHidden ? '-100%' : '0%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'backdrop-blur-xl bg-[#0B1120]/80 border-b border-white/5 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 group"
              aria-label="Lunar Analytics home"
            >
              <span className="text-2xl">🌙</span>
              <span className="font-syne font-bold text-xl text-[#F8FAFC] group-hover:text-[#F5C842] transition-colors duration-200">
                Lunar Analytics
              </span>
            </button>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="font-inter text-sm text-[#94A3B8] hover:text-[#F8FAFC] transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F5C842] transition-all duration-200 group-hover:w-full" />
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button
                onClick={() => handleNavClick('#contact')}
                className="font-syne font-semibold text-sm px-5 py-2.5 rounded-lg bg-[#F5C842] text-[#0B1120] hover:bg-[#F9DC85] transition-all duration-200 hover:shadow-lg hover:shadow-[#F5C842]/20 active:scale-95"
                id="nav-cta-book"
              >
                Book Free Call
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
              id="mobile-menu-toggle"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: mobileOpen ? 'auto' : 0, opacity: mobileOpen ? 1 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="md:hidden overflow-hidden bg-[#0F1729] border-t border-white/5"
        >
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left font-inter text-[#94A3B8] hover:text-[#F8FAFC] py-2 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="w-full font-syne font-semibold text-sm px-5 py-2.5 rounded-lg bg-[#F5C842] text-[#0B1120] hover:bg-[#F9DC85] transition-all duration-200 mt-2"
            >
              Book Free Call
            </button>
          </div>
        </motion.div>
      </motion.header>
    </>
  )
}
