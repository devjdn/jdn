import Link from "next/link";
import ThemeSwitcher from "./theme-switcher";
import { Separator } from "./separator";

export default function Header() {
    const links = [
        {
            name: "Home",
            href: "/",
        },
        {
            name: "Projects",
            href: "/projects",
        },
        {
            name: "About Me",
            href: "/about-me",
        },
        // { name: "Music", href: "/music", icon: HeadphonesIcon },
    ];
    return (
        <header className="">
            <div className="*:py-4 *:px-4 *:md:px-8 flex items-center justify-between md:grid md:grid-cols-[1fr_3fr] lg:grid-cols-2 font-mono uppercase [&_a:hover]:underline">
                <div className="">
                    <Link href={"/"} className="w-fit">
                        <p>jdn.sh</p>
                    </Link>
                </div>

                <div className="hidden md:grid grid-flow-col">
                    {links.map((l, i) => (
                        <Link href={l.href} key={i}>
                            <p>{l.name}</p>
                        </Link>
                    ))}
                    <ThemeSwitcher />
                </div>
            </div>
        </header>
    );
}
