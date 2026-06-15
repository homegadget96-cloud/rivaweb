import { Globe, Instagram, Linkedin } from "lucide-react";

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export function Footer() {
  return (
    <footer style={{ background: "#0F172A" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#2563EB] flex items-center justify-center">
                <Globe size={18} className="text-white" />
              </div>
              <span
                className="text-white"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.125rem" }}
              >
                Riva<span className="text-[#60A5FA]">Web</span>
              </span>
            </div>
            <p
              className="text-slate-400 mb-5"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 1.7 }}
            >
              Website profesional untuk UMKM Indonesia. Cepat, mobile-friendly, dan siap bantu bisnis Anda berkembang.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#2563EB] transition-colors flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram size={16} className="text-white" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#2563EB] transition-colors flex items-center justify-center"
                aria-label="TikTok"
              >
                <span className="text-white" style={{ fontSize: "0.875rem", fontWeight: 700 }}>TK</span>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#2563EB] transition-colors flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} className="text-white" />
              </a>
            </div>
          </div>

          {/* Layanan */}
          <div>
            <div
              className="text-white mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.9375rem" }}
            >
              Layanan
            </div>
            <ul className="space-y-2.5">
              {["Landing Page", "Website Toko Online", "Website Bisnis Profesional", "Maintenance & Update", "Konsultasi Gratis"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo("#layanan")}
                    className="text-slate-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer text-left p-0"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem" }}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Perusahaan */}
          <div>
            <div
              className="text-white mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.9375rem" }}
            >
              Perusahaan
            </div>
            <ul className="space-y-2.5">
              {[
                { label: "Tentang Kami", href: "#tentang" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "Blog & Tips Digital", href: "#" },
                { label: "Testimoni Klien", href: "#" },
                { label: "Karir", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => item.href !== "#" && scrollTo(item.href)}
                    className="text-slate-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer text-left p-0"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem" }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <div
              className="text-white mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.9375rem" }}
            >
              Kontak
            </div>
            <ul className="space-y-2.5">
              {[
                "📧 hello@rivawebbuilder.id",
                "📱 +62 8xx-xxxx-xxxx",
                "📍 Jakarta, Indonesia",
                "⏰ Senin–Jumat, 09.00–18.00 WIB",
              ].map((c) => (
                <li
                  key={c}
                  className="text-slate-400"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem" }}
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span
            className="text-slate-500"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem" }}
          >
            © 2025 Riva Web Builder. Semua hak dilindungi.
          </span>
          <div className="flex gap-5">
              {["Kebijakan Privasi", "Syarat & Ketentuan"].map((l) => (
              <button
                key={l}
                className="text-slate-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer p-0"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem" }}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
