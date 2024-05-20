import React from "react";
import DarkModeButton from "./DarkModeButton";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className=" bg-transparent h-20 fixed z-50 w-full flex justify-center ">
      <div className="container mt-8 px-8 flex justify-between ">
        <div className=" text-xl lg:text-3xl">jp</div> <DarkModeButton />
      </div>
    </div>
  );
};

export default Navbar;
