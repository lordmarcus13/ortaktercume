"use client";

import { motion, Variants } from "framer-motion";
import {
  FileSignature,
  Stamp,
  Globe,
  CalendarCheck,
  FolderOpen,
  Plane,
  Clock,
  Languages,
  MessageCircle,
  MapPin,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Yeminli Tercüme (Çeviri)",
    icon: FileSignature,
  },
  {
    title: "Noter Onaylı Tercüme (Çeviri)",
    icon: Stamp,
  },
  {
    title: "Vize Danışmanlık",
    icon: Globe,
  },
  {
    title: "Randevu İşlemleri",
    icon: CalendarCheck,
  },
  {
    title: "Vize Evraklarının Hazırlanması",
    icon: FolderOpen,
  },
  {
    title: "Uçak ve Otel Rezervasyonu",
    icon: Plane,
  },
  {
    title: "Süreçlerin Takibi",
    icon: Clock,
  },
  {
    title: "Evrakların Profesyonel Tercümesi",
    icon: Languages,
  },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#cdd6f4] selection:bg-[#cba6f7]/30 selection:text-[#cba6f7]">
      {/* BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#cba6f7]/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#74c7ec]/5 blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-24 pb-12 overflow-hidden text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto space-y-8"
          >
            <motion.div variants={fadeInUp} className="inline-block mb-2">
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-[#1e1e2e] border border-[#313244] text-[#a6adc8]">
                Güvenilir & Şeffaf Süreç Yönetimi
              </span>
            </motion.div>
            
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#cba6f7] to-[#74c7ec]"
            >
              Ortak Tercüme ve Vize Danışmanlık
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-[#a6adc8] max-w-2xl mx-auto leading-relaxed"
            >
              16 yıllık sektörel tecrübemiz ve şeffaflık ilkemizle; yurt dışı aile birleşimi, tercüme ve vize danışmanlık süreçlerinizde profesyonel rehberlik sunuyoruz. Amacımız, karmaşık yasal prosedürleri sizin için anlaşılır hale getirmek ve sürecin her aşamasında güvenilir, şeffaf bir destek sağlamaktır.
            </motion.p>
            
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
            >
              <Link
                href="https://wa.me/905426961732"
                target="_blank"
                className="group relative inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-[#0d1117] transition-all duration-300 bg-gradient-to-r from-[#cba6f7] to-[#74c7ec] rounded-xl hover:scale-105 hover:shadow-[0_0_20px_rgba(203,166,247,0.4)]"
              >
                Hemen İletişime Geçin
                <MessageCircle className="w-4 h-4 ml-2 transition-transform group-hover:rotate-12" />
              </Link>
              
              <button
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                className="group inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-[#cdd6f4] transition-all duration-300 bg-[#1e1e2e] border border-[#313244] rounded-xl hover:bg-[#313244] hover:text-[#cba6f7]"
              >
                Hizmetlerimizi İnceleyin
                <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="px-6 py-24 bg-[#181825]/50 border-y border-[#313244]">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Hizmetlerimiz</h2>
              <p className="text-[#a6adc8] max-w-xl mx-auto">
                Tüm yurt dışı ve resmi işlemlerinizde yanınızdayız. Size özel sunduğumuz profesyonel çözümlerimiz:
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="group relative p-6 bg-[#1e1e2e]/80 backdrop-blur-sm rounded-2xl border border-[#313244] transition-all duration-300 hover:-translate-y-1 hover:border-[#cba6f7]/50 hover:shadow-[0_8px_30px_rgba(203,166,247,0.1)]"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0d1117] border border-[#313244] mb-4 text-[#74c7ec] group-hover:text-[#cba6f7] group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#cdd6f4] group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="px-6 py-24">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="p-8 md:p-12 bg-[#1e1e2e] rounded-3xl border border-[#313244] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#cba6f7]/5 rounded-full blur-[80px] pointer-events-none" />
              
              <div className="grid md:grid-cols-2 gap-12 relative z-10">
                <div>
                  <h2 className="text-3xl font-bold mb-6">İletişim</h2>
                  <div className="flex items-start space-x-4 text-[#a6adc8]">
                    <div className="p-3 bg-[#0d1117] rounded-xl text-[#74c7ec]">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">Adresimiz</h4>
                      <p className="leading-relaxed">
                        Yozgat/Sorgun - Yeşilöz Mah.<br />
                        Yılmaz Kılıçaslan Caddesi<br />
                        Bina No: 12 Kat: 2 No: 1
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 flex flex-col justify-center">
                  <Link
                    href="https://wa.me/905426961732"
                    target="_blank"
                    className="flex items-center justify-between p-4 bg-[#0d1117] border border-[#313244] rounded-xl hover:border-[#25D366]/50 hover:bg-[#25D366]/5 transition-all duration-300 group"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] mr-4 relative">
                        <MessageCircle className="w-5 h-5" />
                        <div className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/20" />
                      </div>
                      <span className="font-medium text-[#cdd6f4] group-hover:text-white">WhatsApp Destek Hattı 1</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-[#a6adc8] group-hover:text-[#25D366] transition-transform group-hover:translate-x-1" />
                  </Link>
                  
                  <Link
                    href="https://wa.me/905435136713"
                    target="_blank"
                    className="flex items-center justify-between p-4 bg-[#0d1117] border border-[#313244] rounded-xl hover:border-[#25D366]/50 hover:bg-[#25D366]/5 transition-all duration-300 group"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] mr-4 relative">
                        <MessageCircle className="w-5 h-5" />
                        <div className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/20" />
                      </div>
                      <span className="font-medium text-[#cdd6f4] group-hover:text-white">WhatsApp Destek Hattı 2</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-[#a6adc8] group-hover:text-[#25D366] transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="px-6 py-12 border-t border-[#313244] bg-[#0d1117]">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="space-y-6 text-[13px] text-[#a6adc8] max-w-4xl">
              <div>
                <strong className="text-[#cdd6f4] block mb-1">Kişisel Verilerin Korunması:</strong>
                Tarafımızla paylaşılan tüm bilgi ve evraklar, en üst düzey güvenlik standartlarıyla korunmakta olup, yasal zorunluluklar dışında hiçbir üçüncü şahısla paylaşılmaz.
              </div>
              <div>
                <strong className="text-[#cdd6f4] block mb-1">Bilgilendirme Beyanı:</strong>
                Bu web sitesi, süreçler hakkında bilgi verme amacıyla hazırlanmış olup bir reklam aracı değildir. Firmamız hiçbir başvuru için &quot;kesin vize alma&quot; garantisi sunmaz. Hizmetlerimiz; konsoloslukların talep ettiği işlemlerin eksiksiz yapılması, evrakların doğru hazırlanması ve sürecin profesyonelce takip edilmesini kapsar. Vize onay kararı tamamen ilgili ülkenin resmi makamlarına aittir.
              </div>
            </div>
            
            <div className="pt-8 border-t border-[#313244]/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#a6adc8]/70">
              <p>© {new Date().getFullYear()} Ortak Tercüme ve Vize Danışmanlık. Tüm hakları saklıdır.</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
