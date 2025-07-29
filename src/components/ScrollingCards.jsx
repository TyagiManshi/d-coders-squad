import React, { useRef } from "react";
import { motion } from "framer-motion";
import BlobBackground from "./BlobBackground";
import codingIcon from "../assets/coding.png";
import machineLearningIcon from "../assets/machine-learning.png";
import graphicDesigningIcon from "../assets/graphic-designing.png";
import researchIcon from "../assets/research.png";
import webDevIcon from "../assets/web-dev.png";
import appDevIcon from "../assets/app-dev.png";

const cards1 = [
  {
    icon: "Competitive Coding",
    desc: "Data structures & algorithms",
    iconUrl: codingIcon, 
  },
  {
    icon: "Machine Learning",
    desc: "Smart predictive systems",
    iconUrl: machineLearningIcon,
  },
  {
    icon: "Graphic Designing",
    desc: "Creative visual content",
    iconUrl: graphicDesigningIcon,
  },
  {
    icon: "R & D",
    desc: "Explore new solutions",
    iconUrl: researchIcon,
  },
];

const cards2 = [
  {
    icon: "Web Development",
    desc: "Modern web applications",
    iconUrl: webDevIcon,
  },
  {
    icon: "App Development",
    desc: "Mobile & desktop apps",
    iconUrl: appDevIcon,
  },
  {
    icon: "Competitive Coding",
    desc: "Data structures & algorithms",
    iconUrl: codingIcon,
  },
  {
    icon: "Machine Learning",
    desc: "Smart predictive systems",
    iconUrl: machineLearningIcon,
  },
  {
    icon: "R & D",
    desc: "Explore new solutions",
    iconUrl: researchIcon,
  },
];

const ScrollingCards = () => {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  const calculateRowWidth = (cardCount, cardWidth, gap) => {
    return cardCount * cardWidth + Math.max(0, cardCount - 1) * gap;
  };

  const CARD_WIDTH = 240;
  const GAP_WIDTH = 32;

  const row1TotalWidth = calculateRowWidth(cards1.length, CARD_WIDTH, GAP_WIDTH);
  const row2TotalWidth = calculateRowWidth(cards2.length, CARD_WIDTH, GAP_WIDTH);

  const cardVariants = {
    initial: { scale: 0.95, opacity: 0.7 },
    hover: { scale: 1.05, opacity: 1, transition: { duration: 0.2 } },
    tap: { scale: 0.98 },
  };

  return (
    <div className="bg-none text-white min-h-screen flex flex-col justify-center relative">
      <BlobBackground />
      <h1 className="text-7xl font-bold text-center mb-20">
        Focus Areas
      </h1>

      <div className="relative w-full overflow-x-hidden mb-8">
        <div className="absolute inset-0 z-10 pointer-events-none
                        before:content-[''] before:absolute before:inset-y-0 before:left-0 before:w-48 before:bg-gradient-to-r before:from-black before:to-transparent
                        after:content-[''] after:absolute after:inset-y-0 after:right-0 after:w-48 after:bg-gradient-to-l after:from-black after:to-transparent">
        </div>
        <motion.div
          ref={row1Ref}
          className="flex gap-8 w-max"
          animate={{ x: `-${row1TotalWidth}px` }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {[...cards1, ...cards1, ...cards1].map((card, index) => (
            <motion.div
              key={`row1-${index}`}
              className="flex-shrink-0 w-60 h-48 bg-black rounded-xl flex flex-col items-center justify-center text-center p-4 cursor-pointer 
                        border border-cyan-400 transition 
                        shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_40px_rgba(34,211,238,0.7)]"
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <img
                src={card.iconUrl}
                alt={card.icon}
                className="w-8 h-8 mb-3"
              />
              <div className="text-xl font-semibold mb-1">{card.icon}</div>
              <div className="text-sm text-gray-400">{card.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="relative w-full overflow-x-hidden">
        <div className="absolute inset-0 z-10 pointer-events-none
                        before:content-[''] before:absolute before:inset-y-0 before:left-0 before:w-48 before:bg-gradient-to-r before:from-black before:to-transparent
                        after:content-[''] after:absolute after:inset-y-0 after:right-0 after:w-48 after:bg-gradient-to-l after:from-black after:to-transparent">
        </div>
        <motion.div
          ref={row2Ref}
          className="flex gap-8 w-max"
          initial={{ x: `-${row2TotalWidth}px` }}
          animate={{ x: `0px` }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {[...cards2, ...cards2, ...cards2].map((card, index) => (
            <motion.div
              key={`row2-${index}`}
              className="flex-shrink-0 w-60 h-48 bg-black rounded-xl flex flex-col items-center justify-center text-center p-4 cursor-pointer 
                        border border-cyan-400 transition 
                        shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_40px_rgba(34,211,238,0.7)]"
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <img
                src={card.iconUrl}
                alt={card.icon}
                className="w-8 h-8 mb-3"
              />
              <div className="text-xl font-semibold mb-1">{card.icon}</div>
              <div className="text-sm text-gray-400">{card.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollingCards;
