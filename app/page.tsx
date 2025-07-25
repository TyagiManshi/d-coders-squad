"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import SplitType from "split-type"
import Lenis from "lenis"
import { BackgroundLines } from "./components/ui/background-lines"
import { motion } from "motion/react"
import { FlipWords } from "./components/ui/flip-words"

gsap.registerPlugin(useGSAP)

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)

  /* ---  GSAP character split  --- */
  useGSAP(
    () => {
      if (!containerRef.current) return

      const h1 = containerRef.current.querySelector("h1") as HTMLElement
      if (!h1) return

      const hero = new SplitType(h1, { types: "chars" })

      // Show h1 after splitting is done
      h1.style.visibility = "visible"

      gsap.from(hero.chars, {
        yPercent: 100,
        autoAlpha: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power4.inOut",
      })

      // Cleanup function
      return () => {
        hero.revert()
      }
    },
    { scope: containerRef },
  )

  /* ---  Lenis smooth‑scroll  --- */
  useEffect(() => {
    const lenis = new Lenis({})

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  const words = ["Competitive Coding", "Machine Learning", "Web Development", "Graphic Designing"]

  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <div
        ref={containerRef}
        className="home w-screen h-svh flex flex-col justify-center items-center text-center"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      >
        <h1 className="text-6xl md:text-8xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-transparent bg-clip-text">
          D<span className="font-space-grotesk ml-2">Coders</span>
          <span className="ml-2">Squad</span>
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
          className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-medium text-neutral-600 dark:text-neutral-400 mt-4"
        >
          <FlipWords words={words} />
        </motion.div>
      </div>
    </BackgroundLines>
  )
}
