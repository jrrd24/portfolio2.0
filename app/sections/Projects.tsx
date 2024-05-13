import React from "react";

type Props = {};

function Hero({}: Props) {
  return (
    <section className="min-h-screen container relative">
      {/* Bottom Circle */}
      <div
        className="rounded-full bg-radial-circle from-custom-red/50 dark:from-custom-red/40 from-0% via-custom-red/40 dark:via-custom-red/30 via-25% to-transparent to-70% 
         h-[64rem] w-[32rem] md:h-[64rem] md:w-[48rem] blur-3xl absolute top-[-32rem] left-[-12rem] lg:left-[0rem] "
      />
    </section>
  );
}

export default Hero;
