import React from "react";

type Props = {};

const Footer = (props: Props) => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="w-screen min-h-14 border-t-2 border-custom-dark-light/10 dark:border-white/20  ">
      <div className="flex flex-col md:flex-row items-center justify-between my-8 md:px-24 md:my-0  min-h-14">
        <div className=" text-xs lg:text-sm">
          <span className="text-transparent bg-gradient-flow bg-[length:200%_auto] animate-gradient bg-clip-text font-bold text-base">
            Jerard Pagalilauan’s
          </span>{" "}
          Web Portfolio v2.0
        </div>
        <div className=" text-xs lg:text-sm">
          Copyright © {year} Jerard Pagalilauan
        </div>
      </div>
    </footer>
  );
};

export default Footer;
