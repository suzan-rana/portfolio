import React from "react";
import Image from "next/image";
import slime from "../public/images/slime.png";

const Hero = () => {
  return (
    <section className="w-[95%] max-w-[900px] mx-auto dark:bg-transparent ">
      <h1 className="text-5xl md:text-7xl pt-4 font-clashDisplay  font-[600] text-center mainText">
        Suzan Rana
      </h1>
      <h4 className="text-lg md:text-2xl font-medium text-center py-2 md:py-4">
        Backend Web Developer
      </h4>
      <p className="text-center text-gray-800 text-sm md:w-[55%] text-slate dark:text-slate-400 mt-4 mb-8 mx-auto leading-7">
        Hello, I am an aspiring Software Engineer, currently learning
        TypeScript, (NodeJS) ={">"} NestJS, PostgresSQl and other fun
        technologies.
      </p>
      <div className="flex justify-center gap-6  mb-12">
        <a
          href="#contact"
          className="border-[#4bba00] border-[1px] px-4 py-2 rounded-md shadow-md cursor-pointer hover:bg-[#4bba00] hover:text-white dark:text-white"
        >
          Contact me
        </a>
        <a
          download
          href="suzanrana.pdf"
          className="bg-[#4bba00] text-white px-4 py-2  rounded-md shadow-md cursor-pointer hover:bg-transparent border-transparent hover:border-[#4bba00] border-[1px] hover:text-[#4bba00]"
        >
          Resume
        </a>
      </div>
      <div className="w-[68%] mb-8 mx-auto">
        <Image src={slime} alt="slime" />
      </div>
    </section>
  );
};

export default Hero;
