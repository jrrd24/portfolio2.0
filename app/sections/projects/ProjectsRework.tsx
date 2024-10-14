"use client";
import React, { useState } from "react";
import TextInfiniteScroll from "../../components/TextInfiniteScroll";
import ProjectsData from "../../data/ProjectsData";
import ProjectContainer from "./components/ProjectContainer";
import ShimmerButton from "@/components/magicui/shimmer-button";

type Props = {};

const ProjectsRework = (props: Props) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="projects" className="min-h-dvh container relative">
      <div className="md:mt-48 flex items-center w-full flex-col">
        <div className="flex flex-col text-sm md:text-base  gap-2 md:gap-4 w-full text-center select-none">
          {/**Title */}
          <TextInfiniteScroll
            text="Projects"
            color="text-custom-orange"
            colorDark="text-custom-orange-dark"
          />

          {/**Sub-title*/}
          <p>Explore Some of My Previous Work</p>
          <p className=" ">✗✗✗</p>
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
