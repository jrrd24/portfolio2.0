import Image from "next/image";
import React from "react";

type Props = {};

function Hero({}: Props) {
  return (
    <section className="min-h-screen relative container ">
      {/* Top Circle */}
      <div
        className="rounded-full bg-radial-circle from-custom-orange/50  dark:from-custom-orange/40 from-0% via-custom-orange/40  dark:via-custom-orange/30 
        via-25% dark:to-transparent to-70%  h-96 w-96 xl:h-[32rem] md:h-[24rem] xl:w-[36rem] md:w-[24rem] blur-3xl absolute 
        top-[-16rem]  right-[-6rem]  lg:right-[6rem] overflow-x-hidden"
      />
    </section>
  );
}

export default Hero;
