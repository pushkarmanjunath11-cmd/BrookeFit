"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  { name: "James O.", role: "Elite Member · 18 months", text: "Lost 24kg and gained confidence I never had. The trainers here genuinely care about your progress. BrookeFit changed my life.", initials: "JO" },
  { name: "Amara T.", role: "Elite Member · 2 years", text: "The steam room alone is worth the membership. But it's the community here that keeps me coming back every single day.", initials: "AT" },
  { name: "David K.", role: "Pro Member · 1 year", text: "I've been to gyms all over the city. BrookeFit is on another level — equipment, cleanliness, coaches. My PT Marcus is exceptional.", initials: "DK" },
  { name: "Sophie M.", role: "Starter Member · 8 months", text: "As someone who was nervous about gyms, BrookeFit made me feel so welcome. I'm now attending 5 classes a week.", initials: "SM" },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-[#0D0D0D]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <p className="text-[#D4AF37] text-xs font-black tracking-[0.3em] uppercase mb-4">REVIEWS</p>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-[0.9] tracking-tighter uppercase">
            REAL PEOPLE.<br /><span className="text-[#D4AF37]">REAL RESULTS.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="bg-[#0D0D0D] p-10 group hover:bg-[#141414] transition-colors duration-200"
            >
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={12} fill="#D4AF37" className="text-[#D4AF37]" />
                ))}
              </div>
              <p className="text-white/70 text-base leading-relaxed mb-8">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-sm font-black text-[#D4AF37]">
                  {t.initials}
                </div>
                <div>
                  <p className="font-black text-sm uppercase tracking-tight">{t.name}</p>
                  <p className="text-xs text-white/35 font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
