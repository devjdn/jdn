import { FadeInSection } from "@/components/ui/fade-in-section";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <FadeInSection delay={0.2}>
                <p className="text-xl tracking-tight max-w-[65ch] text-left">
                    I&apos;m Jayden, a web developer based in the UK. I create
                    modern, minimal websites with a focus on usability and
                    detail. I hope you like what you see!
                </p>
            </FadeInSection>
        </div>
    );
}
