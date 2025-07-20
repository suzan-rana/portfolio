import { motion } from "framer-motion";
import { slideOutAnimation2 } from "@/utils/AnimationVarients";

const SkillCard = ({ title }) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      variants={slideOutAnimation2}
      className="rounded-3xl border border-gray-800 bg-backgroundSecondary/60
                 backdrop-blur-md px-6 py-3 md:py-4 text-center
                 shadow-md hover:shadow-green-500/30 hover:border-green-500
                 transition-all duration-300 
                 text-textSecondary font-prompt font-medium text-sm sm:text-base"
    >
      {title}
    </motion.div>
  );
};

export default SkillCard;
