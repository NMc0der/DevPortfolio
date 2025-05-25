import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
      <SingleInfo
        text={"noahglennmaldonado@gmail.com"}
        icon={<MdOutlineEmail />}
      />
      <SingleInfo text={"(440) 220-0406"} icon={<FiPhone />} />
      <SingleInfo text={"Painesville, Ohio"} icon={<IoLocationOutline />} />
    </div>
  );
};

export default ContactInfo;
