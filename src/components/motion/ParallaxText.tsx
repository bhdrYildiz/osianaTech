"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxText({
  text,
  className,
  from = 40,
  to = -40,
}: {
  text: string;
  className?: string;
  from?: number;
  to?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [from, to]);

  return (
    <div ref={ref} className="relative">
      <motion.div style={{ y }} className={className}>
        {text}
      </motion.div>
    </div>
  );
}

