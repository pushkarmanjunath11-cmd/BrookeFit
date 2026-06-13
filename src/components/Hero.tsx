"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const badges = ["Open 5AM – 11PM", "Certified Trainers", "Spotless & Clean"];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col bg-[#0A0A0A] overflow-hidden">
      {/* Two-column layout */}
      <div className="flex flex-col lg:flex-row flex-1 min-h-screen">

        {/* LEFT — Text */}
        <div className="relative z-10 flex flex-col justify-center px-8 md:px-16 pt-32 pb-16 lg:pb-0 lg:w-[55%] xl:w-[50%]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#D4AF37] text-xs font-black tracking-[0.3em] uppercase mb-6"
          >
            Premium Gym & Fitness
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
          >
            <h1 className="text-[clamp(3.8rem,8vw,8rem)] font-black leading-[0.85] tracking-tighter uppercase">
              NO
              <br />
              EXCUSES.
            </h1>
            <h1 className="text-[clamp(3.8rem,8vw,8rem)] font-black leading-[0.85] tracking-tighter uppercase text-[#D4AF37]">
              JUST
              <br />
              RESULTS.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 text-base max-w-sm leading-relaxed mt-8 mb-10"
          >
            Premium equipment, certified coaches, and a culture that turns goals into reality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a
              href="#booking"
              className="group flex items-center gap-3 bg-[#D4AF37] text-black text-xs font-black tracking-widest px-8 py-4 hover:bg-[#F5D060] transition-colors duration-200"
            >
              BOOK FREE TRIAL
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#membership"
              className="flex items-center border border-white/20 text-white text-xs font-black tracking-widest px-8 py-4 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors duration-200"
            >
              VIEW PLANS
            </a>
          </motion.div>

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

        {/* RIGHT — Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative lg:w-[45%] xl:w-[50%] h-[50vh] lg:h-auto"
        >
          {/* Dark overlay gradient on the left edge so it blends into the text side */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0A0A0A] via-transparent to-transparent lg:w-32" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent lg:hidden" />

          <Image
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80"
            alt="BrookeFit gym interior"
            fill
            className="object-cover object-center"
            priority
          />

          {/* Gold accent bar */}
          <div className="absolute bottom-0 left-0 right-0 z-20 h-1 bg-[#D4AF37]" />

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-8 right-8 z-20 bg-[#0A0A0A]/90 backdrop-blur-sm border border-[#D4AF37]/30 px-5 py-4"
          >
            <div className="text-3xl font-black text-[#D4AF37] leading-none">12K</div>
            <div className="text-[10px] font-black tracking-widest text-white/50 mt-1">SQFT OF PREMIUM SPACE</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
