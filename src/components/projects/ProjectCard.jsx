import { slideOutAnimation } from "@/utils/AnimationVarients";
import { motion } from "framer-motion";

import Image from "next/image";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import Button from "../ui/Button";
import Link from "next/link";

const ProjectCard = ({ data }) => {
  return (
    <div className="flex border-gray-800 px-4 py-4 rounded-md transition-colors duration-500 hover:border-green-500  border flex-col gap-4">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideOutAnimation}
        className="flex justify-between grow min-h-fit flex-col gap-3"
      >
        <h3 className="heading3 leading-tight">{data.title}</h3>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row gap-2 flex-wrap">
            {data.stack.map((entry, key) => (
              <div
                className="py-1 px-3 bg-backgroundSecondary text-sm rounded-xl"
                key={key}
              >
                <span className="text-primary font-extralight font-karla">
                  {entry}
                </span>
              </div>
            ))}
          </div>
        </div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={slideOutAnimation}
          className="w-full aspect-video relative overflow-hidden rounded-xl"
        >
          <Image
            src={data.featuredImage}
            className="object-cover object-center hover:scale-110  rounded-xl  duration-500 transition-all"
            alt=""
            fill
          />
        </motion.div>
        <p className="text-gray-400 py-2" > {data.subtitle}</p>
        <p className="text-green-200">Live at: <a href={data.url} target="_blank" className="underline pl-2" >Click here</a></p>
        <Button className={""}>
          <Link className="block w-full h-full" href={`/projects/${data.id}`}>
            Read more
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
