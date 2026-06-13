"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const trainers = [
  {
    name: "Marcus Reid",
    role: "Head Strength Coach",
    specialties: ["Powerlifting", "HIIT", "Body Recomp"],
    rating: 4.9,
    sessions: "1,200+",
    initials: "MR",
    color: "#FF4B4B",
  },
  {
    name: "Priya Sharma",
    role: "Yoga & Mindfulness",
    specialties: ["Hatha Yoga", "Pilates", "Recovery"],
    rating: 5.0,
    sessions: "800+",
    initials: "PS",
    color: "#4BC8FF",
  },
  {
    name: "Jake Torres",
    role: "Cardio & Boxing",
    specialties: ["Boxing", "Spin", "Endurance"],
    rating: 4.8,
    sessions: "950+",
    initials: "JT",
    color: "#FF914D",
  },
  {
    name: "Sofia Lee",
    role: "Body Transformation",
    specialties: ["Nutrition", "Pilates", "Toning"],
    rating: 4.9,
    sessions: "1,100+",
    initials: "SL",
    color: "#A78BFA",
  },
];

export default function Trainers() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="trainers" className="py-28 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-[#C9A84C] font-semibold tracking-widest uppercase mb-3 block">
            Our Experts
          </span>
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            Train With the <span className="text-gradient-gold">Best</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Certified professionals passionate about transforming lives through fitness.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, i) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className="group glass rounded-2xl overflow-hidden cursor-default"
            >
              {/* Avatar area */}
              <div className="relative h-52 flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${trainer.color}15, ${trainer.color}05)` }}>
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center text-3xl font-black text-white"
                  style={{ background: `linear-gradient(135deg, ${trainer.color}80, ${trainer.color}40)`, boxShadow: `0 0 40px ${trainer.color}30` }}
                >
                  {trainer.initials}
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/40 rounded-full px-2 py-1">
                  <Star size={11} className="text-[#C9A84C]" fill="#C9A84C" />
                  <span className="text-xs font-bold text-white">{trainer.rating}</span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold mb-0.5 group-hover:text-[#C9A84C] transition-colors">{trainer.name}</h3>
                <p className="text-sm text-white/40 mb-3">{trainer.role}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {trainer.specialties.map((s) => (
                    <span key={s} className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-white/50">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-white/40 border-t border-white/5 pt-3">
                  <span>{trainer.sessions} sessions</span>
                  <button className="text-[#C9A84C] hover:underline font-medium">Book →</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
