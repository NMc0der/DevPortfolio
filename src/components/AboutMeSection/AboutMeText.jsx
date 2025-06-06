import React from "react";
import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-white text-xl">
        I am a passionate Front-end React developer based in Northeast Ohio. I
        excell in designing and maintainig responsive websites that offer a
        smooth user experience. I am a team player who thrives in collaborating
        with cross-functional teams to produce outstanding web applications.
      </p>
      <Link
        to={"projects"}
        smooth={true}
        spy={true}
        duration={500}
        offset={-130}
        className=" bg-[#0065F8]  rounded-full py-2 px-4 text-lg flex items-center mt-10  transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:scale-110"
      >
        My Projects
      </Link>
    </div>
  );
};

export default AboutMeText;
