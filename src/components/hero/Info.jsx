import Image from "next/image";
import { me } from "../../assets";
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
        className="sm:h-[150px] sm:w-[150px] relative rounded-full h-[120px] w-[120px]"
      >
        <Image
          src={me}
          className="object-cover border border-red-300 object-center rounded-full"
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
          FULL STACK DEVELOPER
        </motion.p>
        <motion.h1
          className="uppercase font-prompt font-semibold sm:text-[4rem] text-[3rem] text-primary leading-tight"
          variants={wordsContainer}
          initial="hidden"
          animate="visible"
        >
          <TextContainer text="SUZAN RANA" />
        </motion.h1>
        <Button>
          <a href="#about"> Hire me</a>
        </Button>
      </div>
    </div>
  );
};

export default Info;
