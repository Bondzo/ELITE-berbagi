"use client";

import { useEffect, useMemo, useState } from "react";

const TARGET_DATE = "2026-03-07T00:00:00+07:00";

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const getCountdown = (targetDate: Date): Countdown => {
  const now = new Date();
  const diff = Math.max(0, targetDate.getTime() - now.getTime());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

export default function CountdownTimer() {
  const targetDate = useMemo(() => new Date(TARGET_DATE), []);
  const [countdown, setCountdown] = useState<Countdown | null>(null);

  useEffect(() => {
    setCountdown(getCountdown(targetDate));
    const timer = setInterval(() => {
      setCountdown(getCountdown(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: "Hari", value: String(countdown?.days ?? "--").padStart(2, "0") },
    { label: "Jam", value: String(countdown?.hours ?? "--").padStart(2, "0") },
    { label: "Menit", value: String(countdown?.minutes ?? "--").padStart(2, "0") },
    { label: "Detik", value: String(countdown?.seconds ?? "--").padStart(2, "0") },
  ];

  return (
    <div className="mt-7">
      <p className="text-xs tracking-[0.18em] text-[#445e70] uppercase">Hitung mundur menuju 7 Maret 2026</p>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
        {units.map((unit) => (
          <div key={unit.label} className="rounded-xl border border-[#445e70]/30 bg-[#445e70]/10 px-3 py-3">
            <p className="font-display text-2xl leading-none text-[#ff8c1f] sm:text-3xl">{unit.value}</p>
            <p className="mt-1 text-[10px] tracking-[0.14em] text-[#445e70] uppercase">{unit.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}