import CountdownTimer from "@/components/CountdownTimer";
import Ornaments from "@/components/Ornaments";
import Particles from "@/components/Particles";
import EventModal from "@/components/EventModal";
import React from "react";

const eventDetails = [
  { label: "Tanggal", value: "Sabtu, 7 Maret 2026" },
  { label: "Waktu", value: "15.40 - 18.35 WIB" },
  { label: "Lokasi", value: "Panti Asuhan Royatul Ummah\nJl. Tubanan Indah II RT.1 Karangpoh Tandes, Tubanan" },
];

const eventDetails2 = [
  { label: "Tanggal", value: "Sabtu, 8 Maret 2026" },
  { label: "Waktu", value: "00.00 - selesai" },
  { label: "Lokasi", value: "IMUN SPORT CLUB\nJl. Tegalsari No. 14, Kedungdoro, Kec. Tegalsari" },
];

export default function Home() {
  return (
      <div 
        className="relative min-h-screen overflow-hidden text-[#2c3e47]"
        style={{
          backgroundImage: 'url(/bg-no-bg.png), linear-gradient(150deg, #fff0c9 0%, #d4e4ed 55%, #fff0c9 100%)',
          backgroundSize: '100% auto, cover',
          backgroundPosition: 'top center, center',
          backgroundRepeat: 'no-repeat, no-repeat',
          backgroundBlendMode: 'multiply'
        }}
      >
      {/*<Ornaments />
      <div className="islamic-pattern absolute inset-0 opacity-20" aria-hidden="true" /> */}

      <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-8 sm:px-6 md:py-14">
        <section className="rounded-3xl px-6 py-12 text-center sm:px-10 md:py-16">
          {/* LOGO BANNER */}
          <div className="flex flex-col items-center mb-6 mt-2">
            <img src="/logo.png" alt="Logo ELITE" className="h-24 w-auto" />
            <div className="flex items-center gap-3 mt-3">
              <div className="w-8 h-px bg-[#ff8c1f]/60" />
              <p className="text-xs tracking-[0.25em] text-[#ff8c1f] uppercase font-semibold">
                Elite Berbagi · 2026
              </p>
              <div className="w-8 h-px bg-[#ff8c1f]/60" />
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
            dan acara Reuni akbar sahur bareng ELITE All Generation. Yang akan diadakan pada hari Sabtu, 7 Maret 2026. 
          </p>

          <CountdownTimer />

        </section>

        {/* GARIS PEMISAH */}
        <div className="flex items-center gap-3 px-4">
          <div className="flex-1 h-px bg-[#ff8c1f]/40" />
          <span className="text-xs tracking-[0.25em] text-[#ff8c1f] uppercase font-semibold">
            Agenda
          </span>
          <div className="flex-1 h-px bg-[#ff8c1f]/40" />
        </div>
        
        <section className="grid grid-cols-2 gap-4">
          <EventModal
            event={{
              title: "ELITE BERBAGI",
              details: eventDetails,
              emoji: "🌙",
              description: (
                <>
                  <p>Yuk ikut meramaikan Elite Berbagi! 🌙</p>
                  <br />
                  <p>
                    Untuk iuran kegiatan sebesar Rp25.000 bisa dibayar langsung di basecamp atau transfer ke <strong>BCA 7901896619</strong> a.n. Mey Adinda.
                  </p>
                  <br />
                  <p>
                    Terakhir pembayaran s/d 2 Maret Jangan lupa kasih keterangan: <strong>"Iuran elite berbagi (nama)"</strong> dan kirim bukti tf-nya ke cp yang tertera ya!
                  </p>
                  <br />
                  <p>Ditunggu kehadirannya 🤲✨</p>
                </>
                ),              
              poster: "/posterramadhan.jpeg",
            }}
          />
          <EventModal
            event={{
              title: "REUNI AKBAR",
              details: eventDetails2,
              emoji: "⚽",
              description: (
                <>
                  <p>Yuk ikut meramaikan Reuni Akbar Sahur Bareng ELITE All Generation! 🌙</p>
                  <br />
                  <p>
                    Untuk iuran kegiatan sebesar Rp35.000 bisa dibayar langsung di basecamp atau transfer ke <strong>BNI 2009869217</strong> a.n. Rangga Bachtiar Irvansyah.
                  </p>
                  <br />
                  <p>
                    Terakhir pembayaran s/d 4 Maret Jangan lupa kasih keterangan: <strong>"Iuran sahur (nama)"</strong> dan kirim bukti tf-nya ke cp yang tertera ya!
                  </p>
                  <br />
                  <p>Ditunggu kehadirannya 🤲✨</p>
                </>
                ),
              poster: "/postersahur.jpeg",
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
