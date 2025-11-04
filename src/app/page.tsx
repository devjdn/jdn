import { Separator } from "@/components/ui/separator";

export default function Home() {
    return (
        <div className="flex flex-col gap-10 md:gap-12 lg:grid lg:grid-cols-2 lg:gap-0 *:px-4 *:md:px-8">
            <section className="space-y-10 md:space-y-14 lg:space-y-16">
                <div className="space-y-6 md:space-y-8 lg:space-y-10">
                    {/* <h2 className="font-mono uppercase text-muted-foreground text-sm md:text-base">
                        A Quick Introduction
                    </h2> */}

                    <div className="space-y-6 md:space-y-8 lg:space-y-10 text-xl md:text-2xl lg:text-3xl supports-text-pretty:text-pretty max-w-4xl leading-normal md:leading-snug tracking-tighter text-muted-foreground">
                        <p>
                            Hi, I&apos;m{" "}
                            <span className="text-foreground">Jayden</span>.
                            I&apos;m a{" "}
                            <span className="text-foreground">
                                frontend web developer
                            </span>{" "}
                            from the <span className="text-foreground">UK</span>
                            , who believes in making the web a simple, efficient
                            experience for the user.
                        </p>

                        <p>
                            I&apos;m currently in my{" "}
                            <span className="text-foreground">
                                second year of university
                            </span>
                            , I will achieve my{" "}
                            <span className="text-foreground">
                                BSc (Hons) Applied Computing
                            </span>{" "}
                            in the{" "}
                            <span className="text-foreground">
                                summer of 2027
                            </span>
                            .
                        </p>

                        <p>
                            In my spare time, I love listening to music.
                            It&apos;s my way to unwind and stay calm when life
                            starts to get hectic.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
