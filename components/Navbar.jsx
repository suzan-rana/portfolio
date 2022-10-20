import React from "react";
import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";
// #1A1A1A
// #242424

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <div >
      <header className="flex dark:bg-slate-900 w-[100%] justify-center h-[125px]">
        <nav className="z-50 dark:text-white fixed top-2 mt-4 w-[95%] mx-auto md:max-w-[900px] flex px-6 py-4 justify-between rounded-md  shadow-md bg-opacity-60 backdrop-filter backdrop-blur-lg dark:bg-opacity-30">
          <ul className="flex flex-1 justify-between">
            <li className="text-lg">
              <Link href="/">Home</Link>
            </li>
            <li className="text-lg">
              <Link href="/blogs">Blogs</Link>
            </li>
            <li className="text-lg">
              <Link href="http://localhost:3000/#projects">Projects</Link>
            </li>
            <li className="text-lg">
              <Link href="http://localhost:3000/#about">About</Link>
            </li>
          </ul>
          <div className="w-[20%] sm:w-[50%] flex justify-end" id="night">
            <BsFillMoonStarsFill
              className=" cursor-pointer text-2xl"
              onClick={() => {
                setDarkMode(!darkMode);
              }}
            />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
// sm:max-w-[350px] sm:left
