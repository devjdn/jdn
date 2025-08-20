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
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
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
                    "top-0 z-50 py-8 flex items-center gap-12 px-4 md:px-12 transition-colors duration-200"
                )}
            >
                <div className="flex-1 flex justify-between items-start tracking-tight">
                    <Link
                        href={"/"}
                        className="flex gap-1 items-center justify-self-start"
                    >
                        <span className="text-2xl font-cursive tracking-tight">
                            jdn
                        </span>
                    </Link>

                    <div className="hidden lg:flex gap-8">
                        <div>
                            <ThemeSwitcher />
                        </div>
                        <nav className="flex flex-col text-right">
                            {links.map((l, i) => (
                                <Link className="group" href={l.href} key={i}>
                                    <span className="text-muted-foreground font-semibold text-lg group-hover:text-foreground transition-colors duration-150">
                                        {l.name}
                                    </span>
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}
