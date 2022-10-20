import React from "react";
import Image from "next/image";
import Trello from "../public/images/trello.png";
import Ecwid from "../public/images/ecwid.png";
import BookmarkManager from "../public/images/bookmarkManager.png";
import Manage from "../public/images/manage.png";
import {BsArrowRight} from "react-icons/bs";
// #1A1A1A
// #242424
const Projects = ({darkMode}) => {
  
  return (
    <div className="py-12 max-w-[900px] w-[90%] mx-auto my-20 dark:bg-transparent  ">
      <h1 className="font-clashDisplay text-center text-5xl font-semibold dark:text-white">
        Projects
      </h1>
      <p className="md:text-lg text-gray-700 leading-8 py-4 text-center md:w-[65%] mx-auto dark:text-slate-400">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
        dolor ut natus quos molestiae vel assumenda cupiditate quae cum maiores.
      </p>
      {/* boxes=================== */}
      <div className="flex flex-col lg:justify-between my-12 flex-wrap gap-12 md:flex-row   ">
        <div className="w-[100%] shadow-md rounded-xl overflow-hidden px-6 py-6 lg:w-[45%] bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg dark:bg-slate-800 ">
          <Image src={Trello} className="rounded-md" />
          <h3 className="text-3xl font-semibold font-clashDisplay mt-4">
            Trello
          </h3>
          <p className="py-6 md:text-lg dark:text-slate-400  ">
            This project was made using TailwindCSS. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quam corrupti dolorum consequuntur
            modi velit. Magnam?
          </p>
          <a
            href="https://suzan-rana.github.io/Trello/" target="_blank"
            className=" underline hover:no-underline text-xl"
          >
            Visit site here <BsArrowRight className="inline" />
          </a>
        </div>
        <div className="shadow-md rounded-xl px-6 py-6 lg:w-[45%] bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg dark:bg-slate-800">
          <Image src={Ecwid} className="rounded-md" />
          <h3 className="text-3xl font-semibold font-clashDisplay mt-4">
            Ecwid
          </h3>
          <p className="py-6 md:text-lg text-gray-700 dark:text-slate-400">
            This project was made using TailwindCSS. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quam corrupti dolorum consequuntur
            modi velit. Magnam?
          </p>
          <a
            href="https://suzan-rana.github.io/Ecwid/"
            className="text-xl underline hover:no-underline" target="_blank"
          >
            Visit site here <BsArrowRight className="inline" />
          </a>
        </div>
        <div className="shadow-md rounded-xl px-6 py-6 lg:w-[45%] bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg dark:bg-slate-800">
          <Image src={BookmarkManager} className="rounded-md" />
          <h3 className="text-3xl font-semibold font-clashDisplay mt-4">
            Bookmark Manager
          </h3>
          <p className="py-6 md:text-lg text-gray-700 dark:text-slate-400">
            This project was made using TailwindCSS. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quam corrupti dolorum consequuntur
            modi velit. Magnam?
          </p>
          <a
            href="https://suzan-rana.github.io/Bookmark-Manager/" target="_blank"
            className="text-xl underline hover:no-underline"
          >
            Visit site here <BsArrowRight className="inline" />
          </a>
        </div>
        <div className="shadow-md rounded-xl px-6 py-6 lg:w-[45%] bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg dark:bg-slate-800">
          <Image src={Manage} className="rounded-md" />
          <h3 className="text-3xl font-semibold font-clashDisplay mt-4">
            Manage
          </h3>
          <p className="py-6 md:text-lg text-gray-700 dark:text-slate-400">
            This project was made using TailwindCSS. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quam corrupti dolorum consequuntur
            modi velit. Magnam?
          </p>
          <a
            href="https://suzan-rana.github.io/manage-landing-tailwindcss/" target="_blank"
            className="text-xl underline hover:no-underline "
          >
            Visit site here <BsArrowRight className="inline" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
