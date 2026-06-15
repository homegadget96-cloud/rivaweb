import { useState } from "react";
import { X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl w-72 overflow-hidden border border-gray-100"
          >
            {/* Header */}
            <div className="bg-[#25D366] px-4 py-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle size={20} className="text-white" />
              </div>
              <div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.9375rem", color: "#fff" }}>
                  Tim Riva Web Builder
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.85)" }}>
                  Biasanya membalas dalam menit
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="ml-auto bg-transparent border-none cursor-pointer p-1 text-white/80 hover:text-white"
              >
                <X size={16} />
              </button>
            </div>

            {/* Body */}
            <div className="p-4">
              <div className="bg-[#F0FDF4] rounded-xl p-3 mb-4">
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", color: "#1E293B", lineHeight: 1.6 }}>
                  Halo! 👋 Ada yang bisa kami bantu? Konsultasi website untuk bisnis Anda gratis!
                </p>
              </div>
              <a
                href="https://wa.me/628xxxxxxxxxx?text=Halo+Riva+Web+Builder%2C+saya+ingin+konsultasi+gratis+untuk+pembuatan+website+bisnis+saya."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#25D366] text-white no-underline hover:bg-green-500 transition-colors"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.9375rem" }}
              >
                <MessageCircle size={18} />
                Mulai Chat
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl flex items-center justify-center cursor-pointer border-none"
        style={{ boxShadow: "0 4px 20px rgba(37,211,102,0.4)" }}
        aria-label="Chat WhatsApp"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div key="wa" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Pulse ring */}
      {!open && (
        <span className="absolute top-0 right-0 w-14 h-14 rounded-full bg-[#25D366] opacity-30 animate-ping" />
      )}
    </div>
  );
}
