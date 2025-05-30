import React from "react";
import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";
import ClothingProjectImg from "../../images/projectImages/ClothingProjectImg.png";
import GymProjectImg from "../../images/projectImages/GymProjectImg.png";
import YouTubeCloneImg from "../../images/projectImages/Screenshot.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/varients";

const projects = [
  {
    name: "Ecommerce Website",
    year: "Mar2022",
    align: "right",
    image: ClothingProjectImg,
    link: "https://clothing1-nine.vercel.app/",
    gitLink: "https://github.com/NMc0der/Ecommerce-Clothing",
    description:
      "This clothing store ecommerce website allows users to filter catagories and view individual product details. You can then add the items you like to your shopping bag and proceed to the checkout section. This Project uses React to primarily handle the logic and data, while Tailwind was used for the styling.",
  },
  {
    name: "Gym Website",
    year: "mar2022",
    align: "left",
    image: GymProjectImg,
    link: "https://gym-website1-zeta.vercel.app/",
    gitLink: "https://github.com/NMc0der/gym-website1",
    description:
      "This project utilizes NextJs, React and Sass to create what would be a local gym website. The Website displays different courses, a blog section, a variety of courses and other sections you can view.",
  },
  {
    name: "YouTube Clone",
    year: "Mar2022",
    align: "right",
    image: YouTubeCloneImg,
    link: "https://you-tube-clone-seven-bay.vercel.app/",
    gitLink: "https://github.com/NMc0der/youTube-clone",
    description:
      "In this project I used Typescript, React and Tailwind to create a front end copy of the YouTube home page. This project displays the different sections in the collapsible sidebar and shows you videos you may see on your home page.  ",
  },
];

const ProjectMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
      >
        <ProjectText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((item, index) => {
          return (
            <SingleProject
              key={index}
              name={item.name}
              year={item.year}
              align={item.align}
              image={item.image}
              link={item.link}
              description={item.description}
              gitLink={item.gitLink}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectMain;
