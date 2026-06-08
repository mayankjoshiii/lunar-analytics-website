'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, BookOpen, Building2, Github } from 'lucide-react'

const skills = [
  'Python', 'Machine Learning', 'SQL', 'Power BI', 'Churn Prediction',
  'A/B Testing', 'Financial Analytics', 'Google Analytics', 'R', 'dbt',
]

const credentials = [
  {
    icon: BookOpen,
    title: 'MSc Business Analytics — Distinction',
    sub: 'Swansea University · Business Project: Data-Driven Retention Strategy for Enterprise Mobility. Regression, NLP, cluster analysis, Tableau/Power BI. 90% in Managing Financial Resources.',
  },
  {
    icon: Building2,
    title: 'Senior Analyst at Google LLC',
    sub: '4+ years deployed onsite · Gurugram, India',
  },
  {
    icon: Award,
    title: 'CMI Level 7 Strategic Leadership',
    sub: 'Chartered Management Institute',
  },
  {
    icon: Github,
    title: '10+ Analytics Projects on GitHub',
    sub: 'ML, NLP, churn models, dashboards',
  },
]

const timeline = [
  {
    period: '2019–2024',
    title: 'Senior Data Analyst — Google LLC',
    body: '4+ years onsite at Gurugram campus. Led analytics for enterprise clients, A/B testing at scale, ML forecasting models, and Google Analytics consulting.',
    pulse: false,
  },
  {
    period: '2024–2025',
    title: 'MSc Business Analytics — Distinction',
    body: 'Swansea University. Churn prediction, NLP, cluster analysis. Business Project for real client Enterprise Mobility. 90% in Managing Financial Resources.',
    pulse: false,
  },
  {
    period: '2025–Present',
    title: 'Founder — Lunar Analytics',
    body: 'Bringing Google-grade analytics to UK SMEs. Fractional data team model + Churn Shield SaaS in active development.',
    pulse: true,
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="about" className="py-24 bg-[#0B1120]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left: Text + Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="font-inter text-xs text-[#F5C842] uppercase tracking-widest mb-4 block">
              About Lunar
            </span>
            <h2 className="font-syne font-bold text-3xl md:text-4xl text-[#F8FAFC] mb-6 leading-tight tracking-[-0.02em]">
              Google-trained analytics,{' '}
              <span className="text-[#F5C842]">built for SMEs.</span>
            </h2>

            <div className="space-y-5 font-inter text-[#94A3B8] leading-[1.75]">
              <p>
                Lunar Analytics was founded by <strong className="text-[#F8FAFC]">Mayank Joshi</strong> — a Senior
                Data Analyst who spent 4+ years at Google LLC, and holds an MSc in Business Analytics with Distinction
                from Swansea University. After seeing large enterprises build world-class data capabilities, Mayank set
                out to bring that same rigour and impact to UK SMEs.
              </p>
              <p>
                The name <em className="text-[#F5C842]">Lunar</em> comes from the Sanskrit meaning of Mayank — moon.
                Just as the moon illuminates the night, Lunar Analytics illuminates the data hiding in plain sight
                within your business.
              </p>
            </div>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-2 mt-8 mb-10">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="font-inter text-xs px-3 py-1.5 rounded-full bg-[#F5C842]/10 border border-[#F5C842]/20 text-[#F5C842] hover:bg-[#F5C842]/20 transition-colors duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Career Timeline */}
            <div>
              <p className="font-inter text-xs text-[#F5C842] uppercase tracking-widest mb-5">Career Journey</p>
              <div className="relative">
                {timeline.map((entry, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                    className="relative flex gap-5 pb-6 last:pb-0"
                  >
                    {/* Vertical line */}
                    {i < timeline.length - 1 && (
                      <span className="absolute left-[10px] top-5 bottom-0 w-px bg-gradient-to-b from-[#F5C842]/50 to-[#F5C842]/10" />
                    )}

                    {/* Dot */}
                    <div className="relative flex-shrink-0 mt-1">
                      <div className="w-[22px] h-[22px] rounded-full bg-[#F5C842] border-4 border-[#0B1120] z-10 relative" />
                      {entry.pulse && (
                        <motion.div
                          animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                          className="absolute inset-0 rounded-full bg-[#F5C842]/30"
                        />
                      )}
                    </div>

                    {/* Card */}
                    <div className="flex-1 bg-[#0F1729] border border-white/5 rounded-xl p-4 hover:border-[#F5C842]/20 transition-all duration-200">
                      <span className="inline-block font-syne text-xs text-[#F5C842] bg-[#F5C842]/10 px-2 py-0.5 rounded-full mb-2">
                        {entry.period}
                      </span>
                      <p className="font-syne font-bold text-sm text-[#F8FAFC] mb-1">{entry.title}</p>
                      <p className="font-inter text-xs text-[#94A3B8] leading-relaxed">{entry.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-[#0F1729] rounded-2xl border border-white/10 p-8 hover:border-[#F5C842]/30 transition-all duration-300 hover:shadow-[0_0_40px_rgba(245,200,66,0.08)]">

              {/* Avatar + Open status */}
              <div className="flex items-center gap-5 mb-8 pb-8 border-b border-white/5">
                {/* Animated gradient ring */}
                <div className="relative flex-shrink-0">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-[-3px] rounded-full"
                    style={{
                      background: 'conic-gradient(from 0deg, #F5C842, #D4A820, #F5C842, #0B1120, #0B1120)',
                      borderRadius: '9999px',
                    }}
                  />
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative w-20 h-20 rounded-full flex items-center justify-center text-[#0B1120] font-syne font-bold text-2xl"
                    style={{
                      background: 'linear-gradient(135deg, #F5C842 0%, #D4A820 100%)',
                    }}
                  >
                    MJ
                  </motion.div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <h3 className="font-syne font-bold text-xl text-[#F8FAFC]">Mayank Joshi</h3>
                    <span className="flex items-center gap-1.5 text-[#94A3B8] text-xs">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      Open to clients
                    </span>
                  </div>
                  <p className="font-inter text-sm text-[#94A3B8]">Founder & Lead Analyst</p>
                  <p className="font-inter text-xs text-[#F5C842] mt-1">Swansea, Wales, UK</p>
                </div>
              </div>

              {/* Credentials */}
              <div className="space-y-5">
                {credentials.map((cred, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#F5C842]/10 border border-[#F5C842]/20 flex items-center justify-center">
                      <cred.icon size={16} className="text-[#F5C842]" />
                    </div>
                    <div>
                      <p className="font-inter text-sm font-medium text-[#F8FAFC] leading-snug">{cred.title}</p>
                      <p className="font-inter text-xs text-[#94A3B8] mt-0.5">{cred.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <div className="mt-8 pt-6 border-t border-white/5 bg-[#F5C842]/3 rounded-xl p-4 -mx-1">
                <p className="font-inter text-sm text-[#94A3B8] italic leading-relaxed">
                  "I built Lunar because every SME deserves the same analytics edge as a Fortune 500 — without
                  the price tag or the wait."
                </p>
                <p className="font-inter text-xs text-[#F5C842] mt-2">— Mayank Joshi, Founder</p>
              </div>

              {/* LinkedIn CTA */}
              <a
                href="https://linkedin.com/in/mayankjoshi"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-full flex items-center justify-center gap-2 border border-[#F5C842]/40 text-[#F5C842] text-xs font-syne font-semibold py-2.5 rounded-xl hover:bg-[#F5C842]/10 transition-all duration-200"
              >
                Connect on LinkedIn →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
