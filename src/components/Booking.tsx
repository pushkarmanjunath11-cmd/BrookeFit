"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const times = ["6:00 AM", "8:00 AM", "10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM", "8:00 PM"];

export default function Booking() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", time: "", goal: "" });

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <section id="booking" className="py-24 bg-[#0A0A0A]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <p className="text-[#D4AF37] text-xs font-black tracking-[0.3em] uppercase mb-4">FREE TRIAL</p>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-[0.9] tracking-tighter uppercase">
            READY TO START<br />YOUR
            <br /><span className="text-[#D4AF37]">TRANSFORMATION?</span>
          </h2>
          <p className="text-white/40 text-sm mt-5 max-w-md">
            Join hundreds of members already crushing their goals. First trial is completely free.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5">
          {/* Left — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="bg-[#0A0A0A] p-10"
          >
            {submitted ? (
              <div className="flex flex-col items-start gap-4 py-12">
                <CheckCircle2 size={48} className="text-[#D4AF37]" />
                <h3 className="text-3xl font-black tracking-tighter uppercase">You&apos;re Booked!</h3>
                <p className="text-white/50">Confirmation heading to <strong className="text-white">{form.email}</strong>. See you at BrookeFit.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { placeholder: "Full Name", key: "name", type: "text" },
                  { placeholder: "Email Address", key: "email", type: "email" },
                  { placeholder: "Phone Number", key: "phone", type: "tel" },
                ].map((field) => (
                  <input
                    key={field.key}
                    required={field.key !== "phone"}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={form[field.key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    className="w-full bg-white/4 border border-white/8 text-white text-sm font-medium px-5 py-4 placeholder-white/25 focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
                  />
                ))}
                <input
                  required
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full bg-white/4 border border-white/8 text-white/60 text-sm font-medium px-5 py-4 focus:outline-none focus:border-[#D4AF37]/50 transition-colors [color-scheme:dark]"
                />
                <select
                  value={form.goal}
                  onChange={(e) => setForm({ ...form, goal: e.target.value })}
                  className="w-full bg-white/4 border border-white/8 text-white/60 text-sm font-medium px-5 py-4 focus:outline-none focus:border-[#D4AF37]/50 transition-colors [color-scheme:dark]"
                >
                  <option value="">Your fitness goal</option>
                  <option>Weight Loss</option>
                  <option>Build Muscle</option>
                  <option>Improve Cardio</option>
                  <option>Flexibility & Wellness</option>
                  <option>General Fitness</option>
                </select>

                <div>
                  <p className="text-[10px] text-white/30 font-black tracking-[0.2em] mb-3">PREFERRED TIME</p>
                  <div className="grid grid-cols-4 gap-2">
                    {times.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setForm({ ...form, time: t })}
                        className={`py-3 text-[10px] font-black tracking-wide transition-all duration-200 ${
                          form.time === t
                            ? "bg-[#D4AF37] text-black"
                            : "border border-white/10 text-white/35 hover:border-[#D4AF37]/50 hover:text-[#D4AF37]"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#D4AF37] text-black text-xs font-black tracking-[0.2em] py-5 hover:bg-[#F5D060] transition-colors duration-200"
                >
                  BOOK MY FREE TRIAL
                </button>
                <p className="text-white/20 text-[10px] text-center tracking-widest">NO CREDIT CARD REQUIRED</p>
              </form>
            )}
          </motion.div>

          {/* Right — Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="bg-[#D4AF37] p-10 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-black tracking-tighter uppercase text-black mb-8">CONTACT US</h3>
              <div className="space-y-6">
                {[
                  { label: "LOCATION", value: "42 Fitness Lane, London EC1A 1AA" },
                  { label: "PHONE", value: "+44 (0) 20 7000 1234" },
                  { label: "EMAIL", value: "hello@brookefit.com" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-[10px] font-black tracking-[0.25em] text-black/50 mb-1">{item.label}</p>
                    <p className="text-sm font-bold text-black">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 border-t border-black/15 pt-8">
              <p className="text-[10px] font-black tracking-[0.25em] text-black/50 mb-3">OPENING HOURS</p>
              <p className="text-sm font-bold text-black">Monday – Saturday</p>
              <p className="text-sm text-black/70">5:30am – 11:00pm</p>
              <p className="text-sm font-bold text-black mt-2">Sunday</p>
              <p className="text-sm text-black/70">7:00am – 9:00pm</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
