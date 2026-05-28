
import type { Metadata } from "next";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Michroma, Orbitron, VT323, Audiowide, Share, Manrope, Cairo, Chivo, Mulish, Exo_2, Spline_Sans_Mono, Fira_Code } from "next/font/google";
import "./globals.css";
import Loader from "@/components/ui/preloader"

const geistSans = Fira_Code({
  weight: "400",
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Orbitron({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdullah Rustam | Agentic AI Engineer & Full-Stack Developer",
  description: "Portfolio of Abdullah Rustam — Agentic AI Engineer, Full-Stack Developer, Frontend Developer, Backend Developer, and DevOps Engineer specializing in autonomous AI agents and modern web applications.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-[1440px] mx-auto`}
      >
        <Loader />
        {children}
      </body>
    </html>
  );
}
