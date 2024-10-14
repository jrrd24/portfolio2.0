import Image from "next/image";
import React from "react";

type Props = {
  data: Data;
};

type Data = {
  logo: string;
  color: string;
  accentColor: string;
  company: string;
  job: string;
  duration: string;
  description: string;
  order: number;
};

const ExperienceContainer = (props: Props) => {
  return (
    <div className=" group w-full h-fit relative border-b-2 pt-8 pb-4 first:pt-4 last:border-b-0">
      <div className="flex w-full flex-col lg:flex-row  gap-2 md:gap-6  ">
        <Image
          src={props.data.logo}
          width={500}
          height={500}
          alt="achievement"
          className={`select-none transition aspect-square h-20  w-20 object-contain duration-500 rounded-2xl xl:rounded-xl p-3 mb-4 group-hover:shadow-lg group-hover:shadow-${props.data.accentColor}/50`}
          style={{
            backgroundColor: props.data.color ? props.data.color : "#FFF",
          }}
        />

        <div className="w-full flex flex-col gap-1">
          <div>
            <div className="flex justify-between items-center">
              <h1 className="text-lg md:text-xl font-bold leading-tight ">
                {props.data.job}
              </h1>
              <p className=" text-sm text-custom-dark-light/60 dark:text-custom-white-dark/60 md:block hidden">
                {props.data.duration}
              </p>
            </div>
            <h2 className=" text-sm md:text-base font-semibold text-custom-dark-light/60 dark:text-custom-white-dark/60 leading-tight mt-1 md:mt-0">
              {props.data.company}
            </h2>
          </div>

          <p className=" text-xs text-custom-dark-light/60 dark:text-custom-white-dark/60 block md:hidden mt-1 md:mt-0">
            {props.data.duration}
          </p>

          <p className=" text-sm text-custom-dark-light/60 dark:text-custom-white-dark/60 mt-2 max-w-96">
            {props.data.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceContainer;
