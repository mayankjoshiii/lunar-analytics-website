'use client'

import { useEffect, useRef } from 'react'
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

function Moon() {
  return (
    <motion.div
      aria-hidden="true"
      className="absolute pointer-events-none"
      style={{ top: '6%', right: '5%', zIndex: 2 }}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1, y: [0, -18, 0] }}
      transition={{
        opacity: { duration: 1.4, ease: 'easeOut' },
        scale: { duration: 1.4, ease: 'easeOut' },
        y: { duration: 9, repeat: Infinity, ease: 'easeInOut' },
      }}
    >
      {/* Outer glow halo */}
      <motion.div
        className="absolute rounded-full"
        style={{
          inset: '-45%',
          background:
            'radial-gradient(circle, rgba(245,200,66,0.40) 0%, rgba(245,200,66,0.10) 42%, transparent 70%)',
          filter: 'blur(24px)',
        }}
        animate={{ opacity: [0.75, 1, 0.75] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Moon body */}
      <div
        className="relative rounded-full w-[clamp(170px,24vw,360px)] h-[clamp(170px,24vw,360px)]"
        style={{
          background:
            'radial-gradient(circle at 34% 30%, #FDE7A6 0%, #F5C842 38%, #E0A92E 68%, #C0871B 100%)',
          boxShadow:
            '0 0 90px 24px rgba(245,200,66,0.22), inset -22px -22px 64px rgba(150,100,18,0.45)',
        }}
      />
    </motion.div>
  )
}

function ConstellationNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animFrameId: number
    let particles: { x: number; y: number; vx: number; vy: number; r: number }[] = []
    const mouse = { x: -9999, y: -9999 }
    const LINK_DIST = 130

    const setup = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      const count = Math.min(120, Math.floor((canvas.width * canvas.height) / 13000))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.5 + 0.6,
      }))
    }
    setup()
    window.addEventListener('resize', setup)

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseout', onLeave)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(245,200,66,0.7)'
        ctx.fill()
      }

      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < LINK_DIST) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(245,200,66,${0.16 * (1 - dist / LINK_DIST)})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
        const mdx = a.x - mouse.x
        const mdy = a.y - mouse.y
        const mdist = Math.hypot(mdx, mdy)
        const MOUSE_DIST = LINK_DIST * 1.5
        if (mdist < MOUSE_DIST) {
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.strokeStyle = `rgba(245,200,66,${0.28 * (1 - mdist / MOUSE_DIST)})`
          ctx.lineWidth = 0.7
          ctx.stroke()
        }
      }

      animFrameId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', setup)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseout', onLeave)
      cancelAnimationFrame(animFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    />
  )
}

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
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
      style={{
        background: 'radial-gradient(120% 120% at 80% 8%, #1C1B4A 0%, #0E1230 38%, #0B1120 70%)',
      }}
    >
      {/* Subtle perspective grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          backgroundImage:
            'linear-gradient(rgba(245,200,66,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(245,200,66,0.035) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 40%, #000 25%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 40%, #000 25%, transparent 75%)',
        }}
      />

      {/* Constellation network */}
      <ConstellationNetwork />

      {/* Glowing moon */}
      <Moon />

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
