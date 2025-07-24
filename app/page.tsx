"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import Lenis from "lenis";
import { BackgroundLines } from "./components/ui/background-lines";
import { motion } from "motion/react";
import { AuroraBackground } from "./components/ui/aurora-background";
import { FlipWords } from "./components/ui/flip-words";

gsap.registerPlugin(useGSAP);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  /* ---  GSAP character split  --- */
  useGSAP(
    () => {
      if (!containerRef.current) return;

      const hero = new SplitType(
        containerRef.current.querySelector("h1") as HTMLElement,
        { types: "chars" }
      );

      gsap.from(hero.chars, {
        yPercent: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power4.out",
      });
    },
    { scope: containerRef }
  );

  /* ---  Lenis smooth‑scroll  --- */
  useEffect(() => {
    const lenis = new Lenis({});

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => lenis.destroy(); // 🚿 clean‑up
  }, []);

  const words = [
    "Competitve Coding",
    "Machine Learning",
    "Web Development",
    "Graphic Designing",
  ];

  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <div
        ref={containerRef}
        className="home w-screen h-svh flex flex-col justify-center items-center text-center"
      >
        <h1 className="font-inter bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          D
          <span className="font-space-grotesk tracking-normal ml-2">
            Coders
          </span>
          <span className="ml-2">Squad</span>
        </h1>

        {/* FlipWords RIGHT BELOW h1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
          className="text-xl md:text-3xl lg:text-4xl font-normal text-neutral-600 dark:text-neutral-400 mt-4"
        >
          <FlipWords words={words} />
        </motion.div>
      </div>
    </BackgroundLines>
  );
}
