import React from "react";
import DarkModeButton from "./DarkModeButton";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className=" bg-transparent h-20 fixed z-50 w-full flex justify-center ">
      <div className="container mt-8 px-8 flex justify-between items-center">
        <a
          href="/"
          className=" text-xl lg:text-3xl bg-gradient-to-tr from-custom-orange via-custom-red to-custom-purple bg-clip-text text-transparent"
        >
          jp
        </a>
        <DarkModeButton />
      </div>
    </div>
  );
};

export default Navbar;
