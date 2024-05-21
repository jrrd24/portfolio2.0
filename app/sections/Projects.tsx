import React from "react";
import ProjectContainer from "../components/ProjectContainer";
import Image from "next/image";

type Props = {};

function Hero({}: Props) {
  return (
    <section className="min-h-screen container relative">
      {/* Bottom Circle */}
      <div
        className="rounded-full bg-radial-circle from-custom-red/30 dark:from-custom-red/40 from-0% via-custom-red/20 dark:via-custom-red/30 via-25% to-transparent to-70% 
         h-[64rem] w-[32rem] md:h-[64rem] md:w-[48rem] blur-3xl absolute top-[-32rem] left-[-12rem] lg:left-[0rem] "
      />

      <div className="px-8 grid grid-cols-12 gap-0 w-screen container">
        <div className="sticky top-0 h-screen flex items-center w-48 md:col-start-1 md:col-end-3">
          <Image
            src={"/assets/section_wordmark/projects.svg"}
            width={100}
            height={50}
            alt="projects"
          />
        </div>

        <div
          id="projects"
          className="my-48 px-8 w-full col-start-1 md:col-start-3 col-end-13"
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
