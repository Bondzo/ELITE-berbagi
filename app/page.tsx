import CountdownTimer from "@/components/CountdownTimer";
import Ornaments from "@/components/Ornaments";
import Particles from "@/components/Particles";
import EventModal from "@/components/EventModal";

const eventDetails = [
  { label: "Tanggal", value: "Sabtu, 7 Maret 2026" },
  { label: "Waktu", value: "15.30 - 18.25 WIB" },
  { label: "Lokasi", value: "Panti Asuhan ..." },
];

const eventDetails2 = [
  { label: "Tanggal", value: "Sabtu, 7 Maret 2026" },
  { label: "Waktu", value: "12.00 - selesai" },
  { label: "Lokasi", value: "Imun+ Sport Surabaya" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(150deg,#fff0c9_0%,#d4e4ed_55%,#fff0c9_100%)] text-[#2c3e47]">
      <Particles />
      <Ornaments />
      <div className="islamic-pattern absolute inset-0 opacity-20" aria-hidden="true" />

      <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-8 sm:px-6 md:py-14">
        <section className="glass-card rounded-3xl px-6 py-12 text-center shadow-2xl sm:px-10 md:py-16">
          {/* LOGO BANNER */}
          <div className="-mx-6 -mt-12 sm:-mx-10 md:-mt-16 mb-8 rounded-t-3xl overflow-hidden">
            <div className="relative flex items-center justify-center gap-4 px-8 py-4 bg-gradient-to-r from-[#3D2B00] via-[#D4AF37] to-[#3D2B00]">
              {/* garis stripe dekor */}
              <div className="absolute inset-0 opacity-10"
                style={{backgroundImage: 'repeating-linear-gradient(90deg,transparent,transparent 20px,rgba(255,255,255,0.3) 20px,rgba(255,255,255,0.3) 21px)'}}
              />
              {/* shimmer bawah */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

              <div className="relative z-10 bg-white rounded-lg p-0 shadow-lg overflow-hidden">
                <img src="/logo.png" alt="Logo ELITE" className="h-14 w-auto block" />
              </div>
              <div className="relative z-10 w-px h-8 bg-white/40" />
              <span className="relative z-10 text-base tracking-[0.25em] text-white/90 uppercase font-semibold">
                Elite Berbagi · 2026
              </span>
            </div>
          </div>
          <h1 className="mx-auto mt-3 max-w-4xl font-display text-4xl leading-[1.15] font-bold text-[#2c3e47] sm:text-5xl md:text-6xl">
            Membawa Berkah Bersama
            <span className="mt-1 block">Keluarga ELITE</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#445e70] sm:text-base">
            Assalamu’alaikum Wr. Wb. <br></br>
            Segala puji bagi Allah Swt. Tuhan semesta alam yang telah memberikan hidayah-Nya kepada kita semua sehingga bisa melaksanakan 
            ibadah puasa pada Bulan Ramadhan yang penuh berkah ini. Melalui undangan ini kami ingin memberitahukan adanya acara Elite Berbagi 
            dan acara Mini Soccer. Yang akan diadakan pada hari Sabtu, 7 Maret 2026. 
          </p>

          <CountdownTimer />

        </section>

        <section className="grid grid-cols-2 gap-4">
          <EventModal
            event={{
              title: "ELITE BERBAGI",
              details: eventDetails,
              description: "Kegiatan meliputi pengenalan ELITE, materi ..., fun games ..., ceramah dan doa bersama, buka puasa bersama, serta pembagian hadiah.",
              emoji: "🌙",
            }}
          />
          <EventModal
            event={{
              title: "MINI SOCCER",
              details: eventDetails2,
              description: "Dalam setiap kebaikan yang dibagikan, ada ketenangan hati yang Allah lipatgandakan.",
              emoji: "⚽",
            }}
          />
        </section>

        <section className="glass-card rounded-2xl p-6 text-center md:p-10">
          <h2 className="font-display text-2xl font-semibold text-[#2c3e47] sm:text-3xl">
            Bersama Menyemai Hangatnya Ramadhan
          </h2>
          <div className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#445e70] sm:text-base">
            Ada begitu banyaknya cara untuk bersedekah. Rasanya tidak ada lagi alasan kita untuk tidak melakukannya. Apalagi, setelah kita mengetahui banyaknya nikmat Allah dan keutamaan dari bersedekah.
            Mari berbagi untuk saudara saudari kita yang membutuhkan <br></br> <br></br>
            Berikut kami sediakan QR code dan Nomor Rekening untuk panti asuhan A. <br></br>
            Semoga dapat bermanfaat dan terimakasih  <br></br>

            <div className="mt-6 flex flex-col items-center gap-5">
              <img
                src="/qr.jpeg"
                alt="QRIS Donasi"
                className="w-56 rounded-xl shadow-xl"
              />
              <div className="w-full max-w-md rounded-xl border border-[#ff8c1f]/40 bg-white/5 p-5 text-center shadow-lg">
                <p className="text-sm uppercase tracking-widest text-[#ff8c1f]">
                  Transfer Bank
                </p>

                <p className="mt-3 text-lg font-semibold">
                  7901896619
                </p>

                <p className="text-sm text-[#445e70]">
                  BCA a.n. Mey Adinda
                </p>
              </div>
            </div>

            <br></br>
            Oleh karena itu, kami sangat mengharapkan kehadiran dari Anggota Elite untuk dapat berpartisipasi dalam acara yang penuh keberkahan di bulan Ramadhan yang berbahagia ini. Dengan demikian undangan ini kami sampaikan, atas perhatiannya kami ucapkan terimakasih.
            Wassalamualaikum          </div>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="https://wa.me/6281775122133"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#ff8c1f]/60 bg-[#ff8c1f]/10 px-6 py-3 text-sm font-semibold text-[#2c3e47] transition hover:bg-[#ff8c1f]/20 inline-block"
            >
              Hubungi Panitia
            </a>          
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-[#445e70]/20 bg-[#445e70]/10 px-4 py-6 text-center text-xs text-[#445e70] sm:text-sm">
        <p className="text-[#ff8c1f]">Semoga Ramadhan ini membawa berkah, ampunan, dan hati yang saling menguatkan.</p>
        <p className="mt-2 text-[#6b8a9a]">© 2026 Ramadhan Berbagi • Anggota &amp; Alumni Organisasi</p>
      </footer>
    </div>
  );
}
