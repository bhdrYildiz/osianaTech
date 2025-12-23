"use client";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";

export default function Marquee({
    text = "DIGITAL AGENCY • WEB SOLUTIONS •",
    speed = 70,
    className,
}: {
    text?: string;
    speed?: number;
    className?: string;
}) {
    const x = useMotionValue(0);

    useAnimationFrame((t, delta) => {
        const currentX = x.get();
        const newX = currentX - (speed * delta) / 1000;
        if (newX < -800) {
            x.set(0);
        } else {
            x.set(newX);
        }
    });

    return (
        <div className={"overflow-hidden border-y border-white/10 bg-[#07090b] " + (className ?? "")}>
            <motion.div style={{ x }} className="flex whitespace-nowrap py-6 text-2xl font-semibold text-white/20">
                {Array.from({ length: 8 }).map((_, i) => (
                    <span key={i} className="mx-6">{text}</span>
                ))}
            </motion.div>
        </div>
    );
}
