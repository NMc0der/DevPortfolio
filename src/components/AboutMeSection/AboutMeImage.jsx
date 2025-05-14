import React from "react";
import img1 from "../../images/about-me.jpg";
const AboutMeImage = () => {
  return (
    <div className="h-[500px] w-[300px] relative">
      <div className="h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden z-2">
        <img
          className="h-full w-auto object-cover z-2"
          src={img1}
          alt="about-me-image"
        />
      </div>
      <div className=" h-[500px] w-[250px] bg-orange absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px]"></div>
    </div>
  );
};

export default AboutMeImage;
