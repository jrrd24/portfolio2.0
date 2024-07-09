"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "@/components/magicui/particles";
import React from "react";

type Props = {};

const WhoAmI = (props: Props) => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <section className="min-h-dvh container relative">
      {/* Top Circle - Red*/}
      <div
        className="rounded-full bg-radial-circle from-custom-red/40 dark:from-custom-red/80 from-0% via-custom-red/20 dark:via-custom-red/30 via-25% to-transparent to-70% 
         h-[64rem] w-[32rem] md:h-[64rem] md:w-[48rem] blur-3xl absolute top-[-32rem] left-[-12rem] lg:left-[0rem] z-0 "
      />

      {/* Top Circle - Purple*/}
      <div
        className="rounded-t-full rounded-b-none bg-radial-circle from-custom-purple/60 dark:from-custom-purple/40 from-0% via-custom-purple/50 dark:via-custom-purple/30 via-25% to-transparent to-70% 
              h-[16rem] w-[32rem] md:h-[24rem] md:w-[48rem] blur-3xl absolute top-[-32rem] left-[-20rem] lg:left-[-16rem] z-0 "
      />

      {/* Bottom Circle - Purple*/}
      <div
        className="rounded-t-full rounded-b-none bg-radial-circle from-custom-purple/60 dark:from-custom-purple/40 from-0% via-custom-purple/50 dark:via-custom-purple/30 via-25% to-transparent to-70% 
              h-[32rem] w-[32rem] md:h-[48rem] md:w-[48rem] blur-3xl absolute bottom-4 lg:bottom-[-20rem] right-[-6rem]  lg:right-[6rem] z-0 "
      />

      {/* Bottom Circle - Orange*/}
      <div
        className="rounded-t-full rounded-b-none bg-radial-circle from-custom-orange/50  dark:from-custom-orange/40 from-0% via-custom-orange/40  dark:via-custom-orange/30 via-25% to-transparent to-70% 
              h-96 w-96 xl:h-[36rem] md:h-[24rem] xl:w-[24rem] md:w-[24rem]  blur-3xl absolute bottom-[-8rem] lg:bottom-[-26rem] right-[-6rem]  lg:right-[6rem] z-0 "
      />

      {/**Content */}
      <div className="flex justify-center items-center min-h-dvh my-48 lg:mb-0 px-[32px]">
        <div className="text-left flex flex-col justify-center align-middle h-dvh xl:max-h-[1280px]">
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
            <b>Bachelor of Science in Information Technology</b> graduate with
            experience in developing web and desktop apps, who’s dedicated in
            bringing creative and functional web designs to life through
            programming.
          </p>

          {/* <div className="mt-12 bg-gradient-flow bg-[length:200%_auto] animate-gradient w-1/2 sm:w-1/4 h-6 md:h-8 rounded-xl"></div> */}
        </div>
      </div>

      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </section>
  );
};

export default WhoAmI;
