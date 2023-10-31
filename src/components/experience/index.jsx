import { motion } from "framer-motion";
import experienceData from "../../data/works.json";
import ExperienceCard from "./ExperienceCard";
import { useState } from "react";
import { wordsContainerNoDelay } from "@/utils/AnimationVarients";
import TextContainer from "../common/TextContainer";

const Experience = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleAfterChange = (index) => {
    setActiveSlide(index);
  };

  return (
    <section id="experience" className="main-container pt-[10rem] mt-[2rem]">
      <div className="text-center flex flex-row items-center relative">
        <motion.h2
          variants={wordsContainerNoDelay}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="heading2 z-10"
        >
          <TextContainer text="Work Experience" />
        </motion.h2>
        <div className="h-[100px] w-[150px] absolute dots-background right-0 z-0"></div>
      </div>
      <div className="pt-[2rem] grid grid-cols-1 sm:grid-cols-2 ">
        {experienceData.map((entry, key) => (
          <ExperienceCard data={entry} key={key} active={true} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
