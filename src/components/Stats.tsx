"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "2,400+", label: "ACTIVE MEMBERS" },
  { value: "35+", label: "EXPERT TRAINERS" },
  { value: "800+", label: "TRANSFORMATIONS" },
  { value: "12K sqft", label: "TRAINING SPACE" },
];

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="bg-[#D4AF37]">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-black/10">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.08 }}
            className="text-center py-4 px-6"
          >
            <div className="text-4xl md:text-5xl font-black text-black tracking-tighter leading-none mb-1">
              {s.value}
            </div>
            <div className="text-[10px] font-black tracking-[0.2em] text-black/60">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
