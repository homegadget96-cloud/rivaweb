import { motion } from "motion/react";
import { ShieldOff, SearchX, Clock, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: <ShieldOff size={28} className="text-red-500" />,
    title: "Tampil Tidak Profesional",
    desc: "Calon pelanggan menilai bisnis dari tampilan online. Tanpa website, bisnis Anda terlihat kurang terpercaya.",
    bg: "bg-red-50",
  },
  {
    icon: <SearchX size={28} className="text-orange-500" />,
    title: "Susah Ditemukan di Google",
    desc: "Website yang dioptimasi SEO membantu pelanggan baru menemukan bisnis Anda tanpa iklan berbayar.",
    bg: "bg-orange-50",
  },
  {
    icon: <Clock size={28} className="text-yellow-500" />,
    title: "Kehilangan Pelanggan di Luar Jam Buka",
    desc: "Website bekerja 24 jam, 7 hari seminggu — bahkan saat Anda tidur, calon pembeli tetap bisa mengenal produk Anda.",
    bg: "bg-yellow-50",
  },
  {
    icon: <TrendingDown size={28} className="text-purple-500" />,
    title: "Kalah Saing dari Kompetitor",
    desc: "Kompetitor yang sudah punya website lebih mudah dipercaya dan dipilih oleh pelanggan modern.",
    bg: "bg-purple-50",
  },
];

export function ProblemSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div
            className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-600 mb-4"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", fontWeight: 600 }}
          >
            Masalah yang Kami Selesaikan
          </div>
          <h2
            className="text-[#1E293B] mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            Kenapa UMKM Butuh Website Profesional?
          </h2>
          <p
            className="text-[#64748B] max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.0625rem", lineHeight: 1.7 }}
          >
            Tanpa kehadiran digital yang kuat, bisnis Anda kehilangan peluang setiap harinya.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${p.bg} rounded-2xl p-6 hover:shadow-md transition-shadow`}
            >
              <div className="mb-4">{p.icon}</div>
              <h3
                className="text-[#1E293B] mb-2"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.0625rem" }}
              >
                {p.title}
              </h3>
              <p
                className="text-[#64748B]"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
