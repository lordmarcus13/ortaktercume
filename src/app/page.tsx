"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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
  ThumbsUp,
  Phone
} from "lucide-react";

const services = [
  { title: "Yeminli Tercüme", icon: FileSignature, desc: "Resmi makamlarca tanınan, yeminli tercüman onaylı profesyonel çeviri hizmetleri.", colSpan: "md:col-span-2 lg:col-span-1" },
  { title: "Noter Onaylı Çeviri", icon: Stamp, desc: "Tüm resmi evraklarınızın noter tasdik süreçlerine uygun kusursuz çevirisi.", colSpan: "md:col-span-1" },
  { title: "Vize Danışmanlık", icon: Globe, desc: "Karmaşık vize süreçlerinde uzman rehberlik ve eksiksiz dosya hazırlığı.", colSpan: "md:col-span-2 lg:col-span-2" },
  { title: "Randevu İşlemleri", icon: CalendarCheck, desc: "Konsolosluk ve aracı kurum randevularının hızla alınması.", colSpan: "md:col-span-1" },
  { title: "Evrak Hazırlığı", icon: FolderOpen, desc: "Ülke spesifikasyonlarına uygun vize evraklarının derlenmesi.", colSpan: "md:col-span-1" },
  { title: "Uçak ve Otel", icon: Plane, desc: "Vize başvurusu için gerekli tüm uçuş ve konaklama rezervasyonları.", colSpan: "md:col-span-2 lg:col-span-1" },
  { title: "Süreç Takibi", icon: Clock, desc: "Başvurudan sonuçlanmaya kadar tüm aşamaların titizlikle takip edilmesi.", colSpan: "md:col-span-1" },
  { title: "Profesyonel Çeviri", icon: Languages, desc: "Hukuki, ticari ve akademik metinlerin uzman terminolojiyle çevirisi.", colSpan: "md:col-span-1 lg:col-span-2" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function Home() {
  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-[#0a0f1d]/80 backdrop-blur-xl border-b border-slate-800 shadow-lg shadow-black/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 overflow-hidden rounded-xl bg-white/5 p-1 border border-slate-700/50 group-hover:border-blue-500/50 transition-colors">
              <Image src="/logo.png" alt="Ortak Tercüme Logo" fill className="object-contain p-1" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white tracking-tight leading-tight">Ortak Tercüme</span>
              <span className="text-xs text-blue-400 font-medium">Vize Danışmanlık</span>
            </div>
          </Link>
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-8">
            <Link href="#hizmetler" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Hizmetlerimiz</Link>
            <Link href="#iletisim" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">İletişim</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="https://wa.me/905426961732"
              target="_blank"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600/10 text-blue-400 border border-blue-500/30 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-300 text-sm font-medium shadow-[0_0_15px_rgba(37,99,235,0)] hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Hemen Arayın</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex flex-col pt-20">
        {/* HERO SECTION */}
        <section aria-labelledby="hero-heading" className="relative overflow-hidden bg-[#0a0f1d] min-h-[90vh] flex items-center">
          {/* Subtle Background Gradients */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[150px]" />
            <div className="absolute bottom-[0%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-600/10 blur-[150px]" />
          </div>

          <div className="max-w-7xl mx-auto px-6 py-20 w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
            {/* Left Column: Typography & CTA */}
            <motion.article 
              initial="hidden" animate="visible" variants={staggerContainer}
              className="flex flex-col gap-8 text-left"
            >
              <motion.div variants={fadeInUp}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-sm font-medium text-slate-300 backdrop-blur-sm">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  Güvenilir & Şeffaf Süreç Yönetimi
                </span>
              </motion.div>
              
              <motion.h1 
                id="hero-heading"
                variants={fadeInUp}
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
              >
                Geleceğe Giden Yolda <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                  Güvenilir Rehberiniz
                </span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-lg text-slate-400 max-w-xl leading-relaxed">
                16 yıllık sektörel tecrübemiz ve şeffaflık ilkemizle; yurt dışı aile birleşimi, tercüme ve vize danışmanlık süreçlerinizde profesyonel rehberlik sunuyoruz. Yasal prosedürleri sizin için kolaylaştırıyoruz.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="https://wa.me/905426961732"
                  target="_blank"
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-300 bg-blue-600 rounded-xl hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:-translate-y-1"
                >
                  WhatsApp'tan Ulaşın
                  <MessageCircle className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
                </Link>
                <Link
                  href="#iletisim"
                  className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-300 transition-all duration-300 bg-[#131b2f] border border-slate-700 rounded-xl hover:bg-slate-800 hover:text-white hover:-translate-y-1"
                >
                  Yol Tarifi Al
                  <MapPin className="w-5 h-5 ml-2 text-slate-400 group-hover:text-blue-400" />
                </Link>
              </motion.div>
            </motion.article>

            {/* Right Column: Visuals & Badges */}
            <motion.aside 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative hidden lg:flex justify-center items-center h-[500px]"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent rounded-full blur-3xl" />
              
              <div className="relative w-80 h-80 z-10 bg-[#131b2f]/50 backdrop-blur-2xl rounded-full border border-slate-700/50 flex items-center justify-center shadow-2xl shadow-blue-900/20">
                <Image src="/logo.png" alt="Ortak Tercüme Logo" width={240} height={240} className="object-contain drop-shadow-2xl" priority />
              </div>

              {/* Trust Badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 bg-[#1a233a] border border-slate-700 p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20"
              >
                <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400"><Award className="w-6 h-6" /></div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Sektörde</p>
                  <p className="text-sm font-bold text-white">16+ Yıl Tecrübe</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 left-0 bg-[#1a233a] border border-slate-700 p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20"
              >
                <div className="bg-emerald-500/20 p-2 rounded-lg text-emerald-400"><ThumbsUp className="w-6 h-6" /></div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Müşteri Memnuniyeti</p>
                  <p className="text-sm font-bold text-white">%100 Güvenilir</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ x: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-32 right-[-20px] bg-[#1a233a] border border-slate-700 p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20"
              >
                <div className="bg-indigo-500/20 p-2 rounded-lg text-indigo-400"><Stamp className="w-6 h-6" /></div>
                <div>
                  <p className="text-sm font-bold text-white">Noter Onaylı</p>
                  <p className="text-xs text-slate-400 font-medium">Resmi Çeviri</p>
                </div>
              </motion.div>
            </motion.aside>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="hizmetler" aria-labelledby="services-heading" className="px-6 py-32 bg-[#0d1425] border-y border-slate-800">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
              className="text-center mb-20"
            >
              <h2 id="services-heading" className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">Öne Çıkan Hizmetlerimiz</h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Tüm yurt dışı ve resmi işlemlerinizde yanınızdayız. Size özel sunduğumuz profesyonel ve eksiksiz çözümler:
              </p>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr"
            >
              {services.map((service, idx) => (
                <motion.article
                  key={idx}
                  variants={fadeInUp}
                  className={`group relative flex flex-col p-8 bg-[#131b2f] rounded-3xl border border-slate-800 transition-all duration-500 hover:-translate-y-2 hover:bg-[#1a233a] hover:border-blue-500/50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden ${service.colSpan}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#0a0f1d] border border-slate-700 mb-6 text-blue-400 group-hover:text-blue-300 group-hover:scale-110 group-hover:border-blue-500/50 transition-all duration-300 shadow-lg">
                    <service.icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight z-10">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed z-10 flex-grow">{service.desc}</p>
                  
                  <div className="mt-6 flex items-center text-sm font-semibold text-blue-400 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-10">
                    Detaylı Bilgi <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CONTACT & LOCATION SECTION */}
        <section id="iletisim" aria-labelledby="contact-heading" className="px-6 py-32 bg-[#0a0f1d] relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
              className="grid lg:grid-cols-2 gap-16 items-start"
            >
              {/* Left Column: Map */}
              <motion.article variants={fadeInUp} className="flex flex-col gap-6">
                <div>
                  <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">Bize Ulaşın</h2>
                  <p className="text-slate-400 text-lg">Ofisimizi ziyaret edin veya iletişim kanallarımızdan bize anında ulaşın.</p>
                </div>
                
                <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-slate-800 group">
                  <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10" />
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3064.8670257287154!2d35.178666369679426!3d39.809974471897135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x407fd3b233228927%3A0xb556d331587f07be!2zT3J0YWsgVGVyY8O8bWUgdmUgVml6ZSBEYW7EscWfbWFubMSxaw!5e0!3m2!1sen!2str!4v1790964221235!5m2!1sen!2str" 
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade" 
                    className="w-full h-[400px] grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    title="Ortak Tercüme Harita Konumu"
                  />
                </div>

                <Link
                  href="https://maps.app.goo.gl/PAGrYNVDjLYAd2tbA"
                  target="_blank"
                  className="group flex items-center justify-center gap-3 w-full py-4 bg-[#131b2f] border border-blue-500/50 hover:bg-blue-600 rounded-2xl text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                >
                  <MapPin className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                  <span>Google Haritalar'da Aç / Yol Tarifi Al</span>
                </Link>
              </motion.article>

              {/* Right Column: Contact Details */}
              <motion.aside variants={fadeInUp} className="flex flex-col gap-8 lg:pt-20">
                <div className="p-8 bg-[#131b2f]/80 backdrop-blur-xl border border-slate-800 rounded-3xl shadow-xl">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-blue-400" /> Açık Adresimiz
                  </h3>
                  <address className="text-slate-300 not-italic leading-relaxed text-lg">
                    Yeşilöz Mah. Yılmaz Kılıçaslan Caddesi<br />
                    Bina No: 12 Kat: 2 No: 1<br />
                    <span className="font-semibold text-white mt-2 block">Sorgun / Yozgat</span>
                  </address>
                </div>

                <div className="flex flex-col gap-4">
                  <Link
                    href="https://wa.me/905435136713"
                    target="_blank"
                    className="flex items-center justify-between p-6 bg-[#131b2f]/80 backdrop-blur-xl border border-slate-800 rounded-3xl hover:border-emerald-500/50 hover:bg-[#131b2f] transition-all duration-300 group shadow-xl hover:shadow-[0_10px_30px_rgba(16,185,129,0.15)] hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 relative">
                        <MessageCircle className="w-7 h-7 relative z-10" />
                        <div className="absolute inset-0 rounded-full bg-emerald-500/20 group-hover:animate-ping" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400 font-medium mb-1">WhatsApp Destek</p>
                        <p className="text-xl font-bold text-white tracking-wide">+90 543 513 67 13</p>
                      </div>
                    </div>
                    <ChevronRight className="w-6 h-6 text-slate-600 group-hover:text-emerald-400 transition-transform group-hover:translate-x-2" />
                  </Link>

                  <Link
                    href="https://wa.me/905426961732"
                    target="_blank"
                    className="flex items-center justify-between p-6 bg-[#131b2f]/80 backdrop-blur-xl border border-slate-800 rounded-3xl hover:border-emerald-500/50 hover:bg-[#131b2f] transition-all duration-300 group shadow-xl hover:shadow-[0_10px_30px_rgba(16,185,129,0.15)] hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 relative">
                        <MessageCircle className="w-7 h-7 relative z-10" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400 font-medium mb-1">WhatsApp Destek (Alternatif)</p>
                        <p className="text-xl font-bold text-white tracking-wide">+90 542 696 17 32</p>
                      </div>
                    </div>
                    <ChevronRight className="w-6 h-6 text-slate-600 group-hover:text-emerald-400 transition-transform group-hover:translate-x-2" />
                  </Link>
                </div>
              </motion.aside>
            </motion.div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#050810] border-t border-slate-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Image src="/logo.png" alt="Ortak Tercüme Logo" width={40} height={40} className="object-contain" />
                <span className="text-xl font-bold text-white">Ortak Tercüme</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                Sorgun'da 16 yıllık güven. Profesyonel tercüme ve vize danışmanlık hizmetleriyle dünyaya açılan kapınız.
              </p>
            </div>
            
            <div className="space-y-6 text-xs text-slate-500">
              <article>
                <h4 className="text-slate-300 font-semibold mb-2 uppercase tracking-wider text-[11px]">Kişisel Verilerin Korunması</h4>
                <p className="leading-relaxed">Tarafımızla paylaşılan tüm bilgi ve evraklar, en üst düzey güvenlik standartlarıyla korunmakta olup, yasal zorunluluklar dışında hiçbir üçüncü şahısla paylaşılmaz.</p>
              </article>
              <article>
                <h4 className="text-slate-300 font-semibold mb-2 uppercase tracking-wider text-[11px]">Bilgilendirme Beyanı</h4>
                <p className="leading-relaxed">Bu web sitesi, süreçler hakkında bilgi verme amacıyla hazırlanmış olup bir reklam aracı değildir. Firmamız hiçbir başvuru için "kesin vize alma" garantisi sunmaz. Hizmetlerimiz; konsoloslukların talep ettiği işlemlerin eksiksiz yapılması, evrakların doğru hazırlanması ve sürecin profesyonelce takip edilmesini kapsar. Vize onay kararı tamamen ilgili ülkenin resmi makamlarına aittir.</p>
              </article>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
            <p>© {new Date().getFullYear()} Ortak Tercüme ve Vize Danışmanlık. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
