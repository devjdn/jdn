import { FadeInSection } from "@/components/ui/fade-in-section";
import { Briefcase, Code2, Globe, Palette, User } from "lucide-react";
import {
    SiNextdotjs,
    SiReact,
    SiTailwindcss,
    SiTypescript,
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
    { name: "pnpm", icon: SiPnpm },
    { name: "Vercel", icon: SiVercel },
];

export default function Home() {
    return (
        <div className="space-y-24">
            <FadeInSection delay={0.3}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                    <FadeInSection
                        delay={0.4}
                        className="col-span-1 md:col-span-2 flex flex-col gap-2 justify-end rounded-3xl"
                    >
                        <h1 className="max-w-prose font-bold tracking-tighter text-4xl md:text-6xl">
                            {"Hi, I'm Jayden!"}
                        </h1>
                    </FadeInSection>
                    <FadeInSection
                        delay={0.35}
                        className="col-span-1 row-span-2 w-full flex flex-col justify-between rounded-3xl p-6 bg-secondary font-semibold tracking-tight"
                    >
                        <div className="flex items-center gap-2">
                            <Code2 className="" />
                            <p className="md:text-lg">Tools</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 flex-1">
                            {tech.map((item) => (
                                <div
                                    key={item.name}
                                    className="flex flex-col items-center justify-center gap-2 group"
                                >
                                    <item.icon className="size-12 text-foreground" />
                                    <span className="text-xs text-center">
                                        {item.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </FadeInSection>
                    <FadeInSection
                        delay={0.3}
                        className="col-span-1 w-full flex flex-col justify-between rounded-3xl p-6 bg-pink text-white font-semibold tracking-tight"
                    >
                        <div className="flex items-center gap-2">
                            <Briefcase className="stroke-primary-foreground" />
                            <p className="md:text-lg text-primary-foreground">
                                What I Do
                            </p>
                        </div>
                        <h2 className="max-w-prose text-xl xl:text-2xl">
                            I build modern web apps with the goal of helping
                            push the web towards a faster, simpler future.
                        </h2>
                    </FadeInSection>
                    <FadeInSection
                        delay={0.4}
                        className="col-span-1 w-full flex flex-col justify-between rounded-3xl p-6 bg-primary font-semibold tracking-tight"
                    >
                        <div className="flex items-center gap-2">
                            <Globe className="stroke-primary-foreground" />
                            <p className="md:text-lg text-primary-foreground">
                                Location
                            </p>
                        </div>
                        <h2 className="text-xl xl:text-2xl text-primary-foreground">
                            North Yorkshire, United Kingdom
                        </h2>
                    </FadeInSection>
                </div>
            </FadeInSection>
        </div>
    );
}
