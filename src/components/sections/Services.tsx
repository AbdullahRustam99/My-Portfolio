"use client";
import { motion } from "framer-motion";
import { Bot, Monitor, Server } from "lucide-react";

const services = [
  {
    title: "Agentic AI Development",
    description:
      "I build autonomous AI agents that can reason, plan, and execute complex tasks. From LLM-powered chatbots to multi-agent orchestration systems, I create intelligent solutions that automate workflows and drive efficiency.",
    icon: Bot,
  },
  {
    title: "Frontend Development",
    description:
      "Modern, responsive user interfaces built with React, Next.js, and TypeScript. I craft pixel-perfect, performant UIs with smooth animations and intuitive user experiences.",
    icon: Monitor,
  },
  {
    title: "Backend Development",
    description:
      "Scalable server-side applications, APIs, and database architectures using Node.js, Python, and FastAPI. I design robust systems that handle complex business logic.",
    icon: Server,
  },
  
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Services() {
  return (
    <section id="services" className="px-6 py-12 lg:px-28 lg:py-16 scroll-mt-24">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center font-extrabold text-3xl sm:text-4xl text-primary-accent mb-8 lg:mb-12"
      >
        Services
      </motion.h1>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={item}
            className="border border-primary-accent/30 rounded-2xl p-8 hover:border-primary-accent transition-colors duration-300 flex flex-col items-center text-center gap-4"
          >
            <div className="p-4 rounded-full bg-primary-accent/10">
              <service.icon className="w-10 h-10 text-primary-accent" />
            </div>
            <h3 className="text-xl font-bold">{service.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
