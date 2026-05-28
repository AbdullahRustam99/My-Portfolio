"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { TSParticals } from "@/components/ui/tsparticals";
import { FlickeringGrid } from "@/components/ui/shadcn-io/flickering-grid";
import hireme from "../../../public/img/hireme.png";
import resume from "../../../public/img/download.png";
import Typewriter from "typewriter-effect";

const greetingWords = [
  { text: "Hey" },
  { text: "There!" },
  { text: "I'm" },
];

const roles = [
  "Agentic AI Engineer",
  "Full-Stack Developer",
  "Frontend Developer",
  "Backend Developer",

];

export default function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
      <TSParticals />
      <FlickeringGrid
        className="absolute inset-0"
        squareSize={4}
        gridGap={6}
        flickerChance={0.3}
        color="rgb(100, 100, 100)"
        maxOpacity={0.2}
      />

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6, ease: "linear" }}
        className="relative z-50 w-full max-w-4xl mx-auto px-6 lg:px-8 py-16 text-center lg:text-left"
      >
        <TypewriterEffect
          className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4"
          cursorClassName="bg-transparent"
          words={greetingWords}
        />

        <div className="mb-6">
          <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold inline-block">
            <Typewriter
              options={{
                strings: roles,
                autoStart: true,
                loop: true,
                cursorClassName: "text-black",
                wrapperClassName: "text-black bg-primary-accent px-3 py-1 rounded-md inline-block",
                delay: 80,
                deleteSpeed: 40,
              }}
            />
          </span>
        </div>

        <p className=" lg:block text-lg max-w-2xl leading-relaxed">
          I build autonomous AI agents, modern frontends, scalable backends, 
          Passionate about creating intelligent systems that solve real-world problems.
        </p>

        

        <motion.div
          initial={{ scale: 0, x: 1000 }}
          animate={{ scale: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: "linear" }}
          className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8"
        >
          <Button className="bg-primary-accent hover:bg-secoundary-accent text-black font-semibold text-base sm:text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_-5px_var(--primary-accent)] gap-3">
            Hire Me
            <Image src={hireme} alt="" width={40} height={40} className="hidden sm:block" />
          </Button>
          <Button variant="outline" className="text-base sm:text-lg px-8 py-6 border-primary-accent/40 hover:border-primary-accent hover:bg-primary-accent/10 transition-all duration-300 hover:scale-105 gap-3">
            Resume
            <Image src={resume} alt="" width={32} height={32} className="hidden sm:block" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
