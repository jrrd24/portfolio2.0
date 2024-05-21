import React from "react";
import Tag from "./Tag";

type Props = {};

const ProjectContainer = (props: Props) => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className=" w-[60rem] h-fit bg-slate-700 py-16 rounded-3xl relative">
        <div className=" font-bold text-9xl absolute right-[-2.6rem] top-[-4rem] tracking-tightest">
          01
        </div>
        <div className=" grid grid-cols-4 gap-0 justify-items-center items-center ">
          {/**Image */}
          <div className=" bg-red-700 w-72 h-96 rounded-2xl col-span-2">
            Image here
          </div>
          {/**Content */}
          <div className="col-span-2 pr-16">
            <h1 className=" font-bold text-5xl ">ScaleUp Solutions</h1>
            <h3 className=" font-regular text-base mt-4 text-custom-white-dark/80">
              The company website of ScaleUp Solutions Inc, A software services
              company that provides business solutions that scale up SME
              digitalization to improve quality of services
            </h3>

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
