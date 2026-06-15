import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Berapa lama proses pembuatan website?",
    a: "Tergantung paket yang dipilih. Paket Starter selesai dalam 3 hari kerja, Paket Growth 5 hari kerja, dan Paket Pro 7 hari kerja. Waktu bisa lebih cepat jika bahan (teks, foto, logo) sudah siap dari awal.",
  },
  {
    q: "Apakah saya bisa minta revisi?",
    a: "Tentu! Paket Starter mendapat 2x revisi, Paket Growth 3x revisi, dan Paket Pro revisi tidak terbatas hingga Anda benar-benar puas dengan hasilnya.",
  },
  {
    q: "Apakah website akan tampil bagus di HP?",
    a: "100% ya! Semua website yang kami buat menggunakan pendekatan Mobile-First, artinya tampilan di smartphone adalah prioritas utama kami. Ini penting karena lebih dari 70% pengguna internet Indonesia browsing via HP.",
  },
  {
    q: "Apa yang saya butuhkan untuk memulai?",
    a: "Cukup konsultasi gratis dulu! Kami akan memandu Anda langkah demi langkah. Bahan dasar yang dibutuhkan: logo bisnis (jika ada), foto produk/bisnis, dan deskripsi singkat tentang bisnis Anda.",
  },
  {
    q: "Apakah domain dan hosting sudah termasuk?",
    a: "Ya! Semua paket sudah termasuk domain .com untuk 1 tahun dan hosting 1 tahun. Anda tidak perlu repot mengurus teknis ini sendiri.",
  },
  {
    q: "Bagaimana cara pembayaran?",
    a: "Pembayaran 50% di depan sebelum pengerjaan dimulai, dan 50% setelah website selesai dan Anda menyetujui hasilnya. Kami menerima transfer bank, GoPay, OVO, dan QRIS.",
  },
  {
    q: "Apakah saya bisa update konten sendiri setelah website jadi?",
    a: "Untuk Paket Pro, Anda akan mendapatkan akses Dashboard Admin untuk mengelola konten sendiri. Untuk paket lainnya, Anda bisa berlangganan layanan Maintenance untuk update konten rutin.",
  },
  {
    q: "Apakah website bisa ditemukan di Google?",
    a: "Kami menyertakan SEO Basic di Paket Growth dan SEO Advanced di Paket Pro. Ini termasuk optimasi judul halaman, deskripsi, kecepatan loading, dan struktur konten agar Google lebih mudah mengenali website Anda.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-gray-50 transition-colors cursor-pointer bg-white border-none"
      >
        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "1rem", color: "#1E293B" }}>
          {q}
        </span>
        <ChevronDown
          size={18}
          className="flex-shrink-0 text-[#2563EB] transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div
              className="px-6 py-4 bg-blue-50 border-t border-gray-200"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", color: "#475569", lineHeight: 1.7 }}
            >
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div
            className="inline-block px-3 py-1 rounded-full bg-blue-100 text-[#2563EB] mb-4"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", fontWeight: 600 }}
          >
            FAQ
          </div>
          <h2
            className="text-[#1E293B] mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            Ada Pertanyaan? Kami Jawab di Sini
          </h2>
          <p
            className="text-[#64748B]"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.0625rem", lineHeight: 1.7 }}
          >
            Pertanyaan yang paling sering ditanyakan oleh calon klien kami.
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <FAQItem q={faq.q} a={faq.a} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
