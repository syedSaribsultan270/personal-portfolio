import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Syed Sarib Sultan | UX Engineer, Creative Director, Head of Marketing",
  description: "I design, build, and grow digital experiences — blending UX engineering, creative direction, and performance marketing.",
  keywords: ["UX Engineer", "Creative Director", "Marketing", "SXTUDIOS", "Parhlai", "UI/UX Design", "Web Development"],
  authors: [{ name: "Syed Sarib Sultan" }],
  openGraph: {
    title: "Syed Sarib Sultan | UX Engineer & Creative Director",
    description: "I design, build, and grow digital experiences — blending UX engineering, creative direction, and performance marketing.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
