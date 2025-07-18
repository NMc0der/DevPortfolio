import React from "react";

const SingleSkill = ({ imgSvg, text }) => {
  return (
    <div className="hover:-translate-y-10 transition-all duration-500">
      <div className="flex flex-col items-center gap-2 relative">
        <div
          className={`z-2 bg-white  h-[100px] w-[100px] flex items-center justify-center rounded-full hover:text-darkGrey hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-[#0065F8]`}
        >
          <img className="h-18" src={imgSvg} alt="" />
        </div>
        <p className=" z-2 text-white font-bold">{text}</p>
      </div>
      <div className="w-[100px] h-[200px] bg-[#0065F8] absolute top-[50px]  "></div>
    </div>
  );
};

export default SingleSkill;
