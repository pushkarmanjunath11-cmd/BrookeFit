"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";
import Image from "next/image";

const trainers = [
  {
    name: "MARCUS REID",
    role: "Head Strength Coach",
    specialties: ["Powerlifting", "HIIT", "Body Recomp"],
    rating: 4.9,
    sessions: "1,200+",
    img: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&q=80",
  },
  {
    name: "PRIYA SHARMA",
    role: "Yoga & Mindfulness",
    specialties: ["Hatha Yoga", "Pilates", "Recovery"],
    rating: 5.0,
    sessions: "800+",
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",
  },
  {
    name: "JAKE TORRES",
    role: "Cardio & Boxing",
    specialties: ["Boxing", "Spin", "Endurance"],
    rating: 4.8,
    sessions: "950+",
    img: "https://images.unsplash.com/photo-1549476464-37392f717541?w=600&q=80",
  },
  {
    name: "SOFIA LEE",
    role: "Body Transformation",
    specialties: ["Nutrition", "Pilates", "Toning"],
    rating: 4.9,
    sessions: "1,100+",
    img: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=600&q=80",
  },
];

export default function Trainers() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="trainers" className="py-24 bg-[#0D0D0D]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4"
        >
          <div>
            <p className="text-[#D4AF37] text-xs font-black tracking-[0.3em] uppercase mb-4">OUR COACHES</p>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-[0.9] tracking-tighter uppercase">
              TRAIN WITH<br /><span className="text-[#D4AF37]">THE BEST.</span>
            </h2>
          </div>
          <a href="#booking" className="bg-[#D4AF37] text-black text-xs font-black tracking-[0.2em] px-8 py-4 hover:bg-[#F5D060] transition-colors self-start md:self-auto">
            BOOK A SESSION
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trainers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="group cursor-default"
            >
              {/* Photo */}
              <div className="relative h-72 overflow-hidden mb-0">
                <Image
                  src={t.img}
                  alt={t.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />
                {/* Rating badge */}
                <div className="absolute top-3 right-3 bg-[#D4AF37] flex items-center gap-1 px-2 py-1">
                  <Star size={10} fill="black" className="text-black" />
                  <span className="text-[10px] font-black text-black">{t.rating}</span>
                </div>
              </div>

              {/* Info */}
              <div className="bg-[#111] p-5 border-b-2 border-[#D4AF37] group-hover:border-[#F5D060] transition-colors">
                <h3 className="text-sm font-black tracking-tight uppercase group-hover:text-[#D4AF37] transition-colors">{t.name}</h3>
                <p className="text-white/35 text-xs font-medium mt-0.5 mb-3">{t.role}</p>
                <div className="flex flex-wrap gap-1.5">
                  {t.specialties.map((s) => (
                    <span key={s} className="text-[9px] px-2 py-0.5 border border-white/10 text-white/40 font-medium tracking-wide">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
