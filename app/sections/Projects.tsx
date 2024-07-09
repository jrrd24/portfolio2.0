import React from "react";
import ProjectContainer from "../components/ProjectContainer";
import Image from "next/image";
import { useTheme } from "next-themes";
import SectionNameImage from "../components/SectionNameImage";
import ProjectsData from "../data/ProjectsData";

type Props = {};

function Hero({}: Props) {
  return (
    <section className="min-h-dvh container relative">
      <div className="w-screen flex justify-center lg:hidden z-10 container relative">
        <SectionNameImage
          lightImage="/assets/section_wordmark/projects_h_dark.svg"
          darkImage="/assets/section_wordmark/projects_h.svg"
          width={150}
          height={100}
        />
      </div>

      <div className="px-8 grid grid-cols-12 gap-0 w-screen container z-10 relative">
        <div className="sticky top-0 h-dvh items-center w-48 lg:col-start-1 lg:col-end-2 hidden lg:flex">
          <SectionNameImage
            lightImage="/assets/section_wordmark/projects_dark.svg"
            darkImage="/assets/section_wordmark/projects.svg"
            width={75}
            height={50}
          />
        </div>

        <div
          id="projects"
          className="md:px-8  w-full col-start-1 lg:col-start-2 col-end-13 z-10"
        >
          {ProjectsData?.sort((a, b) => a.order - b.order).map((data) => (
            <ProjectContainer key={data.id} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
