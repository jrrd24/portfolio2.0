import React from "react";

const CircleDesigns = () => {
  return (
    <>
      {/* Top Circle - Red*/}
      <div
        className="rounded-full bg-radial-circle from-custom-red/40 dark:from-custom-red/80 from-0% via-custom-red/20 dark:via-custom-red/30 via-25% to-transparent to-70% 
       h-[64rem] w-[32rem] md:h-[64rem] md:w-[48rem] blur-3xl absolute top-[-32rem] left-[-12rem] lg:left-[0rem] z-[0] dark:block hidden"
      />
      {/* Bottom Circle - Purple*/}
      <div
        className="rounded-t-full rounded-b-none bg-radial-circle from-custom-purple/60 dark:from-custom-purple/40 from-0% via-custom-purple/50 dark:via-custom-purple/30 via-25% to-transparent to-70% 
            h-[32rem] w-[32rem] md:h-[48rem] md:w-[48rem] blur-3xl absolute bottom-4 lg:bottom-[-20rem] right-[-6rem]  lg:right-[6rem] z-0 dark:block hidden"
      />
      {/* Bottom Circle - Orange*/}
      <div
        className="rounded-t-full rounded-b-none bg-radial-circle from-custom-orange/50  dark:from-custom-orange/40 from-0% via-custom-orange/40  dark:via-custom-orange/30 via-25% to-transparent to-70% 
            h-96 w-96 xl:h-[36rem] md:h-[24rem] xl:w-[24rem] md:w-[24rem]  blur-3xl absolute bottom-[-8rem] lg:bottom-[-26rem] right-[-6rem]  lg:right-[6rem] z-0 "
      />
    </>
  );
};

export default CircleDesigns;
