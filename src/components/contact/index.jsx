import { motion } from "framer-motion";
import { CiMail, CiPhone } from "react-icons/ci";
import Footer from "./Footer";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import {
  fadeAnimation,
  scaleOutAnimation,
  slideOutAnimation,
  wordsContainerNoDelay,
} from "@/utils/AnimationVarients";
import TextContainer from "../common/TextContainer";

const Contact = () => {
  return (
    <section id="contact" className="main-container">
      <div className="py-[5rem] flex flex-col justify-center items-center gap-8">
        <div>
          <motion.p
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideOutAnimation}
            className="text-textDim font-karla sm:max-w-[60%] text-center mx-auto"
          >
            Have an idea?
          </motion.p>
          <motion.h2
            variants={wordsContainerNoDelay}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="heading2 text-center"
          >
            <TextContainer text="Let's Connect" />
          </motion.h2>
        </div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeAnimation}
          className="flex sm:flex-row flex-col sm:gap-8 gap-4 items-center"
        >
          <a
            href="mailto:dev.suzanrana@gmail.com"
            className="py-3 px-5 flex flex-row gap-2 text-primary bg-backgroundSecondary rounded-xl shadow-md items-center hover:bg-green-300 hover:text-black duration-150 transition-all font-light"
          >
            <CiMail className="text-[1.4rem]" />
            <span className="">dev.suzanrana@gmail.com</span>
          </a>
          <a
            href="tel:+977-9848497112"
            className="py-3 px-5 flex flex-row gap-2 text-primary bg-backgroundSecondary rounded-xl shadow-md items-center hover:bg-green-300 hover:text-black duration-150 transition-all font-light"
          >
            <CiPhone className="text-[1.4rem]" />
            <span className="">+977-9848497112</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
