"use client";

import { motion } from "framer-motion";

export default function RotateBadge({
  text = "• DIGITAL AGENCY • IT SOLUTIONS •",
  className,
}: {
  text?: string;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
    >
      <div className="relative grid h-28 w-28 place-items-center rounded-full border border-white/20">
        <span className="text-xs tracking-[0.35em] uppercase text-white/70">
          {text}
        </span>
        <div
          className="absolute inset-0 rounded-full"
          style={{ boxShadow: `0 0 0 1px rgba(255,255,255,0.08)` }}
        />
      </div>
    </motion.div>
  );
}

