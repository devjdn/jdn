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
                    "sticky top-0 z-50 h-24 bg-background flex items-center gap-12 px-4 md:px-12 transition-colors duration-200"
                )}
            >
                <div className="flex-1 grid grid-cols-4 items-center tracking-tight text-sm">
                    <Link
                        href={"/"}
                        className="flex gap-1 items-center justify-self-start"
                    >
                        <div className="size-5 rounded-full bg-blue-circle" />
                        <span className="text-lg">jdn</span>
                    </Link>

                    <nav className="hidden lg:flex gap-12 items-center col-span-2 justify-self-center">
                        {links.map((l, i) => (
                            <Link className="group" href={l.href} key={i}>
                                <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-150">
                                    {l.name}
                                </span>
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden lg:block justify-self-end">
                        <ThemeSwitcher />
                    </div>
                </div>
            </header>
        </>
    );
}
