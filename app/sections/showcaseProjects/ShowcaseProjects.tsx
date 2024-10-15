import GridPattern from '@/components/magicui/grid-pattern'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

const ShowcaseProjects = () => {
  return (
    <div className="flex justify-center relative top-[-8rem]"> 
     {/* Top Circle - Purple*/}
     <div
        className="rounded-t-full rounded-b-none bg-radial-circle from-custom-purple/60 dark:from-custom-purple/40 from-0% via-custom-purple/50 dark:via-custom-purple/30 via-25% to-transparent to-70% 
            h-[16rem] w-[32rem] md:h-[24rem] md:w-[48rem] blur-3xl absolute top-[-8rem] left-[-20rem] lg:left-[-16rem] z-0 "
      />
    

    <div className = " px-4 md:py-28 py-16 z-10">
      <div className="group relative">
        <Image
          src={"/assets/projects/showcase/Lokal360Redesign.png"}
          width={1280}
          height={720}
          alt={"Thumbnail"}
          className={`object-cover aspect-video w-full xl:w-[56rem]  md:w-[80vw]  object-right-top   
        rounded-2xl  ease-linear  pointer-events-none select-none border-2 border-custom-dark dark:border-custom-white-dark
        group-hover:translate-y-[-0.5rem] group-hover:translate-x-[-0.5rem] transition-all duration-200`}
        />

        <div  className={`absolute top-0 object-cover aspect-video w-full xl:w-[56rem]  md:w-[80vw]  object-right-top   
            rounded-2xl  ease-linear pointer-events-none select-none border-2 border-custom-dark dark:border-custom-white-dark z-[-2]
            group-hover:translate-x-2 group-hover:translate-y-2  transition-all duration-200  `}/>

        <p className="text-sm lg:text-base max-w-[300px] md:block hidden mt-6 ">
          Lokal 360 (Redesign) Prototype <br/> <span className ="text-custom-dark/60 dark:text-white/60"> Designed in Figma </span>
        </p>
      </div>

      <div className="group relative">
        <div className="absolute right-[-6rem] top-[-2rem] md:right-[-8rem] md:top-[-8rem]">
          <Image
            src={"/assets/projects/showcase/MTMCLoan.png"}
            width={400}
            height={200}
            alt={"Thumbnail"}
            className={`aspect-video object-cover xl:w-[32rem]  sm:w-[56vw] w-[20rem] object-right-top   
            rounded-2xl  ease-linear pointer-events-none select-none border-2 border-custom-dark dark:border-custom-white-dark
            group-hover:translate-y-[-0.5rem] group-hover:translate-x-[-0.5rem] transition-all duration-200`}
          />

          <div  className={`absolute top-0 aspect-video object-cover xl:w-[32rem]  sm:w-[56vw] w-[20rem] object-right-top   
            rounded-2xl  ease-linear pointer-events-none select-none border-2 border-custom-dark dark:border-custom-white-dark z-[-2]
            group-hover:translate-x-2 group-hover:translate-y-2  transition-all duration-200  `}/>

          
          <p className="text-sm lg:text-base max-w-[400px] md:block hidden mt-6">
          Metro Tuguegarao Multi-Purpose Cooperative Management System <br/> <span className ="text-custom-dark/60 dark:text-white/60"> Built using C#, .NET Framework with MySQL Database </span>
          </p>
        </div>
      </div>
    </div>

    <GridPattern
      width={20}
      height={20}
      x={-1}
      y={-1}
      className={cn(
        "[mask-image:linear-gradient(to_top,transparent,white,transparent)] ",
      )}
    />
  </div>
  )
}

export default ShowcaseProjects