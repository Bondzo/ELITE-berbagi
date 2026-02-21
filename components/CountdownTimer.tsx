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

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
};

export default function CountdownTimer() {
  const targetDate = useMemo(() => new Date(TARGET_DATE), []);
  const [countdown, setCountdown] = useState<Countdown>(() => getCountdown(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getCountdown(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: "Hari", value: String(countdown.days).padStart(2, "0") },
    { label: "Jam", value: String(countdown.hours).padStart(2, "0") },
    { label: "Menit", value: String(countdown.minutes).padStart(2, "0") },
    { label: "Detik", value: String(countdown.seconds).padStart(2, "0") },
  ];

  return (
    <div className="mt-7">
      <p className="text-xs tracking-[0.18em] text-slate-300 uppercase">Hitung mundur menuju 7 Maret 2026</p>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
        {units.map((unit) => (
          <div key={unit.label} className="rounded-xl border border-white/20 bg-white/10 px-3 py-3">
            <p className="font-display text-2xl leading-none text-[#E4C972] sm:text-3xl">{unit.value}</p>
            <p className="mt-1 text-[10px] tracking-[0.14em] text-slate-300 uppercase">{unit.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
