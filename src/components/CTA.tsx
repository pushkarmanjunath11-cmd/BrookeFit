"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#D4AF37] py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-[clamp(2rem,5vw,4.5rem)] font-black leading-[0.9] tracking-tighter uppercase text-black mb-4"
        >
          READY TO START YOUR<br />TRANSFORMATION?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-black/60 text-sm mb-10 max-w-md mx-auto"
        >
          Join hundreds of members already crushing their goals. First trial is completely free.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#booking"
            className="bg-black text-white text-xs font-black tracking-[0.2em] px-10 py-4 hover:bg-[#1a1a1a] transition-colors duration-200"
          >
            JOIN NOW →
          </a>
          <a
            href="#booking"
            className="border-2 border-black text-black text-xs font-black tracking-[0.2em] px-10 py-4 hover:bg-black hover:text-[#D4AF37] transition-colors duration-200"
          >
            CONTACT US
          </a>
        </motion.div>
      </div>
    </section>
  );
}
