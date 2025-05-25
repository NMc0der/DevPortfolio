import React from "react";
import emailImg from "../../images/email-image.png";
import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

const ContactRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <img src={emailImg} alt="Contact-me" className="max-w-[300px]" />
      <ContactInfo />
      <ContactSocial />
    </div>
  );
};

export default ContactRight;
