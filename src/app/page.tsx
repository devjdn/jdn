import { FadeInSection } from "@/components/ui/fade-in-section";
import { Briefcase, Code2, Globe } from "lucide-react";
import {
    SiNextdotjs,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    // SiSvelte,
    SiPnpm,
    SiVercel,
} from "react-icons/si";
import { IconType } from "react-icons";

type TechTypeArray = Array<{ name: string; icon: IconType }>;

const tech: TechTypeArray = [
    { name: "Next.js", icon: SiNextdotjs },
    { name: "React", icon: SiReact },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "TypeScript", icon: SiTypescript },
    // { name: "Svelte", icon: SiSvelte },
    { name: "pnpm", icon: SiPnpm },
    { name: "Vercel", icon: SiVercel },
];

export default function Home() {
    return (
        <div className="space-y-24">
            <FadeInSection delay={0.2}>
                <h1 className="text-2xl xl:text-3xl 2xl:text-4xl font-semibold tracking-tight">
                    {"Hi, I'm Jayden 👋"}
                </h1>
            </FadeInSection>
            <FadeInSection delay={0.3}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                    <div className="col-span-1 md:col-span-2 flex flex-col justify-between rounded-2xl p-6 bg-secondary font-semibold tracking-tight">
                        <div className="flex items-center gap-2">
                            <Briefcase className="stroke-muted-foreground" />
                            <p className="md:text-lg text-muted-foreground">
                                What I do
                            </p>
                        </div>
                        <div className="max-w-prose">
                            <h2 className="max-w-prose text-xl xl:text-2xl">
                                I build modern web apps with the goal of helping
                                push the web towards a faster, simpler future.
                            </h2>
                        </div>
                    </div>
                    <div className="col-span-1 w-full flex flex-col justify-between rounded-2xl p-6 bg-secondary font-semibold tracking-tight">
                        <div className="flex items-center gap-2">
                            <Globe className="stroke-muted-foreground" />
                            <p className="md:text-lg text-muted-foreground">
                                Location
                            </p>
                        </div>
                        <h2 className="text-xl xl:text-2xl">United Kingdom</h2>
                    </div>
                    <div className="row-span-2 md:row-span-1 col-span-full w-full flex flex-col justify-between rounded-2xl p-6 bg-secondary font-semibold tracking-tight">
                        <div className="flex items-center gap-2">
                            <Code2 className="stroke-muted-foreground" />
                            <p className="md:text-lg text-muted-foreground">
                                Tech stack
                            </p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 flex-1">
                            {tech.map((item) => (
                                <div
                                    key={item.name}
                                    className="flex flex-col items-center justify-center gap-2 group"
                                >
                                    <item.icon className="w-8 h-8 text-foreground" />
                                    <span className="text-xs text-center">
                                        {item.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </FadeInSection>
        </div>
    );
}
