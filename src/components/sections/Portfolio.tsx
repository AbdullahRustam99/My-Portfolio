"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FolderCode } from "lucide-react";
import projects from "@/data/projects.json";
import { useState } from "react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="px-6 py-12 lg:px-28 lg:py-16 scroll-mt-24">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center font-extrabold text-3xl sm:text-4xl text-primary-accent mb-8 lg:mb-12"
      >
        Portfolio
      </motion.h1>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </section>
  );
}

function ProjectCard({ project }: { project: typeof projects[number] }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      variants={item}
      className="border border-primary-accent/20 rounded-3xl overflow-hidden hover:border-primary-accent/50 transition-all duration-300 flex flex-col"
    >
      <div className="w-full h-60 bg-primary-accent/5 flex items-center justify-center overflow-hidden">
        {imgError ? (
          <FolderCode className="w-16 h-16 text-primary-accent/30" />
        ) : (
          <Image
            src={project.img}
            alt={project.title}
            width={600}
            height={400}
            className="object-cover object-center w-full h-full hover:scale-105 transition-transform duration-500"
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold mb-2">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.skills.map((skill) => (
            <span
              key={skill}
              className="px-2.5 py-1 text-xs rounded-full bg-primary-accent/10 text-primary-accent border border-primary-accent/20"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="flex gap-3 mt-auto">
          <Button variant="outline" size="sm" className="flex-1 gap-2" asChild>
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" />
              Live
            </a>
          </Button>
          <Button variant="outline" size="sm" className="flex-1 gap-2" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              Code
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
