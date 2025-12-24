"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import RevoraButton from "../motion/RevoraButton";
import Image from "next/image";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const image1Y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const image2Y = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  const aboutX = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  const CheckIcon = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-[rgb(var(--neon))]"
    >
      <path
        d="M13.3333 4L6 11.3333L2.66667 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <section id="about" className="relative bg-white overflow-hidden pb-0">
      <div className="absolute left-1/2 top-1/4 w-2 h-2 rounded-full bg-[rgb(var(--neon))]/30" />
      <div className="absolute left-1/2 top-1/3 w-2 h-2 rounded-full bg-[rgb(var(--neon))]/30" />

      <div ref={ref} className="relative mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 sm:px-6 lg:px-8 py-20 md:grid-cols-2">
        <div className="relative h-full mt-8 md:mt-12">
          <motion.div
            style={{ y: image1Y }}
            className="relative aspect-[4/4] w-full sm:w-[70%] rounded-md overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-md z-10"
          >
            <Image
              src="/resim1.jpg"
              alt="Laptop işbirliği"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            style={{ y: image2Y }}
            className="absolute bottom-2 right-0 sm:-right-10 w-[55%] sm:w-[55%] aspect-[4/4] rounded-md overflow-hidden bg-white shadow-xl z-20"
          >
            <Image
              src="/resim2.jpg"
              alt="VR deneyimi"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* SAĞ: Metin alanı */}
        <div className="pt-8 md:pt-2 flex flex-col items-start gap-3 mb-8 md:ml-16">
          <div className="inline-flex items-center rounded-full bg-[rgb(var(--neon))] px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-black">
            DİJİTAL AJANS
          </div>

          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black leading-tight">
            Dijital yaratıcılığın geleceğine öncülük ediyoruz
            <span className="inline-block ml-2 rounded-full w-2 h-2 sm:w-3 sm:h-3 bg-[rgb(var(--neon))]"></span>
          </h2>

          <p className="mt-6 sm:mt-12 md:ml-12 lg:ml-24 text-sm sm:text-xs md:text-base font-semibold text-black leading-relaxed max-w-lg">
            Takımımız, küresel bir zihniyet ve işbirlikçi bir kültüre sahip danışmanlar ve sektör profesyonellerinden oluşan çeşitli bir ağdır. Sorunlarınızı anlamak için çalışıyoruz ve daha iyi sorular sormaya yönlendiriliyoruz.
          </p>

          <div className="mt-8 sm:mt-12 md:ml-12 lg:ml-24 flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
            <div className="flex items-start gap-2">
              <span className="inline-block mt-2 w-2 h-2 rounded-full bg-[rgb(var(--neon))]" />
              <div>
                <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-black">24</div>
                <div className="mt-1 text-xs sm:text-sm md:text-base text-black/70">Yıl Deneyim</div>
              </div>
            </div>

            <div className="hidden sm:block h-20 w-px bg-black/10" />

            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex-shrink-0 text-[rgb(var(--neon))]">
                  <CheckIcon />
                </div>
                <span className="text-sm sm:text-base text-black/70">Bilgi Güvenliği</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex-shrink-0 text-[rgb(var(--neon))]">
                  <CheckIcon />
                </div>
                <span className="text-sm sm:text-base text-black/70">Mobil Platformlar</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex-shrink-0 text-[rgb(var(--neon))]">
                  <CheckIcon />
                </div>
                <span className="text-sm sm:text-base text-black/70">Veri Senkronizasyonu</span>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-8">
            <RevoraButton textColor="text-black">
              İLETİŞİME GEÇİN!
            </RevoraButton>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-32 left-0 right-0 w-full overflow-x-hidden pointer-events-none">
        <motion.div
          style={{ x: aboutX }}
          className="flex justify-center items-center w-full"
        >
          <div className="text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] xl:text-[240px] font-semibold tracking-tight text-black/20 select-none whitespace-nowrap">
            hakkımızda
          </div>
        </motion.div>
      </div>

      <div className="relative border-b border-black/10 mt-12 md:mt-16 lg:mt-20"></div>
    </section>
  );
}
