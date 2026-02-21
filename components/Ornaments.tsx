const lanterns = [
  {
    id: "lantern-main",
    x: 164,
    y: 95,
    scale: 1,
    duration: "6s",
    delay: "0s",
  },
  {
    id: "lantern-left",
    x: 74,
    y: 152,
    scale: 0.82,
    duration: "5.2s",
    delay: "-1.3s",
  },
  {
    id: "lantern-right",
    x: 262,
    y: 164,
    scale: 0.86,
    duration: "5.7s",
    delay: "-2.1s",
  },
];

const stars = [
  { x: 34, y: 44, r: 7 },
  { x: 80, y: 30, r: 5.2 },
  { x: 110, y: 64, r: 6 },
  { x: 222, y: 26, r: 5 },
  { x: 246, y: 58, r: 6.8 },
  { x: 196, y: 46, r: 4.4 },
  { x: 296, y: 32, r: 5.8 },
];

function Lantern({ x, y, scale }: { x: number; y: number; scale: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <ellipse cx="0" cy="32" rx="33" ry="32" fill="rgba(255, 233, 125, 0.5)" />
      <ellipse cx="0" cy="32" rx="24" ry="23" fill="url(#lanternGlow)" />
      <path d="M-7 -33h14v8h-14z" fill="#A34A1B" />
      <path d="M-28 -25h56l-6 13h-44z" fill="#C65A21" />
      <path d="M-22 -11h44v49c0 7-6 13-13 13h-18c-7 0-13-6-13-13V-11z" fill="url(#lanternBody)" stroke="#9C4019" strokeWidth="1.8" />
      <path d="M-20 -10h40" stroke="#F6BE58" strokeWidth="3" strokeLinecap="round" />
      <path d="M-17 37h34" stroke="#F6BE58" strokeWidth="3" strokeLinecap="round" />
      <path d="M-16 -8l-2 44M-8 -8l-1 45M0 -8v45M8 -8l1 45M16 -8l2 44" stroke="#E09B33" strokeOpacity="0.65" strokeWidth="1.3" />
      <path d="M-15 52h30l-4 9h-22z" fill="#CB7A2D" />
      <path d="M-8 61h16l-8 8z" fill="#A34A1B" />
      <ellipse cx="0" cy="16" rx="14" ry="17" fill="url(#lanternCore)" />
    </g>
  );
}

function Star({ x, y, r }: { x: number; y: number; r: number }) {
  const d = `M ${x} ${y - r} L ${x + r * 0.4} ${y - r * 0.35} L ${x + r} ${y - r * 0.3} L ${x + r * 0.48} ${y + r * 0.12} L ${x + r * 0.62} ${y + r} L ${x} ${y + r * 0.5} L ${x - r * 0.62} ${y + r} L ${x - r * 0.48} ${y + r * 0.12} L ${x - r} ${y - r * 0.3} L ${x - r * 0.4} ${y - r * 0.35} Z`;
  return <path d={d} fill="#F5D84A" stroke="#F1C325" strokeWidth="1" />;
}

export default function Ornaments() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg viewBox="0 0 336 286" className="absolute left-1/2 top-1 h-[380px] w-[380px] -translate-x-1/2 opacity-95" fill="none">
        <defs>
          <radialGradient id="lanternGlow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#FFF8B0" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#F7CF5F" stopOpacity="0.15" />
          </radialGradient>
          <radialGradient id="lanternCore" cx="50%" cy="50%" r="65%">
            <stop offset="0%" stopColor="#FFFEE8" stopOpacity="0.98" />
            <stop offset="100%" stopColor="#FFD257" stopOpacity="0.2" />
          </radialGradient>
          <linearGradient id="lanternBody" x1="0" y1="-11" x2="0" y2="51" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFD27A" />
            <stop offset="100%" stopColor="#E1842F" />
          </linearGradient>
        </defs>

        <path d="M32 30V74" stroke="rgba(255,255,255,0.25)" strokeWidth="1.4" />
        <path d="M80 16V70" stroke="rgba(255,255,255,0.25)" strokeWidth="1.4" />
        <path d="M110 38V83" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2" />
        <path d="M164 18V95" stroke="rgba(255,255,255,0.28)" strokeWidth="1.7" />
        <path d="M196 34V72" stroke="rgba(255,255,255,0.25)" strokeWidth="1.3" />
        <path d="M222 16V86" stroke="rgba(255,255,255,0.24)" strokeWidth="1.3" />
        <path d="M246 34V85" stroke="rgba(255,255,255,0.23)" strokeWidth="1.3" />
        <path d="M262 19V164" stroke="rgba(255,255,255,0.28)" strokeWidth="1.6" />
        <path d="M296 16V70" stroke="rgba(255,255,255,0.23)" strokeWidth="1.2" />
        <path d="M74 24V152" stroke="rgba(255,255,255,0.26)" strokeWidth="1.6" />

        <path d="M18 44a15 15 0 1 0 0 28a12 12 0 1 1 0-28Z" fill="#F3D539" />
        <path d="M302 26a13 13 0 1 0 0 24a10 10 0 1 1 0-24Z" fill="#F3D539" />

        {stars.map((star) => (
          <Star key={`${star.x}-${star.y}`} {...star} />
        ))}

        {lanterns.map((lantern) => (
          <g
            key={lantern.id}
            className="origin-top lantern-sway"
            style={{ animationDuration: lantern.duration, animationDelay: lantern.delay }}
          >
            <circle cx={lantern.x} cy={lantern.y - 42} r="3" fill="#C96D2E" />
            <Lantern x={lantern.x} y={lantern.y} scale={lantern.scale} />
          </g>
        ))}
      </svg>
    </div>
  );
}
