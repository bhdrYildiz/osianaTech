"use client";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import RevoraButton from "../motion/RevoraButton";

// Eğri kayar metin component'i
function CurvedMarquee() {
  const x = useMotionValue(0);
  const text = "Call for project +90 530 389 71 63";

  useAnimationFrame((t, delta) => {
    const currentX = x.get();
    const speed = 150; // px per second
    const newX = currentX - (speed * delta) / 1000;

    // Text genişliğini tahmin et (yaklaşık)
    const textWidth = text.length * 60;

    if (newX < -textWidth) {
      x.set(0);
    } else {
      x.set(newX);
    }
  });

  return (
    <div className="absolute -bottom-20 left-0 right-0 w-full overflow-x-hidden pointer-events-none">
      <motion.div
        style={{ x }}
        className="flex whitespace-nowrap"
      >
        {Array.from({ length: 3 }).map((_, i) => (
          <span
            key={i}
            className="text-[120px] md:text-[140px] lg:text-[180px] xl:text-[220px] font-bold tracking-tight text-black/10 select-none mx-8"
            style={{ transform: 'rotate(-2deg)' }}
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative bg-white border-t border-black/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Sol taraf - Başlık ve İletişim Bilgileri */}
          <div className="flex flex-col">
            <div className="inline-flex items-center text-sm font-semibold tracking-[0.2em] uppercase text-black/60 w-fit mb-6">
              CONTACT US!
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black leading-tight mb-6">
              Have a project?<br />Get in touch!
            </h2>

            <p className="text-base text-black/60 leading-relaxed mb-8 max-w-md">
              Our success in creating business solutions is due in large part specially to talented and highly committed team.
            </p>

            {/* İletişim Bilgileri */}
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="text-[rgb(var(--neon))] mt-1 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span className="text-base text-black">185 15h Street, Office 478 Berlin</span>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="text-[rgb(var(--neon))] mt-1 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <span className="text-base text-black">+1 840 841 25 69</span>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="text-[rgb(var(--neon))] mt-1 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <span className="text-base text-black">info@example.com</span>
              </div>
            </div>
          </div>

          {/* Sağ taraf - Contact Form */}
          <div className="flex flex-col justify-center">
            <form className="space-y-6">
              {/* Name */}
              <div className="relative">
                <label className="block text-sm font-medium text-black mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-0 border-b-2 border-black/10 px-0 py-3 text-sm outline-none focus:border-[rgb(var(--neon))] transition-colors"
                  placeholder=""
                />
              </div>

              {/* Email */}
              <div className="relative">
                <label className="block text-sm font-medium text-black mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-transparent border-0 border-b-2 border-black/10 px-0 py-3 text-sm outline-none focus:border-[rgb(var(--neon))] transition-colors"
                  placeholder=""
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <label className="block text-sm font-medium text-black mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full bg-transparent border-0 border-b-2 border-black/10 px-0 py-3 text-sm outline-none focus:border-[rgb(var(--neon))] transition-colors"
                  placeholder=""
                />
              </div>

              {/* Subject */}
              <div className="relative">
                <label className="block text-sm font-medium text-black mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-0 border-b-2 border-black/10 px-0 py-3 text-sm outline-none focus:border-[rgb(var(--neon))] transition-colors"
                  placeholder=""
                />
              </div>

              {/* Message */}
              <div className="relative">
                <label className="block text-sm font-medium text-black mb-2">Message</label>
                <textarea
                  className="w-full bg-transparent border-0 border-b-2 border-black/10 px-0 py-3 text-sm outline-none focus:border-[rgb(var(--neon))] transition-colors min-h-[100px] resize-y"
                  placeholder=""
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <RevoraButton href="#contact" textColor="text-black">
                  Send Message
                </RevoraButton>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Eğri kayar metin - Alt kısım */}
      <CurvedMarquee />
    </section>
  );
}
