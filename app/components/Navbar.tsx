"use client";
import React, { useState } from "react";
import DarkModeButton from "./DarkModeButton";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuChange = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="bg-white/60 dark:bg-zinc-950/70 backdrop-blur-sm lg:backdrop-blur-none  dark:lg:bg-transparent lg:bg-transparent min-h-16 md:min-h-20 fixed z-50 w-full flex flex-col justify-center items-center ">
      <div className="container mt-0 lg:mt-8 px-8 flex justify-between items-center z-50 h-16">
        <a
          href="/#home"
          className=" text-xl lg:text-3xl bg-gradient-to-tr from-custom-orange via-custom-red to-custom-purple bg-clip-text text-transparent"
        >
          jp
        </a>
        <div className="hidden lg:block">
          <DarkModeButton />
        </div>
        <div className="block lg:hidden">
          <label className="hamburger">
            <input
              type="checkbox"
              onChange={() => handleMenuChange()}
              checked={openMenu}
            />
            <svg viewBox="0 0 32 32">
              <path
                className="line stroke-current line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              ></path>
              <path className="line stroke-current" d="M7 16 27 16"></path>
            </svg>
          </label>
        </div>
      </div>
      <div
        className={`w-screen lg:hidden container mt-0 lg:mt-8 px-8 flex flex-col justify-between items-end  ${
          openMenu ? "block h-screen " : "hidden backdrop-blur-none h-0"
        }`}
      >
        <ul className="text-right space-y-8 pt-36">
          <li>
            <Link
              href="#home"
              onClick={() => handleMenuChange()}
              className="py-4 pl-16"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              onClick={() => handleMenuChange()}
              className="py-4 pl-16"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              onClick={() => handleMenuChange()}
              className="py-4 pl-16"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              onClick={() => handleMenuChange()}
              className="py-4 pl-16"
            >
              Contact
            </Link>
          </li>
          <li className="pt-16">
            <DarkModeButton />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
