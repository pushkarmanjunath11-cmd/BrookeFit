"use client";
import { Dumbbell, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-20 pb-10 px-6 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#E8C96D] flex items-center justify-center">
                <Dumbbell size={18} className="text-black" />
              </div>
              <span className="text-xl font-black">
                Brooke<span className="text-gradient-gold">Fit</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm mb-5">
              Premium fitness redefined. World-class equipment, expert trainers, and a community built on results.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-[#C9A84C]/50 hover:text-[#C9A84C] transition-all duration-300"
                >
                  <Icon size={15} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {["Facilities", "Classes", "Trainers", "Membership", "Book Trial"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-white/40 hover:text-[#C9A84C] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/40">
                <MapPin size={14} className="text-[#C9A84C] mt-0.5 shrink-0" />
                42 Fitness Lane, London, EC1A 1AA
              </li>
              <li className="flex items-center gap-2 text-sm text-white/40">
                <Phone size={14} className="text-[#C9A84C] shrink-0" />
                +44 (0) 20 7000 1234
              </li>
              <li className="flex items-center gap-2 text-sm text-white/40">
                <Mail size={14} className="text-[#C9A84C] shrink-0" />
                hello@brookefit.com
              </li>
            </ul>
            <div className="mt-4 text-xs text-white/30">
              <p>Mon–Fri: 5:30am – 11pm</p>
              <p>Sat–Sun: 7am – 9pm</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/25">
          <p>© 2025 BrookeFit Ltd. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white/50 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/50 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white/50 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
