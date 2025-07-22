import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
     <div className="h-screen w-full bg-black flex flex-col items-center justify-center text-center text-white overflow-hidden px-4">
      <h1 className="text-6xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
        D-Coders Squad 🚀
      </h1>
      <p className="text-lg md:text-xl max-w-2xl text-gray-300">
        Innovate. Code. Collaborate.
        <br />
        <span className="text-indigo-300">COER University’s student tech community.</span>
      </p>
      <div className="mt-8">
        <button className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transition">
          Coming Soon!
        </button>
      </div>
    </div>
  )
}

export default App
