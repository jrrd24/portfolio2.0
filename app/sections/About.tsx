import React from "react";
import SectionNameImage from "../components/SectionNameImage";
import AboutSectionTitle from "../components/AboutSectionTitle";
import ExperienceContainer from "../components/ExperienceContainer";
import AboutExperiences from "./components/AboutExperiences";
import AchievementContainer from "../components/AchievementContainer";
import AchivementData from "../data/AchievementData";
import TechStackContainer from "../components/TechStackContainer";
import TechStackData from "../data/TechStackData";

type Props = {};

type LabelProps = {
  label: string;
};

const About = (props: Props) => {
  return (
    <section className="min-h-screen container relative">
      {/* Bottom Circle */}
      <div
        className="rounded-full bg-radial-circle from-custom-red/30 dark:from-custom-red/40 from-0% via-custom-red/20 dark:via-custom-red/30 via-25% to-transparent to-70% 
        h-[64rem] w-[32rem] md:h-[64rem] md:w-[48rem] blur-3xl absolute top-[-28rem] lg:top-[-32rem] right-[-12rem] lg:right-[0rem] "
      />

      <div className="w-screen mt-32 flex h-8 justify-center lg:hidden z-10 container relative">
        <SectionNameImage
          lightImage="/assets/section_wordmark/about_h_dark.svg"
          darkImage="/assets/section_wordmark/about_h.svg"
          width={150}
          height={100}
        />
      </div>

      <div className="  grid grid-cols-12 px-8 gap-0 w-screen container z-10">
        <div className="sticky top-0 h-screen items-center w-14 lg:col-start-1 lg:col-end-2 hidden lg:flex z-20">
          <SectionNameImage
            lightImage="/assets/section_wordmark/about_dark.svg"
            darkImage="/assets/section_wordmark/about.svg"
            width={75}
            height={50}
          />
        </div>

        <div
          id="about"
          className="md:px-8  w-full col-start-1 lg:col-start-2 col-end-13"
        >
          <div className="flex flex-col md:gap-24 items-center md:px-4 lg:px-12 z-20 relative">
            {/**Who Am I */}
            <div className=" text-left flex flex-col justify-center align-middle h-screen xl:max-h-[1280px]">
              <h3 className="text-xl md:text-2xl  lg:text-3xl font-medium">
                Hi. I&apos;m
              </h3>

              <div
                className="mt-2 font-bold text-5xl md:text-6xl  lg:text-7xl w-fit h-full-pb bg-clip-text
                text-transparent bg-gradient-flow bg-[length:200%_auto] animate-gradient "
              >
                Jerard Pagalilauan
              </div>

              <p className="mt-4 text-base md:text-xl  lg:text-xl max-w-[48rem] dark:text-custom-white-dark/80 text-custom-dark-light/80">
                A curious and hardworking{" "}
                <b>Bachelor of Science in Information Technology</b> graduate
                with experience in developing web and desktop apps, who’s
                dedicated in bringing creative and functional web designs to
                life through programming.
              </p>

              <div className="mt-12 bg-gradient-flow bg-[length:200%_auto] animate-gradient w-1/2 sm:w-1/4 h-6 md:h-8 rounded-xl"></div>
            </div>

            {/**Professional Experience */}
            <div className="flex flex-col items-center gap-8 md:gap-16">
              <AboutSectionTitle title="My Professional Experience" />
              <AboutExperiences />
            </div>

            {/**Achievements */}
            <div className="flex flex-col items-center mt-48 gap-20">
              <AboutSectionTitle title="My Achievements" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {AchivementData.sort((a, b) => a.order - b.order).map(
                  (data) => (
                    <AchievementContainer key={data.id} data={data} />
                  )
                )}
              </div>
            </div>

            {/**Tech Stack */}
            <div className="flex flex-col items-center mt-48 gap-20">
              <AboutSectionTitle title="My Tech Stack" />

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3 text-custom-dark-light/80 dark:text-custom-white-dark/80">
                <TechStackLabel label="Frontend /Web Design" />

                {TechStackData.filter((a) => a.type === "frontend")
                  .sort((a, b) => a.order - b.order)
                  .map((data) => (
                    <TechStackContainer key={data.id} data={data} />
                  ))}

                <TechStackLabel label="Backend / Database" />
                {TechStackData.filter((a) => a.type === "backend")
                  .sort((a, b) => a.order - b.order)
                  .map((data) => (
                    <TechStackContainer key={data.id} data={data} />
                  ))}

                <TechStackLabel label="Other" />
                {TechStackData.filter((a) => a.type === "other")
                  .sort((a, b) => a.order - b.order)
                  .map((data) => (
                    <TechStackContainer key={data.id} data={data} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TechStackLabel = (props: LabelProps) => {
  return (
    <div
      className="bg-slate-100/70 shadow-2xl shadow-slate-500/30 dark:shadow-slate-700/30 dark:bg-slate-800/70 relative flex items-center justify-center 
      rounded-xl h-12 font-bold  col-span-2 sm:col-span-3 md:col-span-4 xl:col-span-5 backdrop-blur-sm"
    >
      {props.label}
    </div>
  );
};

export default About;
