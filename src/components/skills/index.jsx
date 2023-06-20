import {
  FaNode,
  FaReact,
  FaSass,
  FaGitAlt,
  FaGithub
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiRedux
} from "react-icons/si";
import {TbBrandNextjs} from 'react-icons/tb'

import SkillCard from "./SkillCard";
import TextContainer from "../common/TextContainer";
import { motion } from "framer-motion";
import { wordsContainerNoDelay } from "@/utils/AnimationVarients";

const data = [
  {
    icon: <FaReact />,
    title: "React JS",
  },
  {
    icon: <FaNode />,
    title: "Node JS",
  },
  {
    icon: <FaSass />,
    title: "SASS",
  },
  {
    icon: <SiTailwindcss />,
    title: "Tailwind CSS",
  },
  {
    icon: <SiTypescript />,
    title: 'TypeScript'
  },
  {
    icon: <FaGithub />,
    title: 'Github'
  },
  ,
  {
    icon: <FaGitAlt />,
    title: 'Git'
  }
  ,
  {
    icon: <TbBrandNextjs />,
    title: 'NextJS'
  }
  ,
  {
    icon: <SiJavascript />,
    title: 'JavaScript'
  }
  ,
  {
    icon: <SiRedux />,
    title: 'Redux Toolkit'
  }
];

const Skills = () => {
  return (
    <section id="skills" className="pt-[10rem]">
      <div className="py-[2rem}">
        <div className="flex flex-row items-center relative">
          <div className="h-[130px] w-[60px] absolute dots-background left-2 z-0" />
          <motion.h2
            variants={wordsContainerNoDelay}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="heading2 text-center z-10 main-container sm:px-0 px-[1rem]"
          >
            <TextContainer  text="Skills" />
          </motion.h2>
        </div>
        <div className="main-container pt-[3rem] px-[1.5rem] w-full overflow-hidden">
          <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-4 grid-cols-3 md:gap-x-12 md:gap-y-8 gap-x-4 gap-y-4 text-primary">
            {data.map((entry, key) => (
              <div className="col-span-1" key={key}>
                <SkillCard icon={entry.icon} title={entry.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
