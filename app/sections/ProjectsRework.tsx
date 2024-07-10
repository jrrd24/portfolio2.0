"use client";
import React, { useState } from "react";
import TextInfiniteScroll from "../components/TextInfiniteScroll";
import ProjectsData from "../data/ProjectsData";
import ProjectContainer from "../components/Projects/ProjectContainer";
import ShimmerButton from "@/components/magicui/shimmer-button";

type Props = {};

const ProjectsRework = (props: Props) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="projects" className="min-h-dvh container relative">
      {/**Title */}
      <div className="md:mt-48 flex items-center w-full flex-col">
        <TextInfiniteScroll
          text="My Projects"
          color="text-custom-orange"
          colorDark="text-custom-orange-dark"
        />

        {/**Sub-title*/}
        <div className=" w-full pr-8 text-right text-md md:text-xl  text-custom-dark-light/60 dark:text-custom-white-dark/60">
          Here are some of
          <br />
          My Works
          <br />
          <span className=" text-custom-orange dark:text-custom-orange-dark">
            ✗✗✗
          </span>
        </div>

        <div className="px-8 mt-16 md:mt-32 w-full flex flex-col items-center z-10 gap-16">
          {showMore
            ? ProjectsData?.sort((a, b) => a.order - b.order).map((data) => (
                <ProjectContainer key={data.id} data={data} />
              ))
            : ProjectsData?.sort((a, b) => a.order - b.order)
                .slice(0, 4)
                .map((data) => <ProjectContainer key={data.id} data={data} />)}

          <ShimmerButton
            className="shadow-2xl"
            shimmerColor="#F3A07D"
            shimmerSize="0.2em"
            background="#1B1B1F"
            onClick={() => setShowMore(!showMore)}
          >
            <span className="whitespace-pre-wrap text-center text-sm font-bold leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 md:text-md lg:text-lg">
              {showMore ? "➖ Show Less" : "🚀 Show All Projects"}
            </span>
          </ShimmerButton>
        </div>
      </div>
    </section>
  );
};

export default ProjectsRework;
