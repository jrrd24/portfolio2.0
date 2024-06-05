import React from "react";
import SectionNameImage from "../components/SectionNameImage";
import { FaFacebook } from "react-icons/fa6";
import ContactData from "../data/ContactData";

type Props = {};

const Contact = (props: Props) => {
  return (
    <section className="min-h-screen container relative">
      {/* Middle Circle */}
      <div
        className="rounded-full bg-radial-circle from-custom-orange/30 dark:from-custom-orange/40 from-0% via-custom-orange/20 dark:via-custom-orange/30 via-25% to-transparent to-70% 
       h-[20rem] w-[12rem] md:h-[32rem] md:w-[36rem] blur-3xl absolute top-8 lg:top-0 right-24 lg:right-[16rem] z-0"
      />

      {/* Top Circle */}
      <div
        className="rounded-full bg-radial-circle from-custom-red/30 dark:from-custom-red/40 from-0% via-custom-red/20 dark:via-custom-red/30 via-25% to-transparent to-70% 
       h-[32rem] w-[32rem] md:h-[64rem] md:w-[48rem] blur-3xl absolute top-[-16rem] lg:top-[-32rem] right-[-12rem] lg:right-[0rem] z-0 "
      />

      {/* Bottom Circle */}
      <div
        className="rounded-t-full rounded-b-none bg-radial-circle from-custom-purple/30 dark:from-custom-purple/40 from-0% via-custom-purple/50 dark:via-custom-purple/30 via-25% to-transparent to-70% 
              h-[16rem] w-[32rem] md:h-[24rem] md:w-[48rem] blur-3xl absolute bottom-0 left-[-12rem] lg:left-[0rem] z-0 "
      />

      {/* Content */}
      <div className="  px-8 gap-0 w-screen container z-10 relative">
        <div id="contact" className="md:px-8  w-full ">
          <div className=" flex flex-col gap-24 items-center md:px-4 lg:px-12 z-20 relative">
            {/**Interested?*/}
            <div className=" text-center flex flex-col items-center justify-center h-screen xl:max-h-[1280px] text-custom-dark-light/80 dark:text-custom-white-dark/80">
              <div
                className="mt-2 font-bold text-5xl md:text-6xl  lg:text-7xl w-fit h-full-pb bg-clip-text
              text-transparent bg-gradient-flow bg-[length:200%_auto] animate-gradient "
              >
                Interested?
              </div>

              <h3 className="text-xl md:text-2xl  lg:text-xl font-bold ">
                Connect With Me
              </h3>

              <div className="flex gap-4 mt-4">
                {ContactData.sort((a, b) => a.order - b.order).map((data) => (
                  <a href={data.link} target="blank">
                    <data.Icon className="h-6 w-full hover:text-custom-dark dark:hover:text-custom-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
