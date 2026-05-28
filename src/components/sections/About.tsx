"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import aboutLight from "../../../public/img/aboutlight.png";
import aboutDark from "../../../public/img/aboutdark.png";
import { isDarkMode } from "@/lib/theme";

export default function About() {
  const [aboutimg, setAboutimg] = useState(aboutDark);

  useEffect(() => {
    setAboutimg(isDarkMode() ? aboutDark : aboutLight);
  }, []);

  return (
    <section id="about" className="min-h-screen px-6 py-12 lg:px-28 lg:py-16 scroll-mt-24">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center font-extrabold text-3xl sm:text-4xl text-primary-accent mb-8 lg:mb-12"
      >
        About Me
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16"
      >
        <div className="w-48 sm:w-64 lg:w-96 shrink-0 flex items-center justify-center">
          <Image
            src={aboutimg}
            alt="About Image"
            className="rounded-t-full w-full h-auto"
            priority
          />
        </div>
        <div className="flex-1 max-w-2xl">
          <p className="text-base sm:text-lg leading-relaxed text-foreground/90">
            I&apos;m Abdullah Rustam, an Agentic AI Engineer and Full-Stack Developer with
            expertise in building autonomous AI agents, intelligent automation systems,
            and responsive web applications.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-foreground/90 mt-4">
            With experience across the full development stack — from AI agent orchestration
            and LLM integration to modern frontend and backend architectures. I believe in writing clean, maintainable code and building systems that make a real impact.
          </p>
          <Button className="w-full sm:w-auto mt-6 bg-primary-accent hover:bg-secoundary-accent text-black font-semibold px-8 py-5 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_-5px_var(--primary-accent)]">
            Download CV
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
