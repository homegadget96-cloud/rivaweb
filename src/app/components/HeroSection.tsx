import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";

const stats = [
  { value: "300+", label: "Website Terbangun" },
  { value: "98%", label: "Klien Puas" },
  { value: "3–7 Hari", label: "Waktu Pengerjaan" },
  { value: "24/7", label: "Support & Maintenance" },
];

export function HeroSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 50%, #F0FDF4 100%)" }}
    >
      {/* Background decorative blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: "#2563EB" }} />
      <div className="absolute bottom-20 left-0 w-72 h-72 rounded-full opacity-10 blur-3xl" style={{ background: "#10B981" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl" style={{ background: "#F59E0B" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-[#2563EB] mb-6" style={{ fontSize: "0.8125rem", fontWeight: 600, fontFamily: "'Inter', sans-serif" }}>
              <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
              Kami bantu UMKM dapat pelanggan 24/7
            </div>

            <h1
              className="text-[#1E293B] mb-6"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 5vw, 3.25rem)",
                lineHeight: 1.2,
              }}
            >
              Website Profesional untuk{" "}
              <span className="text-[#2563EB]">UMKM Indonesia</span>
              {" "}—{" "}
              <span className="relative">
                Cepat, Mobile-Friendly
                <span className="absolute bottom-1 left-0 right-0 h-1 bg-[#F59E0B] rounded opacity-60" />
              </span>
              , dan Siap Jualan
            </h1>

            <p
              className="text-[#475569] mb-8 max-w-xl"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.0625rem", lineHeight: 1.7 }}
            >
              Riva Web Builder hadir untuk membantu bisnis kecil tampil besar di dunia digital. Kami bangun website impian Anda dalam{" "}
              <strong className="text-[#1E293B]">3–7 hari kerja</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <button
                onClick={() => scrollTo("#kontak")}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white hover:opacity-90 transition-all hover:shadow-lg cursor-pointer border-none"
                style={{
                  background: "linear-gradient(135deg, #2563EB, #1d4ed8)",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  boxShadow: "0 4px 20px rgba(37,99,235,0.35)",
                }}
              >
                Mulai Sekarang — Gratis Konsultasi
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => scrollTo("#portfolio")}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border-2 border-[#2563EB] text-[#2563EB] hover:bg-blue-50 transition-colors cursor-pointer bg-transparent"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "1rem" }}
              >
                <Play size={16} className="fill-[#2563EB]" />
                Lihat Portfolio Kami
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div
                    className="text-[#2563EB]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1.5rem" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-[#64748B]"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Browser mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            {/* Floating badge */}
            <div className="absolute -top-4 -left-4 z-10 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-xl">🚀</div>
              <div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.875rem", color: "#1E293B" }}>Website Live!</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "#10B981" }}>Dalam 3 Hari Kerja</div>
              </div>
            </div>

            {/* Browser window */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
              {/* Browser bar */}
              <div className="px-4 py-3 bg-gray-50 flex items-center gap-2 border-b border-gray-200">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-1 mx-3 bg-white rounded-md px-3 py-1 text-center border border-gray-200" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "#64748B" }}>
                  www.toko-anda.com
                </div>
              </div>

              {/* Mockup content */}
              <div className="p-5">
                {/* Fake nav */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-20 h-5 rounded bg-blue-200" />
                  <div className="flex gap-3">
                    <div className="w-12 h-3 rounded bg-gray-200" />
                    <div className="w-12 h-3 rounded bg-gray-200" />
                    <div className="w-12 h-3 rounded bg-gray-200" />
                    <div className="w-16 h-3 rounded bg-[#2563EB]" />
                  </div>
                </div>

                {/* Fake hero */}
                <div
                  className="rounded-xl p-6 mb-4"
                  style={{ background: "linear-gradient(135deg, #EFF6FF, #F0FDF4)" }}
                >
                  <div className="w-48 h-6 rounded bg-blue-300 mb-3" />
                  <div className="w-64 h-4 rounded bg-gray-200 mb-2" />
                  <div className="w-56 h-4 rounded bg-gray-200 mb-4" />
                  <div className="flex gap-2">
                    <div className="w-28 h-8 rounded-lg bg-[#2563EB]" />
                    <div className="w-24 h-8 rounded-lg border-2 border-[#2563EB]" />
                  </div>
                </div>

                {/* Fake products */}
                <div className="grid grid-cols-3 gap-3">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="rounded-lg overflow-hidden border border-gray-100">
                      <div className="h-16 bg-gradient-to-br from-blue-100 to-purple-100" />
                      <div className="p-2">
                        <div className="w-full h-2.5 rounded bg-gray-200 mb-1" />
                        <div className="w-2/3 h-2.5 rounded bg-[#10B981]" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-[#10B981] text-white rounded-2xl shadow-xl px-4 py-3">
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.875rem" }}>98% Klien Puas</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", opacity: 0.85 }}>⭐⭐⭐⭐⭐</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L60 50C120 40 240 20 360 16.7C480 13.3 600 26.7 720 33.3C840 40 960 40 1080 33.3C1200 26.7 1320 13.3 1380 6.7L1440 0V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
