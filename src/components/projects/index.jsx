import { motion } from "framer-motion";
import { wordsContainerNoDelay } from "@/utils/AnimationVarients";

import ProjectCard from "./ProjectCard";
import projects from "../../data/projects.json";
import TextContainer from "../common/TextContainer";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
const Projects = () => {
  return (
    <section id="projects" className="pt-[6rem]">
      <div className="flex flex-row items-center relative">
        <div className="main-container flex flex-row items-center relative sm:px-0 px-4">
          <motion.h2
            variants={wordsContainerNoDelay}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="heading2 text-center z-10"
          >
            <TextContainer text="Projects" />
          </motion.h2>
        </div>
        <div className="h-[130px] w-[90px] absolute dots-background right-0 z-0"></div>
      </div>
      <div className="main-container pt-[3rem] px-[1.5rem]">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-12">
          {projects.slice(0, 3).map((data) => (
            <ProjectCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
