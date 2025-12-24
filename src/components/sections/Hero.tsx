import Reveal from "@/components/motion/Reveal";
import RevoraButton from "../motion/RevoraButton";
import Typewriter from "@/components/motion/TypeWriter";
import CenterBadge from "@/components/motion/CenterBadge";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 sm:px-6 lg:px-8 py-12 md:grid-cols-2 md:py-16 relative">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none hidden md:block">
          <CenterBadge />
        </div>
        <div className="relative">
          <div className="absolute -left-10 -top-10 h-160 w-60 rounded-full bg-[rgb(var(--neon))] blur-2xl" />
          <div className="aspect-[4/5] w-full rounded-md bg-[rgb(var(--neon))] p-6 sm:p-12 md:p-16 lg:p-24 text-black flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-4 sm:mb-8">
                <div className="inline-flex items-center rounded-full bg-black px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-white">
                  DİJİTAL ÇÖZÜM ORTAĞINIZ
                </div>
                <Typewriter
                  words={["Web geliştirme", "Marka Stratejisi", "Yaratıcı içerik"]}
                  className="text-sm sm:text-base md:text-lg font-semibold text-black"
                />
              </div>
              <Reveal>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl font-bold leading-[1.05] tracking-tight text-black">
                  Markanızı<br />
                  dijital<br />
                  hassasiyetle<br />
                  yükseltin.
                </h1>
              </Reveal>

              {/* Açıklama metni */}
              <Reveal className="mt-4 sm:mt-8">
                <p className="max-w-xs text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-black/90">
                  İnovatif çözümlerle dijital dönüşümünüze hız kazandırın. Özel yazılım geliştirme ve teknoloji danışmanlığı hizmetlerimizle yanınızda olalım. </p>
              </Reveal>
            </div>
            <div className="mt-4 sm:mt-8">
              <RevoraButton variant="black">ÜCRETSİZ DANIŞMANLIK</RevoraButton>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] w-full rounded-md border border-white/10 bg-white/5 overflow-hidden relative">
            <Image
              src="/resim5.jpg"
              alt="Hero image"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 rounded-xl bg-black/60 px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-white/80 backdrop-blur">
            OsianaTech • 2025
          </div>
        </div>
      </div>
    </section>
  );
}
