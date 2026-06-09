'use client'

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const headline = ["Your", "business", "has", "data.", "We", "turn", "it", "into"];

const stats = [
  { v: "4+", l: "Years Experience" },
  { v: "82%", l: "Churn Accuracy" },
  { v: "£0", l: "Wasted Spend" },
  { v: "30-Day", l: "ROI Window" },
];

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      {/* Aurora blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#F5C842]/20 blur-[120px] animate-aurora" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-[#1E3A8A]/40 blur-[140px] animate-aurora" style={{ animationDelay: "-6s" }} />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full bg-[#4F46E5]/30 blur-[130px] animate-aurora" style={{ animationDelay: "-12s" }} />
      </div>
      {/* Particles */}
      <div className="absolute inset-0 -z-10">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#F5C842]/60 animate-float"
            style={{
              left: `${(i * 53) % 100}%`,
              top: `${(i * 37) % 100}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${6 + (i % 5)}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#F5C842]" />
          <span>🌙 Data Intelligence for UK SMEs</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-5 text-sm text-muted-foreground"
        >
          🏢 4+ yrs onsite at Google · 🎓 MSc Distinction · 🏆 CMI Level 7
        </motion.p>

        <h1 className="mt-8 font-display font-bold text-5xl md:text-7xl leading-[1.05] max-w-5xl mx-auto">
          {headline.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
              className="inline-block mr-3"
            >
              {w}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + headline.length * 0.08, duration: 0.5 }}
            className="inline-block gold-text"
            style={{ textShadow: "0 0 40px rgba(245,200,66,0.4)" }}
          >
            decisions.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Lunar Analytics gives UK small and medium businesses the analytics capability of a large enterprise — without the enterprise price tag.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a href="#contact" className="btn-gold group">
            Book a Free Discovery Call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
          </a>
          <a href="#services" className="btn-gold-outline hover:bg-[#F5C842]/10">View Services</a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {stats.map((s) => (
            <div key={s.l} className="glass-card p-6 relative overflow-hidden group hover:gold-glow transition">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#F5C842] to-transparent" />
              <div className="font-display font-bold text-3xl gold-text">{s.v}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
