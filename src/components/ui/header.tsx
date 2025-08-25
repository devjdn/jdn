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
    { name: "Home", href: "/" },
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
                    <div className="flex gap-2 items-center">
                        {/* <div className="aspect-square bg-pink h-12 rounded-sm" /> */}
                        <div className="flex flex-col justify-start items-start text-lg font-semibold tracking-tight leading-tight">
                            <span>{"jdn.sh"}</span>
                            <span className=" text-muted-foreground">
                                {"Web Developer"}
                            </span>
                        </div>
                    </div>

                    <div className="hidden lg:flex gap-8">
                        <nav className="flex flex-row gap-8 text-right">
                            {links.map((l, i) => (
                                <Link className="group" href={l.href} key={i}>
                                    <span
                                        className={clsx(
                                            "font-semibold text-lg group-hover:text-foreground transition-colors duration-150 leading-tight",
                                            {
                                                "text-muted-foreground":
                                                    pathname !== l.href,
                                            },
                                            {
                                                "text-foreground":
                                                    pathname === l.href,
                                            }
                                        )}
                                    >
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
