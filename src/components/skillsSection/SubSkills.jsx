import React from "react";
import skillsImg from "../../images/subSkills.jpg";

const SubSkills = () => {
  return (
    <div className="border-y-2  relative">
      <div className="absolute bg-gradient-to-r from-white to-cyan opacity-50 w-full h-full"></div>
      <img src={skillsImg} alt="subskills-img" />
    </div>
  );
};

export default SubSkills;
