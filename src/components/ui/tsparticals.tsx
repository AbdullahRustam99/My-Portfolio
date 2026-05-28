"use client";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";
import type { ISourceOptions } from "@tsparticles/engine";

export const TSParticals = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options: ISourceOptions = {
    autoPlay: true,
    background: { color: { value: "transparent" }, opacity: 0 },
    fullScreen: { enable: false, zIndex: -1 },
    detectRetina: true,
    fpsLimit: 65,
    delay: 0.5,
    interactivity: {
      detectsOn: "window",
      events: {
        onClick: { enable: true, mode: ["push", "trail"] },
        onHover: { enable: true, mode: ["repulse"], parallax: { enable: false, force: 0.1, smooth: 50 } },
        resize: { delay: 90, enable: true },
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 200, duration: 0.4 },
        trail: { delay: 1, pauseOnStop: false, quantity: 1 },
      },
    },
    particles: {
      shape: {
        type: "image",
        options: {
          image: [
            { src: "/particales/ai-assistant.png", width: 25, height: 25 },
            { src: "/particales/AI.png", width: 25, height: 25 },
            { src: "/particales/wordpress.png", width: 25, height: 25 },
            { src: "/particales/folder2.png", width: 25, height: 25 },
            { src: "/particales/laptops.png", width: 25, height: 25 },
            { src: "/particales/CSS.png", width: 25, height: 25 },
            { src: "/particales/HTML.png", width: 25, height: 25 },
            { src: "/particales/JS.png", width: 25, height: 25 },
            { src: "/particales/next.js.png", width: 25, height: 25 },
            { src: "/particales/tailwindcss.png", width: 25, height: 25 },
            { src: "/particales/Pyhton.png", width: 25, height: 25 },
            { src: "/particales/python.png", width: 25, height: 25 },
            { src: "/particales/TS.png", width: 25, height: 25 },
            { src: "/particales/Node.js.png", width: 25, height: 25 },
            { src: "/particales/VScode.png", width: 25, height: 25 },
            { src: "/particales/GIT.png", width: 25, height: 25 },
          ],
        },
      },
      size: { value: 40 },
      move: { enable: true, speed: 3 },
      number: { value: 17 },
    },
    responsive: [
      {
        maxWidth: 768,
        options: {
          particles: {
            size: { value: 30 },
            number: { value: 6 },
            move: { speed: 1.5 },
          },
        },
      },
    ],
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    smooth: true,
    zLayers: 100,
    motion: { disable: true, reduce: { factor: 140, value: true } },
  };

  if (!init) return null;

  return (
    <Particles
      className="absolute w-full h-full top-0 left-0 z-10 opacity-70"
      id="tsparticles"
      options={options}
    />
  );
};
