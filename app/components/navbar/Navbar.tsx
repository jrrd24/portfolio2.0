"use client";
import React, { useState } from "react";
import DarkModeButton from "../DarkModeButton";
import NavLinks from './components/NavLinks';


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuChange = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="bg-custom-white/80 backdrop-blur-md border-b-2 border-custom-dark dark:bg-gradient-to-tr dark:from-slate-900/95 dark:to-zinc-950/95   min-h-16 md:min-h-20 fixed z-50 w-full flex flex-col justify-center items-center select-none">
      <div className="container px-8 flex justify-between items-center z-40 h-16">
        <a
          href="/#home"
          className=" text-2xl lg:text-3xl bg-gradient-to-tr from-custom-orange via-custom-red to-custom-purple bg-clip-text text-transparent font-medium"
        >
          jp
        </a>
        <div className="hidden lg:block">
          <NavLinks handleMenuChange={()=>handleMenuChange()}/>
        </div>

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
      {/* <div
        className={`w-screen lg:hidden container mt-0 lg:mt-8 px-8 flex flex-col justify-between items-end  ${
          openMenu ? "block h-dvh " : "hidden backdrop-blur-none h-0"
        }`}
      > */}
      <div
        className={` ${
          !openMenu ? "header-menu-hidden" : "header-menu w-dvw p-8"
        }`}
      >

        <NavLinks handleMenuChange={()=>handleMenuChange()}/>
      </div>
    </nav>
  );
};

export default Navbar;

