import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Space_Grotesk, Inter } from "next/font/google"
import Navbar from "./components/Navbar"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "D-Coders Squad",
  description: "An innovative and dynamic student community under the CSE Department at COER University",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
