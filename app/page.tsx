import Ornaments from "@/components/Ornaments";
import Particles from "@/components/Particles";

const eventDetails = [
  { label: "Tanggal", value: "Kamis, 7 Maret" },
  { label: "Waktu", value: "Ba'da Ashar hingga Selesai" },
  { label: "Lokasi", value: "Panti" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(145deg,#071A2B_0%,#0B2A3C_55%,#0A2234_100%)] text-slate-50">
      <Particles />
      <Ornaments />
      <div className="islamic-pattern absolute inset-0 opacity-25" aria-hidden="true" />

      <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-8 sm:px-6 md:py-14">
        <section className="glass-card rounded-3xl px-6 py-12 text-center shadow-2xl sm:px-10 md:py-16">
          <h1 className="font-display text-4xl leading-tight font-bold tracking-wide text-[#F8FAFC] sm:text-5xl md:text-6xl">
            Membawa Berkah Bersama ELITE
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-300 sm:text-base">
            Mari hadir dan menguatkan ukhuwah bersama anggota serta alumni dalam malam penuh keberkahan.
          </p>
          <div className="mt-7 text-[#D4AF37]">
            <span className="font-display text-3xl font-semibold sm:text-4xl">7 Maret</span>
          </div>
          <button className="mt-8 rounded-full border border-[#D4AF37]/70 bg-[#D4AF37]/20 px-7 py-3 text-sm font-semibold text-[#F8FAFC] transition hover:bg-[#D4AF37]/35">
            Konfirmasi Hadir
          </button>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <article className="glass-card rounded-2xl p-6 md:p-8">
            <h2 className="font-display text-2xl font-semibold text-[#D4AF37]">Detail Acara</h2>
            <ul className="mt-4 space-y-4 text-sm text-slate-200">
              {eventDetails.map((item) => (
                <li key={item.label} className="flex flex-col border-b border-white/10 pb-3 last:border-none last:pb-0">
                  <span className="text-xs tracking-[0.2em] text-slate-400 uppercase">{item.label}</span>
                  <span className="mt-1 font-medium">{item.value}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Kegiatan meliputi kajian singkat, buka puasa bersama, dan penyaluran paket kebaikan untuk sesama.
            </p>
          </article>

          <article className="glass-card rounded-2xl p-6 md:p-8">
            <h2 className="font-display text-2xl font-semibold text-[#22C55E]">Ajakan Kebaikan</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Ramadhan adalah waktu terbaik untuk menebar manfaat. Hadirnya kita bukan hanya untuk bertemu,
              tetapi juga menjadi jembatan kebahagiaan bagi mereka yang membutuhkan.
            </p>
            <blockquote className="mt-5 rounded-xl border border-[#D4AF37]/30 bg-white/5 p-4 text-sm italic text-slate-100">
              “Dalam setiap kebaikan yang dibagikan, ada ketenangan hati yang Allah lipatgandakan.”
            </blockquote>
          </article>
        </section>

        <section className="glass-card rounded-2xl p-6 text-center md:p-10">
          <h2 className="font-display text-2xl font-semibold text-[#F8FAFC] sm:text-3xl">
            Bersama Menyemai Hangatnya Ramadhan
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300">
            Siapkan hati, hadirkan langkah, dan jadilah bagian dari momen silaturahmi yang penuh makna.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <button className="rounded-full bg-[#22C55E]/85 px-6 py-3 text-sm font-semibold text-[#071A2B] transition hover:bg-[#22C55E]">
              Hadiri &amp; Berbagi
            </button>
            <button className="rounded-full border border-[#D4AF37]/60 bg-[#D4AF37]/15 px-6 py-3 text-sm font-semibold text-[#F8FAFC] transition hover:bg-[#D4AF37]/30">
              Hubungi Panitia
            </button>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-black/10 px-4 py-6 text-center text-xs text-slate-300 sm:text-sm">
        <p className="text-[#D4AF37]">Semoga Ramadhan ini membawa berkah, ampunan, dan hati yang saling menguatkan.</p>
        <p className="mt-2 text-slate-400">© 2026 Ramadhan Berbagi • Anggota &amp; Alumni Organisasi</p>
      </footer>
    </div>
  );
}
