import { motion } from "framer-motion";
import {
  slideLeftAnimation,
  slideRightAnimation,
  wordsContainerNoDelay,
} from "@/utils/AnimationVarients";

import { BsBoxArrowInUpRight } from "react-icons/bs";
import Image from "next/image";
import { me } from "@/assets";
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
                <TextContainer text="About Suzan Rana" />
              </motion.h2>
              <motion.div
                variants={slideRightAnimation}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                className="w-full z-10"
              >
                <Image
                  src={me}
                  className="rounded-xl h-full w-full object-cover z-10"
                  alt="Suzan Rana Profile"
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
              <h2 className="heading2 sm:block hidden">About Suzan Rana</h2>
              <div className="flex flex-col gap-2">
                <p className="text-primary font-karla font-light">
                  Hello, I’m <strong>Suzan Rana</strong>, a Backend-leaning Software Engineer with over 3 years of experience designing high-performance systems, building B2B platforms, and deploying resilient backend services across Europe and Asia. Currently, I’m part of engineering teams at{" "}
                  <a
                    href="https://morgenland-teppiche.de/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link underline"
                  >
                    Morgenland Teppiche
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://maison-architecture.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link underline"
                  >
                    Maison & Architecture
                  </a>, where I lead efforts around product data engineering and infrastructure scalability.
                  <br />
                  <br />
                  My expertise spans <strong>Node.js, NestJS, PostgreSQL, AWS, RabbitMQ</strong>, and distributed systems. I’ve helped build SaaS platforms, e-commerce engines, and time tracking products like{" "}
                  <a
                    href="https://hourtag.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link underline"
                  >
                    Hourtag
                  </a>, always focused on performance, maintainability, and scale.
                  <br />
                  <br />
                  I’m deeply interested in system design, developer experience, and continuous improvement—technically and personally. Let’s build things that last and scale.
                </p>
              </div>
              <div className="w-max">
                <Button>
                  <a
                    href="/Suzan-Rana-Resume.pdf"
                    target="_blank"
                    className="block w-full h-full"
                  >
                    Checkout my Resume
                  </a>
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
