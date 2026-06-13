"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Clock, Users } from "lucide-react";

const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

const classes = [
  { name: "HIIT BLAST", trainer: "Marcus Reid", time: "6:00 AM", duration: "45 min", spots: 12, day: "MON" },
  { name: "YOGA FLOW", trainer: "Priya Sharma", time: "7:30 AM", duration: "60 min", spots: 15, day: "MON" },
  { name: "SPIN CYCLE", trainer: "Jake Torres", time: "9:00 AM", duration: "45 min", spots: 8, day: "TUE" },
  { name: "PILATES CORE", trainer: "Sofia Lee", time: "10:00 AM", duration: "50 min", spots: 14, day: "TUE" },
  { name: "STRENGTH & POWER", trainer: "Marcus Reid", time: "6:30 PM", duration: "60 min", spots: 10, day: "WED" },
  { name: "ZUMBA", trainer: "Carmen Vega", time: "7:00 PM", duration: "55 min", spots: 20, day: "WED" },
  { name: "BOXING BASICS", trainer: "Jake Torres", time: "7:00 AM", duration: "60 min", spots: 8, day: "THU" },
  { name: "MORNING YOGA", trainer: "Priya Sharma", time: "8:30 AM", duration: "60 min", spots: 12, day: "THU" },
  { name: "BODY PUMP", trainer: "Sofia Lee", time: "12:00 PM", duration: "45 min", spots: 16, day: "FRI" },
  { name: "WEEKEND HIIT", trainer: "Marcus Reid", time: "9:00 AM", duration: "45 min", spots: 14, day: "SAT" },
  { name: "RECOVERY STRETCH", trainer: "Priya Sharma", time: "11:00 AM", duration: "45 min", spots: 18, day: "SUN" },
];

export default function Classes() {
  const [activeDay, setActiveDay] = useState("MON");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const filtered = classes.filter((c) => c.day === activeDay);

  return (
    <section id="classes" className="py-24 bg-[#0A0A0A]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-12"
        >
          <p className="text-[#D4AF37] text-xs font-black tracking-[0.3em] uppercase mb-4">SCHEDULE</p>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-[0.9] tracking-tighter uppercase">
            FIND YOUR<br /><span className="text-[#D4AF37]">CLASS.</span>
          </h2>
        </motion.div>

        {/* Day picker */}
        <div className="flex gap-0 border border-white/10 w-fit mb-10">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-5 py-3 text-[10px] font-black tracking-[0.2em] transition-all duration-200 ${
                activeDay === day
                  ? "bg-[#D4AF37] text-black"
                  : "text-white/40 hover:text-white hover:bg-white/5"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Classes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {filtered.length === 0 ? (
            <p className="col-span-3 py-20 text-center text-white/20 font-black tracking-widest text-sm">REST DAY — SEE YOU TOMORROW</p>
          ) : (
            filtered.map((cls, i) => (
              <motion.div
                key={cls.name + cls.time}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="bg-[#0A0A0A] p-8 group hover:bg-[#141414] transition-colors duration-200 cursor-default"
              >
                <h3 className="text-lg font-black tracking-tight uppercase mb-1 group-hover:text-[#D4AF37] transition-colors">{cls.name}</h3>
                <p className="text-xs text-white/35 font-medium mb-5">with {cls.trainer}</p>
                <div className="flex gap-5 text-xs text-white/35 mb-6">
                  <span className="flex items-center gap-1.5"><Clock size={11} />{cls.time} · {cls.duration}</span>
                  <span className="flex items-center gap-1.5"><Users size={11} />{cls.spots} left</span>
                </div>
                <button className="w-full py-3 text-[10px] font-black tracking-[0.2em] border border-white/10 text-white/50 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-200">
                  BOOK NOW
                </button>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
