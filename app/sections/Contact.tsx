import React from "react";
import SectionNameImage from "../components/SectionNameImage";

type Props = {};

const Contact = (props: Props) => {
  return (
    <section className="min-h-screen container relative">
      {/* Bottom Circle */}

      <div
        className="rounded-full bg-radial-circle from-custom-red/30 dark:from-custom-red/40 from-0% via-custom-red/20 dark:via-custom-red/30 via-25% to-transparent to-70% 
       h-[36rem] w-[16rem] md:h-[32rem] md:w-[36rem] blur-3xl absolute top-[-8rem] lg:top-[0rem] right-[10rem] lg:right-[16rem] z-0"
      />

      <div
        className="rounded-full bg-radial-circle from-custom-purple/30 dark:from-custom-purple/40 from-0% via-custom-purple/20 dark:via-custom-purple/30 via-25% to-transparent to-70% 
       h-[64rem] w-[32rem] md:h-[64rem] md:w-[48rem] blur-3xl absolute top-[-28rem] lg:top-[-32rem] right-[-12rem] lg:right-[0rem] z-0 "
      />

      <div className="w-screen mt-32 flex h-8 justify-center lg:hidden z-10 container relative">
        <SectionNameImage
          lightImage="/assets/section_wordmark/about_h_dark.svg"
          darkImage="/assets/section_wordmark/about_h.svg"
          width={150}
          height={100}
        />
      </div>

      <div className="  grid grid-cols-12 px-8 gap-0 w-screen container z-10 relative">
        <div className="sticky top-0 h-screen items-center w-14 lg:col-start-1 lg:col-end-2 hidden lg:flex">
          <SectionNameImage
            lightImage="/assets/section_wordmark/about_dark.svg"
            darkImage="/assets/section_wordmark/about.svg"
            width={75}
            height={50}
          />
        </div>

        <div
          id="contact"
          className="md:px-8  w-full col-start-1 lg:col-start-2 col-end-13 "
        >
          <div className="mt-24 lg:mt-48  flex flex-col gap-24 items-center md:px-4 lg:px-12 z-20 relative">
            {/**Who Am I */}
            <div className=" text-left flex flex-col">
              <h3 className="text-xl md:text-2xl  lg:text-3xl font-medium">
                Hi. I'm
              </h3>

              <div
                className="mt-2 font-bold text-5xl md:text-6xl  lg:text-7xl w-fit h-full-pb bg-clip-text
              text-transparent bg-gradient-flow bg-[length:200%_auto] animate-gradient "
              >
                Jerard Pagalilauan
              </div>

              <p className="mt-4 text-lg md:text-xl  lg:text-xl max-w-[48rem] dark:text-custom-white-dark/80 text-custom-dark-light/80">
                A curious and hardworking{" "}
                <b>Bachelor of Science in Information Technology</b> graduate
                with experience in developing web and desktop apps, who’s
                dedicated in bringing creative and functional web designs to
                life through programming.
              </p>

              <div className="mt-12 bg-gradient-flow bg-[length:200%_auto] animate-gradient w-1/2 sm:w-1/4 h-8 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
