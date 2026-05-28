"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../public/img/logo.png"

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 600);
    const remove = setTimeout(() => setLoading(false), 900);
    return () => { clearTimeout(timer); clearTimeout(remove); };
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: fadeOut ? 0 : 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center gap-6"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Image src={logo} alt="Loading..." width={120} height={120} priority />
      </motion.div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 120 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="h-1 bg-primary-accent rounded-full"
      />
    </motion.div>
  );
}
