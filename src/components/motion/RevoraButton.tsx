"use client";

import { motion } from "framer-motion";

export default function RevoraButton({
    children,
    href = "#",
    variant = "neon",
    textColor: customTextColor,
}: {
    children: React.ReactNode;
    href?: string;
    variant?: "neon" | "black";
    textColor?: string;
}) {
    const isBlack = variant === "black";
    const circleColor = isBlack ? "bg-black" : "bg-[rgb(var(--neon))]";
    const textColor = customTextColor || (isBlack ? "text-white" : "text-white");
    const borderColor = isBlack ? "border-black/20" : "border-white/10";

    const isClickable = href && href !== "#";
    const isHashLink = href?.startsWith("#");
    const MotionComponent = isClickable ? motion.a : motion.div;

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        if (isHashLink) {
            e.preventDefault();
            e.stopPropagation();
            const sectionId = href.substring(1);
            const targetElement = document.getElementById(sectionId);
            if (targetElement) {
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        const navbar = document.querySelector("header");
                        const navbarHeight = navbar ? navbar.offsetHeight : 100;
                        const elementTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
                        const offsetPosition = elementTop - navbarHeight;

                        window.scrollTo({
                            top: Math.max(0, offsetPosition),
                            behavior: "smooth"
                        });
                    });
                });
            }
        }
    };

    const motionProps = isClickable
        ? { href, onClick: isHashLink ? handleClick : undefined } as any
        : {};

    return (
        <MotionComponent
            {...motionProps}
            className={`relative inline-flex items-center overflow-hidden rounded-full border ${borderColor} px-6 py-3 ${!isClickable ? 'cursor-default' : 'cursor-pointer'}`}
            initial="rest"
            whileHover="hover"
            whileTap={isHashLink ? { scale: 0.98 } : undefined}
            animate="rest"
            style={{ WebkitTapHighlightColor: 'transparent' }}
        >
            <motion.span
                className={`absolute top-1/2 h-10 w-10 -translate-y-1/2 rounded-full ${circleColor} pointer-events-none`}
                variants={{
                    rest: { width: 40, height: 40, left: 8 },
                    hover: { width: "100%", height: "100%", left: 0 },
                }}
                transition={{ type: "spring", stiffness: 120, damping: 30 }}
            />

            {/* normal label */}
            <motion.span
                className={`relative z-10 pl-10 text-xs font-semibold tracking-[0.22em] uppercase ${textColor} pointer-events-none`}
                variants={{ rest: { opacity: 1, x: 0 }, hover: { opacity: 0, x: 6 } }}
                transition={{ duration: 0.2 }}
            >
                {children}
            </motion.span>

            {/* hover label centered */}
            <motion.span
                className={`pointer-events-none absolute inset-0 z-10 flex items-center justify-center text-xs font-semibold tracking-[0.22em] uppercase ${textColor}`}
                variants={{ rest: { opacity: 0, x: -6 }, hover: { opacity: 1, x: 0 } }}
                transition={{ duration: 0.3 }}
            >
                {children}
            </motion.span>
        </MotionComponent>
    );
}
