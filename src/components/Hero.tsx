"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const badges = ["Open 5AM – 11PM", "Certified Trainers", "Spotless & Clean"];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center bg-[#0A0A0A] overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Gold glow top-right */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/6 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        {/* Pre-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#D4AF37] text-xs font-black tracking-[0.3em] uppercase mb-6"
        >
          AECS Layout&apos;s Premier Gym
        </motion.p>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-[clamp(3.5rem,10vw,9rem)] font-black leading-[0.88] tracking-tighter uppercase mb-0"
        >
          NO
          <br />
          EXCUSES.
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[clamp(3.5rem,10vw,9rem)] font-black leading-[0.88] tracking-tighter uppercase text-[#D4AF37] mb-10"
        >
          JUST RESULTS.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/50 text-base max-w-md leading-relaxed mb-10"
        >
          Premium equipment, certified coaches, and a culture that turns goals into reality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4 mb-16"
        >
          <a
            href="#booking"
            className="group flex items-center gap-3 bg-[#D4AF37] text-black text-sm font-black tracking-widest px-8 py-4 hover:bg-[#F5D060] transition-colors duration-200"
          >
            BOOK FREE TRIAL
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#membership"
            className="flex items-center gap-3 border border-white/20 text-white text-sm font-black tracking-widest px-8 py-4 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors duration-200"
          >
            VIEW PLANS
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-6"
        >
          {badges.map((b) => (
            <span key={b} className="flex items-center gap-2 text-xs text-white/40 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              {b}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
