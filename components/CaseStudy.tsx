'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const metrics = [
  { value: '2,495', label: 'UK Customers Surveyed', sub: 'aged 18–64' },
  { value: '25%', label: 'Churn Rate Identified', sub: 'in 18–25 segment' },
  { value: '15%', label: 'Churn Reduction Potential', sub: 'via ML models (McKinsey)' },
  { value: '85%+', label: 'Retention in Stable Segments', sub: 'ages 35–50' },
]

const methods = [
  {
    icon: '📊',
    title: 'Multiple Regression Analysis',
    desc: 'Identified loyalty drivers across brand KPIs — popularity and usage predict retention; short-term buzz has near-zero effect.',
  },
  {
    icon: '🔵',
    title: 'Cluster Segmentation',
    desc: 'Power BI segmentation of 2,495 respondents into behavioural groups — exposing the high-risk 18–25 cohort with 25% churn.',
  },
  {
    icon: '💬',
    title: 'NLP Sentiment Analysis',
    desc: 'Natural language processing of open-text reviews. Negative sentiment identified as the single strongest predictor of churn.',
  },
  {
    icon: '🗺️',
    title: 'Geospatial Analysis',
    desc: 'Customer satisfaction heatmaps by region revealed medium-density cities outperform megacities — highest expansion potential.',
  },
  {
    icon: '📈',
    title: 'Tableau & Power BI Dashboards',
    desc: 'Interactive dashboards visualising retention KPIs, churn drivers, media engagement, and demographic loyalty profiles.',
  },
  {
    icon: '⚙️',
    title: 'Analytics Maturity Benchmarking',
    desc: 'Maturity radar chart benchmarking Enterprise Mobility against industry leaders — gap analysis leading to ML implementation roadmap.',
  },
]

const findings = [
  'Repeated usage and brand popularity are the strongest loyalty predictors — short-term buzz has limited or negative effect',
  'Negative online sentiment is the single most powerful predictor of churn, requiring proactive reputation management',
  'The 18–25 demographic shows 25% churn — the most acute strategic vulnerability, requiring gamified digital loyalty solutions',
  'Enterprise Mobility\'s analytics maturity lags industry standards, with no predictive tools for early churn intervention',
  'A 5% improvement in retention can raise profits by 25–95%, making targeted intervention highly ROI-positive',
  'Medium-density urban centres offer the highest expansion potential for EV and subscription mobility models',
]

export default function CaseStudy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="case-study" className="py-24 px-[5%]" ref={ref}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[#F5C842] mb-3">
            Real Work · MSc Capstone Project
          </p>
          <h2 className="font-syne text-3xl md:text-4xl font-bold text-white leading-tight mb-4 max-w-3xl">
            Enterprise Mobility: Data-Driven Customer Retention Strategy
          </h2>
          <p className="text-[#94A3B8] max-w-2xl text-[1.05rem] leading-relaxed">
            A Distinction-grade MSc Business Analytics capstone project at Swansea University,
            delivered to a real client brief from Enterprise Mobility (Enterprise Rent-A-Car ·
            National Car Rental). Mixed-methods analysis of 2,495 UK customers to diagnose
            churn drivers and build a predictive retention roadmap.
          </p>
        </motion.div>

        {/* Metrics row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-[#111827] border border-white/5 rounded-xl p-5 text-center"
            >
              <div className="font-syne text-3xl font-bold text-[#F5C842] mb-1">{m.value}</div>
              <div className="text-white text-sm font-semibold mb-0.5">{m.label}</div>
              <div className="text-[#94A3B8] text-xs">{m.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">

          {/* Left: methods */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-syne text-xl font-bold text-white mb-6">
              Analytical Techniques Applied
            </h3>
            <div className="flex flex-col gap-4">
              {methods.map((m) => (
                <div key={m.title} className="flex gap-4 items-start">
                  <span className="text-2xl mt-0.5 flex-shrink-0">{m.icon}</span>
                  <div>
                    <div className="text-white font-semibold text-sm mb-1">{m.title}</div>
                    <div className="text-[#94A3B8] text-sm leading-relaxed">{m.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: findings */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-syne text-xl font-bold text-white mb-6">
              Key Findings
            </h3>
            <ul className="flex flex-col gap-4">
              {findings.map((f, i) => (
                <li key={i} className="flex gap-3 items-start text-sm text-[#94A3B8] leading-relaxed">
                  <span className="text-[#F5C842] mt-1 flex-shrink-0">✦</span>
                  {f}
                </li>
              ))}
            </ul>

            {/* Impact box */}
            <div className="mt-8 bg-[#1C2A3A] border border-[#F5C842]/20 rounded-xl p-5">
              <div className="text-[#F5C842] font-semibold text-sm mb-2">Strategic Impact</div>
              <p className="text-white text-sm leading-relaxed">
                Delivered a six-priority action plan — loyalty redesign, youth engagement,
                transparent pricing, peak-demand service quality, ML churn prediction, and
                EV urban expansion — with a phased 24-month implementation roadmap and
                KPI monitoring framework using Power BI and Tableau dashboards.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Python', 'Regression Modelling', 'NLP', 'Tableau', 'Power BI', 'Cluster Analysis', 'GDPR Compliance'].map(tag => (
                  <span key={tag} className="text-xs bg-white/5 border border-white/10 rounded-full px-3 py-1 text-[#94A3B8]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom: This work powers our SaaS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-[#1C2A3A] to-[#111827] border border-[#F5C842]/20 rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <div className="text-[#F5C842] font-semibold text-sm mb-2">
              🌙 This project powers our Churn Shield product
            </div>
            <h4 className="font-syne text-xl font-bold text-white mb-2">
              From MSc research to production SaaS
            </h4>
            <p className="text-[#94A3B8] text-sm max-w-xl leading-relaxed">
              The churn prediction models and NLP sentiment analysis built for Enterprise Mobility
              form the analytical foundation of Churn Shield — our upcoming SaaS product for UK
              subscription businesses. Rigorous academic research, production-ready product.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 bg-[#F5C842] text-[#0B1120] font-bold px-6 py-3 rounded-xl text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Get Early Access →
          </a>
        </motion.div>

      </div>
    </section>
  )
}
