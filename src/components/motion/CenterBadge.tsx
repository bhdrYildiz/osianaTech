"use client";

import { motion } from "framer-motion";

export default function CenterBadge() {
    return (
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="relative h-32 w-32 rounded-full bg-white shadow-lg border border-[rgb(var(--neon))]/20 flex items-center justify-center"
        >
            {/* İç logo - PNG resim */}
            <div className="relative w-12 h-12 flex items-center justify-center">
                <img
                    src="/logoNew.png"
                    alt="Logo"
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Dairesel metin - SVG ile */}
            <svg
                className="absolute inset-0 pointer-events-none"
                width="128"
                height="128"
                viewBox="0 0 128 128"
            >
                <defs>
                    <path
                        id="circle-path-center"
                        d="M 64 64 m -48, 0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0"
                    />
                </defs>
                <text
                    fontSize="9"
                    fill="black"
                    fontWeight="600"
                    letterSpacing="0.20em"
                    fontFamily="sans-serif"
                >
                    <textPath href="#circle-path-center" startOffset="0%">
                        DANIŞMANLIK * GELİŞTİRME * WEB ÇÖZÜMLERİ *
                    </textPath>
                </text>
            </svg>
        </motion.div>
    );
}

