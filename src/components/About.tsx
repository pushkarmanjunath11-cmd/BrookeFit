"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "12,000+ sqft of premium training space",
  "Pro-grade equipment, always maintained",
  "35+ certified coaches & personal trainers",
  "Unlimited group classes across all disciplines",
  "Luxury steam room & recovery suite",
  "A community that shows up for each other",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 bg-[#0A0A0A]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-[#D4AF37] text-xs font-black tracking-[0.3em] uppercase mb-5"
          >
            WHY BROOKEFIT
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.05 }}
            className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-[0.9] tracking-tighter uppercase mb-6"
          >
            THE GYM
            <br />
            THAT NEVER
            <br />
            <span className="text-[#D4AF37]">QUITS.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-white/50 text-base leading-relaxed max-w-md"
          >
            NS Fitness people come here not just to exercise — it&apos;s a movement. BrookeFit doesn&apos;t
            believe in half measures. Every piece of equipment, every class, every trainer is here to
            push you past what you thought was possible.
          </motion.p>
        </div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="space-y-0 border-t border-white/8"
        >
          {reasons.map((reason, i) => (
            <motion.div
              key={reason}
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.07 }}
              className="flex items-center gap-4 py-5 border-b border-white/8 group"
            >
              <CheckCircle2 size={18} className="text-[#D4AF37] shrink-0" />
              <span className="text-sm font-bold text-white/70 group-hover:text-white transition-colors tracking-wide">
                {reason}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
