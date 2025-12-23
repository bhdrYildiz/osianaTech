"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";

const technologies = [
  {
    text: "Modern ve performanslı arayüzler geliştiriyoruz.",
    imageSrc: "/react.svg",
    name: "React.js",
    username: "Frontend",
  },
  {
    text: "SEO dostu, hızlı ve güvenli web uygulamaları.",
    imageSrc: "/next.svg",
    name: "Next.js",
    username: "Fullstack",
  },
  {
    text: "Esnek ve modern UI tasarımları için.",
    imageSrc: "/tailwindcss.svg",
    name: "Tailwind CSS",
    username: "Styling",
  },
  {
    text: "Animasyon ve etkileşimlerde fark yaratıyoruz.",
    imageSrc: "/social.svg",
    name: "Framer Motion",
    username: "Animations",
  },
  {
    text: "Güçlü ve ölçeklenebilir backend çözümleri.",
    imageSrc: "/backend.svg",
    name: "Node.js",
    username: "Backend",
  },
  {
    text: "Verilerinizi güvenli ve hızlı yönetiyoruz.",
    imageSrc: "/cloud.svg",
    name: "SQL",
    username: "Database",
  },
  {
    text: "Güçlü ve estetik mobil arayüzler...",
    imageSrc: "/android.svg",
    name: "Mobil Çözümler",
    username: "Android & IOS",
  },
  {
    text: "Google analytic ve search console yönetimi ile satışlarınızı arttırın!",
    imageSrc: "/google_docs.svg",
    name: "Google",
    username: "Analytic & Search Console",
  },
];

const firstColumn = technologies.slice(0, 3);
const secondColumn = technologies.slice(3, 6);
const thirdColumn = technologies.slice(6, 8);

const TechColumn = (props: {
  className?: string;
  items: typeof technologies;
  duration?: number;
}) => {
  const controls = useAnimation();
  const isMountedRef = useRef(true);
  const animationRef = useRef<any>(null);

  useEffect(() => {
    isMountedRef.current = true;

    const startAnimation = async () => {
      if (!isMountedRef.current) return;

      try {
        animationRef.current = await controls.start({
          translateY: "-50%",
          transition: {
            duration: props.duration || 20,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          },
        });
      } catch (e) {
        // Silent fail
      }
    };

    startAnimation();

    return () => {
      isMountedRef.current = false;
      try {
        controls.stop();
        controls.set({ translateY: 0 });
      } catch (e) {
        // Silent fail
      }
    };
  }, [controls, props.duration]);

  return (
    <div className={props.className}>
      <motion.div
        animate={controls}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.items.map(({ text, imageSrc, name, username }, itemIndex) => (
              <div
                className="p-10 border border-white/10 rounded-3xl shadow-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-[rgb(var(--neon))]/50 transition-all duration-300"
                key={`${name}-${itemIndex}`}
              >
                <div className="text-white/70">{text}</div>
                <div className="flex items-center gap-2 mt-5">
                  <div className="h-20 w-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
                    <Image
                      src={imageSrc}
                      alt={name}
                      width={80}
                      height={80}
                      className="h-16 w-16 object-contain brightness-110"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5 text-white">
                      {name}
                    </div>
                    <div className="leading-5 tracking-tight text-white/50">{username}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default function Blog() {
  return (
    <section id="blog" className="relative border-t border-white/10 bg-[#07090b] py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Başlık */}
        <div className="px-4 sm:px-6 lg:px-8 pb-12 ">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full bg-[rgb(var(--neon))] px-4 py-3 text-xs font-semibold tracking-[0.2em] uppercase text-black w-fit mb-6">
              OUR TECH
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Modern ve Güçlü Çözümler
              <span className="inline-block rounded-full ml-2 w-3 h-3 bg-[rgb(var(--neon))]"></span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              OsianaTech olarak web, mobil ve dijital çözümlerimizi en güncel
              teknolojilerle sunuyoruz. İşletmenizin dijital dünyadaki başarısını
              artırıyoruz.
            </p>
          </div>
        </div>

        {/* Animasyonlu teknoloji kartları */}
        <div className="flex justify-center gap-6 px-4 sm:px-6 lg:px-8 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TechColumn items={firstColumn} duration={16} />
          <TechColumn items={secondColumn} className="hidden md:block" duration={12} />
          <TechColumn items={thirdColumn} className="hidden lg:block" duration={20} />
        </div>
      </div>
    </section>
  );
}
