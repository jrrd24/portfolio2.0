import React from "react";
import TextInfiniteScroll from "../components/TextInfiniteScroll";
import AboutSectionTitle from "../components/AboutSectionTitle";
import AboutExperiences from "./components/AboutExperiences";
import AchievementContainer from "../components/AchievementContainer";
import AchivementData from "../data/AchievementData";
import TechStackData from "../data/TechStackData";
import TechStackContainer from "../components/TechStackContainer";

type Props = {};

type LabelProps = {
  label: string;
};

const AboutRework = (props: Props) => {
  return (
    <section className="min-h-dvh container relative">
      {/* Bottom Circle */}
      <div
        className="rounded-full bg-radial-circle from-custom-red/30 dark:from-custom-red/40 from-0% via-custom-red/20 dark:via-custom-red/30 via-25% to-transparent to-70% 
      h-[64rem] w-[32rem] md:h-[64rem] md:w-[48rem] blur-3xl absolute top-[-28rem] lg:top-[-32rem] right-[-12rem] lg:right-[0rem] "
      />

      {/**Title */}
      <div
        id="about"
        className="mt-32 md:mt-48 flex items-center w-full flex-col z-20"
      >
        <TextInfiniteScroll
          text="About Me"
          color="text-custom-red"
          colorDark="text-custom-red-dark"
        />
      </div>

      {/**Sub-title*/}
      {/* <div className=" w-full pr-8 text-right text-md md:text-xl  text-custom-dark-light/60 dark:text-custom-white-dark/60 z-20">
        Get to know
        <br />
        Me Better
        <br />
        <span className=" text-custom-red dark:text-custom-red-dark">✗✗✗</span>
      </div> */}

      <div className="px-8  mt-16 md:mt-32 w-full col-start-1 lg:col-start-2 col-end-13">
        <div className="flex flex-col md:gap-24 items-center md:px-4 lg:px-12 z-20 relative">
          {/**Professional Experience */}
          <div className="flex flex-col items-center gap-8 md:gap-8">
            <AboutSectionTitle title="My Professional Experience" />
            <AboutExperiences />
          </div>

          {/**Achievements */}
          <div className="flex flex-col items-center mt-16 md:mt-32  gap-8 md:gap-16 mb-8">
            <AboutSectionTitle title="My Achievements" />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {AchivementData.sort((a, b) => a.order - b.order).map((data) => (
                <AchievementContainer key={data.id} data={data} />
              ))}
            </div>
          </div>

          {/**Tech Stack */}
          <div className="flex flex-col items-center mt-16 md:mt-32 gap-8 md:gap-16">
            <AboutSectionTitle title="My Tech Stack" />

            <div className="grid grid-cols-3 md:grid-cols-5 xl:grid-cols-7 gap-3 text-custom-dark-light/80 dark:text-custom-white-dark/80">
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
    </section>
  );
};

const TechStackLabel = (props: LabelProps) => {
  return (
    <div
      className="bg-slate-100/50 shadow-2xl shadow-slate-500/30 dark:shadow-slate-700/30 dark:bg-slate-800/50 relative flex items-center justify-center 
      rounded-xl h-12 font-bold  col-span-3 md:col-span-5 xl:col-span-7 backdrop-blur-sm"
    >
      {props.label}
    </div>
  );
};

export default AboutRework;
