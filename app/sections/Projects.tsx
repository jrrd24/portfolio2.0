import React from "react";
import ProjectContainer from "../components/ProjectContainer";
import Image from "next/image";
import { useTheme } from "next-themes";
import SectionNameImage from "../components/SectionNameImage";

type Props = {};

function Hero({}: Props) {
  return (
    <section className="min-h-screen container relative">
      {/* Bottom Circle */}
      <div
        className="rounded-full bg-radial-circle from-custom-red/30 dark:from-custom-red/40 from-0% via-custom-red/20 dark:via-custom-red/30 via-25% to-transparent to-70% 
         h-[64rem] w-[32rem] md:h-[64rem] md:w-[48rem] blur-3xl absolute top-[-32rem] left-[-12rem] lg:left-[0rem] "
      />

      <div className="w-screen mt-48 flex justify-center xl:hidden">
        <SectionNameImage
          lightImage="/assets/section_wordmark/projects_h_dark.svg"
          darkImage="/assets/section_wordmark/projects_h.svg"
          width={200}
          height={100}
        />
      </div>

      <div className="px-8 grid grid-cols-12 gap-0 w-screen container">
        <div className="sticky top-0 h-screen items-center w-48 lg:col-start-1 lg:col-end-3 hidden lg:flex">
          <SectionNameImage
            lightImage="/assets/section_wordmark/projects_dark.svg"
            darkImage="/assets/section_wordmark/projects.svg"
            width={100}
            height={50}
          />
        </div>

        <div
          id="projects"
          className="xl:my-48 md:px-8  w-full col-start-1 lg:col-start-3 col-end-13"
        >
          <ProjectContainer />
          <ProjectContainer />
          <ProjectContainer />
          <ProjectContainer />
        </div>
      </div>
    </section>
  );
}

export default Hero;
