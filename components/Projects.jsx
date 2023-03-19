import React from "react";
import Image from "next/image";
import Trello from "../public/images/trello.png";
import Violla from "../public/images/viola.png";

import Webcommerce from "../public/images/webcommerce.png";
import Ecwid from "../public/images/ecwid.png";
import BookmarkManager from "../public/images/bookmarkManager.png";
import Manage from "../public/images/manage.png";
import { BsArrowRight } from "react-icons/bs";

const Projects = ({ darkMode }) => {
  return (
    <div className="py-12 max-w-[900px] w-[90%] mx-auto my-20 dark:bg-transparent  ">
      <h1 className="font-clashDisplay text-center text-5xl font-semibold dark:text-white">
        Projects
      </h1>
      <p className="md:text-lg text-gray-700 leading-8 py-4 text-center md:w-[65%] mx-auto dark:text-slate-400">
        Some of my recently build Backend Projects, I like to use TypeScript,
        NestJS, NextJS, TypeOrm.
      </p>
      {/* boxes=================== */}
      <div className="flex flex-col lg:justify-between my-12 flex-wrap gap-12 md:flex-row   ">
        <Card
          title={"CMS - Backend"}
          description="This is a content management system(blogging application), where user can write blogs, read blogs and do other cool stuffs - Made with TypeScript, Postgresql, NestJS.  "
          imageLink={Violla}
          link="https://github.com/suzan-rana/cms-backend"
        />
        <div className="w-[100%] shadow-md rounded-xl overflow-hidden px-6 py-6 lg:w-[45%] bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg dark:bg-slate-800 ">
          <Image alt="trello" src={Webcommerce} className="rounded-md" />
          <h3 className="text-3xl font-semibold font-clashDisplay mt-4">
            WebCommerce Backend
          </h3>
          <p className="py-6 md:text-lg dark:text-slate-400  ">
            This project was made using NestJS, NextJS, TypeScript, MaterialUI,
            This is an ecommerce app built on the web, where you can, add items
            to card, remove items, Stripe(for payment) is used (although only
            for test purposes).
          </p>
          <a
            rel="noreferrer"
            href="https://github.com/suzan-rana/webcommerce-backend"
            target="_blank"
            className=" underline hover:no-underline text-xl"
          >
            Visit code here <BsArrowRight className="inline" />
          </a>
        </div>
        {/* <div className="w-[100%] shadow-md rounded-xl overflow-hidden px-6 py-6 lg:w-[45%] bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg dark:bg-slate-800 ">
          <Image alt="trello" src={Trello} className="rounded-md" />
          <h3 className="text-3xl font-semibold font-clashDisplay mt-4">
            Trello
          </h3>
          <p className="py-6 md:text-lg dark:text-slate-400  ">
            This project was made using TailwindCSS. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quam corrupti dolorum consequuntur
            modi velit. Magnam?
          </p>
          <a
            rel="noreferrer"
            href="https://suzan-rana.github.io/Trello/"
            target="_blank"
            className=" underline hover:no-underline text-xl"
          >
            Visit site here <BsArrowRight className="inline" />
          </a>
        </div>
        <div className="shadow-md rounded-xl px-6 py-6 lg:w-[45%] bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg dark:bg-slate-800">
          <Image alt="ecwid" src={Ecwid} className="rounded-md" />
          <h3 className="text-3xl font-semibold font-clashDisplay mt-4">
            Ecwid
          </h3>
          <p className="py-6 md:text-lg text-gray-700 dark:text-slate-400">
            This project was made using TailwindCSS. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quam corrupti dolorum consequuntur
            modi velit. Magnam?
          </p>
          <a
            rel="noreferrer"
            href="https://suzan-rana.github.io/Ecwid/"
            className="text-xl underline hover:no-underline"
            target="_blank"
          >
            Visit site here <BsArrowRight className="inline" />
          </a>
        </div>
        <div className="shadow-md rounded-xl px-6 py-6 lg:w-[45%] bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg dark:bg-slate-800">
          <Image
            alt="bookmarkmanager"
            src={BookmarkManager}
            className="rounded-md"
          />
          <h3 className="text-3xl font-semibold font-clashDisplay mt-4">
            Bookmark Manager
          </h3>
          <p className="py-6 md:text-lg text-gray-700 dark:text-slate-400">
            This project was made using TailwindCSS. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quam corrupti dolorum consequuntur
            modi velit. Magnam?
          </p>
          <a
            rel="noreferrer"
            href="https://suzan-rana.github.io/Bookmark-Manager/"
            target="_blank"
            className="text-xl underline hover:no-underline"
          >
            Visit site here <BsArrowRight className="inline" />
          </a>
        </div>
        <div className="shadow-md rounded-xl px-6 py-6 lg:w-[45%] bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg dark:bg-slate-800">
          <Image alt="manage" src={Manage} className="rounded-md" />
          <h3 className="text-3xl font-semibold font-clashDisplay mt-4">
            Manage
          </h3>
          <p className="py-6 md:text-lg text-gray-700 dark:text-slate-400">
            This project was made using TailwindCSS. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quam corrupti dolorum consequuntur
            modi velit. Magnam?
          </p>
          <a
            rel="noreferrer"
            href="https://suzan-rana.github.io/manage-landing-tailwindcss/"
            target="_blank"
            className="text-xl underline hover:no-underline "
          >
            Visit site here <BsArrowRight className="inline" />
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;

export const Card = ({ title, link, imageLink, description }) => {
  return (
    <div className="w-[100%] shadow-md rounded-xl overflow-hidden px-6 py-6 lg:w-[45%] bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg dark:bg-slate-800 ">
      <Image alt="trello" src={imageLink} className="rounded-md" />
      <h3 className="text-3xl font-semibold font-clashDisplay mt-4">{title}</h3>
      <p className="py-6 md:text-lg dark:text-slate-400  ">{description}</p>
      <a
        rel="noreferrer"
        href={link}
        target="_blank"
        className=" underline hover:no-underline text-xl"
      >
        Visit code here <BsArrowRight className="inline" />
      </a>
    </div>
  );
};
