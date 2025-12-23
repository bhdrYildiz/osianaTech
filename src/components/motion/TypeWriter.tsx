"use client";

import { useEffect, useMemo, useState } from "react";

type Props = {
    words: string[];
    className?: string;
    typeSpeedMs?: number;   // yazma hızı
    deleteSpeedMs?: number; // silme hızı
    holdMs?: number;        // kelime bitince bekleme
};

export default function Typewriter({
    words,
    className,
    typeSpeedMs = 80,
    deleteSpeedMs = 30,
    holdMs = 1500,
}: Props) {
    const list = useMemo(() => (words.length ? words : ["digital"]), [words]);

    const [w, setW] = useState(0);
    const [text, setText] = useState("");
    const [mode, setMode] = useState<"typing" | "holding" | "deleting">("typing");

    useEffect(() => {
        const current = list[w % list.length];

        const tick = () => {
            if (mode === "typing") {
                const next = current.slice(0, text.length + 1);
                setText(next);
                if (next === current) setMode("holding");
                return;
            }

            if (mode === "holding") {
                // bekleme
                setMode("deleting");
                return;
            }

            // deleting
            const next = current.slice(0, Math.max(0, text.length - 1));
            setText(next);
            if (next.length === 0) {
                setW((p) => p + 1);
                setMode("typing");
            }
        };

        const delay =
            mode === "typing" ? typeSpeedMs :
                mode === "deleting" ? deleteSpeedMs :
                    holdMs;

        const t = window.setTimeout(tick, delay);
        return () => window.clearTimeout(t);
    }, [list, w, text, mode, typeSpeedMs, deleteSpeedMs, holdMs]);

    return (
        <span className={className}>
            {text}
            <span className="inline-block w-[0.08em] translate-y-[2px] animate-pulse">|</span>
        </span>
    );
}
