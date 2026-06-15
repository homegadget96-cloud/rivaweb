import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

const steps = [
  {
    icon: "💬",
    step: "01",
    title: "Konsultasi Gratis",
    desc: "Anda cerita, kami dengarkan. Kami pahami bisnis, target pelanggan, dan kebutuhan website Anda. Gratis, tanpa komitmen.",
  },
  {
    icon: "📋",
    step: "02",
    title: "Brief & Persetujuan",
    desc: "Kami kirimkan proposal, timeline, dan kontrak digital. Proses cepat, transparan, dan mudah dipahami.",
  },
  {
    icon: "💻",
    step: "03",
    title: "Desain & Development",
    desc: "Tim kami mulai membangun website sesuai brief. Anda bisa pantau progress dan berikan masukan kapan saja.",
  },
  {
    icon: "✅",
    step: "04",
    title: "Revisi & Finalisasi",
    desc: "Kami kirimkan preview untuk ditinjau. Revisi dilakukan sesuai paket hingga Anda puas.",
  },
  {
    icon: "🚀",
    step: "05",
    title: "Launch & Serah Terima",
    desc: "Website resmi tayang! Kami bantu setup domain, hosting, dan pastikan semua berjalan sempurna.",
  },
  {
    icon: "🛡️",
    step: "06",
    title: "Support Berkelanjutan",
    desc: "Kami tidak menghilang setelah selesai. Ada paket maintenance untuk menjaga website Anda selalu optimal.",
  },
];

function DesktopTimeline() {
  return (
    <div className="hidden lg:block relative">
      {/* Horizontal connecting line */}
      <div className="absolute top-16 left-[10%] right-[10%] h-0.5 bg-blue-200" />

      <div className="grid grid-cols-6 gap-4">
        {steps.map((step, i) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative flex flex-col items-center text-center"
          >
            {/* Circle with step number */}
            <div className="relative z-10 w-14 h-14 rounded-full bg-[#2563EB] text-white flex items-center justify-center mb-4 shadow-md">
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "0.875rem" }}>
                {step.step}
              </span>
            </div>

            <div className="text-3xl mb-3">{step.icon}</div>
            <h3
              className="text-[#1E293B] mb-2"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1rem" }}
            >
              {step.title}
            </h3>
            <p
              className="text-[#64748B]"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", lineHeight: 1.65 }}
            >
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function MobileTimeline() {
  return (
    <div className="lg:hidden">
      <div className="relative pl-10">
        {/* Vertical line */}
        <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-blue-200" />

        <div className="flex flex-col gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative"
            >
              {/* Circle on the line */}
              <div className="absolute -left-[27px] top-1 w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center z-10 shadow-sm">
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "0.75rem" }}>
                  {step.step}
                </span>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 ml-2">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{step.icon}</span>
                  <div>
                    <h3
                      className="text-[#1E293B] mb-1"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1rem" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-[#64748B]"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", lineHeight: 1.65 }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProcessSection() {
  return (
    <section className="py-24" style={{ background: "#F8FAFC" }}>
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
            Proses Kerja Kami
          </div>
          <h2
            className="text-[#1E293B] mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            Bagaimana Kami Bekerja?
          </h2>
          <p
            className="text-[#64748B] max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.0625rem", lineHeight: 1.7 }}
          >
            Proses yang transparan dan terstruktur dari awal hingga website Anda siap digunakan.
          </p>
        </motion.div>

        <DesktopTimeline />
        <MobileTimeline />
      </div>
    </section>
  );
}
