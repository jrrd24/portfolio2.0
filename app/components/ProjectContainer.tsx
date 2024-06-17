import React from "react";
import Tag from "./Tag";
import TagLink from "./TagLink";
import Image from "next/image";
import ProjectImage from "./ProjectImage";

type Props = {
  data: Data;
};

type Data = {
  order: number;
  logo: string;
  thumbnail: string;
  title: string;
  link?: string;
  description: string;
  contrastColor: string;
  gradientColorDark?: string;
  gradientColorLight?: string;
  tags: Tags[];
  responsibilities: Responsibilities[];
};

type Tags = {
  id: number;
  name: string;
  order: number;
  Icon?: React.ElementType;
};

type Responsibilities = {
  id: number;
  name: string;
  order: number;
};

const ProjectContainer = (props: Props) => {
  return (
    <div className="my-24 xl:h-screen xl:max-h-[1280px] flex items-center justify-center group">
      <div
        className="my-0 xl:my-32 xl:py-20 max-w-[28rem] xl:w-[56rem] xl:max-w-none rounded-3xl h-fit w-full
      bg-slate-100/70 shadow-2xl shadow-slate-500/30 dark:shadow-slate-700/30 dark:bg-slate-800/70  relative"
      >
        {/**Number */}
        <div
          className=" font-bold text-7xl sm:text-8xl xl:text-9xl absolute right-[-1.4rem] md:right-[-3.6rem] top-[-2.3rem] xl:top-[-4rem] tracking-tightest
          bg-gradient-to-bl  from-custom-dark-light/40 dark:from-custom-white-dark/40  to-custom-dark-light/5 
        dark:to-custom-white-dark/5 to-70% bg-clip-text text-transparent pr-6 hidden xl:block"
        >
          {props.data.order.toString().padStart(2, "0")}
        </div>
        <div className=" grid grid-cols-4 gap-4 xl:gap-0 justify-items-center items-center z-10 ">
          {/**Image */}
          <div
            className={` w-full xl:w-72 h-72 md:h-96 rounded-t-2xl rounded-b-none xl:rounded-2xl col-span-4 xl:col-span-2`}
          >
          swiper
          
            <ProjectImage
              logo={props.data.logo}
              thumbnail={props.data.thumbnail}
              contrastColor={props.data.contrastColor}
            />
          </div>
          {/**Content */}
          <div className="col-span-4 xl:col-span-2 px-4  pb-6 pt-2 xl:pr-16 w-full">
            {/**Title */}
            <h1
              className={
                props.data.gradientColorDark && props.data.gradientColorLight
                  ? `font-bold text-2xl md:text-3xl xl:text-5xl group-hover:bg-clip-text group-hover:text-transparent ease-in-out
              dark:group-hover:${props.data.gradientColorDark} group-hover:${props.data.gradientColorLight} group-hover:bg-[length:200%_auto] group-hover:animate-gradient pb-2`
                  : `font-bold text-2xl md:text-3xl xl:text-5xl`
              }
            >
              {props.data.title}
            </h1>
            {/**Link */}
            <div className="flex lg:mt-2 flex-wrap gap-2">
              <TagLink link={props.data.link} />
            </div>
            {/**Description */}
            <h3 className=" text-sm md:text-base mt-4 text-custom-dark-light/80 dark:text-custom-white-dark/80">
              {props.data.description}
            </h3>

            <h3 className=" font-bold text-sm md:text-base mt-6 text-custom-dark dark:text-custom-white">
              Responsibilities:
            </h3>
            <ul className="ml-2 mt-2 [&_li]:text-sm [&_li]:md:text-base text-custom-dark-light/80 dark:text-custom-white-dark/80">
              {props.data.responsibilities
                ?.sort((a, b) => a.order - b.order)
                .map((data) => (
                  <li key={data.id}>{data.name}</li>
                ))}
            </ul>

            {/**Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {props.data.tags
                ?.sort((a, b) => a.order - b.order)
                .map((data) => (
                  <Tag key={data.id} name={data.name} Icon={data.Icon} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer;
