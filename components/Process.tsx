'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, BarChart2, Cpu, TrendingUp } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Discovery Call',
    desc: 'A free 30-minute call to understand your business, your current data setup, and what decisions you need to make better and faster.',
  },
  {
    number: '02',
    icon: BarChart2,
    title: 'Data Audit',
    desc: "We map what data you have, where it lives, and what's missing. You receive a clear data maturity assessment within 5 working days.",
  },
  {
    number: '03',
    icon: Cpu,
    title: 'Build & Deliver',
    desc: 'We build dashboards, models, and pipelines — tailored to your business. First deliverables within 2 weeks. Weekly updates throughout.',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Iterate & Grow',
    desc: 'Analytics is never "done." We meet weekly, review what\'s working, and continuously improve your data capability as your business scales.',
  },
]

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="process" className="py-24 bg-[#0F1729]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-inter text-xs text-[#F5C842] uppercase tracking-widest mb-4 block">
            How It Works
          </span>
          <h2 className="font-syne font-bold text-3xl md:text-5xl text-[#F8FAFC] mb-4">
            From first call to{' '}
            <span className="text-[#F5C842]">first insight in 30 days.</span>
          </h2>
          <p className="font-inter text-[#94A3B8] max-w-2xl mx-auto text-lg">
            {'A clear, structured process that gets you from "we have data" to "we\'re using it" — fast.'}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-px">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full bg-gradient-to-r from-[#F5C842]/0 via-[#F5C842]/30 to-[#F5C842]/0 origin-left"
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="relative group"
            >
              {/* Large muted number */}
              <div className="absolute -top-4 left-4 font-syne font-bold text-7xl text-white/3 leading-none select-none pointer-events-none">
                {step.number}
              </div>

              <div className="relative bg-[#131E35] rounded-2xl border border-white/5 p-6 pt-8 hover:border-[#F5C842]/30 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(245,200,66,0.06)]">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#F5C842]/10 border border-[#F5C842]/20 flex items-center justify-center mb-4 group-hover:bg-[#F5C842]/20 transition-colors duration-200">
                  <step.icon size={20} className="text-[#F5C842]" />
                </div>

                {/* Step number label */}
                <div className="font-inter text-xs text-[#F5C842] uppercase tracking-widest mb-2">
                  Step {step.number}
                </div>

                <h3 className="font-syne font-bold text-lg text-[#F8FAFC] mb-3">
                  {step.title}
                </h3>
                <p className="font-inter text-sm text-[#94A3B8] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-14"
        >
          <button
            onClick={() => {
              const el = document.querySelector('#contact')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            id="process-cta"
            className="font-syne font-semibold px-8 py-4 rounded-xl bg-[#F5C842] text-[#0B1120] hover:bg-[#F9DC85] transition-all duration-200 hover:shadow-xl hover:shadow-[#F5C842]/20 active:scale-95"
          >
            Start with a Free Discovery Call
          </button>
        </motion.div>
      </div>
    </section>
  )
}
