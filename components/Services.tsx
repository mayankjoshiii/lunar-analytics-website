'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Check, Star } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    monthlyPrice: '£1,500',
    annualPrice: '£13,500',
    annualSaving: '£4,500',
    period: '/mo',
    description: 'Perfect for businesses taking their first steps into data-driven decision making.',
    featured: false,
    features: [
      'Monthly data health report',
      'KPI dashboard setup (Power BI)',
      'Up to 2 data sources connected',
      'Fortnightly 1-hour strategy call',
      'Email support',
      'Google Analytics setup & audit',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Growth',
    monthlyPrice: '£2,500',
    annualPrice: '£22,500',
    annualSaving: '£7,500',
    period: '/mo',
    description: 'Our most popular package — ideal for growing businesses ready to go beyond dashboards.',
    featured: true,
    features: [
      'Everything in Starter',
      'Weekly data insights report',
      'Custom ML model (churn, forecast)',
      'Up to 5 data sources connected',
      'Weekly 1-hour strategy call',
      'A/B testing & experimentation',
      'Financial analytics & modelling',
      'Slack channel access',
    ],
    cta: 'Most Popular — Start Here',
  },
  {
    name: 'Scale',
    monthlyPrice: '£4,000',
    annualPrice: '£36,000',
    annualSaving: '£12,000',
    period: '/mo',
    description: 'Full analytics capability for scaling businesses with complex data needs.',
    featured: false,
    features: [
      'Everything in Growth',
      'Dedicated analytics roadmap',
      'Unlimited data sources',
      'Custom Python pipelines',
      'Real-time analytics setup',
      'Bi-weekly exec briefings',
      'Priority support (same-day)',
      'Quarterly business review',
    ],
    cta: 'Scale Your Analytics',
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [isAnnual, setIsAnnual] = useState(false)

  const handleScrollToContact = () => {
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="services" className="py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-inter text-xs text-[#F5C842] uppercase tracking-widest mb-4 block">
            Services & Pricing
          </span>
          <h2 className="font-syne font-bold text-3xl md:text-5xl text-[#F8FAFC] mb-4 tracking-[-0.02em]">
            Enterprise analytics.{' '}
            <span className="text-[#F5C842]">SME pricing.</span>
          </h2>
          <p className="font-inter text-[#94A3B8] max-w-2xl mx-auto text-lg leading-[1.75]">
            Transparent, fixed-fee packages. No hidden costs, no equity, no surprise invoices.
            Cancel or change plans with 30 days' notice.
          </p>
        </motion.div>

        {/* Billing toggle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setIsAnnual(false)}
            className={`font-inter text-sm px-5 py-2 rounded-full transition-all duration-200 ${
              !isAnnual ? 'bg-[#F5C842] text-[#0B1120] font-bold' : 'bg-white/5 text-[#94A3B8] hover:text-[#F8FAFC]'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`font-inter text-sm px-5 py-2 rounded-full transition-all duration-200 ${
              isAnnual ? 'bg-[#F5C842] text-[#0B1120] font-bold' : 'bg-white/5 text-[#94A3B8] hover:text-[#F8FAFC]'
            }`}
          >
            Annual
          </button>
          <AnimatePresence>
            {isAnnual && (
              <motion.span
                initial={{ opacity: 0, x: -8, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -8, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="font-inter text-xs bg-green-500/15 text-green-400 border border-green-500/25 px-3 py-1 rounded-full"
              >
                Save 25%
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`relative rounded-2xl transition-all duration-300 cursor-default ${
                plan.featured ? '' : 'p-8 border border-white/10 bg-[#0F1729] hover:border-[#F5C842]/50 hover:shadow-[0_0_30px_rgba(245,200,66,0.08)]'
              }`}
            >
              {/* Featured card: animated gradient border */}
              {plan.featured ? (
                <div className="relative rounded-2xl p-[1.5px] spin-border">
                  <div className="relative rounded-[14px] border-[#F5C842] bg-[#131E35] shadow-[0_0_50px_rgba(245,200,66,0.12)] p-8">
                    {/* Featured badge */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#F5C842] text-[#0B1120] text-xs font-syne font-bold uppercase tracking-wide">
                        <Star size={12} fill="currentColor" />
                        <motion.span
                          animate={{ opacity: [1, 0.6, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          Most Popular
                        </motion.span>
                      </div>
                    </div>
                    <PlanContent plan={plan} isAnnual={isAnnual} handleScrollToContact={handleScrollToContact} isInView={isInView} index={i} />
                  </div>
                </div>
              ) : (
                <PlanContent plan={plan} isAnnual={isAnnual} handleScrollToContact={handleScrollToContact} isInView={isInView} index={i} />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5"
        >
          <p className="font-inter text-sm text-[#94A3B8]">
            Not sure which plan?{' '}
            <button onClick={handleScrollToContact} className="text-[#F5C842] hover:underline">
              Let's talk →
            </button>
          </p>
          <button
            onClick={handleScrollToContact}
            className="font-syne font-semibold text-sm px-6 py-2.5 rounded-lg bg-[#F5C842]/10 border border-[#F5C842]/30 text-[#F5C842] hover:bg-[#F5C842]/20 transition-all duration-200"
          >
            Book Free Discovery Call
          </button>
        </motion.div>
      </div>
    </section>
  )
}

function PlanContent({
  plan,
  isAnnual,
  handleScrollToContact,
  isInView,
  index,
}: {
  plan: (typeof plans)[0]
  isAnnual: boolean
  handleScrollToContact: () => void
  isInView: boolean
  index: number
}) {
  return (
    <>
      <div className="mb-6">
        <h3 className={`font-syne font-bold text-xl mb-2 ${plan.featured ? 'text-[#F5C842]' : 'text-[#F8FAFC]'}`}>
          {plan.name}
        </h3>
        <p className="font-inter text-sm text-[#94A3B8] leading-relaxed">{plan.description}</p>
      </div>

      <div className="mb-8 pb-8 border-b border-white/10">
        <AnimatePresence mode="wait">
          <motion.div
            key={isAnnual ? 'annual' : 'monthly'}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-baseline gap-1">
              <span className="font-syne font-bold text-4xl text-[#F8FAFC]">
                {isAnnual ? plan.annualPrice : plan.monthlyPrice}
              </span>
              <span className="font-inter text-[#94A3B8] text-sm">{isAnnual ? '/yr' : '/mo'}</span>
            </div>
            {isAnnual && (
              <p className="font-inter text-xs text-green-400 mt-1">Save {plan.annualSaving} vs monthly</p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, fi) => (
          <motion.li
            key={fi}
            initial={{ opacity: 0, y: 6 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.4 + index * 0.1 + fi * 0.05 }}
            className="flex items-start gap-3"
          >
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#F5C842]/15 flex items-center justify-center mt-0.5">
              <Check size={11} className="text-[#F5C842]" strokeWidth={3} />
            </div>
            <span className="font-inter text-sm text-[#94A3B8] leading-relaxed">{feature}</span>
          </motion.li>
        ))}
      </ul>

      <button
        onClick={handleScrollToContact}
        id={`services-cta-${plan.name.toLowerCase()}`}
        className={`w-full py-3.5 rounded-xl font-syne font-semibold text-sm transition-all duration-200 active:scale-95 group relative overflow-hidden ${
          plan.featured
            ? 'bg-[#F5C842] text-[#0B1120] hover:bg-[#F9DC85] shadow-lg shadow-[#F5C842]/20'
            : 'border border-white/20 text-[#F8FAFC] hover:bg-white/5 hover:border-[#F5C842]/50'
        }`}
      >
        {plan.featured && (
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
        )}
        <span className="relative z-10">{plan.cta}</span>
      </button>
    </>
  )
}
