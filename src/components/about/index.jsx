import { motion } from "framer-motion";
import {
  slideLeftAnimation,
  slideRightAnimation,
  wordsContainerNoDelay,
} from "@/utils/AnimationVarients";

import { BsBoxArrowInUpRight } from "react-icons/bs";
import Image from "next/image";
import { profile } from "@/assets";
import TextContainer from "../common/TextContainer";
import Button from "../ui/Button";

const About = () => {
  return (
    <section id="about" className="pt-[7rem]">
      <div className="bg-backgroundSecondary w-full overflow-hidden">
        <div className="main-container relative py-[3rem]">
          <div className="h-[150px] w-[150px] absolute dots-background right-0 z-0"></div>
          <div className="sm:py-[4rem] py-[2rem] px-[1.5rem] flex sm:flex-row flex-col items-center justify-between md:gap-[4rem] gap-[2rem] sm:gap-[1rem] z-10">
            <div className="flex flex-col gap-4 z-10 basis-1/3">
              <motion.h2
                variants={wordsContainerNoDelay}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="sm:hidden block heading2 text-center"
              >
                <TextContainer text="Introducing Myself" />
              </motion.h2>
              <motion.div
                variants={slideRightAnimation}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                className="w-full z-10"
              >
                <Image
                  src={profile}
                  className="rounded-xl h-full w-full object-cover z-10"
                  alt="Profile"
                />
              </motion.div>
            </div>
            <motion.div
              variants={slideLeftAnimation}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col gap-4 basis-2/3 z-10"
            >
              <h2 className="heading2 sm:block hidden">Introducing Myself</h2>
              <div className="flex flex-col gap-2">
                <p className="text-primary font-karla font-light">
                  Hey, I am Suzan Rana, a passionate Software Developer from Nepal
                  with a strong foundation in computer science. My expertise
                  lies in web development using the MERN stack and TypeScript. I intent to dive deeper into web
                  development and constantly strive to integrate modern
                  technologies into web development to enhance user experience,
                  improve performance and ensure reliability.
                  <br />
                  I&apos;m looking forward to connect with fellow developers and
                  industry professionals to exchange ideas, share knowledge, and
                  embark on an incredible journey of growth and innovation.
                </p>
                <div>
                  <h3 className="heading3">Education</h3>
                  <div className="">
                    <p className="font-karla text-primary text-[20px]">
                      Lumbini City College - Tilottama, Nepal
                    </p>
                    <p className="font-karla font-light text-primary">
                      BCA: Bachelor in Computer Application
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-max">
                <Button>
                  <a href="/resume.pdf" target="_blank" className="block w-full h-full">Checkout my Resume</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
