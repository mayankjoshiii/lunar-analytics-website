'use client'

import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'

const stats = [
  { value: 4, suffix: '+', label: 'Years at Google' },
  { value: 82, suffix: '%', label: 'Churn Model Accuracy' },
  { value: 10, suffix: '+', label: 'Analytics Projects' },
  { value: 30, suffix: ' Days', label: 'to First Insight' },
]

function AnimatedCounter({ target, suffix, isActive }: { target: number; suffix: string; isActive: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isActive) return
    let start = 0
    const duration = 1800
    const step = Math.ceil(target / (duration / 16))
    const timer = setInterval(() => {
      start = Math.min(start + step, target)
      setCount(start)
      if (start >= target) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [isActive, target])

  return (
    <span className="font-syne font-bold text-4xl md:text-5xl text-[#0B1120]">
      {count}{suffix}
    </span>
  )
}

export default function Results() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="results" className="py-20 bg-[#F5C842]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-syne font-bold text-2xl md:text-3xl text-[#0B1120]">
            The numbers behind Lunar Analytics
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} isActive={isInView} />
              <div className="font-inter text-sm text-[#0B1120]/70 mt-2 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
