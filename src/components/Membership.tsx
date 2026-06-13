"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "£29",
    period: "/month",
    desc: "Perfect for beginners starting their fitness journey.",
    features: [
      "Full gym access (6am–10pm)",
      "2 group classes/week",
      "Locker access",
      "App & progress tracking",
      "Community access",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Elite",
    price: "£59",
    period: "/month",
    desc: "Our most popular plan for serious fitness enthusiasts.",
    features: [
      "24/7 gym access",
      "Unlimited group classes",
      "Steam room & recovery suite",
      "1 PT session/month",
      "Nutrition consultation",
      "Priority class booking",
      "Guest passes (2/month)",
    ],
    cta: "Join Elite",
    popular: true,
  },
  {
    name: "Pro",
    price: "£99",
    period: "/month",
    desc: "Ultimate membership for those who demand the very best.",
    features: [
      "Everything in Elite",
      "4 PT sessions/month",
      "Custom training program",
      "Monthly body composition scan",
      "Unlimited guest passes",
      "VIP locker room",
      "Priority trainer booking",
    ],
    cta: "Go Pro",
    popular: false,
  },
];

export default function Membership() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="membership" className="py-28 px-6 bg-[#080808]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-[#C9A84C] font-semibold tracking-widest uppercase mb-3 block">
            Membership Plans
          </span>
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            Simple, <span className="text-gradient-gold">Transparent</span> Pricing
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            No hidden fees. No long contracts. Just results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.popular
                  ? "bg-gradient-to-b from-[#C9A84C]/15 to-[#C9A84C]/5 border border-[#C9A84C]/40"
                  : "glass"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-[#C9A84C] to-[#E8C96D] rounded-full text-black text-xs font-black">
                  <Zap size={12} fill="black" />
                  MOST POPULAR
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-white/70 mb-1">{plan.name}</h3>
                <div className="flex items-end gap-1 mb-2">
                  <span className={`text-5xl font-black ${plan.popular ? "text-gradient-gold" : "text-white"}`}>
                    {plan.price}
                  </span>
                  <span className="text-white/40 mb-2">{plan.period}</span>
                </div>
                <p className="text-sm text-white/40">{plan.desc}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-white/70">
                    <Check size={16} className="text-[#C9A84C] mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#booking"
                className={`block w-full text-center py-3.5 rounded font-bold text-sm transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-r from-[#C9A84C] to-[#E8C96D] text-black hover:shadow-[0_0_30px_rgba(201,168,76,0.5)]"
                    : "border border-white/15 text-white hover:border-[#C9A84C]/50 hover:text-[#C9A84C]"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-white/30 text-sm mt-8"
        >
          All plans include a 7-day free trial. Cancel anytime.
        </motion.p>
      </div>
    </section>
  );
}
