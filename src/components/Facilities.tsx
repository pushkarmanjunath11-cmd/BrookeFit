"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const facilities = [
  {
    tag: "01",
    title: "FREE WEIGHTS & MACHINES",
    desc: "50+ machines. Olympic platforms. Every piece of pro-grade kit you need to build serious strength.",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    wide: true,
  },
  {
    tag: "02",
    title: "FUNCTIONAL TRAINING",
    desc: "3,000 sqft dedicated to sleds, ropes, boxes, and kettlebells.",
    img: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=800&q=80",
    wide: false,
  },
  {
    tag: "03",
    title: "STEAM ROOM & RECOVERY",
    desc: "Luxury recovery suite — steam room, stretching area. Recover better, grow faster.",
    img: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80",
    wide: false,
  },
  {
    tag: "04",
    title: "GROUP FITNESS STUDIO",
    desc: "Soundproofed sprung-floor studio. 80+ classes a week.",
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80",
    wide: false,
  },
  {
    tag: "05",
    title: "CARDIO THEATRE",
    desc: "30+ treadmills, bikes, and ellipticals facing floor-to-ceiling screens.",
    img: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=800&q=80",
    wide: false,
  },
  {
    tag: "06",
    title: "PREMIUM CHANGING ROOMS",
    desc: "Private showers, vanity areas, secure lockers. Everything you need.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    wide: false,
  },
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
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4"
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

        {/* Grid with images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* First card — wide */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="md:col-span-2 relative h-72 group overflow-hidden"
          >
            <Image
              src={facilities[0].img}
              alt={facilities[0].title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 z-10">
              <span className="text-[#D4AF37] text-[10px] font-black tracking-widest">{facilities[0].tag}</span>
              <h3 className="text-xl font-black tracking-tight uppercase mt-1">{facilities[0].title}</h3>
              <p className="text-white/60 text-sm mt-1 max-w-xs">{facilities[0].desc}</p>
            </div>
          </motion.div>

          {/* Rest of cards */}
          {facilities.slice(1).map((f, i) => (
            <motion.div
              key={f.tag}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: (i + 1) * 0.08 }}
              className="relative h-72 group overflow-hidden"
            >
              <Image
                src={f.img}
                alt={f.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5 z-10">
                <span className="text-[#D4AF37] text-[10px] font-black tracking-widest">{f.tag}</span>
                <h3 className="text-base font-black tracking-tight uppercase mt-1">{f.title}</h3>
                <p className="text-white/55 text-xs mt-1">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
