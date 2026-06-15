import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sari Dewi",
    business: "Dapur Ibu Sari, Jakarta",
    rating: 5,
    quote: "Riva Web Builder beneran bantu usaha katering saya naik level. Website-nya cepat, cantik, dan yang paling penting — pelanggan jadi lebih mudah nemuin saya lewat Google!",
    avatar: "SD",
    color: "#F59E0B",
  },
  {
    name: "Budi Santoso",
    business: "CV Maju Bersama Teknik, Surabaya",
    rating: 5,
    quote: "Profesional banget dari awal sampai akhir. Prosesnya jelas, revisi cepat direspons, dan hasilnya melebihi ekspektasi. Recommend banget buat bisnis yang mau serius di digital!",
    avatar: "BS",
    color: "#2563EB",
  },
  {
    name: "Fitri Handayani",
    business: "Butik Aurelia, Bandung",
    rating: 5,
    quote: "Dari ide sampai website jadi cuma 5 hari! Tampilannya elegan, mobile-friendly, dan order lewat WhatsApp langsung meningkat drastis. Tim Riva sangat sabar dan responsif.",
    avatar: "FH",
    color: "#EC4899",
  },
  {
    name: "Ahmad Ridwan",
    business: "Snack Kriuk Nusantara, Semarang",
    rating: 5,
    quote: "Awalnya ragu karena budget terbatas, tapi paket Starter-nya sudah sangat worth it. Website kelihatan profesional dan jaringan reseller saya langsung berkembang!",
    avatar: "AR",
    color: "#10B981",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="py-24" style={{ background: "linear-gradient(135deg, #1E293B, #0F172A)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div
            className="inline-block px-3 py-1 rounded-full bg-white/10 text-white mb-4"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", fontWeight: 600 }}
          >
            Testimoni Klien
          </div>
          <h2
            className="text-white mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            Apa Kata Klien Kami
          </h2>
          <p
            className="text-slate-400 max-w-xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.0625rem", lineHeight: 1.7 }}
          >
            Lebih dari 300 bisnis telah mempercayakan website mereka kepada kami.
          </p>
        </motion.div>

        {/* Desktop: all cards */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((tm, i) => (
            <motion.div
              key={tm.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors"
            >
              <Quote size={24} className="text-[#2563EB] mb-3" />
              <p
                className="text-slate-300 mb-5"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 1.7 }}
              >
                "{tm.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: tm.color, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.875rem", color: "#fff" }}
                >
                  {tm.avatar}
                </div>
                <div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.9375rem", color: "#fff" }}>
                    {tm.name}
                  </div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", color: "#94A3B8" }}>
                    {tm.business}
                  </div>
                </div>
              </div>
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: tm.rating }).map((_, j) => (
                  <span key={j} className="text-[#F59E0B]" style={{ fontSize: "0.875rem" }}>★</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden">
          <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                <Quote size={24} className="text-[#2563EB] mb-3" />
                <p
                  className="text-slate-300 mb-5"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", lineHeight: 1.7 }}
                >
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: t.color, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.875rem", color: "#fff" }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.9375rem", color: "#fff" }}>{t.name}</div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", color: "#94A3B8" }}>{t.business}</div>
                  </div>
                </div>
                <div className="mt-2 flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j} className="text-[#F59E0B]" style={{ fontSize: "0.875rem" }}>★</span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-5">
            <button onClick={prev} aria-label="Testimoni sebelumnya" className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer">
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Lihat testimoni ${i + 1}`}
                  className="h-2 rounded-full transition-all cursor-pointer border-none"
                  style={{ width: i === current ? "20px" : "8px", background: i === current ? "#2563EB" : "rgba(255,255,255,0.3)" }}
                />
              ))}
            </div>
            <button onClick={next} aria-label="Testimoni selanjutnya" className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
