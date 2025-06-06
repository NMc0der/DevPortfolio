import React from "react";
import { Link } from "react-scroll";
const FooterMain = () => {
  const links = [
    { link: "About Me", section: "about" },
    { link: "Skills", section: "skills" },
    { link: "Projects", section: "projects" },
    { link: "Contact", section: "contact" },
  ];

  return (
    <div className="px-4">
      <div className="w-full h-[1px] bg-[#547792] mt-24"></div>
      <div className="md:flex sm:hidden justify-between mt-4 max-w-[1200px] mx-auto">
        <Link
          to={"home"}
          smooth={true}
          spy={true}
          duration={500}
          offset={-130}
          className="text-3xl text-[#547792] cursor-pointer hover:text-white transition-all duration-500"
        >
          Noah Maldonado
        </Link>
        <ul className="flex gap-4 text-[#547792] text-xl">
          {links.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  to={item.section}
                  smooth={true}
                  spy={true}
                  duration={500}
                  offset={-130}
                  className="hover:text-white transition-all duration-500 cursor-pointer"
                >
                  {item.link}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-[#547792]">
        © 2025 Noah Maldonado | All Rights Reserved.
      </p>
    </div>
  );
};

export default FooterMain;
