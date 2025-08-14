import {
    SiNextdotjs,
    SiReact,
    SiTailwindcss,
    SiCss3,
    SiTypescript,
    SiSvelte,
    SiPnpm,
    SiVercel,
} from "react-icons/si";
import { IconType } from "react-icons";

type TechTypeArray = Array<{ name: string; icon: IconType; fluency?: number }>;

const tech: TechTypeArray = [
    { name: "Next.js", icon: SiNextdotjs, fluency: 80 },
    { name: "React", icon: SiReact, fluency: 80 },
    { name: "Tailwind CSS", icon: SiTailwindcss, fluency: 90 },
    { name: "TypeScript", icon: SiTypescript, fluency: 70 },
    { name: "Svelte", icon: SiSvelte, fluency: 50 },
    { name: "pnpm", icon: SiPnpm, fluency: 70 },
    { name: "Vercel", icon: SiVercel },
];

export default function TechGrid() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
            {tech.map((t, i) => (
                <div
                    className="p-4 flex flex-col items-center justify-center gap-6 aspect-square hover:bg-secondary/40 rounded-2xl transition-colors duration-150"
                    key={i}
                >
                    <p className="">{t.name}</p>
                    <t.icon className="size-8" />

                    {t.fluency && (
                        <div className="rounded-sm bg-secondary h-2 w-20 p-0">
                            <div
                                className="h-full rounded-sm bg-foreground"
                                style={{ width: `${t.fluency}%` }}
                            />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
