"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import RevoraButton from "../motion/RevoraButton";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // İlk resim hareketi (yukarı-aşağı, sınırlı)
  const image1Y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  // Küçük resim hareketi (yukarı-aşağı, sınırlı)
  const image2Y = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  // Alttaki about yazısı hareketi (sağa-sola, sınırlı)
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
        <div className="relative h-full mt-12">
          <motion.div
            style={{ y: image1Y }}
            className="relative aspect-[4/4] w-[70%] rounded-md overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-md z-10"
          >
            <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
              <div className="text-gray-400 text-sm">Image 1: Laptop collaboration</div>
            </div>
          </motion.div>

          <motion.div
            style={{ y: image2Y }}
            className="absolute bottom-2 -right-10 w-[55%] aspect-[4/4] rounded-md overflow-hidden bg-white shadow-xl z-20 border border-black/5"
          >
            <div className="w-full h-full bg-gradient-to-br from-green-50 to-teal-50 flex items-center justify-center">
              <div className="text-gray-400 text-xs">Image 2: VR experience</div>
            </div>
          </motion.div>
        </div>

        {/* SAĞ: Metin alanı */}
        <div className="pt-2flex items-center gap-3 mb-8 ml-16">
          <div className="inline-flex items-center rounded-full bg-[rgb(var(--neon))] px-4 py-2 text-xs font-semibold tracking-[0.2em] uppercase text-black">
            DIGITAL AGENCY
          </div>

          <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black leading-tight">
            Pioneering the future of digital creativity
            <span className="inline-block rounded-full w-3 h-3 bg-[rgb(var(--neon))]"></span>
          </h2>

          <p className="mt-12 ml-24 text-xs md:text-base font-semibold text-black/60 leading-relaxed max-w-lg">
            Team is a diverse network of consultants and industry professionals with a global mindset and a collaborative culture. We work to understand your issues and are driven to ask better questions.
          </p>

          <div className="mt-12 ml-24 flex items-start gap-8">
            <div className="flex items-start gap-2">
              <span className="inline-block mt-2 w-2 h-2 rounded-full bg-[rgb(var(--neon))]" />
              <div>
                <div className="text-6xl md:text-7xl font-bold text-black">24</div>
                <div className="mt-1 text-sm md:text-base text-black/70">Years Experience</div>
              </div>
            </div>

            <div className="h-20 w-px bg-black/10" />

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 text-[rgb(var(--neon))]">
                  <CheckIcon />
                </div>
                <span className="text-base text-black/70">Information Security</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 text-[rgb(var(--neon))]">
                  <CheckIcon />
                </div>
                <span className="text-base text-black/70">Mobile Platforms</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 text-[rgb(var(--neon))]">
                  <CheckIcon />
                </div>
                <span className="text-base text-black/70">Data Synchronization</span>
              </div>
            </div>
          </div>

          <div className="mt-8 items-center gap-4">
            <RevoraButton href="#contact" textColor="text-black">
              READ MORE
            </RevoraButton>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-32 left-0 right-0 w-full overflow-x-hidden pointer-events-none">
        <motion.div
          style={{ x: aboutX }}
          className="flex justify-center items-center w-full"
        >
          <div className="text-[180px] md:text-[160px] lg:text-[200px] xl:text-[240px] font-semibold tracking-tight text-black/20 select-none whitespace-nowrap">
            about
          </div>
        </motion.div>
      </div>

      <div className="relative border-b border-black/10 mt-12 md:mt-16 lg:mt-20"></div>
    </section>
  );
}
