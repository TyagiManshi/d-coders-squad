"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SplitType from "split-type"
import Lenis from "lenis"
import { motion } from "motion/react"
import { BackgroundBeams } from "../components/ui/background-beams"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const clubsData = [
  {
    id: "competitive-coding",
    title: "Competitive Coding",
    leader: "Saiyed Shizain, Arnav Pundir, Mansi Tyagi, Indu Rani",
    members: 30,
    description:
      "Master algorithmic thinking and problem-solving through competitive programming. Our club focuses on data structures, algorithms, and contest preparation, creating coders who excel in technical interviews and programming competitions.",
    gradient: "from-blue-600 to-purple-600",
    bgColor: "bg-slate-900",
    textColor: "text-white",
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    leader: "Mohmmad Shaban, ...",
    members: 20,
    description:
      "Explore the frontiers of artificial intelligence and data science. We dive deep into neural networks, deep learning, and AI applications, building intelligent systems that shape the future of technology.",
    gradient: "from-emerald-500 to-teal-600",
    bgColor: "bg-gray-100",
    textColor: "text-gray-900",
  },
  {
    id: "web-development",
    title: "Web Development",
    leader: "Naam bhul gaya mai inke",
    members: 20,
    description:
      "Craft modern, responsive web experiences using cutting-edge technologies. From React and Next.js to backend systems, we build full-stack applications that deliver exceptional user experiences.",
    gradient: "from-orange-500 to-red-600",
    bgColor: "bg-neutral-900",
    textColor: "text-white",
  },
  {
    id: "graphic-designing",
    title: "Graphic Designing",
    leader: "Inke bhi forgot",
    members: 25,
    description:
      "Transform ideas into stunning visual narratives. Our design club focuses on UI/UX, branding, and digital art, creating compelling visuals that communicate effectively and inspire audiences.",
    gradient: "from-pink-500 to-violet-600",
    bgColor: "bg-stone-100",
    textColor: "text-stone-900",
  },
]

export default function Clubs() {
  const containerRef = useRef<HTMLDivElement>(null)

  /* --- Lenis smooth scroll --- */
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  /* --- GSAP Animations --- */
  useGSAP(
    () => {
      if (!containerRef.current) return

      // Animate club sections on scroll
      const sections = containerRef.current.querySelectorAll(".club-section")

      sections.forEach((section, index) => {
        const title = section.querySelector(".club-title") as HTMLElement
        const content = section.querySelector(".club-content")
        const visual = section.querySelector(".club-visual")

        // Split title text
        if (title) {
          const splitTitle = new SplitType(title, { types: "chars" })
          title.style.visibility = "visible"

          gsap.set(splitTitle.chars, { yPercent: 100, opacity: 0 })

          ScrollTrigger.create({
            trigger: section,
            start: "top 80%",
            onEnter: () => {
              gsap.to(splitTitle.chars, {
                yPercent: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.02,
                ease: "power3.out",
              })
            },
          })
        }

        // Animate content
        if (content) {
          gsap.set(content, { y: 60, opacity: 0 })

          ScrollTrigger.create({
            trigger: section,
            start: "top 70%",
            onEnter: () => {
              gsap.to(content, {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 0.3,
                ease: "power3.out",
              })
            },
          })
        }

        // Animate visual element
        if (visual) {
          gsap.set(visual, { scale: 0.8, opacity: 0 })

          ScrollTrigger.create({
            trigger: section,
            start: "top 60%",
            onEnter: () => {
              gsap.to(visual, {
                scale: 1,
                opacity: 1,
                duration: 1.2,
                delay: 0.2,
                ease: "power3.out",
              })
            },
          })
        }
      })

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      }
    },
    { scope: containerRef },
  )

  return (
    <div ref={containerRef} className="clubs-container">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
        <BackgroundBeams>
        <div className="absolute inset-0 "></div>
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
          >
            Our Clubs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
          >
            Discover communities of passionate learners and innovators
          </motion.p>
        </div>
        </BackgroundBeams>
      </section>

      {/* Club Sections */}
      {clubsData.map((club, index) => (
        <section
          key={club.id}
          className={`club-section min-h-screen flex items-center ${club.bgColor} relative overflow-hidden`}
        >
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Content Side */}
              <div className={`club-content ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className={`text-sm uppercase tracking-wider font-medium ${club.textColor} opacity-60`}>
                      Club Leader: {club.leader}
                    </p>
                    <h2
                      className={`club-title text-4xl md:text-6xl lg:text-7xl font-bold ${club.textColor} leading-tight`}
                      style={{ visibility: "hidden" }}
                    >
                      {club.title}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <p className={`text-lg md:text-xl ${club.textColor} opacity-80 leading-relaxed max-w-lg`}>
                      {club.description}
                    </p>

                    <div className="flex items-center space-x-8 pt-4">
                      <div>
                        <p className={`text-3xl md:text-4xl font-bold ${club.textColor}`}>{club.members}</p>
                        <p className={`text-sm ${club.textColor} opacity-60 uppercase tracking-wide`}>Active Members</p>
                      </div>

                      <div className="h-12 w-px bg-current opacity-20"></div>

                      <button
                        className={`px-6 py-3 border border-current ${club.textColor} hover:bg-current hover:text-white transition-all duration-300 font-medium`}
                      >
                        Join Club
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Side */}
              <div className={`club-visual ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="relative">
                  <div
                    className={`w-full h-96 lg:h-[500px] bg-gradient-to-br ${club.gradient} rounded-2xl relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-8 left-8 right-8">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                        <h3 className="text-white text-xl font-semibold mb-2">{club.title}</h3>
                        <p className="text-white/80 text-sm">
                          Led by {club.leader} • {club.members} members
                        </p>
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-8 right-8 w-16 h-16 border-2 border-white/30 rounded-full"></div>
                    <div className="absolute top-1/2 left-8 w-2 h-2 bg-white/50 rounded-full"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-white/40 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Footer CTA */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-br from-neutral-900 to-black text-white relative">
        <div className="text-center space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold"
          >
            Ready to Join?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Connect with like-minded individuals and start your journey with DCoders Squad
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors duration-300"
          >
            Get Started
          </motion.button>
        </div>
      </section>
    </div>
  )
}
