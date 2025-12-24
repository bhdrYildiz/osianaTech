"use client";

import { services } from "@/data/landing";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";

function ScrollingText({
  text,
  isActive,
  className
}: {
  text: string;
  isActive: boolean;
  className?: string;
}) {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((t, delta) => {
    if (!isActive) {
      x.set(0);
      return;
    }

    const currentX = x.get();
    const speed = 150;
    const newX = currentX - (speed * delta) / 1000;

    const textWidth = text.length * 60;

    if (newX < -textWidth) {
      x.set(0);
    } else {
      x.set(newX);
    }
  });

  return (
    <div ref={containerRef} className={className}>
      <motion.div
        style={{ x }}
        className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[140px] font-bold tracking-tight select-none whitespace-nowrap"
        animate={{
          opacity: isActive ? 0.3 : 0.05,
        }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-white/40">
          {text} {text} {text}
        </span>
      </motion.div>
    </div>
  );
}

const ServiceIcons: Record<string, JSX.Element> = {
  megaphone: (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11l18-5v12l-18-5z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </svg>
  ),
  monitor: (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
    </svg>
  ),
  envelope: (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  code: (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  document: (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  ),
};

export default function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="services" className="relative border-t border-white/10 bg-[#07090b] overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Üst kısım - Sol ve sağ içerik */}
        <div className="px-4 sm:px-6 lg:px-8 pt-24 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Sol taraf - Başlık */}
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center rounded-full bg-[rgb(var(--neon))] px-4 py-3 text-xs font-semibold tracking-[0.2em] uppercase text-black w-fit mb-6">
                HİZMETLERİMİZ
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Yaratıcı dijital çözümlerimizi keşfedin
                <span className="inline-block rounded-full ml-2 w-3 h-3 bg-[rgb(var(--neon))]"></span>
              </h2>
            </div>

            {/* Sağ taraf - Açıklama */}
            <div className="flex flex-col justify-center">
              <p className="text-lg text-white/70 max-w-lg">
                Bir markanın hedefleriyle uyumlu, duyarlı ve kullanıcı dostu web siteleri tasarlıyor ve geliştiriyoruz.
              </p>
            </div>
          </div>
        </div>

        {/* Alt kısım - Animasyonlu servis kartları alanı */}
        <div className="relative w-full pb-4 overflow-x-auto scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="flex gap-3 sm:gap-4 px-4 sm:px-6 lg:px-8 h-[300px] sm:h-[350px] md:h-[400px] min-w-max">
            {services.map((service, index) => {
              const isActive = active === index;
              const IconComponent = ServiceIcons[service.icon] || ServiceIcons.monitor;

              return (
                <motion.div
                  key={service.title}
                  onMouseEnter={() => setActive(index)}
                  onMouseLeave={() => setActive(null)}
                  className="relative group cursor-pointer flex-1 min-w-[200px] sm:min-w-[250px] md:min-w-0"
                  initial={false}
                  animate={{
                    flex: isActive ? 1.5 : 1,
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {/* Servis kartı */}
                  <motion.div
                    className={`
                      relative h-full rounded-md overflow-hidden
                      ${isActive
                        ? "bg-white/10"
                        : "bg-white/15"
                      }
                    `}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Arka plan metni - Scrolling text ile */}
                    <ScrollingText
                      text={service.title}
                      isActive={isActive}
                      className="absolute inset-0 flex items-center z-10 pointer-events-none overflow-hidden"
                    />

                    {/* Kart içeriği */}
                    <div className="relative h-full flex flex-col justify-between p-4 sm:p-6 z-20">
                      {/* Üst kısım - İkon */}
                      <motion.div
                        className={`
                          transition-all duration-300 text-[rgb(var(--neon))]
                          ${isActive ? "scale-110 rotate-6" : ""}
                        `}
                      >
                        <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-md border-2 border-[rgb(var(--neon))] bg-[rgb(var(--neon))]/55">
                          {IconComponent}
                        </div>
                      </motion.div>

                      {/* Alt kısım - Başlık */}
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white text-center">
                        {service.title}
                      </h3>
                    </div>

                    {/* Arka plan resmi - Her zaman render edilir ama görünürlüğü kontrol edilir */}
                    {service.image && (
                      <div className="absolute inset-0 z-0">
                        <motion.div
                          animate={{
                            opacity: isActive ? 0.6 : 0,
                            scale: isActive ? 1 : 1.1
                          }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className="absolute inset-0"
                          style={{ willChange: 'transform, opacity' }}
                        >
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover"
                            quality={75}
                            loading="lazy"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </motion.div>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
