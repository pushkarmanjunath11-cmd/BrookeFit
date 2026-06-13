"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

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
    <section id="about" className="bg-[#0A0A0A]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — image stack */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative h-[520px] hidden lg:block"
        >
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=80"
              alt="Gym interior"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent" />
          </div>
          {/* Floating stat */}
          <div className="absolute bottom-6 left-6 bg-[#D4AF37] px-6 py-4 z-10">
            <div className="text-4xl font-black text-black leading-none">5★</div>
            <div className="text-[10px] font-black tracking-widest text-black/60 mt-1">MEMBER RATED</div>
          </div>
          <div className="absolute top-6 right-6 bg-[#0A0A0A]/80 backdrop-blur border border-[#D4AF37]/30 px-5 py-3 z-10">
            <div className="text-2xl font-black text-[#D4AF37] leading-none">2,400+</div>
            <div className="text-[10px] font-black tracking-widest text-white/40 mt-1">ACTIVE MEMBERS</div>
          </div>
        </motion.div>

        {/* Right — text */}
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
            className="text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-[0.9] tracking-tighter uppercase mb-8"
          >
            THE GYM
            <br />
            THAT NEVER
            <br />
            <span className="text-[#D4AF37]">QUITS.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="border-t border-white/8"
          >
            {reasons.map((reason, i) => (
              <motion.div
                key={reason}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.07 }}
                className="flex items-center gap-4 py-4 border-b border-white/8 group"
              >
                <CheckCircle2 size={16} className="text-[#D4AF37] shrink-0" />
                <span className="text-sm font-semibold text-white/60 group-hover:text-white transition-colors">
                  {reason}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
