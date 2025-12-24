"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import RevoraButton from "../motion/RevoraButton";

export default function WhyChooseUs() {
    const ref = useRef<HTMLDivElement>(null);
    const stepsRef = useRef<HTMLDivElement>(null);
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const stepsScrollYProgress = useScroll({
        target: stepsRef,
        offset: ["start end", "end start"],
    });

    // Arka plan metni hareketi - yatay hareket (scroll aşağı -> sağa, yukarı -> sola)
    const backgroundTextX = useTransform(stepsScrollYProgress.scrollYProgress, [0, 1], [-200, 200]);

    // İkonlar
    const OnboardingIcon = () => (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[rgb(var(--neon))]">
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <path d="M8 21h8" />
            <path d="M12 17v4" />
            <circle cx="12" cy="8" r="2" />
            <path d="M8 12h8" />
            <path d="M10 10v4" />
            <path d="M14 10v4" />
        </svg>
    );

    const StrategyIcon = () => (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[rgb(var(--neon))]">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
            <path d="M12 11v2" />
        </svg>
    );

    const DeliveryIcon = () => (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[rgb(var(--neon))]">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <path d="M13 8H7" />
            <path d="M17 12H7" />
            <path d="M17 16H7" />
        </svg>
    );

    const features = [
        {
            number: "01",
            icon: <OnboardingIcon />,
            title: "Müşteri entegrasyonu ve keşif",
            description: "Projenizin başında sizinle detaylı görüşmeler yaparak ihtiyaçlarınızı, hedeflerinizi ve zorluklarınızı anlıyoruz. Bu keşif süreci, başarılı bir dijital çözümün temelini oluşturur.",
        },
        {
            number: "02",
            icon: <StrategyIcon />,
            title: "Yaratıcı strateji ve uygulama",
            description: "Keşif sürecinden elde ettiğimiz bilgilerle, size özel yaratıcı stratejiler geliştiriyoruz. Bu stratejileri modern teknolojiler ve en iyi uygulamalarla hayata geçiriyoruz.",
        },
        {
            number: "03",
            icon: <DeliveryIcon />,
            title: "Teslimat ve geri bildirim",
            description: "Projenizi zamanında ve kaliteli bir şekilde teslim ediyoruz. Teslimat sonrası geri bildirimlerinizi alarak sürekli iyileştirme sağlıyor ve uzun vadeli başarınızı destekliyoruz.",
        },
    ];

    const steps = [
        {
            number: "01",
            title: "Keşfet",
            description: "Stratejik görüşmeler, araştırma ve analiz yoluyla hedeflerinizi, hedef kitlenizi ve zorluklarınızı anlayarak başlıyoruz.",
        },
        {
            number: "02",
            title: "Tasarım",
            description: "Yaratıcı ekibimiz fikirleri etkileyici görseller ve kullanıcı dostu deneyimlere dönüştürür. UI/UX'e odaklanıyoruz.",
        },
        {
            number: "03",
            title: "Geliştir",
            description: "Modern, ölçeklenebilir ve güvenli teknoloji kullanarak tasarımı hayata geçiriyoruz. İster web sitesi, ister uygulama veya dijital platform olsun.",
        },
        {
            number: "04",
            title: "Teslim Et",
            description: "Hassasiyetle başlatıyoruz ve lansman sonrası sizi destekliyoruz. Performans testlerinden sürekli optimizasyona kadar.",
        },
    ];

    return (
        <section id="why-choose-us" className="relative bg-white overflow-hidden">
            <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-2 lg:gap-4 relative z-10">
                    <div className="relative md:-ml-[10%] lg:-ml-[20%] xl:-ml-[25%]">
                        <div className="relative aspect-[5/5] w-full sm:w-[85%] rounded-md overflow-hidden">
                            <Image
                                src="/resim3.jpg"
                                alt="Tablet ile kişi"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="inline-flex items-center rounded-full bg-[rgb(var(--neon))] px-3 py-2 sm:px-4 sm:py-3 text-[10px] sm:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-black w-fit mb-4 sm:mb-6">
                            NEDEN BİZİ SEÇMELİSİNİZ
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black leading-tight mb-6 sm:mb-8">
                            Bizimle çalışmayı seveceğiniz şeyler.
                        </h2>

                        <div className="space-y-4 sm:space-y-6 md:space-y-8 mb-6 sm:mb-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.number}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-black/5 transition-colors duration-300 cursor-pointer"
                                >
                                    <div className="flex-shrink-0">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <div className="text-xs sm:text-sm font-semibold text-black/40 mb-1">{feature.number}</div>
                                        <h3 className="text-lg sm:text-xl font-bold text-black mb-2">{feature.title}</h3>
                                        <p className="text-sm sm:text-base text-black/60 leading-relaxed">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-4">
                            <RevoraButton textColor="text-black">
                                İLETİŞİME GEÇİN!
                            </RevoraButton>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative bg-white overflow-hidden py-12 md:py-20">
                <div className="absolute top-1/2 left-0 right-0 overflow-hidden pointer-events-none z-0 -translate-y-1/2">
                    <motion.div
                        style={{ x: backgroundTextX }}
                        className="text-[60px] sm:text-[80px] md:text-[120px] lg:text-[160px] xl:text-[180px] 2xl:text-[200px] font-bold tracking-tight text-black/5 select-none whitespace-nowrap"
                    >
                        osianatech web çözümleri
                    </motion.div>
                </div>
            </div>

            <div ref={stepsRef} className="relative bg-white py-20 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

                    {/* 4 Adımlı Süreç */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                        {steps.map((step, index) => {
                            const isActive = hoveredStep === index;
                            return (
                                <motion.div
                                    key={step.number}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative cursor-pointer"
                                    onMouseEnter={() => setHoveredStep(index)}
                                    onMouseLeave={() => setHoveredStep(null)}
                                >
                                    {/* Büyük numara ve STEP */}
                                    <div className="flex items-start gap-2 mb-4 sm:mb-6">
                                        <div className={`text-[80px] sm:text-[100px] md:text-[120px] lg:text-[140px] xl:text-[160px] font-bold tracking-tight leading-none transition-colors duration-300 ${isActive ? "text-[rgb(var(--neon))]" : "text-black/10"
                                            }`}>
                                            {step.number}
                                        </div>
                                        <div className="text-black/10 font-semibold text-xs sm:text-sm tracking-wider uppercase pt-2 sm:pt-4">
                                            ADIM
                                        </div>
                                    </div>

                                    {/* Ayırıcı çizgi */}
                                    <div className="h-px bg-black/10 mb-4 sm:mb-6 w-full" />

                                    {/* Başlık ve açıklama */}
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-3 sm:mb-4">
                                        {step.title}
                                        <span className="inline-block rounded-full ml-2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[rgb(var(--neon))]"></span>
                                    </h3>
                                    <p className="text-sm sm:text-base text-black/60 leading-relaxed">
                                        {step.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

