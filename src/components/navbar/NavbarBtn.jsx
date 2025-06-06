import React from "react";
import { LuArrowDownRight } from "react-icons/lu";
import { Link } from "react-scroll";

const NavbarBtn = () => {
  return (
    <Link
      to={"contact"}
      smooth={true}
      spy={true}
      duration={500}
      offset={-130}
      className="px-4 py-2 rounded-full text-xl font-bold 
       text-white  flex items-center gap-1 hover:shadow-[0px_0px_20px_0px_rgba(94,206,220,0.9)]      
      bg-gradient-to-r from-cyan to-[#0065F8] hover:border-none hover:scale-110 cursor-pointer transition-all duration-500"
    >
      Hire Me
      <div className="sm:hidden md:block">
        <LuArrowDownRight />
      </div>
    </Link>
  );
};

// border-cyan border
export default NavbarBtn;
