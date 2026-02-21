export default function Particles() {
  const lanterns = [
    { left: "8%", delay: "0s", duration: "7s", size: "h-36 w-20" },
    { left: "27%", delay: "1.4s", duration: "8s", size: "h-40 w-24" },
    { left: "50%", delay: "0.8s", duration: "7.6s", size: "h-32 w-[4.5rem]" },
    { left: "71%", delay: "2.1s", duration: "8.4s", size: "h-38 w-[5.5rem]" },
    { left: "88%", delay: "1.1s", duration: "7.2s", size: "h-34 w-20" },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      {lanterns.map((lantern) => (
        <svg
          key={lantern.left}
          viewBox="0 0 160 280"
          className={`absolute -top-4 ${lantern.size} text-[#D4AF37]/45 lantern-sway`}
          fill="none"
          style={{
            left: lantern.left,
            animationDelay: lantern.delay,
            animationDuration: lantern.duration,
            transformOrigin: "top center",
          }}
        >
          <path d="M80 0V34" stroke="currentColor" strokeWidth="2.2" strokeOpacity="0.8" />
          <path
            d="M42 36h76l-8 28v122c0 14-11 25-25 25H75c-14 0-25-11-25-25V64l-8-28Z"
            stroke="currentColor"
            strokeWidth="3"
            fill="rgba(212, 175, 55, 0.08)"
          />
          <path d="M58 96h44M58 128h44M58 160h44" stroke="currentColor" strokeOpacity="0.5" />
          <circle cx="80" cy="184" r="9" fill="currentColor" fillOpacity="0.25" />
        </svg>
      ))}
    </div>
  );
}
