import React from "react";

const SingleInfo = ({ text, icon }) => {
  return (
    <div className="flex gap-4 items-center justify-start">
      <div className="text-3xl">{icon}</div>
      <p>{text}</p>
    </div>
  );
};

export default SingleInfo;
