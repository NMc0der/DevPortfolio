import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const ContactForm = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  // const [success, setSuccess] = useState("");

  // const handleName = (e) => {
  //   setName(e.target.value);
  // };
  // const handleEmail = (e) => {
  //   setEmail(e.target.value);
  // };
  // const hadleMessage = (e) => {
  //   setMessage(e.target.value);
  // };

  const [sentMessage, SetSentMessage] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_u4oserh", "template_7kzmdmk", form.current, {
        publicKey: "VPfm1WaMgIKuv0-NI",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    e.target.reset();
    SetSentMessage(true);
  };

  return (
    <div>
      <p className={`text-cyan ${sentMessage ? "block" : "hidden"}`}>
        Message sent!
      </p>
      <form
        action=""
        className="flex flex-col gap-4"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          type="text"
          name="name"
          id=""
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-[#547792] px-2"
        />
        <input
          type="email"
          name="email"
          id=""
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-[#547792] px-2"
        />
        <textarea
          name="message"
          id=""
          placeholder="Message"
          rows={9}
          cols={50}
          required
          className=" rounded-lg bg-[#547792] p-2"
        ></textarea>
        <button
          type="submit"
          className=" cursor-pointer w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
