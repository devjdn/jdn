"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="flex items-center gap-1">
            <Button
                variant={theme === "system" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setTheme("system")}
                className="rounded-full size-8 p-0"
            >
                <Monitor className="size-4" />
                <span className="sr-only">System theme</span>
            </Button>

            <Button
                variant={theme === "light" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setTheme("light")}
                className="rounded-full size-8 p-0"
            >
                <Sun className="size-4" />
                <span className="sr-only">Light theme</span>
            </Button>

            <Button
                variant={theme === "dark" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setTheme("dark")}
                className="rounded-full size-8 p-0"
            >
                <Moon className="size-4" />
                <span className="sr-only">Dark theme</span>
            </Button>
        </div>
    );
}
