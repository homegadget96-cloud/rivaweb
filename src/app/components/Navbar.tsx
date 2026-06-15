import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Layanan", href: "#layanan" },
  { label: "Paket Harga", href: "#harga" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Kontak", href: "#kontak" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#2563EB] flex items-center justify-center">
              <Globe size={18} className="text-white" />
            </div>
            <span
              className="text-[#1E293B]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.125rem" }}
            >
              Riva<span className="text-[#2563EB]">Web</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="text-[#1E293B] hover:text-[#2563EB] transition-colors cursor-pointer bg-transparent border-none"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", fontWeight: 500 }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleLinkClick("#kontak")}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#2563EB] text-white hover:bg-[#1d4ed8] transition-colors cursor-pointer border-none"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.875rem", fontWeight: 600 }}
            >
              Konsultasi Gratis →
            </button>
            <button
              aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
              className="md:hidden p-2 rounded-lg text-[#1E293B] hover:bg-gray-100 border-none bg-transparent cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="text-left py-2.5 px-3 rounded-lg text-[#1E293B] hover:bg-blue-50 hover:text-[#2563EB] transition-colors cursor-pointer bg-transparent border-none w-full"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", fontWeight: 500 }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleLinkClick("#kontak")}
              className="mt-2 w-full py-2.5 px-3 rounded-lg bg-[#2563EB] text-white hover:bg-[#1d4ed8] transition-colors cursor-pointer border-none"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.9375rem", fontWeight: 600 }}
            >
              Konsultasi Gratis →
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
