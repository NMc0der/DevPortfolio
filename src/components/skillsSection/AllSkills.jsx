import React from "react";
import { FaHtml5 } from "react-icons/fa";
import SingleSkill from "./SingleSkill";
import htmlIcon from "../../logos/icons8-html-5-144.png";
import cssIcon from "../../logos/icons8-css-480.png";
import javaScriptIcon from "../../logos/icons8-javascript-240.png";
import reactLogo from "../../logos/icons8-react-native-480.png";
import typeScriptLogo from "../../logos/icons8-typescript-480.png";
import sassLogo from "../../logos/icons8-sass-512.png";
import tailwindLogo from "../../logos/icons8-tailwind-css-480.png";
import nextjsLogo from "../../logos/icons8-nextjs-480.png";
// import nextjsLogo2 from "../../logos/icons8-nextjs-240.png"
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

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={item.icon}
                color={item.color}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
