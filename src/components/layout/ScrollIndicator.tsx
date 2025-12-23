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

      // About section'ını kontrol et - daha geniş bir alan kontrol ediyoruz
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        // Section görünür olduğunda renk değişimi başlasın
        const isInAbout = rect.top < window.innerHeight * 0.8 && rect.bottom > window.innerHeight * 0.2;
        setIsLightBg(isInAbout);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const trackColor = isLightBg ? "bg-black/10" : "bg-white/10";
  const fillColor = isLightBg ? "bg-black/60" : "bg-white/60";
  const textColor = isLightBg ? "text-black/50" : "text-white/50";

  return (
    <div className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 md:flex flex-col items-center gap-8">
      <div className={`h-24 w-[2px] ${trackColor} transition-colors duration-400 ease-in-out`}>
        <div className={`w-[2px] ${fillColor} transition-colors duration-400 ease-in-out`} style={{ height: `${p * 100}%` }} />
      </div>
      <div className={`rotate-90 text-xs tracking-[0.25em] ${textColor} transition-colors duration-400 ease-in-out`}>SCROLL</div>
    </div>
  );
}

