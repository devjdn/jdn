"use client";

import type React from "react";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FadeInSectionProps {
    className?: string;
    children: React.ReactNode;
    delay?: number;
}

export function FadeInSection({
    className,
    children,
    delay = 0,
}: FadeInSectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0.3 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay, ease: [0.25, 0.25, 0, 1] }}
            className={`${className}`}
        >
            {children}
        </motion.div>
    );
}
