import React from "react";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/varients";
import { FaGithub } from "react-icons/fa";

function openUrl(url) {
  window.open(url, "_blank").focus();
}

const SingleProject = ({
  name,
  year,
  align,
  image,
  link,
  description,
  gitLink,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end`}
    >
      <div>
        <h2 className="md:text-3xl sm:text-2xl text-orange">{name}</h2>
        <h2
          className={` text-xl font-thin text-white font-special sm:text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {description}
        </h2>
        {/* (e) => {
            console.log(`${link}`);
          } */}
        <a
          onClick={() => openUrl(link)}
          href={"/"}
          className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-self-center ${
            align === "left" ? "md:justify-self-end" : "md:justify-self-start"
          }`}
        >
          View
        </a>
        <div className="flex gap-2">
          <button
            onClick={() => openUrl(link)}
            className=" flex items-center gap-1 border-red border-4 rounded-full p-1"
          >
            Live Demo <BiSolidRightTopArrowCircle />
          </button>
          <button
            onClick={() => openUrl(gitLink)}
            className="flex items-center gap-1 border-red border-4 rounded-full p-1"
          >
            Github
            <FaGithub />
          </button>
        </div>
      </div>
      <div
        onClick={() => openUrl(link)}
        className=" cursor-pointer max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white "
      >
        <div></div>
        <img src={image} alt="project-image" className="w-full h-full " />
      </div>
    </motion.div>
  );
};

export default SingleProject;
