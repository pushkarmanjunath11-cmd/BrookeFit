"use client";

const words = [
  "RESULTS", "TRANSFORM", "GRIND", "DEDICATION", "STRENGTH",
  "CARDIO", "ENDURANCE", "POWER", "RESULTS", "TRANSFORM",
  "GRIND", "DEDICATION", "STRENGTH", "CARDIO", "ENDURANCE", "POWER",
];

interface TickerProps {
  dark?: boolean;
}

export default function Ticker({ dark = false }: TickerProps) {
  return (
    <div className={`py-5 overflow-hidden border-y ${dark ? "bg-[#D4AF37] border-[#D4AF37]" : "bg-[#0A0A0A] border-white/8"}`}>
      <div className="ticker-track flex whitespace-nowrap w-max">
        {[...words, ...words].map((word, i) => (
          <span
            key={i}
            className={`text-sm font-black tracking-[0.2em] mx-6 ${dark ? "text-black" : "text-white/20"}`}
          >
            {word}
            <span className={`mx-6 ${dark ? "text-black/40" : "text-[#D4AF37]"}`}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
