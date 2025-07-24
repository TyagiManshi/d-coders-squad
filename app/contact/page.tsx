"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SplitType from "split-type"
import Lenis from "lenis"
import { motion } from "motion/react"
import { BackgroundLines } from "../components/ui/background-lines"
import { BackgroundBeams } from "../components/ui/background-beams"
import { CardSpotlight } from "../components/ui/card-spotlight"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const contactInfo = [
  {
    title: "Email",
    value: "dcoders@coer.edu.in",
    icon: "📧",
    description: "Send us your queries anytime",
  },
  {
    title: "Phone",
    value: "+91 98765 43210",
    icon: "📱",
    description: "Call us during office hours",
  },
  {
    title: "Location",
    value: "COER University, Roorkee",
    icon: "📍",
    description: "CSE Department, Block A",
  },
  {
    title: "Office Hours",
    value: "Mon - Fri, 9:00 AM - 5:00 PM",
    icon: "🕒",
    description: "Available for meetings",
  },
]

const socialLinks = [
  {
    name: "LinkedIn",
    url: "#",
    icon: "💼",
    color: "from-blue-600 to-blue-700",
  },
  {
    name: "GitHub",
    url: "#",
    icon: "💻",
    color: "from-gray-700 to-gray-900",
  },
  {
    name: "Instagram",
    url: "#",
    icon: "📸",
    color: "from-pink-500 to-purple-600",
  },
  {
    name: "Discord",
    url: "#",
    icon: "🎮",
    color: "from-indigo-500 to-purple-600",
  },
]

const faqs = [
  {
    question: "How can I join D-Coders Squad?",
    answer:
      "You can join by filling out our contact form or attending our weekly meetings every Friday at 4 PM in the CSE Department.",
  },
  {
    question: "What are the requirements to join?",
    answer:
      "We welcome all CSE students regardless of their skill level. Passion for learning and technology is all you need!",
  },
  {
    question: "Do you offer mentorship programs?",
    answer:
      "Yes! We have senior students and faculty mentors who guide newcomers through various projects and learning paths.",
  },
  {
    question: "What kind of events do you organize?",
    answer:
      "We organize hackathons, workshops, coding competitions, tech talks, and collaborative project sessions throughout the year.",
  },
]

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

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

      // Hero title animation
      const heroTitle = containerRef.current.querySelector(".hero-title") as HTMLElement
      if (heroTitle) {
        const splitTitle = new SplitType(heroTitle, { types: "chars" })
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

      // Contact cards animation
      const contactCards = containerRef.current.querySelectorAll(".contact-card")
      contactCards.forEach((card, index) => {
        gsap.set(card, { y: 40, opacity: 0 })

        ScrollTrigger.create({
          trigger: card,
          start: "top 80%",
          onEnter: () => {
            gsap.to(card, {
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay: index * 0.1,
              ease: "power3.out",
            })
          },
        })
      })

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      }
    },
    { scope: containerRef },
  )

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form submitted:", formData)
    setIsSubmitting(false)
    setFormData({ name: "", email: "", subject: "", message: "" })

    // You can add actual form submission logic here
  }

  return (
    <div ref={containerRef} className="contact-container">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
          <div className="text-center space-y-8">
            <h1
              className="hero-title text-6xl md:text-8xl font-bold bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-transparent bg-clip-text"
              style={{ visibility: "hidden" }}
            >
              Contact Us
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
              className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-4xl mx-auto leading-relaxed"
            >
              Ready to join our community? Have questions? We'd love to hear from you!
            </motion.p>
          </div>
        </BackgroundLines>
      </section>

      {/* Contact Form Section */}
      <section className="animate-section min-h-screen flex items-center bg-white dark:bg-neutral-900 relative py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Form Side */}
            <div className="section-content">
              <div className="space-y-6 mb-8">
                <p className="text-sm uppercase tracking-wider font-medium text-blue-600 dark:text-blue-400">
                  Get In Touch
                </p>
                <h2
                  className="section-title text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white leading-tight"
                  style={{ visibility: "hidden" }}
                >
                  Let's Start a Conversation
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Whether you're interested in joining our community, have project ideas, or just want to learn more
                  about what we do, we're here to help.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white transition-all duration-200"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white transition-all duration-200 resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Visual Side */}
            <div className="relative">
              <CardSpotlight className="h-96 lg:h-[500px] w-full">
                <div className="relative z-20 h-full flex flex-col justify-between p-8">
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl">💬</span>
                    </div>
                    <div>
                      <h3 className="text-white text-2xl font-bold mb-2">Quick Response</h3>
                      <p className="text-white/80 text-sm">
                        We typically respond to all inquiries within 24 hours during weekdays.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-white/70 text-sm">Usually online</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-white/70 text-sm">Fast response time</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-white/70 text-sm">Friendly support</span>
                    </div>
                  </div>
                </div>
              </CardSpotlight>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-gray-50 dark:bg-neutral-800">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
              Other Ways to Reach Us
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300">Choose the method that works best for you</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="contact-card text-center p-6 bg-white dark:bg-neutral-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{info.icon}</div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">{info.title}</h3>
                <p className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">{info.value}</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300">Quick answers to common questions</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-neutral-800 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">{faq.question}</h3>
                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">{faq.answer}</p>
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
            Ready to Connect?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Join our community of innovators and start building the future of technology with us
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors duration-300">
              Join D-Coders Squad
            </button>
            <button className="px-8 py-4 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300">
              Schedule a Meeting
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
