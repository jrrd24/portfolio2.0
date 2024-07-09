import React from "react";
import TextInfiniteScroll from "../components/TextInfiniteScroll";
import ProjectsData from "../data/ProjectsData";
import ProjectContainer from "../components/Projects/ProjectContainer";

type Props = {};

const ProjectsRework = (props: Props) => {
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

        <div className="px-8 mt-32 w-full flex flex-col items-center z-10 gap-16">
          {ProjectsData?.sort((a, b) => a.order - b.order).map((data) => (
            <ProjectContainer key={data.id} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsRework;
