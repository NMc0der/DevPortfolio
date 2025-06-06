import React from "react";
import ContactForm from "./ContactForm";

const ContactLeft = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div>
        <h2 className="text-white text-3xl mb-0">Get In Touch</h2>
        {/* <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          adipisci itaque pariatur tempora sint, excepturi eveniet sit dicta,
          quod omnis iste. Est sunt dolores explicabo tenetur dolore quidem?
          Impedit, inventore?
        </p> */}
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactLeft;
