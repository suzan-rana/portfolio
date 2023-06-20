import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import projects from "../../data/projects.json";
import Head from "next/head";
import TextContainer from "@/components/common/TextContainer";
import { slideOutAnimation, wordsContainer } from "@/utils/AnimationVarients";
import Image from "next/image";

const ProjectItemPage = ({ projectData }) => {
  return (
    <>
      <Head>
        <title>{projectData.title}</title>
      </Head>
      <main className="w-[90%] sm:w-[70%] pt-32 mx-auto">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={slideOutAnimation}
          className="flex justify-between grow  flex-col gap-3"
        >
          <h1 className="heading2 pb-2 underline text-green-400 leading-tight">
            {projectData.title}
          </h1>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-2 flex-wrap">
              {projectData.stack.map((entry, key) => (
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
          <h3 className="my-2 text-green-200 text-base sm:text-lg ">{projectData.subtitle}</h3>
          <p className="text-gray-300">Live at: <a href={projectData.url} target="_blank" className="underline text-green-200 pl-2" >Click here</a></p>
          <p className="text-gray-300">Code : <a href={projectData.github} target="_blank" className="underline pl-2 text-green-200" >Click here</a></p>

        </motion.div>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={slideOutAnimation}
          className="w-full relative aspect-video my-12 cursor-pointer overflow-hidden rounded-xl"
        >
          <Image
            src={projectData.featuredImage}
            className="object-cover rounded-xl hover:scale-110 duration-500 transition-all"
            alt=""
            fill
          />
        </motion.div>
        <div
          className="flex flex-col gap-5 text-gray-400 font-normal text-lg font-karla mb-20"
          dangerouslySetInnerHTML={{ __html: projectData.description }}
        />
      </main>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const projectData = projects.find((item) => item.id === +params["projectId"]);
  if (!projectData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      projectData,
    },
  };
}

export default ProjectItemPage;
ProjectItemPage.getLayout = function getLayout(page) {
  return (
    <Layout>
      <>{page}</>
    </Layout>
  );
};
