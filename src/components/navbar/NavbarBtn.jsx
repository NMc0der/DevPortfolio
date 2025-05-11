import React from "react";
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <button
      className="px-4 py-2 rounded-full text-xl font-bold 
       text-white border-cyan border flex items-center gap-1 hover:shadow-[0px_0px_20px_0px_rgba(94,206,220,0.9)]      
      bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 cursor-pointer transition-all duration-500"
    >
      Hire Me
      <div className="sm:hidden md:block">
        <LuArrowDownRight />
      </div>
    </button>
  );
};

export default NavbarBtn;
