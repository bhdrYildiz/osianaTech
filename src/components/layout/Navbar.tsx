"use client";

import { nav } from "@/data/landing";
import RevoraButton from "../motion/RevoraButton";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        {/* Logo - Yeşil C + REVORA + PIXELS PURPOSE */}
        <a href="#home" className="flex items-center gap-2">
          <div className="relative w-8 h-8">
            <img
              src="/icon-28.png"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-semibold tracking-tight text-white">OSIANA TECH</span>
            <span className="text-xs sm:text-sm lg:text-base tracking-wide text-white/60 uppercase">WEB SOLUTIONS</span>
          </div>
        </a>

        <nav className="hidden gap-4 lg:gap-8 md:flex">
          {nav.map((n, index) => (
            <a
              key={n.href}
              href={n.href}
              className={`text-sm lg:text-base font-medium tracking-wide uppercase whitespace-nowrap ${index === 0
                ? "text-[rgb(var(--neon))]"
                : "text-white/70 hover:text-white"
                }`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* Arama ikonu */}
          <RevoraButton href="#contact">FREE QUOTE</RevoraButton>
        </div>
      </div>
    </header>
  );
}

