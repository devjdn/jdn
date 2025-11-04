"use client";

import * as React from "react";
import { CircleIcon } from "@phosphor-icons/react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
    const { theme, resolvedTheme, setTheme } = useTheme();
    const toggleTheme = () => {
        const currentResolvedTheme = resolvedTheme || theme;
        setTheme(currentResolvedTheme === "dark" ? "light" : "dark");
    };

    return (
        <button
            className="grid grid-cols-[16px_40px] items-center justify-start gap-2 [&_svg]:size-4 text-sm font-mono uppercase justify-self-end"
            onClick={toggleTheme}
        >
            <CircleIcon className="block dark:hidden" weight="fill" />
            <CircleIcon className="hidden dark:block" weight="bold" />
            <span className="block dark:hidden">Light</span>
            <span className="hidden dark:block">Dark</span>
        </button>
    );
}
