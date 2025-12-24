"use client";

import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const loop = () => {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${x - 18}px, ${y - 18}px, 0)`;
        ref.current.style.opacity = "1";
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-3 w-3 rounded-full bg-[rgb(var(--neon))] opacity-0 transition-opacity duration-200"
    />
  );
}

