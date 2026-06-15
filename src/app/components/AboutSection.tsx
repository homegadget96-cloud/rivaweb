import { motion } from "motion/react";
import { Zap, Smartphone, DollarSign, Users, Target } from "lucide-react";

const strengths = [
  {
    icon: <Zap size={22} className="text-[#F59E0B]" />,
    title: "Teknologi Modern & Cepat",
    desc: "Website kami dibangun dengan React dan infrastruktur Cloudflare — teknologi yang dipakai perusahaan teknologi terkemuka dunia.",
    bg: "#FFFBEB",
  },
  {
    icon: <Smartphone size={22} className="text-[#2563EB]" />,
    title: "Mobile-First by Default",
    desc: "Kami mendesain website dari layar HP terlebih dahulu karena itulah cara pelanggan Anda browsing.",
    bg: "#EFF6FF",
  },
  {
    icon: <DollarSign size={22} className="text-[#10B981]" />,
    title: "Harga Transparan",
    desc: "Tidak ada kejutan di akhir. Semua biaya sudah jelas di paket harga kami.",
    bg: "#F0FDF4",
  },
  {
    icon: <Users size={22} className="text-[#7C3AED]" />,
    title: "Partnership Jangka Panjang",
    desc: "Kami tidak menghilang setelah website selesai. Dengan paket maintenance, kami menjadi mitra digital jangka panjang.",
    bg: "#F5F3FF",
  },
  {
    icon: <Target size={22} className="text-[#EC4899]" />,
    title: "Fokus pada Hasil Bisnis",
    desc: "Kami tidak hanya bikin website yang cantik, tapi website yang benar-benar bekerja menghasilkan pelanggan.",
    bg: "#FDF2F8",
  },
];

export function AboutSection() {
  return (
    <section id="tentang" className="py-24" style={{ background: "#F8FAFC" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="inline-block px-3 py-1 rounded-full bg-blue-100 text-[#2563EB] mb-5"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", fontWeight: 600 }}
            >
              Tentang Kami
            </div>
            <h2
              className="text-[#1E293B] mb-6"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 4vw, 2.5rem)", lineHeight: 1.25 }}
            >
              Kenapa Memilih Riva?
            </h2>
            <p
              className="text-[#475569] mb-6"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.0625rem", lineHeight: 1.75 }}
            >
              Riva Web Builder lahir dari keprihatinan melihat banyak UMKM Indonesia yang punya produk luar biasa, tapi kesulitan tampil profesional di dunia digital. Kami percaya bahwa setiap bisnis kecil berhak punya website yang tidak kalah keren dari brand besar.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-5 mb-8">
              {[
                { v: "300+", l: "Website\nTerbangun" },
                { v: "98%", l: "Klien\nPuas" },
                { v: "3 Tahun", l: "Pengalaman\nBerkarya" },
              ].map((s) => (
                <div key={s.l} className="bg-white rounded-xl p-4 shadow-sm text-center">
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "#2563EB" }}>
                    {s.v}
                  </div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", color: "#64748B", whiteSpace: "pre-line" }}>
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-1 gap-4"
          >
            {strengths.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: s.bg }}
                >
                  {s.icon}
                </div>
                <div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.9375rem", color: "#1E293B", marginBottom: "0.25rem" }}>
                    {s.title}
                  </div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "#64748B", lineHeight: 1.65 }}>
                    {s.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
