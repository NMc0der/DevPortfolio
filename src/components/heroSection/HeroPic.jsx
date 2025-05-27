import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/varients";
const img1 =
  "https://heroshotphotography.com/wp-content/uploads/2023/03/male-linkedin-corporate-headshot-on-white-square-1024x1024.jpg";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
    >
      <img src={img1} alt="Noah Maldonado" className="max-h-[450px] w-auto" />
    </motion.div>
  );
};

export default HeroPic;
