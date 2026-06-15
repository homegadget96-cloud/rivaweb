import { motion } from "motion/react";
import { Check } from "lucide-react";

const services = [
  {
    icon: "📄",
    title: "Landing Page",
    desc: "Halaman tunggal yang fokus mengkonversi pengunjung menjadi pelanggan. Cocok untuk promosi, produk baru, atau event.",
    features: ["1 Halaman Lengkap", "Mobile Responsive", "Form Kontak / WhatsApp CTA", "Waktu: 3 Hari Kerja"],
    color: "#2563EB",
    bgColor: "#EFF6FF",
  },
  {
    icon: "🛍️",
    title: "Website Toko Online",
    desc: "Website katalog produk lengkap dengan halaman detail, keranjang, dan integrasi WhatsApp order.",
    features: ["Hingga 5 Halaman", "Katalog Produk", "Integrasi WhatsApp Order", "SEO Basic", "Waktu: 5 Hari Kerja"],
    color: "#10B981",
    bgColor: "#F0FDF4",
  },
  {
    icon: "🏢",
    title: "Website Bisnis Profesional",
    desc: "Website multi-halaman untuk perusahaan, konsultan, atau brand yang ingin tampil serius dan terpercaya.",
    features: ["Halaman Tidak Terbatas", "Blog / Artikel", "Dashboard Admin", "Integrasi Payment Gateway", "Laporan Analitik", "Waktu: 7 Hari Kerja"],
    color: "#7C3AED",
    bgColor: "#F5F3FF",
  },
  {
    icon: "🔧",
    title: "Maintenance & Update",
    desc: "Kami jaga website Anda tetap cepat, aman, dan up-to-date setiap bulannya.",
    features: ["Update Konten Bulanan", "Backup Rutin", "Monitoring Performa", "Support via WhatsApp"],
    color: "#F59E0B",
    bgColor: "#FFFBEB",
  },
];

export function ServicesSection() {
  return (
    <section id="layanan" className="py-24" style={{ background: "#F8FAFC" }}>
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
            Layanan Kami
          </div>
          <h2
            className="text-[#1E293B] mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            Apa yang Kami Kerjakan untuk Anda
          </h2>
          <p
            className="text-[#64748B] max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.0625rem", lineHeight: 1.7 }}
          >
            Solusi website lengkap dari landing page sederhana hingga website bisnis profesional.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5"
                style={{ background: svc.bgColor }}
              >
                {svc.icon}
              </div>

              <h3
                className="text-[#1E293B] mb-2"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.0625rem" }}
              >
                {svc.title}
              </h3>

              <p
                className="text-[#64748B] mb-5 flex-1"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 1.65 }}
              >
                {svc.desc}
              </p>

              <ul className="space-y-2">
                {svc.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check size={15} className="mt-0.5 flex-shrink-0" style={{ color: svc.color }} />
                    <span
                      className="text-[#475569]"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem" }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
