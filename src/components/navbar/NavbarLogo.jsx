import React from "react";
import { Link } from "react-scroll";

const NavbarLogo = () => {
  return (
    <Link to={"home"} smooth={true} spy={true} duration={500} offset={-130}>
      <h1 className=" cursor-pointer text-white text-2xl sm:hidden md:block">
        Noah Maldonado
      </h1>
      <h1 className="cursor-pointer text-white font-special font-extrabold text-4xl sm:block md:hidden">
        NM
      </h1>
    </Link>
  );
};

export default NavbarLogo;
