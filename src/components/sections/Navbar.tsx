"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/img/logo.png";
import sun from "../../../public/img/sun.png";
import moon from "../../../public/img/moon.png";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { changeTheme } from "@/lib/theme";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#skill", label: "Skill" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [icon, setIcon] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    const isDark = html?.getAttribute("class") === "dark";
    setIcon(!isDark);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <motion.header
      initial={{ y: -90 }}
      animate={{ y: 0 }}
      transition={{ ease: "linear", duration: 0.7 }}
      className="sticky top-0 z-[100] bg-background/70 backdrop-blur-xl border-b border-primary-accent/10"
    >
      <nav className="flex items-center justify-between px-6 lg:px-12 h-16 max-w-[1440px] mx-auto">
        <motion.div
          initial={{ x: -150 }}
          animate={{ x: 0 }}
          transition={{ ease: "linear", duration: 0.6, delay: 0.6 }}
          className="shrink-0"
        >
          <Link href="/" onClick={handleNavClick}>
            <Image src={logo} alt="Logo" width={70} height={70} priority />
          </Link>
        </motion.div>

        <motion.ul
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "linear", duration: 0.6, delay: 0.6 }}
          className="hidden lg:flex items-center gap-8 list-none"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative text-sm font-medium tracking-wide uppercase text-foreground/80 hover:text-primary-accent transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ x: 250, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "linear", duration: 0.6, delay: 0.6 }}
          className="hidden lg:flex items-center gap-3"
        >
          <Button
            size="sm"
            className="bg-primary-accent hover:bg-secoundary-accent text-black font-semibold px-5 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_-5px_var(--primary-accent)]"
          >
            Let&apos;s Connect
          </Button>
          <button
            onClick={() => { changeTheme(); setIcon(!icon); }}
            className="p-2 rounded-full border border-primary-accent/30 hover:border-primary-accent transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_-3px_var(--primary-accent)]"
            aria-label="Toggle theme"
          >
            <Image
              src={icon ? moon : sun}
              alt="theme toggle"
              width={22}
              height={22}
            />
          </button>
        </motion.div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 rounded-md border border-primary-accent/30 text-foreground hover:text-primary-accent transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[199] bg-black/60"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="lg:hidden fixed pb-4 right-0 w-full sm:max-w-sm z-[200] flex flex-col items-center gap-5 bg-background/94 "
          >
            <ul className="flex flex-col gap-6 list-none">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={handleNavClick}
                    className="text-2xl tracking-wide text-foreground/80 hover:text-primary-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 mt-4">
              <Button
                size="lg"
                className="bg-primary-accent hover:bg-secoundary-accent text-black font-semibold px-8"
              >
                Let&apos;s Connect
              </Button>
              <button
                onClick={() => { changeTheme(); setIcon(!icon); }}
                className="p-3 rounded-full border border-primary-accent/30"
                aria-label="Toggle theme"
              >
                <Image
                  src={icon ? moon : sun}
                  alt="theme toggle"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
