"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Clock, Users, Flame } from "lucide-react";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const classes = [
  { name: "HIIT Blast", trainer: "Marcus Reid", time: "6:00 AM", duration: "45 min", spots: 12, intensity: "High", color: "#FF4B4B", day: "Mon" },
  { name: "Yoga Flow", trainer: "Priya Sharma", time: "7:30 AM", duration: "60 min", spots: 15, intensity: "Low", color: "#4BC8FF", day: "Mon" },
  { name: "Spin Cycle", trainer: "Jake Torres", time: "9:00 AM", duration: "45 min", spots: 8, intensity: "High", color: "#FF914D", day: "Tue" },
  { name: "Pilates Core", trainer: "Sofia Lee", time: "10:00 AM", duration: "50 min", spots: 14, intensity: "Mid", color: "#A78BFA", day: "Tue" },
  { name: "Strength & Power", trainer: "Marcus Reid", time: "6:30 PM", duration: "60 min", spots: 10, intensity: "High", color: "#FF4B4B", day: "Wed" },
  { name: "Zumba", trainer: "Carmen Vega", time: "7:00 PM", duration: "55 min", spots: 20, intensity: "Mid", color: "#34D399", day: "Wed" },
  { name: "Boxing Basics", trainer: "Jake Torres", time: "7:00 AM", duration: "60 min", spots: 8, intensity: "High", color: "#F59E0B", day: "Thu" },
  { name: "Morning Yoga", trainer: "Priya Sharma", time: "8:30 AM", duration: "60 min", spots: 12, intensity: "Low", color: "#4BC8FF", day: "Thu" },
  { name: "Body Pump", trainer: "Sofia Lee", time: "12:00 PM", duration: "45 min", spots: 16, intensity: "Mid", color: "#A78BFA", day: "Fri" },
  { name: "Weekend HIIT", trainer: "Marcus Reid", time: "9:00 AM", duration: "45 min", spots: 14, intensity: "High", color: "#FF4B4B", day: "Sat" },
  { name: "Recovery Stretch", trainer: "Priya Sharma", time: "11:00 AM", duration: "45 min", spots: 18, intensity: "Low", color: "#4BC8FF", day: "Sun" },
];

const intensityFlames = { High: 3, Mid: 2, Low: 1 };

export default function Classes() {
  const [activeDay, setActiveDay] = useState("Mon");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const filtered = classes.filter((c) => c.day === activeDay);

  return (
    <section id="classes" className="py-28 px-6 bg-[#080808]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-[#C9A84C] font-semibold tracking-widest uppercase mb-3 block">
            Weekly Schedule
          </span>
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            Find Your <span className="text-gradient-gold">Class</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            80+ weekly classes across all disciplines. There's something for every fitness level.
          </p>
        </motion.div>

        {/* Day picker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-2 mb-10 flex-wrap"
        >
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeDay === day
                  ? "bg-gradient-to-r from-[#C9A84C] to-[#E8C96D] text-black"
                  : "border border-white/10 text-white/50 hover:border-[#C9A84C]/40 hover:text-white"
              }`}
            >
              {day}
            </button>
          ))}
        </motion.div>

        {/* Class cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.length === 0 ? (
            <p className="col-span-3 text-center text-white/30 py-16">Rest day — see you tomorrow!</p>
          ) : (
            filtered.map((cls, i) => (
              <motion.div
                key={cls.name + cls.time}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ scale: 1.02 }}
                className="glass rounded-xl p-6 hover:border-[#C9A84C]/25 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-3 h-3 rounded-full mt-1"
                    style={{ backgroundColor: cls.color, boxShadow: `0 0 12px ${cls.color}60` }}
                  />
                  <div className="flex gap-0.5">
                    {Array.from({ length: intensityFlames[cls.intensity as keyof typeof intensityFlames] }).map((_, j) => (
                      <Flame key={j} size={13} className="text-[#C9A84C]" fill="#C9A84C" />
                    ))}
                    {Array.from({ length: 3 - intensityFlames[cls.intensity as keyof typeof intensityFlames] }).map((_, j) => (
                      <Flame key={j} size={13} className="text-white/15" />
                    ))}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-1 group-hover:text-[#C9A84C] transition-colors">{cls.name}</h3>
                <p className="text-sm text-white/40 mb-4">with {cls.trainer}</p>
                <div className="flex gap-4 text-xs text-white/50">
                  <span className="flex items-center gap-1"><Clock size={12} />{cls.time} · {cls.duration}</span>
                  <span className="flex items-center gap-1"><Users size={12} />{cls.spots} spots left</span>
                </div>
                <button className="mt-4 w-full py-2.5 text-sm font-semibold border border-[#C9A84C]/30 text-[#C9A84C] rounded hover:bg-[#C9A84C] hover:text-black transition-all duration-300">
                  Book Now
                </button>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
