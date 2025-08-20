import type { Metadata } from "next";
import { Geist_Mono, Inter, Borel } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/components/ui/header";
import { FadeInSection } from "@/components/ui/fade-in-section";

const borel = Borel({
    variable: "--font-borel",
    subsets: ["latin"],
    weight: "400",
});

const interSans = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "jdn",
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
                className={`${interSans.variable} ${borel.variable} ${geistMono.variable} antialiased`}
            >
                <ThemeProvider defaultTheme="system">
                    <FadeInSection delay={0.1}>
                        <Header />
                    </FadeInSection>
                    <main className="px-4 md:px-12 py-8">{children}</main>
                </ThemeProvider>
            </body>
        </html>
    );
}
