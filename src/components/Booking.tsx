"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, Clock, User, Mail, Phone, CheckCircle } from "lucide-react";

export default function Booking() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", time: "", goal: "" });

  const times = ["6:00 AM", "8:00 AM", "10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM", "8:00 PM"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-28 px-6 relative" ref={ref}>
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#C9A84C]/4 blur-[150px]"
        />
      </div>

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="text-sm text-[#C9A84C] font-semibold tracking-widest uppercase mb-3 block">
            Free Trial
          </span>
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            Try BrookeFit <span className="text-gradient-gold">For Free</span>
          </h2>
          <p className="text-white/50 text-lg">
            Experience everything BrookeFit has to offer — no commitment, no credit card.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="glass rounded-2xl p-8 md:p-12"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <CheckCircle size={64} className="text-[#C9A84C] mx-auto mb-4" />
              <h3 className="text-2xl font-black mb-2">You&apos;re booked!</h3>
              <p className="text-white/50">
                We&apos;ll send a confirmation to <strong className="text-white">{form.email}</strong>.<br />
                See you at BrookeFit!
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="relative">
                <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                <input
                  required
                  placeholder="Full Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg pl-11 pr-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
                />
              </div>
              <div className="relative">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                <input
                  required
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg pl-11 pr-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
                />
              </div>
              <div className="relative">
                <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                <input
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg pl-11 pr-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
                />
              </div>
              <div className="relative">
                <Calendar size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                <input
                  required
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full bg-white/5 border border-white/10 rounded-lg pl-11 pr-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C9A84C]/50 transition-colors [color-scheme:dark]"
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-xs text-white/40 mb-2 flex items-center gap-2">
                  <Clock size={13} /> Preferred Time
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {times.map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setForm({ ...form, time: t })}
                      className={`py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                        form.time === t
                          ? "bg-gradient-to-r from-[#C9A84C] to-[#E8C96D] text-black"
                          : "border border-white/10 text-white/50 hover:border-[#C9A84C]/40"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2">
                <select
                  value={form.goal}
                  onChange={(e) => setForm({ ...form, goal: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-sm text-white/70 focus:outline-none focus:border-[#C9A84C]/50 transition-colors [color-scheme:dark]"
                >
                  <option value="">What&apos;s your fitness goal?</option>
                  <option value="weight-loss">Weight Loss</option>
                  <option value="muscle">Build Muscle</option>
                  <option value="cardio">Improve Cardio</option>
                  <option value="flexibility">Flexibility & Wellness</option>
                  <option value="general">General Fitness</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#C9A84C] to-[#E8C96D] text-black font-black text-base rounded-lg hover:shadow-[0_0_40px_rgba(201,168,76,0.5)] transition-all duration-300 hover:scale-[1.01]"
                >
                  Book My Free Trial
                </button>
                <p className="text-center text-white/30 text-xs mt-3">
                  No credit card required · Cancel anytime
                </p>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
