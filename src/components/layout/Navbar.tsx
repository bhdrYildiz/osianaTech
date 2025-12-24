"use client";

import { nav } from "@/data/landing";
import RevoraButton from "../motion/RevoraButton";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Hero section'ındaysak aktif section'ı temizle
          if (entry.target.id === "home") {
            setActiveSection("");
          } else {
            setActiveSection(entry.target.id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Tüm section'ları gözlemle
    nav.forEach((item) => {
      const sectionId = item.href.substring(1); // # işaretini kaldır
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    // Scroll event listener - scroll pozisyonuna göre aktif section'ı belirle
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Navbar yüksekliği için offset

      // Hero section kontrolü - eğer hero section'ındaysak hiçbir link aktif olmasın
      const homeSection = document.getElementById("home");
      if (homeSection) {
        const homeTop = homeSection.offsetTop;
        const homeHeight = homeSection.offsetHeight;

        if (scrollPosition >= homeTop && scrollPosition < homeTop + homeHeight) {
          setActiveSection("");
          return;
        }
      }

      // Diğer section'ları kontrol et
      nav.forEach((item) => {
        const sectionId = item.href.substring(1);
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    // İlk yüklemede kontrol et
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <a href="/" className="flex items-center gap-2">
          <div className="relative w-8 h-8">
            <Image
              src="/logoNew.png"
              alt="Logo"
              width={32}
              height={32}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-semibold tracking-tight text-white">OSIANA TECH</span>
            <span className="text-xs sm:text-sm lg:text-base tracking-wide text-white/60 uppercase">WEB ÇÖZÜMLERİ</span>
          </div>
        </a>

        <nav className="hidden gap-4 lg:gap-8 md:flex">
          {nav.map((n) => {
            const sectionId = n.href.substring(1); // # işaretini kaldır
            const isActive = activeSection === sectionId;
            return (
              <a
                key={n.href}
                href={n.href}
                className={`text-sm lg:text-base font-medium tracking-wide uppercase whitespace-nowrap transition-colors ${isActive
                  ? "text-[rgb(var(--neon))]"
                  : "text-white/70 hover:text-[rgb(var(--neon))]"
                  }`}
              >
                {n.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          {/* Mobil hamburger menü */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
            aria-label="Menü"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>

          {/* Arama ikonu */}
          <RevoraButton href="tel:05374945545">HEMEN ARA</RevoraButton>
        </div>

        {/* Mobil menü */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur border-b border-white/10 z-50">
            <nav className="flex flex-col px-4 py-4 gap-4">
              {nav.map((n) => {
                const sectionId = n.href.substring(1);
                const isActive = activeSection === sectionId;
                const handleMobileClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                  if (n.href.startsWith("#")) {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    const targetElement = document.getElementById(sectionId);
                    if (targetElement) {
                      const navbar = document.querySelector("header");
                      const navbarHeight = navbar ? navbar.offsetHeight : 100;
                      const elementTop = targetElement.offsetTop;
                      const offsetPosition = elementTop - navbarHeight;
                      window.scrollTo({
                        top: Math.max(0, offsetPosition),
                        behavior: "smooth"
                      });
                    }
                  }
                };
                return (
                  <a
                    key={n.href}
                    href={n.href}
                    onClick={handleMobileClick}
                    className={`text-base font-medium tracking-wide uppercase transition-colors py-2 ${isActive
                      ? "text-[rgb(var(--neon))]"
                      : "text-white/70 hover:text-[rgb(var(--neon))]"
                      }`}
                  >
                    {n.label}
                  </a>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

