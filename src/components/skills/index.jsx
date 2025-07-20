import SkillCard from "./SkillCard";
import TextContainer from "../common/TextContainer";
import { motion } from "framer-motion";
import { wordsContainerNoDelay } from "@/utils/AnimationVarients";

const data = [
  "Node.js",
  "NestJS",
  "PostgreSQL",
  "Redis",
  "MongoDB",
  "CockroachDB",
  "TypeScript",
  "Python",
  "Django",
  "RESTful APIs",
  "Microservices",
  "RabbitMQ",
  "Database optimization",
  "AWS (RDS, ECS)",
  "Docker",
  "Kubernetes",
  "Linux & CLI",
  "CI/CD",
  "Kafka",
  "Big Data Feeds",
  "Stripe Integration",
  "Multitenant SaaS",
  "Scalable Architecture",
  "Performance Optimization"
];

const Skills = () => {
  return (
    <section id="skills" className="pt-[10rem]">
      <div className="py-[2rem]">
        <div className="flex flex-row items-center relative">
          <div className="h-[130px] w-[60px] absolute dots-background left-2 z-0" />
          <motion.h2
            variants={wordsContainerNoDelay}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="heading2 text-center z-10 main-container sm:px-0 px-[1rem]"
          >
            <TextContainer text="Skills" />
          </motion.h2>
        </div>
        <div className="main-container pt-[3rem] px-[1.5rem] w-full overflow-hidden">
          <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-x-8 items-center justify-center md:gap-y-6 gap-4 text-primary">
            {data.map((title, key) => (
              <SkillCard key={key} title={title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
