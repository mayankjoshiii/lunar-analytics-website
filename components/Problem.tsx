'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { AlertCircle, DollarSign, HelpCircle } from 'lucide-react'

const painPoints = [
  {
    icon: AlertCircle,
    title: 'Tools without analysts',
    desc: 'You have Power BI, GA4, or Tableau licences — but no one turning the data into action. Dashboards gather dust.',
  },
  {
    icon: DollarSign,
    title: '£50k+ for a full-time hire',
    desc: 'A senior data analyst costs £50,000\u2013£70,000/year before NI and benefits. That\'s a lot for one role.',
  },
  {
    icon: HelpCircle,
    title: "You don't know what you don't know",
    desc: 'The most dangerous data problem isn\'t bad data \u2014 it\'s not realising what insights you\'re missing.',
  },
]

const bars = [
  { label: 'Data Spend', value: 85, color: '#94A3B8' },
  { label: 'Decisions Made', value: 24, color: '#F5C842' },
]

export default function Problem() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="problem" className="py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Pain Points */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="font-inter text-xs text-[#F5C842] uppercase tracking-widest mb-4 block">
                The Problem
              </span>
              <h2 className="font-syne font-bold text-3xl md:text-4xl text-[#F8FAFC] mb-4 leading-tight">
                Your data is sitting idle{' '}
                <span className="text-[#F5C842]">while decisions are made on gut feel.</span>
              </h2>
              <p className="font-inter text-[#94A3B8] mb-10 leading-relaxed">
                {'Most UK SMEs have more data than they realise — but lack the analyst to surface what it\'s saying. Here\'s what that looks like in practice:'}
              </p>
            </motion.div>

            <div className="space-y-6">
              {painPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#F5C842]/10 border border-[#F5C842]/20 flex items-center justify-center group-hover:bg-[#F5C842]/20 transition-colors duration-200">
                    <point.icon size={20} className="text-[#F5C842]" />
                  </div>
                  <div>
                    <h3 className="font-syne font-semibold text-[#F8FAFC] mb-1">{point.title}</h3>
                    <p className="font-inter text-sm text-[#94A3B8] leading-relaxed">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Animated Bar Chart */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-[#131E35] rounded-2xl border border-white/5 p-8"
          >
            <div className="mb-6">
              <span className="font-inter text-xs text-[#94A3B8] uppercase tracking-widest">
                Average UK SME
              </span>
              <h3 className="font-syne font-semibold text-[#F8FAFC] text-lg mt-1">
                Data Spend vs. Decisions Made
              </h3>
            </div>

            <div className="space-y-8">
              {bars.map((bar, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-inter text-sm text-[#94A3B8]">{bar.label}</span>
                    <span className="font-syne font-bold text-lg" style={{ color: bar.color }}>
                      {bar.value}%
                    </span>
                  </div>
                  <div className="h-4 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${bar.value}%` } : {}}
                      transition={{ duration: 1.2, delay: 0.5 + i * 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: bar.color }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl bg-[#F5C842]/5 border border-[#F5C842]/20">
              <p className="font-inter text-sm text-[#94A3B8] leading-relaxed">
                <span className="text-[#F5C842] font-semibold">The gap is where money is lost.</span>{' '}
                Businesses spend on data tools but rarely translate that investment into decisions. Lunar closes that gap.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
