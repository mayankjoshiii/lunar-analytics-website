'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Target, DollarSign, Zap } from 'lucide-react'

const HERO_WORDS = ['Your', 'business', 'has', 'data.', 'We', 'turn', 'it', 'into']
const DECISION_WORD = 'decisions.'

const stats = [
  { value: '4+', label: 'Years Experience', icon: TrendingUp },
  { value: '82%', label: 'Churn Accuracy', icon: Target },
  { value: '£0', label: 'Wasted Spend', icon: DollarSign },
  { value: '30-Day', label: 'ROI Window', icon: Zap },
]

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } },
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Primary badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F5C842]/40 bg-[#F5C842]/5 text-[#F5C842] text-sm font-inter mb-3"
        >
          <span>🌙</span>
          <span>Data Intelligence for UK SMEs</span>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-white/3 border border-white/8 text-[#94A3B8] text-xs font-inter tracking-widest mb-8 block mx-auto w-fit"
        >
          🏢 Ex-Google LLC &nbsp;·&nbsp; 🎓 MSc Distinction &nbsp;·&nbsp; 🏆 CMI Level 7
        </motion.div>

        {/* H1 — word-by-word */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="font-syne font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#F8FAFC] leading-[1.1] mb-6 tracking-[-0.02em]"
        >
          {HERO_WORDS.map((word, i) => (
            <motion.span key={i} variants={wordVariants} className="inline-block mr-[0.25em]">
              {word}
            </motion.span>
          ))}
          <motion.span variants={wordVariants} className="inline-block text-[#F5C842]">
            {DECISION_WORD}
          </motion.span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="font-inter text-lg md:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-10 leading-[1.75]"
        >
          Lunar Analytics gives UK small and medium businesses the analytics capability of a large enterprise
          — without the enterprise price tag.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <button
            onClick={() => handleScroll('#contact')}
            id="hero-cta-primary"
            className="relative overflow-hidden font-syne font-semibold px-8 py-4 rounded-xl bg-[#F5C842] text-[#0B1120] hover:bg-[#F9DC85] transition-all duration-200 hover:shadow-2xl hover:shadow-[#F5C842]/25 active:scale-95 text-base group"
          >
            <span className="relative z-10">Book a Free Discovery Call</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
          </button>
          <button
            onClick={() => handleScroll('#services')}
            id="hero-cta-secondary"
            className="font-syne font-semibold px-8 py-4 rounded-xl border border-[#F5C842]/40 text-[#F5C842] hover:bg-[#F5C842]/10 transition-all duration-200 active:scale-95 text-base"
          >
            View Services
          </button>
        </motion.div>

        {/* Glassmorphism Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/5 pt-10"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="relative rounded-2xl bg-white/3 backdrop-blur-md border border-white/8 px-6 py-5 text-center hover:border-[#F5C842]/20 hover:shadow-[0_0_20px_rgba(245,200,66,0.06)] transition-all duration-300"
            >
              {/* Gold top accent */}
              <span className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-[1px] bg-[#F5C842]/50 rounded-full" />
              <stat.icon size={16} className="text-[#F5C842] mx-auto mb-2" />
              <div className="font-syne font-bold text-2xl md:text-3xl text-[#F5C842]">{stat.value}</div>
              <div className="font-inter text-xs text-[#94A3B8] mt-1 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="relative w-8 h-8 flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 rounded-full border border-[#F5C842]/40"
          />
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full bg-[#F5C842]"
          />
        </div>
      </motion.div>
    </section>
  )
}
