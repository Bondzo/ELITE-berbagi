export default function Ornaments() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg
        viewBox="0 0 220 220"
        className="absolute -left-14 top-10 h-44 w-44 text-[#D4AF37]/65"
        fill="none"
      >
        <path
          d="M132 30a72 72 0 1 0 58 115.3A80 80 0 1 1 132 30Z"
          fill="currentColor"
        />
        <circle cx="176" cy="48" r="4" fill="currentColor" />
      </svg>

      <svg
        viewBox="0 0 160 280"
        className="absolute right-4 top-16 h-44 w-24 text-[#D4AF37]/70 md:right-14"
        fill="none"
      >
        <path d="M80 20V56" stroke="currentColor" strokeWidth="2" />
        <path
          d="M45 56h70l-6 28v122c0 12-10 22-22 22H73c-12 0-22-10-22-22V84l-6-28Z"
          stroke="currentColor"
          strokeWidth="3"
          fill="rgba(212, 175, 55, 0.10)"
        />
        <path d="M58 106h44M58 136h44M58 166h44" stroke="currentColor" strokeOpacity="0.55" />
        <circle cx="80" cy="188" r="10" fill="currentColor" fillOpacity="0.3" />
      </svg>

      <svg
        viewBox="0 0 180 180"
        className="absolute bottom-14 left-5 h-32 w-32 text-[#22C55E]/30"
        fill="none"
      >
        <path
          d="M90 14l20 30 35 8-24 28 3 37-34-14-34 14 3-37-24-28 35-8 20-30Z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}
