import Reveal from "@/components/motion/Reveal";
import RevoraButton from "../motion/RevoraButton";
import Typewriter from "@/components/motion/TypeWriter";
import CenterBadge from "@/components/motion/CenterBadge";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 sm:px-6 lg:px-8 py-12 md:grid-cols-2 md:py-16 relative">
        {/* Ortadaki dönen badge - iki panelin tam ortasında */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
          <CenterBadge />
        </div>
        <div className="relative">
          <div className="absolute -left-10 -top-10 h-160 w-60 rounded-full bg-[rgb(var(--neon))] blur-2xl" />
          <div className="aspect-[4/5] w-full rounded-md bg-[rgb(var(--neon))] p-20 md:p-16 lg:p-24 text-black flex flex-col justify-between">
            <div>
              {/* Üstte DIGITAL AGENCY badge ve TypeWriter yan yana */}
              <div className="flex items-center gap-3 mb-8">
                <div className="inline-flex items-center rounded-full bg-black px-4 py-2 text-xs font-semibold tracking-[0.2em] uppercase text-white">
                  DIGITAL AGENCY
                </div>
                <Typewriter
                  words={["Web development", "Brand Strategy", "Creative content"]}
                  className="text-base md:text-lg font-semibold text-black"
                />
              </div>

              {/* Ana başlık - satır satır */}
              <Reveal>
                <h1 className="text-7xl md:text-7xl lg:text-7xl xl:text-6xl font-bold leading-[1.05] tracking-tight text-black">
                  Elevate your<br />
                  brand with<br />
                  digital<br />
                  precision.
                </h1>
              </Reveal>

              {/* Açıklama metni */}
              <Reveal className="mt-12">
                <p className="max-w-xs text-lg md:text-xl leading-relaxed text-black/90">
                  We're a full-service digital creative agency built at the intersection of strategy, design, and technology.
                </p>
              </Reveal>
            </div>

            {/* Altta buton */}
            <div className="mt-8">
              <RevoraButton href="#contact" variant="black">FREE CONSULTATION</RevoraButton>
            </div>
          </div>

        </div>

        <div className="relative">
          <div className="aspect-[4/5] w-full rounded-md border border-white/10 bg-white/5" />
          <div className="absolute bottom-6 left-6 rounded-xl bg-black/60 px-4 py-3 text-sm text-white/80 backdrop-blur">
            Best rated agency award • 2025
          </div>
        </div>
      </div>
    </section>
  );
}
