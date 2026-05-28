"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send, Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle form submission
  };

  return (
    <section id="contact" className="px-6 py-12 lg:px-28 lg:py-16 scroll-mt-24">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center font-extrabold text-3xl sm:text-4xl text-primary-accent mb-8 lg:mb-12"
      >
        Contact
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
      >
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground">
            Have a project in mind or just want to say hi? I&apos;d love to hear from you.
          </p>
          <div className="flex items-center gap-4">
            <Mail className="w-5 h-5 text-primary-accent" />
            <span>abdullah@example.com</span>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="w-5 h-5 text-primary-accent" />
            <span>Available for remote work worldwide</span>
          </div>
          <div className="flex gap-4 pt-4">
            <a href="https://github.com/AbdullahRustam99" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-primary-accent/30 hover:bg-primary-accent/10 hover:border-primary-accent transition-all duration-300 hover:scale-110">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/abdullah-rustam" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-primary-accent/30 hover:bg-primary-accent/10 hover:border-primary-accent transition-all duration-300 hover:scale-110">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://twitter.com/abdullah_rustam" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-primary-accent/30 hover:bg-primary-accent/10 hover:border-primary-accent transition-all duration-300 hover:scale-110">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-xl bg-background border border-primary-accent/20 focus:border-primary-accent outline-none transition-colors"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-xl bg-background border border-primary-accent/20 focus:border-primary-accent outline-none transition-colors"
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-xl bg-background border border-primary-accent/20 focus:border-primary-accent outline-none resize-none transition-colors"
            />
          </div>
          <Button type="submit" className="bg-primary-accent hover:bg-secoundary-accent text-black w-full">
            Send Message
            <Send className="w-4 h-4" />
          </Button>
        </form>
      </motion.div>
    </section>
  );
}
