"use client";

import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import clsx from "clsx";
import ThemeSwitcher from "./theme-switcher";

type LinkType = Array<{
    name: string;
    href: string;
}>;

const links: LinkType = [
    { name: "Projects", href: "/projects" },
    { name: "About me", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact me", href: "/contact" },
];

export default function Header() {
    const { ref, inView, entry } = useInView({
        threshold: 0,
    });
    const pathname = usePathname();
    const { theme } = useTheme();
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    return (
        <>
            <div className="h-0" ref={ref} />

            <header
                className={clsx(
                    "sticky top-0 h-14 flex justify-between items-center gap-12 px-4 md:px-12 transition-colors duration-200"
                )}
            >
                <Link href={"/"} className="flex gap-1 items-center">
                    {/* <div className="size-5 rounded-full bg-blue-700 data-[theme=dark]:bg-blue-500"/> */}
                    <span className="tracking-tight">jdn</span>
                </Link>

                <div>
                    <ThemeSwitcher />
                </div>
            </header>
        </>
    );
}
