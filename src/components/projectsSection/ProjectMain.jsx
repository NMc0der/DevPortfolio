import React from "react";
import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";
import ClothingProjectImg from "../../images/projectImages/ClothingProjectImg.png";
import GymProjectImg from "../../images/projectImages/GymProjectImg.png";

const projects = [
  {
    name: "Ecomerce Website",
    year: "Mar2022",
    align: "right",
    image: ClothingProjectImg,
    link: "#",
  },
  {
    name: "Gym Website",
    year: "mar2022",
    align: "left",
    image: GymProjectImg,
    link: "#",
  },
];

const ProjectMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <ProjectText />
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((item, index) => {
          return (
            <SingleProject
              key={index}
              name={item.name}
              year={item.year}
              align={item.align}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectMain;
