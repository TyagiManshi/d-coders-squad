import React from "react";
import { motion } from "framer-motion";
import BlobBackground from "../components/BlobBackground";
import BlockImage from "../assets/block-image.png";
import Astro from "../assets/astro.png";

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1 flow-root overflow-hidden relative">
      <BlobBackground />
      <div className="textstructure mt-[19vh] px-20 float-left relative z-10">
        {["We’re where", "curious minds", "craft real code"].map(
          (item, index) => (
            <motion.div
              key={index}
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: index * 0.4,
                duration: 0.9,
                ease: "easeOut",
              }}
              className="masker overflow-hidden"
            >
              <div className="w-fit flex items-center group">
                {index === 1 && (
                  <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.7, type: "spring", stiffness: 120 }}
                    whileHover={{ rotate: 8 }}
                    className="mr-[1vw] ml-[1vw] w-[8vw] mt-[0.8vh]"
                  >
                    <img
                      src={BlockImage}
                      className="rounded-md shadow-2xl"
                    />
                  </motion.div>
                )}
                <motion.h1
                  whileHover={{
                    scale: 1.06,
                    rotate: [-1, 1, -1],
                    transition: { yoyo: Infinity, duration: 0.6 },
                  }}
                  className="uppercase text-[10vw] md:text-[7vw] leading-[9vw] md:leading-[6vw] tracking-tighter font-extrabold text-[#ffffffe7]"
                >
                  {item}
                </motion.h1>
              </div>
            </motion.div>
          )
        )}
      </div>

      <motion.div
  initial={{ opacity: 0, y: 50, scale: 0.9 }}
  animate={{
    opacity: 1,
    y: [0, -20, 0], 
    scale: 1,
  }}
  transition={{
    delay: 1.2,
    duration: 1,
    ease: "easeOut",
    y: {
      duration: 4, 
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  }}
  whileHover={{
    y: -10,
    rotate: 2,
    scale: 1.05,
    transition: { type: "spring", stiffness: 100 },
  }}
  className="float-right relative z-10"
>
  <img
    src={Astro}
    width="330px"
    className="mr-15 mt-32 rounded-xl"
  />
</motion.div>

    </div>
  );
};

export default LandingPage;
