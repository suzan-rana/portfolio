import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { useState } from "react";




export default function Home({darkMode, setDarkMode}) {
  

  return (
    <div  id="rootElm" >
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
            <Link href="/"  >
              <a className="cursor-pointer underline hover:no-underline dark:text-white">
                View all projects <BsArrowRight className="inline-block" />
              </a>
            </Link>
          </p>
        </section>

        <div id="about" className={`dark-theme pt-12 dark:bg-slate-900 ${
            darkMode === false && "about"
          }`}>
          <About />
        </div>
      </div>
    </div>
  );
}
// text-black text-xl max-w-[50%] mx-auto bg-gray-500 py-2 gap-6 bg-opacity-60 backdrop-filter backdrop-blur-lg
