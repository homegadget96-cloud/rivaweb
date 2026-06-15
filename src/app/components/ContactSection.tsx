import { useState } from "react";
import { motion } from "motion/react";
import { Send, MessageCircle, CheckCircle } from "lucide-react";

const businessCategories = [
  "Kuliner & F&B",
  "Fashion & Lifestyle",
  "Jasa & Konsultan",
  "Toko Online",
  "Lainnya",
];

const packageOptions = [
  "Starter (Rp 1,5 jt)",
  "Growth (Rp 3,5 jt)",
  "Pro (Rp 7 jt)",
  "Belum Tahu",
];

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    nama: "",
    bisnis: "",
    whatsapp: "",
    email: "",
    kategori: "",
    paket: "",
    pesan: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="kontak" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div
            className="inline-block px-3 py-1 rounded-full bg-green-100 text-[#10B981] mb-4"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", fontWeight: 600 }}
          >
            Konsultasi Gratis
          </div>
          <h2
            className="text-[#1E293B] mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            Mulai Perjalanan Digital Anda Hari Ini
          </h2>
          <p
            className="text-[#64748B] max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.0625rem", lineHeight: 1.7 }}
          >
            Konsultasi pertama 100% gratis. Ceritakan bisnis Anda dan kami siap membantu.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-5">
                  <CheckCircle size={40} className="text-[#10B981]" />
                </div>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "#1E293B", marginBottom: "0.75rem" }}>
                  Terima Kasih!
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", color: "#64748B", lineHeight: 1.7, maxWidth: "400px" }}>
                  Pesan Anda sudah kami terima. Tim kami akan menghubungi Anda dalam 1×24 jam kerja. Siap-siap website impian Anda segera terwujud!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#F8FAFC] rounded-2xl p-7 shadow-sm">
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", fontWeight: 600, color: "#1E293B", display: "block", marginBottom: "0.4rem" }}>
                      Nama Lengkap
                    </label>
                    <input
                      name="nama"
                      value={form.nama}
                      onChange={handleChange}
                      required
                      placeholder="Nama Anda"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem" }}
                    />
                  </div>
                  <div>
                    <label style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", fontWeight: 600, color: "#1E293B", display: "block", marginBottom: "0.4rem" }}>
                      Nama Bisnis
                    </label>
                    <input
                      name="bisnis"
                      value={form.bisnis}
                      onChange={handleChange}
                      required
                      placeholder="Nama toko / perusahaan"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem" }}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", fontWeight: 600, color: "#1E293B", display: "block", marginBottom: "0.4rem" }}>
                      Nomor WhatsApp
                    </label>
                    <input
                      name="whatsapp"
                      value={form.whatsapp}
                      onChange={handleChange}
                      required
                      placeholder="08xx-xxxx-xxxx"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem" }}
                    />
                  </div>
                  <div>
                    <label style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", fontWeight: 600, color: "#1E293B", display: "block", marginBottom: "0.4rem" }}>
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="email@bisnis.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem" }}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="kategori" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", fontWeight: 600, color: "#1E293B", display: "block", marginBottom: "0.4rem" }}>
                      Kategori Bisnis
                    </label>
                    <select
                      id="kategori"
                      name="kategori"
                      value={form.kategori}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", color: form.kategori ? "#1E293B" : "#94A3B8" }}
                    >
                      <option value="" disabled>Pilih kategori</option>
                      {businessCategories.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="paket" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", fontWeight: 600, color: "#1E293B", display: "block", marginBottom: "0.4rem" }}>
                      Paket yang Diminati
                    </label>
                    <select
                      id="paket"
                      name="paket"
                      value={form.paket}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", color: form.paket ? "#1E293B" : "#94A3B8" }}
                    >
                      <option value="" disabled>Pilih paket</option>
                      {packageOptions.map((p) => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", fontWeight: 600, color: "#1E293B", display: "block", marginBottom: "0.4rem" }}>
                    Ceritakan Bisnis Anda
                  </label>
                  <textarea
                    name="pesan"
                    value={form.pesan}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Deskripsikan bisnis Anda dan apa yang Anda harapkan dari website..."
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all resize-none"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem" }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-white cursor-pointer border-none hover:opacity-90 transition-all"
                  style={{
                    background: "linear-gradient(135deg, #2563EB, #1d4ed8)",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    boxShadow: "0 4px 20px rgba(37,99,235,0.3)",
                  }}
                >
                  <Send size={18} />
                  Kirim & Mulai Konsultasi Gratis
                </button>
              </form>
            )}
          </motion.div>

          {/* Right panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* WhatsApp CTA */}
            <div className="bg-[#25D366] rounded-2xl p-6 text-white">
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.125rem", marginBottom: "0.5rem" }}>
                Lebih suka chat langsung?
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", opacity: 0.9, marginBottom: "1rem", lineHeight: 1.6 }}>
                Chat dengan tim kami sekarang via WhatsApp dan dapatkan respon cepat!
              </p>
              <a
                href="https://wa.me/628xxxxxxxxxx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white text-[#25D366] hover:bg-green-50 transition-colors no-underline"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1rem" }}
              >
                <MessageCircle size={20} />
                Chat via WhatsApp Sekarang
              </a>
            </div>

            {/* Contact info */}
            <div className="bg-[#F8FAFC] rounded-2xl p-6">
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#1E293B", marginBottom: "1rem" }}>
                Informasi Kontak
              </div>
              <div className="space-y-3">
                {[
                  { icon: "📧", label: "hello@rivawebbuilder.id" },
                  { icon: "📱", label: "+62 8xx-xxxx-xxxx" },
                  { icon: "📍", label: "Jakarta, Indonesia" },
                  { icon: "⏰", label: "Senin–Jumat, 09.00–18.00 WIB" },
                ].map((c) => (
                  <div key={c.label} className="flex items-center gap-3">
                    <span style={{ fontSize: "1.125rem" }}>{c.icon}</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", color: "#475569" }}>{c.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Promise card */}
            <div
              className="rounded-2xl p-6 text-white"
              style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED)" }}
            >
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem" }}>
                Janji Kami kepada Anda
              </div>
              {["Respons dalam 24 jam", "Konsultasi tanpa tekanan", "Harga sesuai budget UMKM", "Hasil yang melebihi ekspektasi"].map((p) => (
                <div key={p} className="flex items-center gap-2 mb-2">
                  <span className="text-green-300">✓</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", opacity: 0.9 }}>{p}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
