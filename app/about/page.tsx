"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SplitType from "split-type"
import Lenis from "lenis"
import { motion } from "motion/react"
import { BackgroundLines } from "../components/ui/background-lines"
import { BackgroundBeams } from "../components/ui/background-beams"
import { CardSpotlight } from "../components/ui/card-spotlight"
import Image from "next/image"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const stats = [
  { number: "100+", label: "Active Members" },
  { number: "25+", label: "Projects Completed" },
  { number: "15+", label: "Workshops Conducted" },
  { number: "5+", label: "Hackathons Won" },
]

const values = [
  {
    title: "Innovation",
    description: "Pushing boundaries with cutting-edge technologies and creative solutions.",
    icon: "💡",
  },
  {
    title: "Collaboration",
    description: "Building together through teamwork, knowledge sharing, and peer learning.",
    icon: "🤝",
  },
  {
    title: "Excellence",
    description: "Striving for the highest standards in everything we create and achieve.",
    icon: "⭐",
  },
  {
    title: "Growth",
    description: "Continuous learning and development through hands-on experience.",
    icon: "🚀",
  },
]

const leadership = [
  {
    name: "Dr. Deepak Painuli",
    role: "Faculty Mentor & HOD, CSE",
    description: "Guiding the squad with expertise in computer science and innovative teaching methodologies.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Student Leadership Team",
    role: "Core Team Members",
    description: "Passionate students leading various clubs and driving innovation across all domains.",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function About() {
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

      const splitInstances: SplitType[] = []

      // Hero title animation
      const heroTitle = containerRef.current.querySelector(".hero-title") as HTMLElement
      if (heroTitle) {
        const splitTitle = new SplitType(heroTitle, { types: "chars" })
        splitInstances.push(splitTitle)
        heroTitle.style.visibility = "visible"
        gsap.from(splitTitle.chars, {
          yPercent: 100,
          autoAlpha: 0,
          stagger: 0.05,
          duration: 1,
          ease: "power4.inOut",
          delay: 0.5,
        })
      }

      // Animate sections on scroll
      const sections = containerRef.current.querySelectorAll(".animate-section")
      sections.forEach((section) => {
        const title = section.querySelector(".section-title") as HTMLElement
        const content = section.querySelector(".section-content")

        if (title) {
          const splitTitle = new SplitType(title, { types: "chars" })
          splitInstances.push(splitTitle)
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
      })

      // Stats animation
      const statsElements = containerRef.current.querySelectorAll(".stat-number")
      statsElements.forEach((stat) => {
        ScrollTrigger.create({
          trigger: stat,
          start: "top 80%",
          onEnter: () => {
            gsap.from(stat, {
              scale: 0.5,
              opacity: 0,
              duration: 0.8,
              ease: "back.out(1.7)",
            })
          },
        })
      })

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        splitInstances.forEach((instance) => instance.revert())
      }
    },
    { scope: containerRef },
  )

  return (
    <div ref={containerRef} className="about-container">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
          <div className="text-center space-y-8">
            <h1
              className="hero-title text-6xl md:text-8xl font-bold bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-transparent bg-clip-text"
              style={{ visibility: "hidden" }}
            >
              About Us
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
              className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-4xl mx-auto leading-relaxed"
            >
              Empowering the next generation of tech innovators through collaborative learning and cutting-edge projects
            </motion.p>
          </div>
        </BackgroundLines>
      </section>

      {/* Story Section */}
      <section className="animate-section min-h-screen flex items-center bg-white dark:bg-neutral-900 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="section-content space-y-6">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-wider font-medium text-blue-600 dark:text-blue-400">
                  Our Story
                </p>
                <h2
                  className="section-title text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white leading-tight"
                  style={{ visibility: "hidden" }}
                >
                  D-Coders Squad
                </h2>
              </div>
              <div className="space-y-4 text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                <p>
                  <strong>D-Coders Squad</strong> is an innovative and dynamic student community under the{" "}
                  <strong>CSE Department at COER University</strong>, dedicated to nurturing talent in cutting-edge
                  technologies.
                </p>
                <p>
                  Founded under the guidance of <strong>Dr. Deepak Painuli (HOD, CSE)</strong>, the squad empowers
                  students through hands-on learning, hackathons, expert-led workshops, and collaborative projects.
                </p>
                <p>
                  We believe in learning by doing, creating real-world solutions, and building a community where
                  innovation thrives and knowledge is shared freely.
                </p>
              </div>
            </div>
            <div className="relative">
              <CardSpotlight className="h-96 lg:h-[500px] w-full">
                <div className="relative z-20 h-full flex flex-col justify-between p-8">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl" role="img" aria-label="graduation cap">
                        🎓
                      </span>
                    </div>
                    <h3 className="text-white text-2xl font-bold">COER University</h3>
                    <p className="text-white/80 text-sm">Computer Science & Engineering Department</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-white/70 text-sm">Innovation Hub</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-white/70 text-sm">Student Community</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                      <span className="text-white/70 text-sm">Tech Excellence</span>
                    </div>
                  </div>
                </div>
              </CardSpotlight>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="animate-section min-h-screen flex items-center bg-neutral-900 text-white relative">
        <BackgroundBeams>
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="section-title text-4xl md:text-6xl font-bold mb-6" style={{ visibility: "hidden" }}>
                Leadership
              </h2>
              <p className="section-content text-xl text-gray-300 max-w-3xl mx-auto">
                Guided by experienced faculty and driven by passionate students
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
              {leadership.map((leader, index) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="text-center space-y-6"
                >
                  <div className="relative mx-auto w-48 h-48 rounded-full overflow-hidden border-4 border-white/20">
                    <Image
                      src={leader.image || "/placeholder.svg"}
                      alt={`Portrait of ${leader.name}`}
                      width={192}
                      height={192}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">{leader.name}</h3>
                    <p className="text-blue-400 font-medium">{leader.role}</p>
                    <p className="text-gray-300 leading-relaxed max-w-md mx-auto">{leader.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </BackgroundBeams>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-blue-100">Numbers that tell our story</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="stat-number text-4xl md:text-6xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="animate-section py-20 bg-gray-50 dark:bg-neutral-800">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2
              className="section-title text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-6"
              style={{ visibility: "hidden" }}
            >
              Our Values
            </h2>
            <p className="section-content text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center space-y-4 p-6 rounded-2xl bg-white dark:bg-neutral-700 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4" role="img" aria-label={value.title}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">{value.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-br from-neutral-900 to-black text-white relative">
        <div className="text-center space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold"
          >
            Join Our Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Be part of a community that&apos;s shaping the future of technology, one project at a time
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors duration-300"
              aria-label="Join D-Coders Squad"
            >
              Join D-Coders Squad
            </button>
            <button
              className="px-8 py-4 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300"
              aria-label="View our clubs"
            >
              View Our Clubs
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
