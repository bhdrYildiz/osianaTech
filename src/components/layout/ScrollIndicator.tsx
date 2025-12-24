"use client";

import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [p, setP] = useState(0);
  const [isLightBg, setIsLightBg] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const v = h > 0 ? window.scrollY / h : 0;
      setP(Math.max(0, Math.min(1, v)));

      // Tüm açık arka planlı section'ları kontrol et
      const lightBgSections = ["about", "contact", "why-choose-us"];
      let foundLightBg = false;

      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;

      lightBgSections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();

          // Viewport'un ortası section içindeyse
          const isCenterInSection = rect.top <= viewportCenter && rect.bottom >= viewportCenter;

          // Veya section'un önemli bir kısmı görünürse (daha geniş tolerans)
          const isSectionVisible = rect.top < viewportHeight * 0.85 && rect.bottom > viewportHeight * 0.15;

          if (isCenterInSection || isSectionVisible) {
            foundLightBg = true;
          }
        }
      });

      setIsLightBg(foundLightBg);
    };

    // İlk render'da kontrol et
    onScroll();

    // Scroll event listener ekle
    window.addEventListener("scroll", onScroll, { passive: true });
    // Resize event listener ekle (ekran boyutu değiştiğinde de kontrol et)
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const trackColor = isLightBg ? "bg-black/10" : "bg-white/10";
  const fillColor = isLightBg ? "bg-black/60" : "bg-white/60";
  const textColor = isLightBg ? "text-black/50" : "text-white/50";

  return (
    <div className="fixed right-4 top-1/2 z-[9999] hidden -translate-y-1/2 md:flex flex-col items-center gap-8 pointer-events-none">
      <div className={`h-24 w-[2px] ${trackColor} transition-colors duration-300 ease-in-out`}>
        <div className={`w-[2px] ${fillColor} transition-colors duration-300 ease-in-out`} style={{ height: `${p * 100}%` }} />
      </div>
      <div className={`rotate-90 text-xs tracking-[0.25em] ${textColor} transition-colors duration-300 ease-in-out`}>SCROLL</div>
    </div>
  );
}

