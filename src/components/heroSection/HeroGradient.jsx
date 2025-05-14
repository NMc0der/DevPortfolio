import React from "react";

const HeroGradient = () => {
  return (
    <div>
      <div className="shadow-cyanMd absolute top-0 right-[400px] z-1 animate-pulse "></div>
      <div className="shadow-orangeMd absolute top-0 right-0 z-1 animate-pulse "></div>
      <div className="shadow-cyanMd absolute top-[300px] left-0 z-1 opacity-50"></div>
      <div className="shadow-orangeMd absolute top-[500px] left-0 z-1 opacity-50"></div>
    </div>
  );
};

export default HeroGradient;

// -[10px_10px_200px_150px_rgba(94, 206, 220, 0.5)]
// h-[100px] w-[100px] bg-amber-300
