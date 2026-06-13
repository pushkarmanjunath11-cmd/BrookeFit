"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "STARTER",
    price: "£29",
    period: "/mo",
    features: ["Full gym access (6am–10pm)", "2 group classes/week", "Locker access", "App & progress tracking"],
    cta: "GET STARTED",
    highlight: false,
  },
  {
    name: "ELITE",
    price: "£59",
    period: "/mo",
    features: ["24/7 gym access", "Unlimited group classes", "Steam room access", "1 PT session/month", "Nutrition consultation", "Guest passes (2/month)"],
    cta: "JOIN ELITE",
    highlight: true,
  },
  {
    name: "PRO",
    price: "£99",
    period: "/mo",
    features: ["Everything in Elite", "4 PT sessions/month", "Custom training program", "Monthly body scan", "Unlimited guest passes", "VIP locker room"],
    cta: "GO PRO",
    highlight: false,
  },
];

export default function Membership() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="membership" className="py-24 bg-[#0A0A0A]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <p className="text-[#D4AF37] text-xs font-black tracking-[0.3em] uppercase mb-4">MEMBERSHIP</p>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-[0.9] tracking-tighter uppercase">
            SIMPLE.<br /><span className="text-[#D4AF37]">TRANSPARENT.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className={`p-10 flex flex-col ${plan.highlight ? "bg-[#D4AF37]" : "bg-[#0D0D0D]"}`}
            >
              {plan.highlight && (
                <span className="text-[10px] font-black tracking-[0.25em] text-black/50 mb-4">MOST POPULAR</span>
              )}
              <div className={`text-xs font-black tracking-[0.25em] mb-6 ${plan.highlight ? "text-black/60" : "text-[#D4AF37]"}`}>
                {plan.name}
              </div>
              <div className={`flex items-end gap-1 mb-8 ${plan.highlight ? "text-black" : "text-white"}`}>
                <span className="text-6xl font-black tracking-tighter leading-none">{plan.price}</span>
                <span className={`text-sm mb-2 font-bold ${plan.highlight ? "text-black/60" : "text-white/40"}`}>{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-10 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className={`flex items-start gap-3 text-sm font-medium ${plan.highlight ? "text-black/80" : "text-white/50"}`}>
                    <Check size={15} className={`mt-0.5 shrink-0 ${plan.highlight ? "text-black" : "text-[#D4AF37]"}`} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#booking"
                className={`block text-center text-xs font-black tracking-[0.2em] py-4 transition-colors duration-200 ${
                  plan.highlight
                    ? "bg-black text-white hover:bg-[#1a1a1a]"
                    : "border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
        <p className="text-white/25 text-xs text-center mt-6 tracking-wider">7-DAY FREE TRIAL ON ALL PLANS · NO CONTRACT · CANCEL ANYTIME</p>
      </div>
    </section>
  );
}
