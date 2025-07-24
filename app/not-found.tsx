"use client"

import { useRef, useEffect, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import SplitType from "split-type"
import Lenis from "lenis"
import { motion } from "motion/react"
import { useRouter } from "next/navigation"
import { BackgroundLines } from "./components/ui/background-lines"

gsap.registerPlugin(useGSAP)

const easterEggs = [
  "Fun fact: I built this entire website from scratch and forgot to eat for 2 days! 🍕",
  "Easter egg: This site was crafted with pure dedication (and probably too much caffeine) ☕",
  "Behind the scenes: O coded this masterpiece while surviving on determination alone 💪",
  "Secret: The real 404 error was the meals Shizain skipped along the way 😅",
]

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const [easterEgg, setEasterEgg] = useState("")
  const [isClient, setIsClient] = useState(false)

  /* --- Client-side initialization --- */
  useEffect(() => {
    setIsClient(true)
    setEasterEgg(easterEggs[Math.floor(Math.random() * easterEggs.length)])
  }, [])

  /* --- Lenis smooth scroll --- */
  useEffect(() => {
    if (!isClient) return

    const lenis = new Lenis({})
    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [isClient])

  /* --- GSAP Animations --- */
  useGSAP(
    () => {
      if (!containerRef.current || !isClient) return

      // 404 animation
      const errorText = containerRef.current.querySelector(".error-text") as HTMLElement
      if (errorText) {
        const splitError = new SplitType(errorText, { types: "chars" })
        errorText.style.visibility = "visible"
        gsap.from(splitError.chars, {
          yPercent: 100,
          autoAlpha: 0,
          stagger: 0.1,
          duration: 1,
          ease: "power4.inOut",
          delay: 0.5,
        })

        return () => {
          splitError.revert()
        }
      }
    },
    { scope: containerRef, dependencies: [isClient] },
  )

  // Show simple loading until hydrated
  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-8xl font-bold text-neutral-300 dark:text-neutral-700">404</div>
      </div>
    )
  }

  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <div
        ref={containerRef}
        className="w-screen h-svh flex flex-col justify-center items-center text-center"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      >
        {/* 404 Error */}
        <h1
          className="error-text text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-bold tracking-tight leading-tight text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-transparent bg-clip-text mb-8"
          style={{ visibility: "hidden" }}
        >
          404
        </h1>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-neutral-600 dark:text-neutral-400 mb-8"
        >
          Page not found, but you found something better...
        </motion.div>

        {/* Easter Egg */}
        {easterEgg && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8, duration: 0.6, ease: "easeOut" }}
            className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 max-w-2xl mx-auto border border-blue-200/50 dark:border-blue-700/50 mb-12"
          >
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4 text-center">Easter Egg!</h3>
            <div className="text-4xl mb-4 text-center" role="img" aria-label="celebration">
              🎉
            </div>
            <p className="text-neutral-600 dark:text-neutral-300 text-center">{easterEgg}</p>
          </motion.div>
        )}

        {/* Go Home Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.6, ease: "easeOut" }}
          onClick={() => router.push("/")}
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          aria-label="Go back to home page"
        >
          🏠 Take me home
        </motion.button>

        {/* Subtle Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 0.8, ease: "easeOut" }}
          className="text-neutral-400 dark:text-neutral-500 text-sm mt-8"
        >
          Built with ❤️ (and lots of missed meals) by Shizain
        </motion.p>
      </div>
    </BackgroundLines>
  )
}
