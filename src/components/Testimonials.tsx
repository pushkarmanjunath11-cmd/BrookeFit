"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "James O.",
    role: "Elite Member · 18 months",
    text: "BrookeFit completely changed my life. Lost 24kg and gained confidence I never had. The trainers genuinely care about your progress.",
    rating: 5,
    initials: "JO",
    color: "#FF4B4B",
  },
  {
    name: "Amara T.",
    role: "Elite Member · 2 years",
    text: "The steam room alone is worth the membership. But honestly it's the community here that keeps me coming back. Everyone lifts each other up.",
    rating: 5,
    initials: "AT",
    color: "#A78BFA",
  },
  {
    name: "David K.",
    role: "Pro Member · 1 year",
    text: "I've been to gyms all over the city. BrookeFit is on another level — equipment, cleanliness, staff. My PT Marcus is exceptional.",
    rating: 5,
    initials: "DK",
    color: "#4BC8FF",
  },
  {
    name: "Sophie M.",
    role: "Starter Member · 8 months",
    text: "As someone who was nervous about gyms, BrookeFit made me feel so welcome. The yoga classes with Priya are incredible.",
    rating: 5,
    initials: "SM",
    color: "#34D399",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 px-6 bg-[#080808]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-[#C9A84C] font-semibold tracking-widest uppercase mb-3 block">
            Member Stories
          </span>
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            Real People, <span className="text-gradient-gold">Real Results</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-7 relative group hover:border-[#C9A84C]/20 transition-all duration-300"
            >
              <Quote size={32} className="text-[#C9A84C]/20 mb-4" />
              <div className="flex mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-[#C9A84C]" fill="#C9A84C" />
                ))}
              </div>
              <p className="text-white/70 text-base leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black text-white"
                  style={{ background: `${t.color}40`, border: `1px solid ${t.color}40` }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-sm">{t.name}</p>
                  <p className="text-xs text-white/40">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
