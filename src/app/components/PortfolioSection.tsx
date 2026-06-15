import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink } from "lucide-react";

const categories = ["Semua", "Kuliner & F&B", "Fashion & Lifestyle", "Jasa & Konsultan", "Toko Online"];

const portfolioItems = [
  {
    name: "Dapur Ibu Sari",
    category: "Kuliner & F&B",
    desc: "Website katalog menu dan pemesanan katering rumahan di Jakarta Selatan.",
    paket: "Growth",
    result: "Pesanan naik 40% dalam 2 bulan pertama",
    image: "https://images.unsplash.com/photo-1539755530862-00f623c00f52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    color: "#F59E0B",
  },
  {
    name: "Butik Aurelia",
    category: "Fashion & Lifestyle",
    desc: "Toko online busana muslim dengan katalog produk dan integrasi WhatsApp order.",
    paket: "Growth",
    result: "200+ pengunjung organik per bulan",
    image: "https://images.unsplash.com/photo-1777628505283-61c45a698cd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    color: "#EC4899",
  },
  {
    name: "CV Maju Bersama Teknik",
    category: "Jasa & Konsultan",
    desc: "Website company profile untuk perusahaan jasa teknik dan konstruksi.",
    paket: "Pro",
    result: "Mendapatkan 3 klien korporat baru dalam 1 bulan",
    image: "https://images.unsplash.com/photo-1519222970733-f546218fa6d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    color: "#2563EB",
  },
  {
    name: "Snack Kriuk Nusantara",
    category: "Toko Online",
    desc: "Website toko camilan dengan halaman produk, cerita brand, dan form reseller.",
    paket: "Starter",
    result: "Jaringan reseller tumbuh 2x lebih cepat",
    image: "https://images.unsplash.com/photo-1708746333890-8e775f97f0a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    color: "#10B981",
  },
];

const paketColors: Record<string, string> = {
  Starter: "#10B981",
  Growth: "#2563EB",
  Pro: "#7C3AED",
};

export function PortfolioSection() {
  const [active, setActive] = useState("Semua");

  const filtered =
    active === "Semua"
      ? portfolioItems
      : portfolioItems.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div
            className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-600 mb-4"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", fontWeight: 600 }}
          >
            Portfolio
          </div>
          <h2
            className="text-[#1E293B] mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            Website yang Pernah Kami Bangun
          </h2>
          <p
            className="text-[#64748B] max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.0625rem", lineHeight: 1.7 }}
          >
            Setiap website kami bangun dengan tujuan nyata: meningkatkan pelanggan dan kepercayaan bisnis.
          </p>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="px-4 py-2 rounded-full transition-all cursor-pointer border"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.875rem",
                fontWeight: 500,
                background: active === cat ? "#2563EB" : "#fff",
                color: active === cat ? "#fff" : "#475569",
                borderColor: active === cat ? "#2563EB" : "#e2e8f0",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center">
                      <ExternalLink size={14} className="text-[#1E293B]" />
                    </div>
                  </div>
                  <div
                    className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-white"
                    style={{ background: paketColors[item.paket], fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 600 }}
                  >
                    Paket {item.paket}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div
                    className="mb-0.5"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: item.color === "#F59E0B" ? "#B45309" : item.color === "#EC4899" ? "#BE185D" : item.color === "#10B981" ? "#047857" : item.color, fontWeight: 600 }}
                  >
                    {item.category}
                  </div>
                  <h3
                    className="text-[#1E293B] mb-1.5"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1rem" }}
                  >
                    {item.name}
                  </h3>
                  <p
                    className="text-[#64748B] mb-3"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", lineHeight: 1.6 }}
                  >
                    {item.desc}
                  </p>
                  <div
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-50"
                  >
                    <span className="text-[#10B981]">📈</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", color: "#047857", fontWeight: 600 }}>
                      {item.result}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
