"use client";
import { MapPin, Phone, Mail } from "lucide-react";

const socialIcons = [
  {
    label: "Instagram",
    svg: (<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>),
  },
  {
    label: "Facebook",
    svg: (<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>),
  },
  {
    label: "X",
    svg: (<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <div className="md:col-span-2">
            <a href="#home" className="text-2xl font-black tracking-tighter block mb-4">
              BROOKE<span className="text-gold">FIT</span>
            </a>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs mb-6">
              Premium fitness redefined. World-class equipment, expert trainers, and a community built on results.
            </p>
            <div className="flex gap-3">
              {socialIcons.map((s) => (
                <button key={s.label} aria-label={s.label} className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/35 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-200">
                  {s.svg}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black tracking-[0.25em] text-white/40 mb-5">QUICK LINKS</h4>
            <ul className="space-y-3">
              {["Home", "Facilities", "Membership", "Trainers", "Classes", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-sm text-white/40 hover:text-[#D4AF37] transition-colors font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black tracking-[0.25em] text-white/40 mb-5">FIND US</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/40">
                <MapPin size={14} className="text-[#D4AF37] mt-0.5 shrink-0" />
                42 Fitness Lane, London EC1A 1AA
              </li>
              <li className="flex items-center gap-3 text-sm text-white/40">
                <Phone size={14} className="text-[#D4AF37] shrink-0" />
                +44 (0) 20 7000 1234
              </li>
              <li className="flex items-center gap-3 text-sm text-white/40">
                <Mail size={14} className="text-[#D4AF37] shrink-0" />
                hello@brookefit.com
              </li>
            </ul>
            <div className="mt-5 pt-4 border-t border-white/5">
              <p className="text-[10px] font-black tracking-[0.2em] text-white/25 mb-1">OPENING HOURS</p>
              <p className="text-xs text-white/40">Mon–Sat: 5:30am – 11pm</p>
              <p className="text-xs text-white/40">Sunday: 7am – 9pm</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-white/20 font-medium tracking-widest">
          <p>© 2025 BROOKEFIT LTD. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/40 transition-colors">PRIVACY</a>
            <a href="#" className="hover:text-white/40 transition-colors">TERMS</a>
            <a href="#" className="hover:text-white/40 transition-colors">COOKIES</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
