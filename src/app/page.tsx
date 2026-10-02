"use client";

import { useState, useRef, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
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
  ShieldCheck,
  Award,
  CheckCircle2,
  Phone,
  Mail,
  Menu,
  X
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  { title: "Yeminli Tercüme", icon: FileSignature },
  { title: "Noter Onaylı Tercüme", icon: Stamp },
  { title: "Vize Danışmanlık", icon: Globe },
  { title: "Randevu İşlemleri", icon: CalendarCheck },
  { title: "Vize Evrak Hazırlığı", icon: FolderOpen },
  { title: "Uçak ve Otel Rezerv.", icon: Plane },
  { title: "Süreçlerin Takibi", icon: Clock },
  { title: "Profesyonel Çeviri", icon: Languages },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

function ContactDropdown({ children, isHeader = false }: { children: React.ReactNode, isHeader?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`relative ${isHeader ? 'inline-block' : 'w-full sm:w-auto inline-block'}`} ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer w-full">
        {children}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`absolute ${isHeader ? 'right-0' : 'left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0'} mt-3 w-[calc(100vw-3rem)] max-w-[320px] sm:w-72 bg-[#151e32] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-[100]`}
          >
            <div className="p-4 space-y-4">
              <div>
                <div className="text-xs font-semibold text-brand-slate uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Phone className="w-3 h-3" /> Ara
                </div>
                <div className="flex flex-col gap-1.5">
                  <a href="tel:+905435136713" className="text-sm font-medium text-white hover:text-brand-accent transition-colors py-2 px-3 rounded-xl hover:bg-white/5 active:bg-white/10">+90 543 513 67 13</a>
                  <a href="tel:+905426961732" className="text-sm font-medium text-white hover:text-brand-accent transition-colors py-2 px-3 rounded-xl hover:bg-white/5 active:bg-white/10">+90 542 696 17 32</a>
                </div>
              </div>
              
              <div className="h-px bg-white/10" />

              <div>
                <div className="text-xs font-semibold text-[#25D366] uppercase tracking-wider mb-2 flex items-center gap-2">
                  <MessageCircle className="w-3 h-3" /> Whatsapp
                </div>
                <div className="flex flex-col gap-1.5">
                  <a href="https://wa.me/905435136713" target="_blank" className="text-sm font-medium text-white hover:text-[#25D366] transition-colors py-2 px-3 rounded-xl hover:bg-white/5 active:bg-white/10">+90 543 513 67 13</a>
                  <a href="https://wa.me/905426961732" target="_blank" className="text-sm font-medium text-white hover:text-[#25D366] transition-colors py-2 px-3 rounded-xl hover:bg-white/5 active:bg-white/10">+90 542 696 17 32</a>
                </div>
              </div>

              <div className="h-px bg-white/10" />

              <div>
                <div className="text-xs font-semibold text-brand-slate uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Mail className="w-3 h-3" /> E-posta Gönder
                </div>
                <a href="mailto:huseyinyakin.13@gmail.com" className="text-sm font-medium text-white hover:text-brand-accent transition-colors py-2 px-3 rounded-xl hover:bg-white/5 active:bg-white/10 block truncate">
                  huseyinyakin.13@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* STICKY HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#0b1120]/80 backdrop-blur-md border-b border-white/5 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group" aria-label="Ana Sayfa">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden shadow-lg shadow-white/5 transition-transform duration-300 group-hover:scale-105">
              <Image src="/logo.png" alt="Ortak Tercüme Logo" fill className="object-cover" />
            </div>
            <span className="font-bold text-base sm:text-lg md:text-xl text-white tracking-tight">
              Ortak Tercüme
            </span>
          </Link>
          <nav aria-label="Ana Menü">
            <ul className="flex items-center gap-3 sm:gap-4">
              <li>
                <button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="hidden md:block text-sm font-medium text-brand-muted hover:text-white transition-colors"
                >
                  Hizmetlerimiz
                </button>
              </li>
              <li>
                <ContactDropdown isHeader>
                  <div className="inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white bg-brand-accent hover:bg-brand-accent-hover rounded-full transition-all shadow-[0_0_15px_rgba(56,189,248,0.3)] hover:shadow-[0_0_25px_rgba(56,189,248,0.5)]">
                    <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                    İletişime Geç
                  </div>
                </ContactDropdown>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="min-h-screen pt-16 sm:pt-20">
        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* VIDEO BACKGROUND */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-30 sm:opacity-20"
            >
              <source src="/background.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-[#0b1120]/80 via-[#0b1120]/60 to-[#0b1120]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 w-full">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
              {/* LEFT COLUMN: Copy & CTAs */}
              <motion.article
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-6 sm:space-y-8 text-center lg:text-left"
              >
                <motion.div variants={fadeInUp} className="inline-block">
                  <span className="px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-bold tracking-wider uppercase rounded-full bg-brand-accent/10 text-brand-accent border border-brand-accent/20">
                    Güvenilir & Şeffaf Süreç Yönetimi
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15]"
                >
                  Ortak Tercüme ve <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-400">
                    Vize Danışmanlık
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-base sm:text-lg md:text-xl text-brand-muted max-w-lg mx-auto lg:mx-0 leading-relaxed"
                >
                  16 yıllık sektörel tecrübemiz ve şeffaflık ilkemizle; yurt dışı aile birleşimi, tercüme ve vize danışmanlık süreçlerinizde profesyonel rehberlik sunuyoruz. Amacımız, karmaşık yasal prosedürleri sizin için anlaşılır hale getirmek.
                </motion.p>

                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 w-full justify-center lg:justify-start">
                  <ContactDropdown>
                    <div className="group relative w-full inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-semibold text-white transition-all duration-300 bg-gradient-to-r from-brand-accent to-blue-600 rounded-xl sm:rounded-2xl active:scale-95 sm:hover:scale-105 shadow-[0_5px_20px_rgba(56,189,248,0.3)]">
                      Hemen İletişime Geçin
                      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform sm:group-hover:-rotate-12" />
                    </div>
                  </ContactDropdown>
                  <Link
                    href="https://maps.app.goo.gl/PAGrYNVDjLYAd2tbA"
                    target="_blank"
                    className="group w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-semibold text-white transition-all duration-300 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl active:bg-white/10 sm:hover:bg-white/10 backdrop-blur-md sm:hover:border-white/20"
                  >
                    Yol Tarifi Al
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 ml-2 text-brand-slate sm:group-hover:text-white transition-colors" />
                  </Link>
                </motion.div>
              </motion.article>

              {/* RIGHT COLUMN: Logo & Badges Composition */}
              <motion.aside
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="relative hidden lg:flex items-center justify-center"
              >
                <div className="relative w-full max-w-md aspect-square rounded-[3rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-xl shadow-2xl flex items-center justify-center p-8">
                  <div className="absolute inset-0 rounded-[3rem] bg-brand-accent/5 blur-3xl -z-10" />
                  
                  <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/10 bg-[#0b1120]">
                    <Image src="/logo.png" alt="Ortak Tercüme Logo Büyük" fill className="object-cover" priority />
                  </div>

                  {/* Trust Badges Floating */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute top-12 -left-8 bg-[#151e32]/90 backdrop-blur-md border border-white/10 px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3"
                  >
                    <div className="bg-brand-accent/20 p-2 rounded-lg text-brand-accent">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-sm">16+ Yıl Tecrübe</span>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-16 -right-4 bg-[#151e32]/90 backdrop-blur-md border border-white/10 px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3"
                  >
                    <div className="bg-green-500/20 p-2 rounded-lg text-green-400">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-sm">Vize Danışmanlık</span>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 2 }}
                    className="absolute -bottom-6 left-12 bg-[#151e32]/90 backdrop-blur-md border border-white/10 px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3"
                  >
                    <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-sm">Noter Onaylı Çeviri</span>
                  </motion.div>
                </div>
              </motion.aside>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="px-4 sm:px-6 py-20 sm:py-32 bg-[#0b1120] relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="mb-12 sm:mb-20"
            >
              <div className="text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white tracking-tight">
                  Hizmetlerimiz
                </h2>
                <p className="text-base sm:text-lg text-brand-muted max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 px-2">
                  Tüm yurt dışı ve resmi işlemlerinizde profesyonel destek sağlıyoruz. İhtiyacınıza yönelik sunduğumuz çözümler:
                </p>
              </div>

              <div className="bg-[#151e32]/50 border border-white/10 p-5 sm:p-8 rounded-2xl sm:rounded-3xl max-w-4xl mx-auto backdrop-blur-sm shadow-xl">
                <h4 className="text-lg sm:text-xl font-bold text-brand-accent mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                  <div className="p-1.5 sm:p-2 bg-brand-accent/10 rounded-lg">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-brand-accent" />
                  </div>
                  Şeffaf & Birebir Süreç Yönetimi
                </h4>
                <p className="text-brand-muted leading-relaxed text-[13px] sm:text-sm md:text-base">
                  Ofisimizde hiçbir bot, otomatik yazılım veya aracı yazılım kullanılmaz. Başvuru, çeviri ve randevu süreçlerinizin tamamı uzman ekibimiz tarafından bizzat yürütülür ve adım adım manuel olarak takip edilir. Tüm evraklarınızın eksiksiz ve en güncel konsolosluk mevzuatına uygun hazırlanmasını sağlarız. Gerçek dışı, yanıltıcı veya imkansız vaatlerde bulunmaz; yalnızca şeffaf, güvenilir ve profesyonel rehberlik sunarız.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6"
            >
              {services.map((service, idx) => (
                <motion.article
                  key={idx}
                  variants={fadeInUp}
                  className="group relative p-5 sm:p-8 bg-[#151e32]/50 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-white/5 transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 hover:bg-[#151e32] hover:border-brand-accent/30 hover:shadow-[0_15px_40px_rgba(56,189,248,0.1)] overflow-hidden flex sm:block items-center gap-4 sm:gap-0"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 w-full flex sm:block items-center gap-4 sm:gap-0">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 shrink-0 flex items-center justify-center rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 sm:mb-6 text-brand-slate group-hover:text-brand-accent sm:group-hover:scale-110 transition-all duration-300 shadow-inner">
                      <service.icon className="w-5 h-5 sm:w-7 sm:h-7" />
                    </div>
                    <h3 className="text-base sm:text-xl font-semibold text-white/90 group-hover:text-white transition-colors leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CONTACT & LOCATION SECTION */}
        <section className="px-4 sm:px-6 py-20 sm:py-32 bg-[#080d18] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] sm:w-[800px] sm:h-[800px] bg-brand-accent/5 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3" />

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-10 sm:mb-16 text-center lg:text-left"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white tracking-tight">İletişim & Konum</h2>
              <p className="text-base sm:text-lg text-brand-muted max-w-2xl mx-auto lg:mx-0">
                Bizi ofisimizde ziyaret edebilir veya WhatsApp hatlarımız üzerinden anında destek alabilirsiniz.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20">
              {/* Info Column */}
              <motion.aside
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-6 sm:space-y-8"
              >
                <motion.div variants={fadeInUp} className="bg-[#151e32]/80 backdrop-blur-xl p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/5 shadow-2xl">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-5 sm:mb-6">Ofis Adresimiz</h3>
                  <div className="flex items-start space-x-4 sm:space-x-5 text-brand-muted mb-6 sm:mb-8">
                    <div className="p-3 sm:p-4 bg-white/5 rounded-xl sm:rounded-2xl text-brand-accent border border-white/10 shrink-0">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <p className="text-sm sm:text-lg leading-relaxed text-white/90">
                        Yozgat/Sorgun - Yeşilöz Mah.<br />
                        Yılmaz Kılıçaslan Caddesi<br />
                        Bina No: 12 Kat: 2 No: 1
                      </p>
                    </div>
                  </div>

                  <Link
                    href="https://maps.app.goo.gl/PAGrYNVDjLYAd2tbA"
                    target="_blank"
                    className="group flex items-center justify-center w-full px-5 sm:px-6 py-3.5 sm:py-4 bg-brand-accent text-white font-semibold text-sm sm:text-base rounded-xl sm:rounded-2xl hover:bg-brand-accent-hover transition-all duration-300 shadow-[0_5px_20px_rgba(56,189,248,0.2)] hover:shadow-[0_10px_30px_rgba(56,189,248,0.4)]"
                  >
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 group-hover:animate-bounce" />
                    Google Haritalar'da Aç / Yol Tarifi Al
                  </Link>
                </motion.div>

                <motion.div variants={fadeInUp} className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 pl-1 sm:pl-2">Hızlı İletişim Hatları</h3>
                  
                  <Link
                    href="https://wa.me/905435136713"
                    target="_blank"
                    className="flex items-center justify-between p-4 sm:p-5 bg-[#151e32]/50 backdrop-blur-md border border-white/5 rounded-2xl hover:border-[#25D366]/50 hover:bg-[#25D366]/5 transition-all duration-300 group active:scale-[0.98]"
                    aria-label="WhatsApp İletişim 1"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] mr-4 sm:mr-5 relative shrink-0">
                        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                        <div className="absolute inset-0 rounded-xl sm:rounded-2xl animate-ping bg-[#25D366]/20" />
                      </div>
                      <div>
                        <span className="block font-bold text-sm sm:text-base text-white group-hover:text-[#25D366] transition-colors">Whatsapp İletişim</span>
                        <span className="text-xs sm:text-sm text-brand-muted">+90 543 513 67 13</span>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-brand-slate group-hover:text-[#25D366] transition-transform group-hover:translate-x-1" />
                  </Link>
                  
                  <Link
                    href="https://wa.me/905426961732"
                    target="_blank"
                    className="flex items-center justify-between p-4 sm:p-5 bg-[#151e32]/50 backdrop-blur-md border border-white/5 rounded-2xl hover:border-[#25D366]/50 hover:bg-[#25D366]/5 transition-all duration-300 group active:scale-[0.98]"
                    aria-label="WhatsApp İletişim 2"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] mr-4 sm:mr-5 relative shrink-0">
                        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                        <div className="absolute inset-0 rounded-xl sm:rounded-2xl animate-ping bg-[#25D366]/20" />
                      </div>
                      <div>
                        <span className="block font-bold text-sm sm:text-base text-white group-hover:text-[#25D366] transition-colors">Whatsapp İletişim</span>
                        <span className="text-xs sm:text-sm text-brand-muted">+90 542 696 17 32</span>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-brand-slate group-hover:text-[#25D366] transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </motion.aside>

              {/* Map Column */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full h-full min-h-[300px] lg:min-h-[400px] relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#151e32]"
              >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3064.8670257287154!2d35.178666369679426!3d39.809974471897135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x407fd3b233228927%3A0xb556d331587f07be!2zT3J0YWsgVGVyY8O8bWUgdmUgVml6ZSBEYW7EscWfbWFubMSxaw!5e0!3m2!1sen!2str!4v1790964221235!5m2!1sen!2str" 
                  className="absolute inset-0 w-full h-full grayscale-[20%] contrast-[1.1] opacity-90 sm:hover:grayscale-0 sm:hover:opacity-100 transition-all duration-500"
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Ortak Tercüme ve Vize Danışmanlık Konumu"
                ></iframe>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="px-4 sm:px-6 py-12 sm:py-16 border-t border-white/5 bg-[#0b1120]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 sm:gap-12">
          <div className="space-y-5 sm:space-y-6 text-center lg:text-left">
            <Link href="/" className="inline-block">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden mb-3 sm:mb-4 mx-auto lg:mx-0 opacity-80 hover:opacity-100 transition-opacity">
                <Image src="/logo.png" alt="Ortak Tercüme Logo" fill className="object-cover" />
              </div>
            </Link>
            <p className="text-[13px] sm:text-sm text-brand-muted max-w-md mx-auto lg:mx-0 leading-relaxed">
              16 yıllık sektörel tecrübemizle yurt dışı aile birleşimi, tercüme ve vize danışmanlık süreçlerinizde güvenilir, şeffaf ve profesyonel rehberlik sunuyoruz.
            </p>
          </div>
          
          <div className="space-y-6 sm:space-y-8 text-[13px] sm:text-sm text-brand-muted/80 text-center lg:text-right">
            <div className="bg-white/5 p-4 rounded-xl lg:bg-transparent lg:p-0">
              <strong className="text-white/90 block mb-1.5 sm:mb-2 font-medium">Kişisel Verilerin Korunması:</strong>
              <p>Tarafımızla paylaşılan tüm bilgi ve evraklar, en üst düzey güvenlik standartlarıyla korunmakta olup, yasal zorunluluklar dışında hiçbir üçüncü şahısla paylaşılmaz.</p>
            </div>
            <div className="bg-white/5 p-4 rounded-xl lg:bg-transparent lg:p-0">
              <strong className="text-white/90 block mb-1.5 sm:mb-2 font-medium">Bilgilendirme Beyanı:</strong>
              <p>Bu web sitesi, süreçler hakkında bilgi verme amacıyla hazırlanmış olup bir reklam aracı değildir. Firmamız hiçbir başvuru için &quot;kesin vize alma&quot; garantisi sunmaz. Hizmetlerimiz; konsoloslukların talep ettiği işlemlerin eksiksiz yapılması, evrakların doğru hazırlanması ve sürecin profesyonelce takip edilmesini kapsar. Vize onay kararı tamamen ilgili ülkenin resmi makamlarına aittir.</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-white/5 flex flex-col items-center justify-center text-[11px] sm:text-xs text-brand-slate text-center">
          <p>© {new Date().getFullYear()} Ortak Tercüme ve Vize Danışmanlık. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </>
  );
}
