import { motion } from "motion/react";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Starter",
    label: "Paling Terjangkau",
    price: "Rp 1.500.000",
    popular: false,
    features: [
      "Landing Page 1 Halaman",
      "Mobile-First Design",
      "Domain .com 1 Tahun",
      "Hosting 1 Tahun",
      "WhatsApp CTA Button",
      "Revisi 2x",
    ],
    color: "#2563EB",
    highlight: false,
  },
  {
    name: "Growth",
    label: "Paling Populer ⭐",
    price: "Rp 3.500.000",
    popular: true,
    features: [
      "5 Halaman Website",
      "Katalog Produk",
      "Mobile-First Design",
      "Domain .com 1 Tahun",
      "Hosting 1 Tahun",
      "SEO Basic (On-Page)",
      "WhatsApp Order Integration",
      "Google Maps Integration",
      "Revisi 3x",
    ],
    color: "#FFFFFF",
    highlight: true,
  },
  {
    name: "Pro",
    label: "Paling Lengkap",
    price: "Rp 7.000.000",
    popular: false,
    features: [
      "Halaman Tidak Terbatas",
      "Katalog Produk Lengkap",
      "Dashboard Admin",
      "Blog / Artikel",
      "SEO Advanced",
      "Integrasi Payment Gateway",
      "Laporan Analitik (Google Analytics)",
      "Koneksi Media Sosial",
      "Revisi Tidak Terbatas",
      "Support Prioritas 3 Bulan",
    ],
    color: "#7C3AED",
    highlight: false,
  },
];

export function PricingSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="harga" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Paket Harga
          </div>
          <h2
            className="text-[#1E293B] mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            Pilih Paket yang Sesuai Bisnis Anda
          </h2>
          <p
            className="text-[#64748B] max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.0625rem", lineHeight: 1.7 }}
          >
            Harga transparan, tanpa biaya tersembunyi. Semua paket sudah termasuk domain dan hosting 1 tahun.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch mb-10">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-7 flex flex-col ${
                pkg.highlight
                  ? "shadow-2xl scale-105 z-10"
                  : "shadow-sm border border-gray-100"
              }`}
              style={{
                background: pkg.highlight
                  ? "linear-gradient(135deg, #2563EB, #1d4ed8)"
                  : "white",
              }}
            >
              {pkg.popular && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#F59E0B] text-white"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.8125rem" }}
                >
                  {pkg.label}
                </div>
              )}

              {!pkg.popular && (
                <div
                  className="inline-block px-3 py-1 rounded-full mb-4 w-fit"
                  style={{
                    background: pkg.highlight ? "rgba(255,255,255,0.2)" : "#F1F5F9",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    color: pkg.highlight ? "#fff" : "#475569",
                  }}
                >
                  {pkg.label}
                </div>
              )}
              {pkg.popular && <div className="mt-2" />}

              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.5rem",
                  color: pkg.highlight ? "#fff" : "#1E293B",
                  marginBottom: "0.25rem",
                }}
              >
                {pkg.name}
              </div>

              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "2rem",
                  color: pkg.highlight ? "#fff" : "#2563EB",
                  marginBottom: "1.5rem",
                }}
              >
                {pkg.price}
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: pkg.highlight ? "rgba(255,255,255,0.2)" : "#EFF6FF" }}
                    >
                      <Check size={12} style={{ color: pkg.highlight ? "#fff" : "#2563EB" }} />
                    </div>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.9rem",
                        color: pkg.highlight ? "rgba(255,255,255,0.9)" : "#475569",
                      }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => scrollTo("#kontak")}
                className="w-full py-3.5 rounded-xl transition-all cursor-pointer border-none"
                style={{
                  background: pkg.highlight ? "#fff" : "#2563EB",
                  color: pkg.highlight ? "#2563EB" : "#fff",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                }}
              >
                Pilih Paket Ini
              </button>
            </motion.div>
          ))}
        </div>

        {/* Add-on */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#FFFBEB] border-2 border-[#F59E0B] rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          <div className="text-4xl">🔧</div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.125rem", color: "#1E293B" }}>
                Add-On Maintenance
              </span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1.125rem", color: "#F59E0B" }}>
                Rp 300.000 / bulan
              </span>
            </div>
            <div className="flex flex-wrap gap-4">
              {["Update Konten (hingga 5x/bulan)", "Backup Rutin Mingguan", "Monitoring Uptime 24/7", "Support WhatsApp Hari Kerja"].map((f) => (
                <span key={f} className="flex items-center gap-1.5">
                  <Check size={14} className="text-[#F59E0B]" />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "#475569" }}>{f}</span>
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={() => scrollTo("#kontak")}
            className="px-5 py-2.5 rounded-xl bg-[#F59E0B] text-white hover:bg-amber-500 transition-colors cursor-pointer border-none flex-shrink-0"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.9375rem" }}
          >
            Tambahkan ke Paket
          </button>
        </motion.div>
      </div>
    </section>
  );
}
