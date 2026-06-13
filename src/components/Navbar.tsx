"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "FACILITIES", href: "#facilities" },
  { label: "MEMBERSHIP", href: "#membership" },
  { label: "TRAINERS", href: "#trainers" },
  { label: "CLASSES", href: "#classes" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/5" : "bg-transparent"
        } py-5`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#home" className="text-2xl font-black tracking-tighter">
            BROOKE<span className="text-gold">FIT</span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-bold tracking-widest text-white/60 hover:text-[#D4AF37] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#booking"
            className="hidden lg:block bg-[#D4AF37] text-black text-xs font-black tracking-widest px-6 py-3 hover:bg-[#F5D060] transition-colors duration-200"
          >
            JOIN NOW
          </a>

          <button className="lg:hidden text-white" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col items-center justify-center gap-6"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-4xl font-black tracking-tighter text-white hover:text-[#D4AF37] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="mt-6 bg-[#D4AF37] text-black text-sm font-black tracking-widest px-10 py-4"
            >
              JOIN NOW
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
