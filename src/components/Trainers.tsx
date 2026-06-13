"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const trainers = [
  { name: "MARCUS REID", role: "Head Strength Coach", specialties: ["Powerlifting", "HIIT", "Body Recomp"], rating: 4.9, sessions: "1,200+", initials: "MR", color: "#FF4B4B" },
  { name: "PRIYA SHARMA", role: "Yoga & Mindfulness", specialties: ["Hatha Yoga", "Pilates", "Recovery"], rating: 5.0, sessions: "800+", initials: "PS", color: "#D4AF37" },
  { name: "JAKE TORRES", role: "Cardio & Boxing", specialties: ["Boxing", "Spin", "Endurance"], rating: 4.8, sessions: "950+", initials: "JT", color: "#4BC8FF" },
  { name: "SOFIA LEE", role: "Body Transformation", specialties: ["Nutrition", "Pilates", "Toning"], rating: 4.9, sessions: "1,100+", initials: "SL", color: "#A78BFA" },
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
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {trainers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="bg-[#0D0D0D] p-8 group hover:bg-[#141414] transition-all duration-300 cursor-default"
            >
              {/* Avatar */}
              <div
                className="w-16 h-16 flex items-center justify-center text-xl font-black text-white mb-6"
                style={{ background: `${t.color}25`, border: `2px solid ${t.color}50` }}
              >
                {t.initials}
              </div>

              <div className="flex items-center gap-1 mb-1">
                <Star size={11} fill="#D4AF37" className="text-[#D4AF37]" />
                <span className="text-xs font-black text-[#D4AF37]">{t.rating}</span>
              </div>

              <h3 className="text-base font-black tracking-tight uppercase mb-1 group-hover:text-[#D4AF37] transition-colors">{t.name}</h3>
              <p className="text-white/35 text-xs mb-4 font-medium">{t.role}</p>

              <div className="flex flex-wrap gap-1.5">
                {t.specialties.map((s) => (
                  <span key={s} className="text-[10px] px-2 py-0.5 border border-white/10 text-white/40 font-medium tracking-wide">
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white/30">
                <span>{t.sessions} sessions</span>
                <button className="text-[#D4AF37] font-black tracking-wider hover:underline">BOOK →</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
