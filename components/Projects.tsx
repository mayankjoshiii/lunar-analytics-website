'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github, Brain, Users, TrendingUp, BarChart2, FlaskConical } from 'lucide-react'

const projects = [
  {
    category: 'Machine Learning',
    icon: Brain,
    title: 'Customer Churn Prediction',
    description: 'End-to-end ML pipeline on 7,043 telecom records. Logistic Regression + Random Forest with feature importance, confusion matrix, and full business impact quantification.',
    metrics: [
      { value: '82%', label: 'Accuracy' },
      { value: '0.86', label: 'AUC-ROC' },
      { value: '£340K', label: 'Proj. Savings' },
    ],
    tags: ['Python', 'scikit-learn', 'Random Forest', 'SQL', 'Plotly'],
    live: 'https://mayankjoshiii.github.io/customer-churn-prediction/',
    github: 'https://github.com/mayankjoshiii/customer-churn-prediction',
    highlight: true,
  },
  {
    category: 'Analytics Platform',
    icon: Users,
    title: 'Customer Intelligence Platform',
    description: '360° customer analytics — K-Means clustering with PCA, 3D RFM segmentation, cohort retention heatmaps, customer lifecycle Sankey, and UK regional revenue mapping.',
    metrics: [
      { value: 'K-Means', label: '+ PCA' },
      { value: '3D RFM', label: 'Segments' },
      { value: 'Cohort', label: 'Retention' },
    ],
    tags: ['Python', 'K-Means', 'RFM Analysis', 'Cohort Analysis', 'Plotly'],
    live: 'https://mayankjoshiii.github.io/customer-intelligence-dashboard/',
    github: 'https://github.com/mayankjoshiii/customer-intelligence-dashboard',
    highlight: false,
  },
  {
    category: 'Business Intelligence',
    icon: TrendingUp,
    title: 'Financial KPI Dashboard',
    description: 'Executive-grade financial analytics tracking £4.92M revenue. Actual vs Budget vs Forecast variance, EBITDA waterfall, cost bridging, and RAG status reporting by region.',
    metrics: [
      { value: '£4.92M', label: 'Tracked' },
      { value: '41.9%', label: 'Gross Margin' },
      { value: '17.6%', label: 'EBITDA' },
    ],
    tags: ['Python', 'Plotly', 'EBITDA', 'Variance Analysis', 'RAG Status'],
    live: 'https://mayankjoshiii.github.io/financial-kpi-dashboard/',
    github: 'https://github.com/mayankjoshiii/financial-kpi-dashboard',
    highlight: false,
  },
  {
    category: 'MLOps · Enterprise',
    icon: BarChart2,
    title: 'ML Model Explainability Platform',
    description: 'Enterprise MLOps platform with SHAP beeswarm explainability, Population Stability Index drift detection, demographic fairness analysis, and an interactive what-if simulator.',
    metrics: [
      { value: 'SHAP', label: 'Explainability' },
      { value: 'PSI', label: 'Drift Monitor' },
      { value: 'Fairness', label: 'Bias Audit' },
    ],
    tags: ['Python', 'SHAP', 'scikit-learn', 'PSI', 'Model Monitoring'],
    live: 'https://mayankjoshiii.github.io/ml-explainability-dashboard/',
    github: 'https://github.com/mayankjoshiii/ml-explainability-dashboard',
    highlight: false,
  },
  {
    category: 'Statistical Analysis',
    icon: FlaskConical,
    title: 'A/B Testing Analytics Engine',
    description: 'Full experiment analytics platform — frequentist and Bayesian hypothesis testing, sequential testing with early stopping, and an automated sample size calculator.',
    metrics: [
      { value: 'Bayes', label: '+ Frequentist' },
      { value: 'Sequential', label: 'Testing' },
      { value: 'Auto', label: 'Sample Calc' },
    ],
    tags: ['Python', 'Statistics', 'Bayesian', 'Hypothesis Testing', 'Plotly'],
    live: 'https://mayankjoshiii.github.io/ab-testing-dashboard/',
    github: 'https://github.com/mayankjoshiii/ab-testing-dashboard',
    highlight: false,
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.05 })

  return (
    <section id="projects" className="py-24 bg-[#0F1729]" ref={ref}>
      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(245,200,66,0.06) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="font-inter text-xs text-[#F5C842] uppercase tracking-widest mb-4 block">
            GitHub Projects
          </span>
          <h2 className="font-syne font-bold text-3xl md:text-4xl text-[#F8FAFC] mb-4 tracking-[-0.02em]">
            Real projects.{' '}
            <span className="text-[#F5C842]">Live and working.</span>
          </h2>
          <p className="font-inter text-[#94A3B8] max-w-2xl mx-auto text-lg leading-[1.75]">
            Every project is deployed, interactive, and built to production standards — the exact same
            toolkit Lunar Analytics applies to client engagements.
          </p>
        </motion.div>

        {/* Cards: 3 + 2 centered layout using 6-col grid */}
        <div className="grid md:grid-cols-6 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className={`md:col-span-2 ${
                i === 3 ? 'md:col-start-2' : i === 4 ? 'md:col-start-4' : ''
              }`}
            >
              <motion.div
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`h-full bg-[#0B1120] border rounded-2xl p-6 flex flex-col transition-all duration-300 group ${
                  project.highlight
                    ? 'border-[#F5C842]/30 shadow-[0_0_35px_rgba(245,200,66,0.10)]'
                    : 'border-white/5 hover:border-[#F5C842]/25 hover:shadow-[0_0_30px_rgba(245,200,66,0.07)]'
                }`}
              >
                {/* Top gold accent line */}
                <div className="h-[1px] bg-gradient-to-r from-[#F5C842]/70 via-[#F5C842]/25 to-transparent w-4/5 mb-6" />

                {/* Category row */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#F5C842]/10 border border-[#F5C842]/20 flex items-center justify-center">
                      <project.icon size={14} className="text-[#F5C842]" />
                    </div>
                    <span className="font-inter text-[11px] text-[#F5C842] uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>
                  <span className="flex items-center gap-1 font-inter text-[10px] bg-green-500/10 border border-green-500/20 text-green-400 px-2 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
                    Live
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-syne font-bold text-base text-[#F8FAFC] mb-2 leading-snug group-hover:text-[#F5C842] transition-colors duration-200">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="font-inter text-sm text-[#94A3B8] leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Metrics strip */}
                <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-[#131E35] rounded-xl border border-white/5">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="text-center">
                      <div className="font-syne font-bold text-sm text-[#F5C842] leading-tight">
                        {m.value}
                      </div>
                      <div className="font-inter text-[10px] text-[#94A3B8] uppercase tracking-wide mt-0.5 leading-tight">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-inter text-[10px] px-2 py-1 rounded-full bg-white/4 border border-white/8 text-[#94A3B8]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-2">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#F5C842] text-[#0B1120] font-syne font-semibold text-xs hover:bg-[#F9DC85] transition-all duration-200 active:scale-95 relative overflow-hidden group/btn"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover/btn:translate-x-full transition-transform duration-500" />
                    <ExternalLink size={12} className="relative z-10" />
                    <span className="relative z-10">View Live Dashboard</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2.5 rounded-xl border border-white/10 text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#F5C842]/30 transition-all duration-200"
                    aria-label="View source on GitHub"
                  >
                    <Github size={15} />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* GitHub profile link */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/mayankjoshiii"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-inter text-sm text-[#94A3B8] hover:text-[#F5C842] transition-colors duration-200 border border-white/10 hover:border-[#F5C842]/30 px-5 py-2.5 rounded-full"
          >
            <Github size={15} />
            View all projects — github.com/mayankjoshiii
          </a>
        </motion.div>
      </div>
    </section>
  )
}
