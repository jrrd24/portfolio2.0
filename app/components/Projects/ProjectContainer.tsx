import Image from "next/image";
import React from "react";
import { GoPlus } from "react-icons/go";
import TagLink from "../TagLink";
import Tag from "../Tag";

type Props = {
  data: Data;
};

type Data = {
  order: number;
  logo: string;
  thumbnail: string;
  title: string;
  link?: string;
  employerDescription?: string;
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
    <div className="md:w-[60vw] max-w-[1200px]">
      <div className=" border border-black/[0.2] dark:border-white/[0.2] relative select-none group ">
        <div className="dark:text-custom-orange-dark text-custom-dark">
          <GoPlus className="absolute h-6 w-6 -top-3 -left-3 " />
          <GoPlus className="absolute h-6 w-6 -bottom-3 -left-3 " />
          <GoPlus className="absolute h-6 w-6 -top-3 -right-3 " />
          <GoPlus className="absolute h-6 w-6 -bottom-3 -right-3 " />
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center p-4 md:p-8 gap-4 md:gap-16">
          <Image
            src={props.data.thumbnail}
            width={400}
            height={200}
            alt={"Thumbnail"}
            className={` object-cover aspect-video md:aspect-square object-right-top   rounded-2xl transition-opacity ease-linear duration-300 `}
          />
          <div className="">
            {/**Title */}
            <h1
              className={
                props.data.gradientColorDark && props.data.gradientColorLight
                  ? `font-bold text-xl md:text-2xl xl:text-4xl group-hover:bg-clip-text group-hover:text-transparent ease-in-out
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
            <h3 className=" text-sm md:text-base mt-6 text-custom-dark-light/80 dark:text-custom-white-dark/80">
              <span className=" font-bold text-sm md:text-base">
                {props.data.employerDescription}{" "}
              </span>
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
