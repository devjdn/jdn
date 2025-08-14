import { FadeInSection } from "@/components/ui/fade-in-section";
import Showcase from "@/components/ui/home/showcase";
import TechGrid from "@/components/ui/home/tech-grid";
import Image from "next/image";

export default function Home() {
    return (
        <div className="space-y-48">
            <FadeInSection delay={0.2}>
                <div className="max-w-[65ch]">
                    <h1 className="text-xl md:text-2xl font-semibold tracking-tight">
                        I&apos;m Jayden, a web developer based in the UK. I
                        build modern web apps with the goal of helping push the
                        web towards a faster, simpler future.
                    </h1>
                </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
                <div className="pt-6 border-t space-y-12">
                    <h2 className="text-lg md:text-xl font-semibold tracking-tight">
                        Showcase
                    </h2>
                    <Showcase />
                </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
                <div className="pt-6 border-t space-y-12">
                    <h2 className="text-lg tracking-tight">
                        What I build with
                    </h2>
                    <TechGrid />
                </div>
            </FadeInSection>
        </div>
    );
}
