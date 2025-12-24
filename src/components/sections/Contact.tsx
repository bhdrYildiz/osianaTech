"use client";

import RevoraButton from "../motion/RevoraButton";


export default function Contact() {
  return (
    <section id="contact" className="relative bg-white border-t border-black/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          <div className="flex flex-col">
            <div className="inline-flex items-center text-xs sm:text-sm font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-black/60 w-fit mb-4 sm:mb-6">
              İLETİŞİME GEÇİN!
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black leading-tight mb-4 sm:mb-6">
              Bir projeniz mi var?<br />İletişime geçin!
            </h2>

            <p className="text-sm sm:text-base text-black/60 leading-relaxed mb-6 sm:mb-8 max-w-md">
              İş çözümleri oluşturmadaki başarımız, büyük ölçüde özellikle yetenekli ve son derece bağlı ekibimize bağlıdır.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-black font-semibold mb-6 uppercase tracking-wide">Merhaba De</h3>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-[rgb(var(--neon))] mt-1 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <span className="text-base text-black">+90 530 389 71 63</span>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-[rgb(var(--neon))] mt-1 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <span className="text-base text-black">info@osianatech.com</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="relative">
                  <label className="block text-sm font-medium text-black/60 mb-2">İsim</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-0 border-b-2 border-black/10 px-0 py-3 text-sm text-black outline-none focus:border-[rgb(var(--neon))] transition-colors placeholder:text-black/40"
                    placeholder=""
                  />
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-black/60 mb-2">E-posta</label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-0 border-b-2 border-black/10 px-0 py-3 text-sm text-black outline-none focus:border-[rgb(var(--neon))] transition-colors placeholder:text-black/40"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="relative">
                  <label className="block text-sm font-medium text-black/60 mb-2">Telefon</label>
                  <input
                    type="tel"
                    className="w-full bg-transparent border-0 border-b-2 border-black/10 px-0 py-3 text-sm text-black outline-none focus:border-[rgb(var(--neon))] transition-colors placeholder:text-black/40"
                    placeholder=""
                  />
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-black/60 mb-2">Konu</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-0 border-b-2 border-black/10 px-0 py-3 text-sm text-black outline-none focus:border-[rgb(var(--neon))] transition-colors placeholder:text-black/40"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-black/60 mb-2">Mesaj</label>
                <textarea
                  className="w-full bg-transparent border-0 border-b-2 border-black/10 px-0 py-3 text-sm text-black outline-none focus:border-[rgb(var(--neon))] transition-colors min-h-[100px] resize-y placeholder:text-black/40"
                  placeholder=""
                />
              </div>

              <div className="pt-4 flex justify-start">
                <RevoraButton href="#contact" textColor="text-black">
                  Mesaj Gönder
                </RevoraButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
