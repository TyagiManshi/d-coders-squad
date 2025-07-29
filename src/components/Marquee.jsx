import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <div className="w-full bg-black text-[#ffffffe7] mb-20 pt-2 pb-8">
      <div className="flex overflow-hidden items-center">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
          className="text-[30vw] md:text-[17vw] mr-10 leading-none uppercase font-semibold whitespace-nowrap"
        >
          we are d-coders squad
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
          className="text-[30vw] md:text-[17vw] mr-10 leading-none uppercase font-semibold whitespace-nowrap"
        >
          we are d-coders squad
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
          className="text-[30vw] md:text-[17vw] mr-10 leading-none uppercase font-semibold whitespace-nowrap"
        >
          we are d-coders squad
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
