import BetweenSpins from "@/../public/Screenshot 2025-08-14 at 20-54-27 Between Spins.png";
import NASA from "@/../public/Screenshot 2025-08-14 at 20-56-28 NASA API Explorer.png";
import { ArrowUpRight } from "lucide-react";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

type ShowcaseTypeArray = Array<{
    name: string;
    image: StaticImageData;
    link: string;
}>;
const showcaseItems: ShowcaseTypeArray = [
    {
        name: "Between Spins Music Blog",
        image: BetweenSpins,
        link: "https://www.betweenspins.com",
    },
    {
        name: "NASA API Explorer",
        image: NASA,
        link: "https://www.nasaexplorer.vercel.app",
    },
];

export default function Showcase() {
    return (
        <div className="flex flex-col md:grid md:grid-cols-2 gap-x-6 gap-y-12">
            {showcaseItems.map((s, i) => (
                <div className="space-y-3" key={i}>
                    <div className="relative border rounded-2xl">
                        <Image
                            height={500}
                            width={800}
                            src={s.image.src}
                            alt={s.name}
                            className="rounded-2xl"
                        />
                    </div>
                    <Link href={s.link} target="_blank" className="group">
                        <div className="flex gap-2 items-center">
                            <ArrowUpRight className="size-4 stroke-muted-foreground group-hover:stroke-foreground transition-colors duration-100" />
                            <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-100">
                                {s.name}
                            </p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}
