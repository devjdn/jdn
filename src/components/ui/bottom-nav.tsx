"use client";

import {
    HouseSimpleIcon,
    FolderSimpleIcon,
    FolderOpenIcon,
    HeadphonesIcon,
    UserCircleIcon,
    UserCircleDashedIcon,
    type Icon,
} from "@phosphor-icons/react";
import { Button } from "./button";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";

export default function BottomNav() {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;

    const links = [
        { name: "Home", href: "/", icon: HouseSimpleIcon },
        {
            name: "Projects",
            href: "/projects",
            icon: isActive("/projects") ? FolderOpenIcon : FolderSimpleIcon,
        },
        {
            name: "About Me",
            href: "/about-me",
            icon: isActive("/about-me") ? UserCircleIcon : UserCircleDashedIcon,
        },
        // { name: "Music", href: "/music", icon: HeadphonesIcon },
    ];

    return (
        <div className="fixed bottom-8 left-0 right-0 w-fit mx-auto rounded-full ring-inset ring-[1px] ring-border backdrop-blur-md backdrop-saturate-150 backdrop-brightness-150 bg-background/80 p-1">
            <div className="flex items-center gap-2">
                {links.map((l, i) => (
                    <Button
                        key={i}
                        variant={isActive(l.href) ? "default" : "ghost"}
                        className="rounded-full flex-col h-fit md:flex-row"
                        asChild
                    >
                        <Link href={l.href}>
                            <l.icon weight={"regular"} className="size-5" />
                            <span className="font-normal text-xs md:text-sm">
                                {l.name}
                            </span>
                        </Link>
                    </Button>
                ))}
            </div>
        </div>
    );
}
