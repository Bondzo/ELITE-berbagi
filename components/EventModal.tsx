"use client";
import { useState } from "react";

type Event = {
    title: string;
    details: { label: string; value: string }[];
    description: string;
    emoji: string;
};

export default function EventModal({ event }: { event: Event }) {
    const [open, setOpen] = useState(false);

    return (
        <>
        {/* BUTTON */}
        <button
        onClick={() => setOpen(true)}
        className="glass-card rounded-2xl p-5 text-center w-full transition hover:scale-[1.02] border border-[#ff8c1f]/30 hover:border-[#ff8c1f]/70 group"
        >
        <span className="text-3xl">{event.emoji}</span>
        <h2 className="font-display text-lg md:text-2xl font-semibold text-[#ff8c1f] group-hover:text-[#e07000] transition mt-2">
            {event.title}
        </h2>
        <p className="mt-2 text-xs text-[#6b8a9a] tracking-widest uppercase">Tap untuk detail</p>
        </button>

        {/* MODAL */}
        {open && (
            <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setOpen(false)}
            >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

            <div
                className="relative z-10 w-full max-w-md rounded-3xl border border-[#ff8c1f]/30 bg-[#fff8ec] shadow-2xl p-8"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-[#6b8a9a] hover:text-[#2c3e47] text-xl leading-none"
                >
                ✕
                </button>

                <h2 className="font-display text-2xl font-semibold text-[#ff8c1f]">
                {event.title}
                </h2>

                <ul className="mt-5 space-y-4 text-sm text-[#445e70]">
                {event.details.map((item) => (
                    <li key={item.label} className="flex flex-col border-b border-[#445e70]/20 pb-3 last:border-none last:pb-0">
                    <span className="text-xs tracking-[0.2em] text-[#6b8a9a] uppercase">{item.label}</span>
                    <span className="mt-1 font-medium text-[#2c3e47]">{item.value}</span>
                    </li>
                ))}
                </ul>

                <blockquote className="mt-5 rounded-xl border border-[#ff8c1f]/30 bg-[#ff8c1f]/5 p-4 text-sm text-[#445e70]">
                {event.description}
                </blockquote>
            </div>
            </div>
        )}
        </>
    );
}