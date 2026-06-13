"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const facilities = [
  { tag: "01", title: "FREE WEIGHTS & MACHINES", desc: "50+ machines. Olympic platforms. Every piece of pro-grade kit you need to build serious strength.", span: true },
  { tag: "02", title: "FUNCTIONAL TRAINING ZONE", desc: "3,000 sqft dedicated to sleds, ropes, boxes, and kettlebells. Built for those who train with purpose.", span: false },
  { tag: "03", title: "STEAM ROOM & RECOVERY", desc: "Luxury recovery suite — steam room, stretching area. Because how you recover is how you grow.", span: false },
  { tag: "04", title: "GROUP FITNESS STUDIO", desc: "Soundproofed, sprung-floor studio. 80+ classes a week — HIIT, yoga, spin, Zumba, and more.", span: false },
  { tag: "05", title: "CARDIO THEATRE", desc: "30+ treadmills, bikes, and ellipticals facing floor-to-ceiling screens. Cardio that doesn't feel like cardio.", span: false },
  { tag: "06", title: "PREMIUM CHANGING ROOMS", desc: "Private showers, vanity areas, secure lockers. Everything you need before and after the grind.", span: false },
];

export default function Facilities() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="facilities" className="py-24 bg-[#0D0D0D]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4"
        >
          <div>
            <p className="text-[#D4AF37] text-xs font-black tracking-[0.3em] uppercase mb-4">FACILITIES</p>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-[0.9] tracking-tighter uppercase">
              BUILT FOR<br /><span className="text-[#D4AF37]">CHAMPIONS.</span>
            </h2>
          </div>
          <p className="text-white/40 text-sm max-w-xs leading-relaxed">
            Every inch of BrookeFit is engineered to maximise your output and accelerate your recovery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
          {facilities.map((f, i) => (
            <motion.div
              key={f.tag}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              className={`bg-[#0D0D0D] p-8 group hover:bg-[#141414] transition-colors duration-300 cursor-default ${f.span ? "md:col-span-1" : ""}`}
            >
              <span className="text-[#D4AF37] text-xs font-black tracking-widest mb-6 block">{f.tag}</span>
              <h3 className="text-lg font-black tracking-tight uppercase mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                {f.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
