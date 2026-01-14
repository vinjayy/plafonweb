"use client";

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Menu, 
  X, 
  CheckCircle, 
  ShieldCheck, 
  Clock, 
  Headphones, 
  Star, 
  ArrowRight,
  MessageCircle,
  MapPin,
  ChevronRight
} from 'lucide-react';

/**
 * Metadata in Next.js App Router is usually handled in layout.tsx or 
 * via a metadata object in server components. Since this is a client 
 * component for interactivity, ensure your layout.tsx has the 
 * appropriate title and description.
 */

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const whatsappNumber = "6285210620979"; 

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Tentang Kami', id: 'about' },
    { name: 'Produk', id: 'products' },
    { name: 'Testimoni', id: 'testimonials' },
    { name: 'Kontak', id: 'contact' },
  ];

  const products = [
    {
      title: 'Plafon PVC Premium',
      desc: 'Solusi plafon modern, tahan air, anti rayap, dan tidak perlu dicat. Pilihan motif kayu, minimalis, dan mewah.',
      icon: '🏠'
    },
    {
      title: 'Hollow Galvalum',
      desc: 'Rangka plafon hollow 2x4 dan 4x4 tebal 0.3mm - 0.4mm. Anti karat, lurus, dan kuat untuk menopang beban plafon.',
      icon: '🏗️'
    },
    {
      title: 'List Profil PVC',
      desc: 'Aksesoris pinggiran plafon untuk mempercantik ruangan. Tersedia berbagai ukuran dan motif yang senada.',
      icon: '📏'
    },
    {
      title: 'Baja Ringan C75',
      desc: 'Rangka atap baja ringan SNI kualitas tinggi. Cocok untuk renovasi atap rumah maupun kanopi.',
      icon: '🔩'
    },
    {
      title: 'Jasa Pemasangan',
      desc: 'Layanan pemasangan terima beres oleh tukang berpengalaman. Rapi, cepat, dan bergaransi perawatan.',
      icon: '👷'
    }
  ];

  const testimonials = [
    {
      name: 'Bapak Hartono',
      location: 'Jakarta Selatan',
      date: 'Minggu lalu',
      content: 'Plafon PVC motif kayunya bagus banget, persis kayak kayu asli tapi anti rayap. Pemasangan juga cepet cuma 2 hari kelar satu rumah.',
      rating: 5
    },
    {
      name: 'Ibu Sari',
      location: 'Tangerang',
      date: '2 minggu lalu',
      content: 'Tukangnya sopan dan kerjanya rapi. Sisa potongan bahan dibersihkan semua. Sangat puas belanja dan pasang di sini.',
      rating: 5
    },
    {
      name: 'Mas Wahyu',
      location: 'Depok',
      date: '1 bulan lalu',
      content: 'Harganya bersaing dibanding toko sebelah. Pelayanan ramah, tanya-tanya via WA diladenin terus sampai malam. Mantap!',
      rating: 5
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
    setActiveTab(id);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2 cursor-pointer group" onClick={() => scrollToSection('home')}>
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">D</div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-blue-900 leading-none">DISTRIBUTOR</span>
                <span className="text-xs font-bold text-orange-500 tracking-widest uppercase">Plafon PVC</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-sm font-bold transition-all hover:text-blue-600 relative py-1 ${
                    activeTab === link.id ? 'text-blue-600 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600' : 'text-gray-600'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-green-600 transition-all shadow-lg hover:shadow-green-200 flex items-center gap-2"
              >
                <MessageCircle size={16} />
                Konsultasi Gratis
              </a>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl transition-all duration-300 ease-in-out transform ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-8 py-4 text-base font-bold text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </button>
            ))}
            <div className="px-8 pt-4 pb-2">
                <a 
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center w-full bg-green-500 text-white px-6 py-4 rounded-xl text-base font-bold hover:bg-green-600 shadow-md"
                >
                  Chat WhatsApp Sekarang
                </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 bg-slate-50 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[-5%] w-96 h-96 bg-blue-200 rounded-full blur-[120px] opacity-30"></div>
          <div className="absolute bottom-0 left-[-5%] w-72 h-72 bg-orange-200 rounded-full blur-[100px] opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-white border border-orange-100 text-orange-600 px-4 py-2 rounded-full text-xs font-black tracking-widest uppercase shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                Tukang Berpengalaman & Profesional
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 leading-[1.1] tracking-tight">
                Plafon Mewah <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Harga Murah</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl font-medium">
                Ubah tampilan rumah Anda menjadi lebih modern dan estetik dengan Plafon PVC berkualitas. Tahan air, anti rayap, dan pengerjaan super rapi.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=Halo,%20saya%20ingin%20tanya%20biaya%20pasang%20plafon%20PVC`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-5 rounded-2xl text-lg font-bold hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-200 active:scale-95"
                >
                  <MessageCircle size={22} />
                  Dapatkan Penawaran
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="flex items-center justify-center gap-2 bg-white text-gray-700 border-2 border-gray-100 px-8 py-5 rounded-2xl text-lg font-bold hover:border-blue-100 hover:text-blue-600 transition-all shadow-sm active:scale-95"
                >
                  Lihat Katalog
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-x-10 gap-y-6 pt-8">
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-blue-900">500+</span>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Proyek Selesai</span>
                </div>
                <div className="hidden sm:block w-px h-10 bg-gray-200"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-blue-900">100%</span>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Kepuasan Client</span>
                </div>
                <div className="hidden sm:block w-px h-10 bg-gray-200"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-blue-900">Garansi</span>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Hingga 5 Tahun</span>
                </div>
              </div>
            </div>

            <div className="relative group lg:mt-0 mt-12">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-indigo-400 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-[12px] border-white aspect-[4/5] sm:aspect-auto">
                {/* Fallback pattern if image is missing */}
                <div className="absolute inset-0 bg-gray-200 animate-pulse -z-10"></div>
                <img 
                  src="unnamed.jpg" 
                  alt="Interior Plafon PVC Modern" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://via.placeholder.com/800x1000?text=Plafon+PVC+Premium";
                  }}
                />
              </div>
              
              <div className="absolute -bottom-10 -right-6 md:right-10 bg-white p-6 rounded-3xl shadow-2xl border border-gray-50 flex items-center gap-4 animate-bounce-slow">
                <div className="bg-orange-100 p-3 rounded-2xl text-orange-600">
                  <ShieldCheck size={32} />
                </div>
                <div>
                  <div className="font-black text-gray-900">SNI & Anti Rayap</div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Material Kualitas Top</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative order-2 lg:order-1">
               <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <img src="unnamed (1).jpg" className="rounded-3xl shadow-lg w-full h-64 object-cover" alt="Construction worker" />
                    <img src="plafon3.jpg" className="rounded-3xl shadow-lg w-full h-48 object-cover translate-x-4" alt="Interior work" />
                  </div>
                  <div className="pt-12 space-y-4">
                    <img src="plafon2.jpg" className="rounded-3xl shadow-lg w-full h-48 object-cover -translate-x-4" alt="Detailed work" />
                    <img src="unnamed (2).jpg" className="rounded-3xl shadow-lg w-full h-64 object-cover" alt="Ceiling finished" />
                  </div>
               </div>
               <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-50 rounded-full blur-3xl opacity-50 scale-75"></div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-4">
                <h2 className="text-blue-600 font-black uppercase tracking-[0.2em] text-sm">Tentang Kami</h2>
                <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">Solusi Interior Terpercaya <br/>Asli <span className="text-blue-600">Tukang Indonesia</span></h3>
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                  Kami bukan sekadar menjual material, tapi kami memberikan solusi keindahan untuk hunian Anda. Menggunakan tenaga ahli lokal yang jujur, teliti, dan mengutamakan kualitas akhir yang presisi.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: <Clock className="text-blue-500" />, title: 'Pengerjaan Kilat', desc: 'Estimasi waktu yang akurat dan tepat waktu.' },
                  { icon: <ShieldCheck className="text-blue-500" />, title: 'Bahan Pilihan', desc: 'Material PVC tebal grade A standar ekspor.' },
                  { icon: <Headphones className="text-blue-500" />, title: 'Survey Gratis', desc: 'Bebas biaya konsultasi dan ukur lokasi.' },
                  { icon: <CheckCircle className="text-blue-500" />, title: 'Harga Kompetitif', desc: 'Transparan tanpa biaya yang diada-adakan.' }
                ].map((feature, i) => (
                  <div key={i} className="group flex gap-4 p-5 rounded-2xl border border-gray-50 hover:border-blue-100 hover:bg-blue-50/50 transition-all duration-300">
                    <div className="shrink-0 bg-white p-2 rounded-xl shadow-sm group-hover:scale-110 transition-transform">{feature.icon}</div>
                    <div>
                      <h4 className="font-black text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-500 leading-snug font-medium">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-4 mb-20">
            <h2 className="text-blue-600 font-black uppercase tracking-[0.2em] text-sm">Layanan Kami</h2>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900">Produk & Jasa Unggulan</h3>
            <p className="text-lg text-gray-500 font-medium">
              Kami melayani mulai dari pengadaan material hingga jasa pasang terima kunci. Tinggal duduk manis, rumah jadi cantik.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <div 
                key={i} 
                className="group bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 text-left relative overflow-hidden flex flex-col items-start hover:-translate-y-3"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[5rem] opacity-0 group-hover:opacity-100 transition-all duration-500 -mr-10 -mt-10"></div>
                <div className="text-6xl mb-8 relative z-10 filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110">
                  {product.icon}
                </div>
                <h4 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{product.title}</h4>
                <p className="text-gray-500 font-medium leading-relaxed mb-10 flex-grow">{product.desc}</p>
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=Halo, saya tertarik dengan layanan ${product.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 font-black group/btn tracking-tight"
                >
                  Tanya Biaya <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-xl space-y-4">
              <h2 className="text-blue-600 font-black uppercase tracking-[0.2em] text-sm">Testimoni</h2>
              <h3 className="text-4xl md:text-5xl font-black text-gray-900">Apa Kata Mereka?</h3>
            </div>
            <div className="flex flex-col items-center md:items-end gap-2">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={24} className="fill-yellow-400 text-yellow-400" />)}
              </div>
              <span className="font-black text-gray-900 text-xl tracking-tight">5.0 / 5.0 Rating Kepuasan</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="group bg-blue-50/40 p-10 rounded-[2.5rem] border border-transparent hover:border-blue-100 hover:bg-white transition-all duration-500 flex flex-col h-full shadow-sm hover:shadow-xl">
                <div className="flex gap-1 mb-8">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 font-medium italic mb-10 flex-grow leading-relaxed text-lg">"{t.content}"</p>
                <div className="flex items-center gap-5 pt-6 border-t border-blue-100/50">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-500 rounded-2xl flex items-center justify-center font-black text-white text-xl uppercase shadow-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-black text-gray-900 text-lg">{t.name}</div>
                    <div className="text-xs text-blue-500 font-black uppercase tracking-widest">{t.location} • {t.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-[#0a1128] text-white relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: 'white', stopOpacity: 0.1 }} />
                <stop offset="100%" style={{ stopColor: 'white', stopOpacity: 0.01 }} />
              </linearGradient>
            </defs>
            <circle cx="90" cy="10" r="40" fill="url(#grad1)" />
            <circle cx="10" cy="90" r="30" fill="url(#grad1)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <h2 className="text-blue-400 font-black uppercase tracking-[0.2em] text-sm">Kontak Kami</h2>
                <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tight">Siap Wujudkan <br/>Rumah Impian Anda?</h3>
                <p className="text-blue-100/70 text-lg font-medium leading-relaxed">
                  Tim kami siap membantu dari konsultasi model, perhitungan budget, hingga eksekusi di lapangan. Respon cepat di jam kerja.
                </p>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="bg-blue-800/50 p-5 rounded-[1.5rem] border border-white/10 group-hover:bg-blue-700 transition-colors">
                    <MapPin className="text-blue-400" size={28} />
                  </div>
                  <div>
                    <div className="font-black text-xl mb-1 uppercase tracking-tight">Cakupan Wilayah</div>
                    <p className="text-blue-100/60 font-medium leading-relaxed">Seluruh JABODETABEK <br/>(Jakarta, Bogor, Depok, Tangerang, Bekasi)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6 group">
                  <div className="bg-blue-800/50 p-5 rounded-[1.5rem] border border-white/10 group-hover:bg-blue-700 transition-colors">
                    <Phone className="text-blue-400" size={28} />
                  </div>
                  <div>
                    <div className="font-black text-xl mb-1 uppercase tracking-tight">WhatsApp Marketing</div>
                    <p className="text-blue-100 text-2xl font-black mb-1">{whatsappNumber}</p>
                    <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                      Online Fast Respond
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-sm">
                <div className="font-black uppercase text-sm tracking-widest mb-6 flex items-center gap-2">
                  <Clock size={16} className="text-blue-400" />
                  Waktu Operasional:
                </div>
                <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-blue-100/80 font-medium">
                  <div>Senin - Sabtu</div>
                  <div className="text-white font-black text-right">08:00 - 17:00 WIB</div>
                  <div className="pt-2 border-t border-white/10">Minggu / Libur</div>
                  <div className="pt-2 border-t border-white/10 text-orange-400 font-black text-right uppercase">By Appointment</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[3rem] p-10 lg:p-14 text-gray-900 shadow-3xl relative">
              <div className="absolute -top-10 -left-10 w-24 h-24 bg-orange-400 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
              <h4 className="text-3xl font-black mb-8 tracking-tight">Kirim Pesan Cepat</h4>
              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Nama Lengkap</label>
                  <input type="text" placeholder="Masukkan nama Anda" className="w-full p-5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:bg-white transition-all font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Lokasi Proyek</label>
                  <input type="text" placeholder="Contoh: Tambun, Bekasi" className="w-full p-5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:bg-white transition-all font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Kebutuhan Anda</label>
                  <textarea placeholder="Saya ingin pasang plafon di ruang tamu ukuran 3x4..." rows={4} className="w-full p-5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:bg-white transition-all font-medium"></textarea>
                </div>
                <button 
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Halo%20saya%20ingin%20konsultasi%20pemasangan%20plafon`, '_blank')}
                  className="w-full bg-blue-600 text-white font-black py-5 rounded-2xl hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-100 active:scale-[0.98] flex items-center justify-center gap-3 text-lg"
                >
                  <MessageCircle size={24} />
                  Kirim via WhatsApp
                </button>
                <p className="text-center text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mt-6">
                  Konsultasi & Survey Lokasi 100% Gratis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 pt-24 pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl">D</div>
                <span className="text-2xl font-black text-white tracking-tighter">PLAFON PVC</span>
              </div>
              <p className="text-gray-400 leading-relaxed font-medium">
                Pusat pengadaan material dan jasa pemasangan Plafon PVC berkualitas tinggi. Hadir untuk mewujudkan interior rumah idaman yang tahan lama.
              </p>
            </div>

            <div>
              <h5 className="text-white font-black uppercase tracking-widest text-sm mb-10">Navigasi</h5>
              <ul className="space-y-5 text-gray-400 font-medium">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button onClick={() => scrollToSection(link.id)} className="hover:text-blue-400 transition-colors flex items-center gap-3 group">
                      <ChevronRight size={16} className="text-blue-600 group-hover:translate-x-1 transition-transform" /> {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-white font-black uppercase tracking-widest text-sm mb-10">Layanan Kami</h5>
              <ul className="space-y-5 text-gray-400 font-medium">
                {['Plafon PVC Premium', 'Rangka Baja Ringan', 'Partisi Gypsum', 'List & Aksesoris', 'Bongkar Pasang Atap'].map((s, i) => (
                  <li key={i} className="flex items-center gap-3 group">
                    <ChevronRight size={16} className="text-blue-600 group-hover:translate-x-1 transition-transform" /> {s}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-white font-black uppercase tracking-widest text-sm mb-10">Hubungi Langsung</h5>
              <p className="text-gray-400 font-medium mb-8">
                Punya pertanyaan atau butuh estimasi biaya cepat?
              </p>
              <a href={`tel:${whatsappNumber}`} className="block text-blue-500 font-black text-2xl mb-4 hover:scale-105 transition-transform origin-left">{whatsappNumber}</a>
              <div className="flex gap-4">
                 {/* Social links placeholder */}
                 <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                    <MessageCircle size={20} className="text-white" />
                 </div>
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">
            <div>© 2025 DISTRIBUTOR PLAFON PVC. MADE IN INDONESIA.</div>
            <div className="flex gap-10">
              <span className="hover:text-white cursor-pointer transition-colors">Syarat & Ketentuan</span>
              <span className="hover:text-white cursor-pointer transition-colors">Kebijakan Privasi</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WA Button */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4 pointer-events-none">
        <div className="bg-white px-6 py-3 rounded-2xl shadow-2xl border border-gray-100 text-gray-900 font-black text-sm uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 pointer-events-none hidden md:block animate-fade-in-up">
           Tanya Biaya Sekarang! 👋
        </div>
        <a 
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto bg-green-500 text-white p-5 rounded-[2rem] shadow-3xl hover:scale-110 active:scale-95 transition-all duration-300 group flex items-center justify-center relative overflow-hidden"
          aria-label="WhatsApp"
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <MessageCircle size={36} className="relative z-10" />
        </a>
      </div>

      <style jsx global>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-5%); }
          50% { transform: translateY(0); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}