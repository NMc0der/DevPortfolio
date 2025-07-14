import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/varients";
import { Link } from "react-scroll";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h1
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className=" md:text-[2.8rem] lg:text-5xl sm:text-4xl  text-white font-semibold"
      >
        Hi, I'm Noah Maldonado
      </motion.h1>
      <motion.h2
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className=" lg:text-4xl sm:text-2xl  font-bold font-special text-cyan"
      >
        A Web Developer
      </motion.h2>
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="mt-10 font-bold md:text-lg text-sm "
      >
        <Link
          to={"contact"}
          smooth={true}
          spy={true}
          duration={500}
          offset={-130}
          className="mr-5 cursor-pointer bg-[#3f8cff] hover:bg-[#0065F8] px-12 py-4 rounded-full transition-all duration-500 hover:scale-110"
        >
          HIRE ME
        </Link>
        <Link
          to={"projects"}
          smooth={true}
          spy={true}
          duration={500}
          offset={-130}
          className="cursor-pointer text-[#0065F8] hover:text-white transition-all duration-500"
        >
          VEIW MY PORTFOLIO
        </Link>
      </motion.div>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4 text-white"
      ></motion.p>
    </div>
  );
};

export default HeroText;
