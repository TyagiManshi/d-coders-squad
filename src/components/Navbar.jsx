import React from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <motion.div 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 80, duration: 0.8 }}
      className='w-full px-6 md:px-20 py-8 flex flex-wrap justify-between items-center backdrop-blur-md bg-zinc-900'
    >
      <motion.div 
        whileHover={{ scale: 1.1 }}
        className='logo text-2xl cursor-pointer font-bold tracking-wide text-white'
      >
        D-Coders Squad
      </motion.div>

      <div className='links flex flex-wrap gap-6 md:gap-10'>
        {["About Us", "Our Clubs", "Insights", "Contact"].map((item, index) => (
          <motion.a
            key={index}
            whileHover={{ scale: 1.1, color: '#38bdf8' }} 
            className={`text-lg capitalize cursor-pointer font-light text-white transition-all duration-300 ${index === 3 && "md:ml-32"}`}
          >
            {item}
          </motion.a>
        ))}
      </div>
    </motion.div>
  )
}

export default Navbar;
