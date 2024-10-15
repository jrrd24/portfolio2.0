import React from "react";
import SpecialtiesScroll from "./SpecialtiesScroll";

const HeroRework = () => {
  return (
    <section className="relative  w-full h-[80dvh] md:h-[70dvh] select-none ">
      {/* Top Circle */}
      <div
        className="rounded-full bg-radial-circle from-custom-orange/50  dark:from-custom-orange/40 from-0% via-custom-orange/40  dark:via-custom-orange/30
        via-25% dark:to-transparent to-70%  h-96 w-96 xl:h-[32rem] md:h-[24rem] xl:w-[36rem] md:w-[24rem] blur-3xl absolute
        top-[-8rem] lg:top-[-16rem]  right-[-6rem]  lg:right-[6rem] overflow-x-hidden"
      />

      <div className="flex gap-2 flex-col h-full container items-center justify-center px-4 md:px-8 py-16 md:py-20 mt-4 lg:mt-8">
          <h1 className=" text-5xl sm:text-6xl lg:text-8xl font-bold py-1 lg:translate-x-[-1.25rem] translate-x-[-1rem]">
            {"<"} <span className = "font-medium text-6xl sm:text-7xl lg:text-9xl">Jerard</span>
          </h1>
          
          <SpecialtiesScroll/>

          <h2 className=" font-bold text-5xl sm:text-6xl lg:text-8xl bg-clip-text
            text-transparent bg-gradient-flow bg-[length:200%_auto] animate-gradient py-2  md:translate-x-[1rem]">
            Pagalilauan {"/>"}
          </h2>
      </div>

    </section>
  );
};

export default HeroRework;
