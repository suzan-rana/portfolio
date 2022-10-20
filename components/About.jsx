import React from "react";
import Image from "next/image";
import me from "../public/images/me.jpg";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
// import { AiFillTwitterCircle } from "react-icons/ai";

const copyText = () => {
  const tag = document.getElementById("copyField");
  tag.classList.toggle(`bg-[#4bba00]`);
  tag.classList.toggle(`text-white`);
  navigator.clipboard.writeText(tag.value);
};
// #1A1A1A
// #242424
const About = () => {
  return (
    <div className="mt-12 py-4 mx-auto max-w-[900px] w-[90%] pb-16">
      <h1 className="text-center font-clashDisplay font-semibold text-5xl">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row flex-start gap-6 md:gap-16 my-16 py-12 rounded-lg px-8 bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg dark:bg-slate-800 ">
        <div className="overflow-hidden rounded-xl">
          <Image src={me} className="block min-h-full max-w-[100%]" />
        </div>

        <p className="text-xl max-w-[500px] pt-4  leading-8 dark:text-slate-300" id="contact">
          Hello, my name is Suzan Rana, a developer based in Nepal. I love
          programming and building web applications and solving the problems of
          multiple people through technology. Every time I solve a new problem
          and help people and grow business, it makes my heart warm and glad and
          the sense of satisfaction of that particular moment keeps me moving
          forward.
        </p>
      </div>
      <div className="flex  my-6 justify-around gap-4 items-center bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg dark:bg-slate-800 min-w-[300px] w-[50%] px-5 py-6 mx-auto rounded-xl ">
        <a href="" className="inline-block"><AiFillLinkedin  className="text-6xl "/></a>
        <a href="https://github.com/suzan-rana" target="_blank" className="inline-block"><AiFillGithub className="text-6xl"/></a>
        <a href="" className="inline-block"><AiFillTwitterCircle className="text-6xl"/></a>
    
        
      </div>
      
      <div className="text-center text-[#337308] text-3xl underline font-clashDisplay cursor-pointer">
        <a href="mailto:dev.suzan@gmail.com">Click here to open in Mail.</a>
      </div>
      <p className="text-center text-xl mt-10 mb-6">
        or click below to COPY in Clipboard
      </p>
      <div className="text-center" id="parent">
        <input
          readOnly
          className="text-xl font-semibold border-[1px] font-clashDisplay cursor-pointer py-4 px-6 text-center  text-black rounded-md "
          id="copyField"
          type="text"
          value="dev.suzan@gmail.com"
          onClick={copyText}
        />
      </div>
    </div>
  );
};

export default About;