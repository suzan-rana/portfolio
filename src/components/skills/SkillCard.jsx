import { motion } from "framer-motion";
import {
  slideOutAnimation,
  slideOutAnimation2,
} from "@/utils/AnimationVarients";

const SkillCard = ({ icon, title }) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      variants={slideOutAnimation2}
      className="flex border-gray-800 transition-colors border hover:border-green-500 flex-col gap-3 items-center justify-center bg-backgroundSecondary md:py-10 py-6 rounded-xl h-full"
    >
      <div className="text-primary md:text-[3rem] text-[2rem]">{icon}</div>
      <span className="text-textDim font-light font-prompt sm:text-base text-sm text-center">
        {title}
      </span>
    </motion.div>
  );
};

export default SkillCard;
