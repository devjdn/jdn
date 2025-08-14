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
        <div className="flex items-center rounded-full border">
            <Button
                variant={theme === "system" ? "default" : "ghost"}
                size="sm"
                onClick={() => setTheme("system")}
                className="rounded-full h-6 w-8 p-0"
            >
                <Monitor className="size-3" />
                <span className="sr-only">System theme</span>
            </Button>

            <Button
                variant={theme === "light" ? "default" : "ghost"}
                size="sm"
                onClick={() => setTheme("light")}
                className="rounded-full h-6 w-8 p-0"
            >
                <Sun className="size-3" />
                <span className="sr-only">Light theme</span>
            </Button>

            <Button
                variant={theme === "dark" ? "default" : "ghost"}
                size="sm"
                onClick={() => setTheme("dark")}
                className="rounded-full h-6 w-8 p-0"
            >
                <Moon className="size-3" />
                <span className="sr-only">Dark theme</span>
            </Button>
        </div>
    );
}
