export default function Ornaments() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg
        viewBox="0 0 220 220"
        className="absolute -left-14 top-10 h-44 w-44 text-[#D4AF37]/50"
        fill="none"
      >
        <path d="M132 30a72 72 0 1 0 58 115.3A80 80 0 1 1 132 30Z" fill="currentColor" />
        <circle cx="176" cy="48" r="4" fill="currentColor" />
      </svg>

      <svg
        viewBox="0 0 160 280"
        className="absolute right-4 top-16 h-44 w-24 text-[#D4AF37]/55 md:right-14"
        fill="none"
      >
        <path d="M80 20V56" stroke="currentColor" strokeWidth="2" />
        <path
          d="M45 56h70l-6 28v122c0 12-10 22-22 22H73c-12 0-22-10-22-22V84l-6-28Z"
          stroke="currentColor"
          strokeWidth="3"
          fill="rgba(212, 175, 55, 0.08)"
        />
        <path d="M58 106h44M58 136h44M58 166h44" stroke="currentColor" strokeOpacity="0.45" />
        <circle cx="80" cy="188" r="10" fill="currentColor" fillOpacity="0.22" />
      </svg>
    </div>
  );
}
