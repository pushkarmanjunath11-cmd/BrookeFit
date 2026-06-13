"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Dumbbell, Zap, Wind, Users, Sparkles, Heart } from "lucide-react";

const facilities = [
  {
    icon: Dumbbell,
    title: "Premium Equipment",
    desc: "State-of-the-art machines and free weights from the world's leading brands. Every piece meticulously maintained.",
    tag: "50+ Machines",
  },
  {
    icon: Zap,
    title: "Functional Training Zone",
    desc: "Dedicated space for CrossFit, HIIT, and functional movement. Sleds, ropes, boxes, and more.",
    tag: "3,000 sqft",
  },
  {
    icon: Wind,
    title: "Steam Room & Recovery",
    desc: "Unwind after every session in our luxury steam room. Accelerate recovery, reduce soreness.",
    tag: "Members Only",
  },
  {
    icon: Users,
    title: "Group Studio",
    desc: "Soundproofed studio designed for high-energy classes. Yoga, Pilates, Spin, Zumba and more.",
    tag: "80+ Classes/Week",
  },
  {
    icon: Sparkles,
    title: "Pristine Changing Rooms",
    desc: "Spa-level changing facilities with private showers, lockers, and complimentary toiletries.",
    tag: "5-Star Clean",
  },
  {
    icon: Heart,
    title: "Cardio Theatre",
    desc: "Rows of treadmills, bikes, and ellipticals facing floor-to-ceiling screens. Running never felt this good.",
    tag: "30+ Stations",
  },
];

export default function Facilities() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="facilities" className="py-28 px-6 relative">
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #C9A84C 1px, transparent 0)`,
        backgroundSize: "40px 40px",
      }} />

      <div className="max-w-7xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-[#C9A84C] font-semibold tracking-widest uppercase mb-3 block">
            World-Class Facilities
          </span>
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            Built for <span className="text-gradient-gold">Champions</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Every inch of BrookeFit is designed to maximize your performance and recovery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {facilities.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group glass rounded-xl p-7 cursor-default hover:border-[#C9A84C]/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center group-hover:bg-[#C9A84C]/20 transition-colors">
                  <f.icon size={22} className="text-[#C9A84C]" />
                </div>
                <span className="text-xs text-[#C9A84C] border border-[#C9A84C]/30 rounded-full px-3 py-1 font-medium">
                  {f.tag}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white group-hover:text-[#C9A84C] transition-colors">
                {f.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
