import Image from "next/image";
import { heroImage } from "../../assets";
import { motion } from "framer-motion";
import {
  scaleOutAnimation,
  slideOutAnimation,
  wordsContainer,
} from "@/utils/AnimationVarients";
import TextContainer from "../common/TextContainer";
import Button from "../ui/Button";

const Info = () => {
  return (
    <div className="flex flex-col sm:gap-12 gap-8 items-center justify-center">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={scaleOutAnimation}
        className="sm:h-[150px] border-[1px] border-textSecondary/20 sm:w-[150px] relative rounded-full h-[120px] w-[120px]"
      >
        <Image
          src={heroImage}
          className="object-contain object-bottom rounded-full"
          alt="profile"
          priority
          fill
        />
      </motion.div>
      <div className="text-center">
        <motion.p
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={slideOutAnimation}
          className="uppercase sm:tracking-[6px] tracking-[5px] sm:text-[20px] text-textSecondary font-karla"
        >
          FULL STACK SOFTWARE ENGINEER
        </motion.p>
        <motion.h1
          className="uppercase font-prompt font-semibold sm:text-[4rem] text-[3rem] text-green-400 leading-tight"
          variants={wordsContainer}
          initial="hidden"
          animate="visible"
        >
          <TextContainer text="SUZAN RANA" />
        </motion.h1>
        <motion.p
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={slideOutAnimation}
          className="text-gray-400 max-w-[70%] my-2 mx-auto"
        >
          Backend & Data Engineer with expertise in NestJS, Django, TypeScript, and Next.js — building scalable APIs, real-time systems, and data-driven applications. Skilled in architecting robust backend infrastructures and delivering high-performance web solutions powered by PostgreSQL, Redis, and cloud-native tools.
        </motion.p>

        <Button>
          <a href="#about"> Hire me</a>
        </Button>
      </div>
    </div>
  );
};

export default Info;
