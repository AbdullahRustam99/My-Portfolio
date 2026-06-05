"use client";
import { motion } from "framer-motion";

const skillCategories = [
  {
    name: "AI & Agent Frameworks",
    skills: ["Open AI Agent SDK", "Clude Code CLI", "OpenAI Code CLI",],
  },
  {
    name: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Python", "FastAPI", "PostgreSQL", "MongoDB",],
  },
  {
    name: "Others",
    skills: ["Git", "Docker", "Vercel", "HuggingFace"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const categoryItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <section id="skill" className="px-6 py-12 lg:px-28 lg:py-16 scroll-mt-24">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center font-extrabold text-3xl sm:text-4xl text-primary-accent mb-8 lg:mb-12"
      >
        Skills
      </motion.h1>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.name}
            variants={categoryItem}
            className="border border-primary-accent/20 rounded-2xl p-6 hover:border-primary-accent/50 transition-colors"
          >
            <h3 className="text-lg font-bold mb-4 text-primary-accent">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm rounded-full bg-primary-accent/10 text-foreground border border-primary-accent/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
