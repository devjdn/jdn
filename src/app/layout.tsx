import type { Metadata } from "next";
import { Geist_Mono, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/components/ui/header";
import BottomNav from "@/components/ui/bottom-nav";

const interSans = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
    variable: "--font-playfair-display",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "jdn.sh",
    description:
        "This is my personal website. Here you'll be able to see highlights of my work, information about what I like to do besides writing code, and methods to get in contact with me. Enjoy!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${interSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased min-h-screen`}
            >
                <ThemeProvider defaultTheme="dark" attribute={"class"}>
                    <Header />
                    <main className="py-12 md:py-18 lg:py-24">{children}</main>
                </ThemeProvider>
            </body>
        </html>
    );
}
