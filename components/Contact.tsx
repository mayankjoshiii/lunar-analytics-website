'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle, Send, AlertCircle } from 'lucide-react'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid work email'),
  company: z.string().min(1, 'Company name is required'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(20, 'Please tell us a bit more (at least 20 characters)'),
})

type FormData = z.infer<typeof schema>

const serviceOptions = [
  { value: '', label: 'Select a service...' },
  { value: 'starter', label: 'Starter — £1,500/mo' },
  { value: 'growth', label: 'Growth — £2,500/mo (Most Popular)' },
  { value: 'scale', label: 'Scale — £4,000/mo' },
  { value: 'custom', label: 'Custom / Not sure yet' },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [submitState, setSubmitState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setSubmitState('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const result = await res.json()
      if (result.success) {
        setSubmitState('success')
        reset()
      } else {
        setSubmitState('error')
      }
    } catch {
      setSubmitState('error')
    }
  }

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-xl bg-[#131E35] border ${
      hasError ? 'border-red-500/50' : 'border-white/10'
    } text-[#F8FAFC] placeholder-[#94A3B8]/50 font-inter text-sm focus:outline-none focus:border-[#F5C842]/60 focus:ring-1 focus:ring-[#F5C842]/20 transition-all duration-200`

  return (
    <section id="contact" className="py-24" ref={ref}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-inter text-xs text-[#F5C842] uppercase tracking-widest mb-4 block">
            Free Discovery Call
          </span>
          <h2 className="font-syne font-bold text-3xl md:text-4xl text-[#F8FAFC] mb-4">
            Book your free{' '}
            <span className="text-[#F5C842]">discovery call.</span>
          </h2>
          <p className="font-inter text-[#94A3B8] leading-relaxed">
            30 minutes. No pressure, no sales pitch. Just an honest conversation about your data,
            your business goals, and whether we're a good fit.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-[#131E35] rounded-2xl border border-white/10 p-8"
        >
          <AnimatePresence mode="wait">
            {submitState === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
                  className="w-20 h-20 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle size={40} className="text-green-400" />
                </motion.div>
                <h3 className="font-syne font-bold text-2xl text-[#F8FAFC] mb-3">
                  Message received! 🌙
                </h3>
                <p className="font-inter text-[#94A3B8] mb-6 leading-relaxed">
                  Thank you for reaching out. Mayank will be in touch within 24 hours to schedule your
                  free discovery call.
                </p>
                <button
                  onClick={() => setSubmitState('idle')}
                  className="font-inter text-sm text-[#F5C842] hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                id="contact-form"
              >
                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-inter text-xs text-[#94A3B8] uppercase tracking-wide mb-1.5 block" htmlFor="name">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      {...register('name')}
                      placeholder="Mayank Joshi"
                      className={inputClass(!!errors.name)}
                    />
                    {errors.name && (
                      <p className="font-inter text-xs text-red-400 mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="font-inter text-xs text-[#94A3B8] uppercase tracking-wide mb-1.5 block" htmlFor="email">
                      Work Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register('email')}
                      placeholder="mayank@company.co.uk"
                      className={inputClass(!!errors.email)}
                    />
                    {errors.email && (
                      <p className="font-inter text-xs text-red-400 mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="font-inter text-xs text-[#94A3B8] uppercase tracking-wide mb-1.5 block" htmlFor="company">
                    Company Name *
                  </label>
                  <input
                    id="company"
                    {...register('company')}
                    placeholder="Acme Ltd"
                    className={inputClass(!!errors.company)}
                  />
                  {errors.company && (
                    <p className="font-inter text-xs text-red-400 mt-1">{errors.company.message}</p>
                  )}
                </div>

                {/* Service Interest */}
                <div>
                  <label className="font-inter text-xs text-[#94A3B8] uppercase tracking-wide mb-1.5 block" htmlFor="service">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    {...register('service')}
                    className={`${inputClass(!!errors.service)} bg-[#131E35] cursor-pointer`}
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="font-inter text-xs text-red-400 mt-1">{errors.service.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="font-inter text-xs text-[#94A3B8] uppercase tracking-wide mb-1.5 block" htmlFor="message">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    {...register('message')}
                    rows={5}
                    placeholder="Tell us about your business and what data challenges you're facing..."
                    className={`${inputClass(!!errors.message)} resize-none`}
                  />
                  {errors.message && (
                    <p className="font-inter text-xs text-red-400 mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Error state */}
                {submitState === 'error' && (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                    <AlertCircle size={16} className="text-red-400 flex-shrink-0" />
                    <p className="font-inter text-sm text-red-400">
                      Something went wrong. Please try again or email us directly at{' '}
                      <a href="mailto:hello@lunaranalytics.co.uk" className="underline">
                        hello@lunaranalytics.co.uk
                      </a>
                    </p>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitState === 'loading'}
                  id="contact-submit"
                  className="w-full py-4 rounded-xl bg-[#F5C842] text-[#0B1120] font-syne font-bold text-base hover:bg-[#F9DC85] transition-all duration-200 hover:shadow-xl hover:shadow-[#F5C842]/20 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {submitState === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-[#0B1120]/30 border-t-[#0B1120] rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Book Free Discovery Call
                    </>
                  )}
                </button>

                <p className="font-inter text-xs text-[#94A3B8] text-center">
                  No commitment required. We'll respond within 24 hours.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
