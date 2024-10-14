import Image from "next/image";
import React from "react";
import { GoPlus } from "react-icons/go";
import Tag from "../../../components/Tag";
import { ArrowUpRightIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
  data: Data;
};

type Data = {
  order: number;
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
    <div className="xl:w-[60vw] lg:w-[80vw] md:[60vw] max-w-[1200px]">
      <div className=" border border-black/[0.2] dark:border-white/[0.2] relative group  ">
        <div className="dark:text-custom-orange-dark text-custom-dark">
          <GoPlus className="absolute h-6 w-6 -top-3 -left-3 " />
          <GoPlus className="absolute h-6 w-6 -bottom-3 -left-3 " />
          <GoPlus className="absolute h-6 w-6 -top-3 -right-3 " />
          <GoPlus className="absolute h-6 w-6 -bottom-3 -right-3 " />
        </div>

        {/**Project Details*/}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href={props.data.link}
                target="blank"
                className="flex flex-col lg:flex-row items-center justify-center p-4 md:p-8 gap-4 md:gap-16 group-hover:bg-slate-50 group-hover:dark:bg-slate-700/20 transition-all duration-300"
              >
                <Image
                  src={props.data.thumbnail}
                  width={400}
                  height={200}
                  alt={"Thumbnail"}
                  className={`object-cover aspect-video w-full xl:w-[400px] lg:w-[360px] md:max-w-[80vw]  object-right-top   
              rounded-2xl transition-opacity ease-linear duration-300 pointer-events-none select-none `}
                />

                <div className="flex lg:justify-center w-full">
                  <div className="lg:max-w-[36rem]">
                    {/**Title */}
                    <div
                      className={`flex gap-2 items-center w-full group-hover:text-custom-purple transition-all duration-300`}
                    >
                      <h1 className="font-bold text-2xl md:text-3xl">
                        {props.data.title}
                      </h1>
                      <div className="flex items-center justify-center h-4">
                        {props.data.link ? (
                          <ArrowUpRightIcon className="h-4 group-hover:translate-x-1 group-hover:md:translate-y-0  md:translate-y-1 transition-all duration-300" />
                        ) : (
                          <LockClosedIcon className="h-4  group-hover:text-custom-orange transition-all duration-300" />
                        )}
                      </div>
                    </div>

                    {/**Description */}
                    <h3 className=" text-sm md:text-base mt-6 text-custom-dark-light/80 dark:text-custom-white-dark/80">
                      <span className=" font-bold text-sm md:text-base">
                        {props.data.employerDescription}{" "}
                      </span>
                      {props.data.description}
                    </h3>

                    {/**Tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {props.data.tags
                        ?.sort((a, b) => a.order - b.order)
                        .map((data) => (
                          <Tag
                            key={data.id}
                            name={data.name}
                            Icon={data.Icon}
                          />
                        ))}
                    </div>
                  </div>
                </div>
              </a>
            </TooltipTrigger>

            <TooltipContent>
              <p>
                {" "}
                {props.data.link ? "🌐" : "🔒"}
                &nbsp;
                {props.data.link ? props.data.link : "Private Repository"}
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default ProjectContainer;
