import React from "react";
import CircleDesigns from "./CircleDesigns";
import AboutSectionTitle from "@/app/components/AboutSectionTitle";
import ExperienceContainer from "@/app/components/About/ExperienceContainer";
import ExperienceData from "@/app/data/ExperienceData";
import Link from "next/link";
import AchivementData from "@/app/data/AchievementData";
import AchievementContainer from "@/app/components/About/AchievementContainer";

const AboutMe = () => {
  return (
    <section className="container relative">
      <div className="md:my-48 my-24">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8 xl:px-16 px-8 ">
          {/**About Me */}
          <div className="bg-container md:col-span-2 col-1 flex flex-col gap-4 ">
            <h1 className="font-bold text-2xl md:text-4xl">
              Hi I&apos;m <span className=" text-custom-purple">Jerard</span>
            </h1>
            <p className="text-sm md:text-base max-w-[700px]">
              A highly innovative and motivated graduate of{" "}
              <span className="font-bold text-custom-purple">
                Bachelor of Science in Information Technology
              </span>{" "}
              with rich experience in working with clients and collaborators in
              developing <span className=" text-custom-red dark:text-custom-red-dark font-bold">Web and Desktop Systems</span>. Currently seeking to join the
              IT industry as a web developer to improve his skills, learn new
              technologies, and become a productive member of a company.{" "}
            </p>

            <Link
              href="/files/Pagalilauan_Jerard_Resume.pdf"
              target="_blank"
              className=" mr-0 mt-4 select-none flex gap-2 items-center mx-auto shadow-xl md:text-lg text-base  bg-transparent backdrop-blur-md font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-custom-purple hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
            >
              Resume
              <svg
                className="md:w-8 md:h-8 w-6 h-6 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 dark:border-white group-hover:border-none p-2 rotate-45"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  className="fill-gray-800 dark:fill-white group-hover:fill-gray-800"
                ></path>
              </svg>
            </Link>
          </div>

          <div className="bg-container dark:from-slate-800/30 dark:to-slate-800/30 bg-gradient-to-tr from-custom-orange to-custom-red   col-1 select-none flex items-center justify-center">
            <h1
              className="font-bold text-7xl md:text-8xl w-fit bg-clip-text
            text-white dark:text-transparent bg-gradient-flow bg-[length:200%_auto] animate-gradient h-full-pb"
            >
              jp
            </h1>
          </div>

          {/**Work Experience */}
          <div className="bg-container md:col-span-3 col-1 grid lg:grid-cols-3 grid-cols-1 gap-8   ">
            <div className="col-1 flex items-center  text-4xl lg:text-5xl text-custom-purple font-bold">
              Work Experience
            </div>

            <div className=" col-span-2 col-1 flex items-center justify-center">
              <div className="flex flex-col max-w-[48rem] w-full">
                {ExperienceData?.sort((a, b) => a.order - b.order).map(
                  (data) => (
                    <ExperienceContainer key={data.id} data={data} />
                  )
                )}
              </div>
            </div>
          </div>

          {/**Notable Achievements */}
          <div className="bg-container md:col-span-3 col-1 grid lg:grid-cols-3 grid-cols-1 gap-8  ">
            <div className="col-1 flex items-center  text-4xl lg:text-5xl text-custom-purple font-bold">
              Notable Achievements
            </div>

            <div className=" col-span-2 col-1 flex items-center justify-center">
              <div className="flex flex-col max-w-[48rem] w-full">
                {AchivementData.sort((a, b) => a.order - b.order).map(
                  (data) => (
                    <AchievementContainer key={data.id} data={data} />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <CircleDesigns />
    </section>
  );
};

export default AboutMe;
