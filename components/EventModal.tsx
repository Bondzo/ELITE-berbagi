"use client";
import { useState, useEffect } from "react";

type Event = {
    title: string;
    details: { label: string; value: string }[];
    description: React.ReactNode;
    emoji: string;
    poster?: string;
};

export default function EventModal({ event }: { event: Event }) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

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
                className="fixed inset-0 z-50 overflow-hidden"
                onClick={() => setOpen(false)}
            >
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

                <div className="absolute inset-0 flex items-start justify-center p-6 pt-16 pb-10">
                    <div
                        className="relative z-10 w-full max-w-md rounded-3xl border border-[#ff8c1f]/40 bg-[#fff8ec] shadow-2xl max-h-[85vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Sticky top tipis */}
                        <div className="sticky top-0 z-20 bg-[#fff8ec]/95 backdrop-blur-sm rounded-t-3xl h-4" />

                        <div className="px-8 pb-10">
                            {/* Judul + close sejajar */}
                            <div className="flex items-center justify-between">
                                <div className="flex-1" />
                                <h2 className="font-display text-2xl font-semibold text-[#ff8c1f] text-center">
                                    {event.title}
                                </h2>
                                <div className="flex-1 flex justify-end">
                                    <button
                                        onClick={() => setOpen(false)}
                                        className="text-[#6b8a9a] hover:text-[#2c3e47] text-sm bg-white rounded-full w-8 h-8 flex items-center justify-center shadow border border-[#ff8c1f]/20"
                                    >
                                        ✕
                                    </button>
                                </div>
                            </div>

                            {/* Poster */}
                            {event.poster && (
                                <img
                                    src={event.poster}
                                    alt="Poster"
                                    className="mt-5 w-full rounded-xl shadow-lg"
                                />
                            )}

                            {/* Detail Acara label setelah poster */}
                            <div className="flex items-center gap-3 mt-6">
                                <div className="flex-1 h-px bg-[#ff8c1f]/40" />
                                <span className="text-[0.6rem] tracking-[0.2em] text-[#6b8a9a] uppercase">Detail Acara</span>
                                <div className="flex-1 h-px bg-[#ff8c1f]/40" />
                            </div>

                            <ul className="mt-5 space-y-4 text-sm text-[#445e70]">
                                {event.details.map((item) => (
                                    <li key={item.label} className="flex flex-col border-b border-[#445e70]/20 pb-3 last:border-none last:pb-0">
                                        <span className="text-xs tracking-[0.2em] text-[#6b8a9a] uppercase">{item.label}</span>
                                        <span className="mt-1 font-medium text-[#2c3e47] whitespace-pre-line">{item.value}</span>
                                    </li>
                                ))}
                            </ul>

                            <blockquote className="mt-5 rounded-xl border border-[#ff8c1f]/30 bg-[#ff8c1f]/5 p-4 text-sm text-[#445e70]">
                                {event.description}
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        )}
        </>
    );
}