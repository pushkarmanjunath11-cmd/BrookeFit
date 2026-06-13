"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Dumbbell } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Facilities", href: "#facilities" },
  { label: "Classes", href: "#classes" },
  { label: "Trainers", href: "#trainers" },
  { label: "Membership", href: "#membership" },
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
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-[#C9A84C]/10 py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#E8C96D] flex items-center justify-center">
              <Dumbbell size={18} className="text-black" />
            </div>
            <span className="text-xl font-black tracking-tight">
              Brooke<span className="text-gradient-gold">Fit</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 hover:text-[#C9A84C] transition-colors duration-300 font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#booking" className="text-sm text-white/70 hover:text-white transition-colors px-4 py-2">
              Sign In
            </a>
            <a
              href="#booking"
              className="btn-gold text-sm px-5 py-2.5 rounded font-bold bg-gradient-to-r from-[#C9A84C] to-[#E8C96D] text-black hover:shadow-[0_0_20px_rgba(201,168,76,0.4)] transition-all duration-300"
            >
              Book Free Trial
            </a>
          </div>

          <button
            className="md:hidden text-white/80 hover:text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-3xl font-bold text-white/80 hover:text-[#C9A84C] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="mt-4 px-8 py-3 bg-gradient-to-r from-[#C9A84C] to-[#E8C96D] text-black font-bold rounded text-lg"
            >
              Book Free Trial
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
