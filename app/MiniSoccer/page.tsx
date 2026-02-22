import Image from "next/image";
import Link from "next/link";

const miniSoccerDetails = [
  { label: "Nama Acara", value: "Mini Soccer pengganti SOTR" },
  { label: "Tanggal", value: "Sabtu, 07 Maret 2026" },
  { label: "Jam", value: "Blum tau WIB" },
  { label: "Lokasi", value: "Blum tau" },
];

export default function MiniSoccerInvitationPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,#155B2D_0%,#0F3D22_35%,#082915_100%)] text-slate-50">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-10 sm:px-6 md:py-14">
        <section className="glass-card rounded-3xl border border-[#2D7E46] p-6 md:p-10">
          <p className="text-xs tracking-[0.2em] text-[#B8F1A9] uppercase">Undangan Lanjutan ELITE</p>
          <h1 className="mt-3 font-display text-3xl leading-tight font-bold text-[#F8FFF5] sm:text-5xl">
            Mini Soccer Setelah Ramadhan Berbagi
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-200 sm:text-base">
            Terima kasih sudah hadir di Ramadhan Berbagi. Sekarang saatnya lanjut menjaga silaturahmi lewat pertandingan
            persahabatan mini soccer yang seru dan penuh kebersamaan.
          </p>

          <div className="mt-7 overflow-hidden rounded-2xl border border-[#67B77C]/60 bg-[#0E3720]">
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

        <section className="glass-card rounded-3xl border border-[#2D7E46] p-6 md:p-10">
          <h2 className="font-display text-2xl font-semibold text-[#B8F1A9]">Lokasi & Waktu Pertandingan</h2>
          <ul className="mt-5 space-y-4 text-sm text-slate-100 sm:text-base">
            {miniSoccerDetails.map((item) => (
              <li key={item.label} className="rounded-xl border border-[#2D7E46]/80 bg-[#0E3720]/70 p-4">
                <p className="text-xs tracking-[0.2em] text-[#9CD6A5] uppercase">{item.label}</p>
                <p className="mt-1 font-medium">{item.value}</p>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://maps.google.com/?q=ELITE+Arena+Mini+Soccer+Bandung"
              className="rounded-full border border-[#9CD6A5] bg-[#9CD6A5] px-6 py-3 text-center text-sm font-semibold text-[#0A2A16] transition hover:bg-[#B8F1A9]"
            >
              Buka Lokasi di Google Maps
            </a>
            <Link
              href="/"
              className="rounded-full border border-[#67B77C] bg-transparent px-6 py-3 text-center text-sm font-semibold text-[#D8F8DA] transition hover:bg-[#1B4D2B]"
            >
              Kembali ke Ramadhan Berbagi
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}