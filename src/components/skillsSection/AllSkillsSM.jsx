import React from "react";
import htmlIcon from "../../logos/icons8-html-5-144.png";
import cssIcon from "../../logos/icons8-css-480.png";
import javaScriptIcon from "../../logos/icons8-javascript-240.png";
import reactLogo from "../../logos/icons8-react-native-480.png";
import typeScriptLogo from "../../logos/icons8-typescript-480.png";
import sassLogo from "../../logos/icons8-sass-512.png";
import tailwindLogo from "../../logos/icons8-tailwind-css-480.png";
import nextjsLogo from "../../logos/icons8-nextjs-240.png";
// import logo from "../../logos/";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/varients";

const skills = [
  {
    skill: "HTML",
    icon: htmlIcon,
  },
  {
    skill: "CSS",
    icon: cssIcon,
  },
  {
    skill: "JavaScript",
    icon: javaScriptIcon,
  },
  {
    skill: "ReactJS",
    icon: reactLogo,
  },
  {
    skill: "TypeScript",
    icon: typeScriptLogo,
  },
  {
    skill: "Sass",
    icon: sassLogo,
  },
  {
    skill: "Tailwind",
    icon: tailwindLogo,
  },
  {
    skill: "NextJS",
    icon: nextjsLogo,
  },
];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0 }}
            key={index}
            className="flex flex-col items-center"
          >
            <img
              className="text-7xl text-orange h-20"
              src={item.icon}
              alt="icon"
            />

            <p className="text-center mt-4">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
