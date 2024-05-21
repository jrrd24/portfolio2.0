import React from "react";
import Tag from "./Tag";

type Props = {};

const ProjectContainer = (props: Props) => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className=" w-[56rem] h-fit bg-slate-100/70 shadow-2xl shadow-slate-500/30 dark:shadow-slate-700/30 dark:bg-slate-800/70 py-20 rounded-3xl relative">
        {/**Number */}
        <div
          className=" font-bold text-9xl absolute right-[-2.6rem] top-[-4rem] tracking-tightest
          bg-gradient-to-bl  from-custom-dark-light/40 dark:from-custom-white-dark/40  to-custom-dark-light/5 
        dark:to-custom-white-dark/5 to-70% bg-clip-text text-transparent"
        >
          01
        </div>
        <div className=" grid grid-cols-4 gap-0 justify-items-center items-center z-10">
          {/**Image */}
          <div className=" bg-slate-500 w-72 h-96 rounded-2xl col-span-2"></div>
          {/**Content */}
          <div className="col-span-2 pr-16">
            {/**Title */}
            <h1 className=" font-extrabold text-5xl ">ScaleUp Solutions</h1>
            {/**Description */}
            <h3 className=" font-regular text-base mt-4 text-custom-dark-light/80 dark:text-custom-white-dark/80">
              The company website of ScaleUp Solutions Inc, A software services
              company that provides business solutions that scale up SME
              digitalization to improve quality of services
            </h3>

            {/**Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              <Tag name="ASP.net" />
              <Tag name="HTML" />
              <Tag name="JavaScript" />
              <Tag name="CSS" />
              <Tag name="Bootstrap 4.6" />
              <Tag name="Figma" />
              <Tag name="Swiper" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer;
