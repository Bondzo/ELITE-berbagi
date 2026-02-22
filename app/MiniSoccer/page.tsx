import Image from "next/image";
import Link from "next/link";

const miniSoccerDetails = [
  { label: "Nama Acara", value: "Mini Soccer pengganti SOTR" },
  { label: "Tanggal", value: "Sabtu, 07 Maret 2026" },
  { label: "Jam", value: "Blum tau WIB" },
  { label: "Lokasi", value: "Blum tau" },
];

const floatingBalls = [
  { top: "10%", left: "6%", size: "h-14 w-14", delay: "0s" },
  { top: "18%", right: "11%", size: "h-20 w-20", delay: "0.8s" },
  { top: "52%", left: "4%", size: "h-16 w-16", delay: "1.2s" },
  { top: "74%", right: "6%", size: "h-12 w-12", delay: "0.4s" },
  { top: "82%", left: "16%", size: "h-10 w-10", delay: "1.6s" },
];

const fieldLines = [
  "top-[7%] left-[12%] h-10 w-24 rotate-12",
  "top-[20%] right-[14%] h-8 w-20 -rotate-12",
  "bottom-[16%] left-[22%] h-8 w-20 -rotate-6",
  "bottom-[26%] right-[18%] h-10 w-24 rotate-6",
];


export default function MiniSoccerInvitationPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-[#4A2B10]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#FFE5C7_0%,#FFF5E9_28%,#FFFFFF_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,rgba(255,150,44,0.14)_0%,rgba(255,255,255,0)_42%,rgba(255,132,0,0.08)_100%)]" />

      {floatingBalls.map((ball, index) => (
        <div
          key={index}
          className={`pointer-events-none absolute ${ball.size} animate-[float_6s_ease-in-out_infinite] rounded-full border border-orange-200/80 bg-[radial-gradient(circle_at_35%_30%,#FFFFFF_0%,#FFF4E6_62%,#FFD3A1_100%)] opacity-80 shadow-[0_10px_30px_rgba(255,145,31,0.22)]`}
          style={{ ...ball, animationDelay: ball.delay }}
          aria-hidden="true"
        >
          <div className="absolute inset-[22%] rounded-full border border-orange-300/70" />
          <div className="absolute top-[18%] left-[20%] h-[28%] w-[30%] rotate-12 rounded-sm border border-orange-300/80" />
          <div className="absolute right-[20%] bottom-[18%] h-[24%] w-[26%] -rotate-12 rounded-sm border border-orange-300/80" />
        </div>
      ))}

      {fieldLines.map((lineClass, index) => (
        <div
          key={index}
          className={`pointer-events-none absolute ${lineClass} rounded-full border-2 border-dashed border-orange-300/80 opacity-70`}
          aria-hidden="true"
        />
      ))}

      <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-10 sm:px-6 md:py-14">
        <section className="rounded-3xl border border-orange-200/90 bg-white/90 p-6 shadow-[0_20px_50px_rgba(255,138,20,0.2)] backdrop-blur-sm md:p-10">
          <p className="text-xs tracking-[0.2em] text-orange-500 uppercase">Undangan Lanjutan ELITE</p>
          <h1 className="mt-3 font-display text-3xl leading-tight font-bold text-orange-700 sm:text-5xl">
            Mini Soccer Setelah Ramadhan Berbagi
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-orange-950/80 sm:text-base">
            Terima kasih sudah hadir di Ramadhan Berbagi. Sekarang saatnya lanjut menjaga silaturahmi lewat pertandingan
            persahabatan mini soccer yang seru dan penuh kebersamaan.
          </p>

            <div className="mt-7 overflow-hidden rounded-2xl border border-orange-200 bg-orange-50">
            <Image
              src="/soccer.png"
              alt=""
              width={1280}
              height={720}
              className="h-auto w-full"
              priority
            />
          </div>
        </section>

        <section className="rounded-3xl border border-orange-200/90 bg-white/90 p-6 shadow-[0_20px_50px_rgba(255,138,20,0.2)] backdrop-blur-sm md:p-10">
          <h2 className="font-display text-2xl font-semibold text-orange-700">Lokasi & Waktu Pertandingan</h2>
          <ul className="mt-5 space-y-4 text-sm text-orange-950/80 sm:text-base">
            {miniSoccerDetails.map((item) => (
              <li key={item.label} className="rounded-xl border border-orange-200/90 bg-orange-50/80 p-4">
                <p className="text-xs tracking-[0.2em] text-orange-500 uppercase">{item.label}</p>
                <p className="mt-1 font-medium">{item.value}</p>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://maps.google.com/?q=ELITE+Arena+Mini+Soccer+Bandung"
              className="rounded-full border border-orange-500 bg-orange-500 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Buka Lokasi di Google Maps
            </a>
            <Link
              href="/"
              className="rounded-full border border-orange-300 bg-white px-6 py-3 text-center text-sm font-semibold text-orange-700 transition hover:bg-orange-100"
            >
              Kembali ke Ramadhan Berbagi
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}