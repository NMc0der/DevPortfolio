import React from "react";
const img1 =
  "https://heroshotphotography.com/wp-content/uploads/2023/03/male-linkedin-corporate-headshot-on-white-square-1024x1024.jpg";

const HeroPic = () => {
  return (
    <div>
      <img src={img1} alt="Noah Maldonado" className="max-h-[450px] w-auto" />
    </div>
  );
};

export default HeroPic;
