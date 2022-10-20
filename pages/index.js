import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import { BsArrowRight } from "react-icons/bs";
import Head from "next/head";

export default function Home({ darkMode, setDarkMode }) {
  return (
    <>
      <Head>
        <title>Suzan Rana</title>
      </Head>
      <div id="rootElm">
        <div className="font-inter mx-auto  dark:text-white dark:bg-slate-900">
          <Hero />
          <section
            className={`dark-theme pt-6 md:pt-12 dark:bg-slate-900 ${
              darkMode === false && "projects"
            }`}
            id="projects"
          >
            <Projects />
            <p className="text-center font-clashDisplay text-2xl bg-white bg-opacity-20 backdrop-filter dark:text-slate-400 backdrop-blur-lg   px-4 py-6">
              <a
                className="cursor-pointer underline hover:no-underline dark:text-white"
                href="https://github.com/suzan-rana"
              >
                View all projects <BsArrowRight className="inline-block" />
              </a>
            </p>
          </section>

          <div
            id="about"
            className={`dark-theme pt-12 dark:bg-slate-900 ${
              darkMode === false && "about"
            }`}
          >
            <About />
          </div>
        </div>
      </div>
    </>
  );
}
