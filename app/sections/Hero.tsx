"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import ServicesData from "@/app/data/ServicesData";

import Particles from "@/components/magicui/particles";

type Props = {};

function Hero({}: Props) {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <section className="h-dvh  max-h-[1280px] relative container flex items-center w-full select-none ">
      {/* Top Circle */}
      <div
        className="rounded-full bg-radial-circle from-custom-orange/50  dark:from-custom-orange/40 from-0% via-custom-orange/40  dark:via-custom-orange/30
        via-25% dark:to-transparent to-70%  h-96 w-96 xl:h-[32rem] md:h-[24rem] xl:w-[36rem] md:w-[24rem] blur-3xl absolute
        top-[-8rem] lg:top-[-16rem]  right-[-6rem]  lg:right-[6rem] overflow-x-hidden"
      />

      {/* Content*/}
      <div className=" px-8 w-full lg:h-[85vh] h-[75vh] max-h-[1024px] mt-16 flex justify-between flex-col z-10">
        <div>
          <h1 className=" font-bold text-5xl sm:text-6xl lg:text-8xl ">
            Web <br />
            Developer
          </h1>

          <div
            className="w-[75vw] md:w-[50vw] mt-3 md:mt-6  text-custom-dark-light dark:text-custom-white-dark/60 inline-flex
            flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]
            text-base lg:text-lg"
          >
            <ul className="flex items-center justify-center md:justify-start animate-infinite-scroll">
              {ServicesData?.sort((a, b) => a.order - b.order).map((data) => (
                <li
                  key={data.id}
                  className=" w-fit max-w-none whitespace-nowrap"
                >
                  {data.name} &emsp; ✗ &emsp;
                </li>
              ))}
              {ServicesData?.sort((a, b) => a.order - b.order).map((data) => (
                <li
                  key={data.id}
                  className=" w-fit max-w-none whitespace-nowrap"
                >
                  {data.name} &emsp; ✗ &emsp;
                </li>
              ))}
            </ul>
            <ul className="flex items-center justify-center md:justify-start animate-infinite-scroll">
              {ServicesData?.sort((a, b) => a.order - b.order).map((data) => (
                <li
                  key={data.id}
                  className=" w-fit max-w-none whitespace-nowrap"
                >
                  {data.name} &emsp; ✗ &emsp;
                </li>
              ))}
              {ServicesData?.sort((a, b) => a.order - b.order).map((data) => (
                <li
                  key={data.id}
                  className=" w-fit max-w-none whitespace-nowrap"
                >
                  {data.name} &emsp; ✗ &emsp;
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-end">
          <div
            className="font-bold text-5xl sm:text-7xl mb-6  lg:text-9xl h-full-pb  text-right w-fit bg-clip-text
            text-transparent bg-gradient-flow bg-[length:200%_auto] animate-gradient"
          >
            <span>Jerard</span> <br />
            <span>Pagalilauan</span>
          </div>
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
}

export default Hero;
