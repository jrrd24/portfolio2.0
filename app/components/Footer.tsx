import React from "react";

type Props = {};

const Footer = (props: Props) => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="w-screen py-4 border-t-2 border-custom-dark dark:border-white/20 select-none">
      <div className="flex flex-col md:flex-row  lg:pt-1 md:my-2 my-0 pb-2 px-8 md:px-24  ">
        <div className="flex flex-col items-center md:items-start gap-0 w-full   ">
          <a
            href="/#home"
            className=" text-2xl lg:text-3xl bg-gradient-to-tr from-custom-orange via-custom-red to-custom-purple bg-clip-text text-transparent font-medium pt-4 pb-6"
          >
            jp
          </a>

          <div className=" flex md:flex-row flex-col-reverse md:gap-0 gap-8 items-end justify-between w-full">
            <div className="flex flex-col md:text-left text-center w-full">
              <div className=" text-sm lg:text-base">
                <span className="text-transparent bg-gradient-flow bg-[length:200%_auto] animate-gradient bg-clip-text font-bold text-base">
                  <span>Jerard Pagalilauan’s</span>
                </span>{" "}
                Web Portfolio v2.5
              </div>
              <div className=" text-xs lg:text-sm text-custom-dark/60 dark:text-white/60">
                {`© ${year} Jerard Pagalilauan`}
              </div>
            </div>

            <div className=" text-xs lg:text-sm md:text-right text-center w-full">
              🔥<br/>Built with <b>Next Js</b> & <b>Tailwind CSS</b><br/> Deployed with <b>Vercel</b>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
