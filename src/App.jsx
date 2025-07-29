import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import Marquee from './components/marquee'
import About from './components/About'
import Footer from './components/Footer'
import ScrollingCards from './components/ScrollingCards'

function App() {
  return (
     <div className='bg-zinc-900 text-[#ffffffe7]'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <ScrollingCards />
      <About />
      <Footer />
    </div>
  )
}

export default App
