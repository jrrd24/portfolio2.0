import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ShimmerButton from "@/components/magicui/shimmer-button";

type Props = {};

const WhoAmI = (props: Props) => {
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
          <h3 className="text-lg md:text-xl  lg:text-2xl font-medium">
            Hi. I&apos;m
          </h3>

          <div
            className="mt-2 font-bold text-4xl md:text-6xl  lg:text-7xl w-fit h-full-pb bg-clip-text
                text-transparent bg-gradient-flow bg-[length:200%_auto] animate-gradient z-30"
          >
            <span>Jerard Pagalilauan</span>
          </div>

          <p className="mt-4 text-base lg:text-lg max-w-[48rem] dark:text-custom-white-dark/80 text-custom-dark-light/80 z-30">
            A highly innovative and motivated graduate of{" "}
            <b>Bachelor of Science in Information Technology</b> with rich
            experience in working with clients and collaborators in developing
            web and desktop systems. Currently seeking to join the IT industry
            as a web developer to improve his skills, learn new technologies,
            and become a productive member of a company.
          </p>

          <Link
            href="/Pagalilauan_Jerard_Resume.pdf"
            target="_blank"
            className="mt-12 "
          >
            <ShimmerButton
              className="shadow-2xl"
              shimmerColor="#F3A07D"
              shimmerSize="0.2em"
              background="#1B1B1F"
            >
              <span className="whitespace-pre-wrap text-center text-sm font-bold leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-base">
                📄 View Resume
              </span>
            </ShimmerButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhoAmI;
