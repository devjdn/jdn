import { FadeInSection } from "@/components/ui/fade-in-section";

export default function AboutPage() {
    return (
        <div className="max-w-prose mx-auto space-y-8">
            <FadeInSection delay={0.2} className="">
                <h1 className="font-bold tracking-tighter text-4xl md:text-6xl">
                    {"About Me"}
                </h1>
            </FadeInSection>
            <FadeInSection delay={0.25} className="">
                <h2 className="font-bold tracking-tighter text-2xl md:text-4xl mb-2">
                    {"The Basic Overview"}
                </h2>
                <p className="text-lg text-muted-foreground font-semibold tracking-tight">
                    To be blunt, I&apos;m Jayden, a web developer and student
                    from North Yorkshire, United Kingdom. However, I have a lot
                    of interests outside of sitting at my desk writing code. For
                    example, I love listening to music, playing games with my
                    friends, and walks at sunset and sunrise.
                </p>
            </FadeInSection>
            <FadeInSection delay={0.3} className="">
                <h2 className="font-bold tracking-tighter text-2xl md:text-4xl mb-2">
                    {"My Love for Music"}
                </h2>
                <p className="text-lg text-muted-foreground font-semibold tracking-tight">
                    To be blunt, I&apos;m Jayden, a web developer and student
                    from North Yorkshire, United Kingdom. However, I have a lot
                    of interests outside of sitting at my desk writing code. For
                    example, I love listening to music, playing games with my
                    friends, and walks at sunset and sunrise.
                </p>
            </FadeInSection>
        </div>
    );
}
