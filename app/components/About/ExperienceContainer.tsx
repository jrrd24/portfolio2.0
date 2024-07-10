import Image from "next/image";
import React from "react";

type Props = {
  data: Data;
};

type Data = {
  logo: string;
  color: string;
  company: string;
  job: string;
  duration: string;
  order: number;
  responsibilities: Responsibilities[];
};

type Responsibilities = {
  id: number;
  content: string;
  order: number;
};

const ExperienceContainer = (props: Props) => {
  return (
    <div className="group p-6 py-8 sm:p-8 md:p-16 max-w-[24rem] xl:w-[50rem] md:max-w-none h-fit relative border-b-2 border-custom-dark-light/40 dark:border-custom-white-dark/40 ">
      <Image
        src={props.data.logo}
        width={500}
        height={500}
        alt="achievement"
        className=" transition aspect-square h-24  w-24 object-contain duration-500 rounded-2xl xl:rounded-xl p-3 mb-4 "
        style={{
          backgroundColor: props.data.color ? props.data.color : "#FFF",
        }}
      />
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold  ">{props.data.job}</h1>
        <p className=" text-base text-custom-dark-light/60 dark:text-custom-white-dark/60 hidden md:block">
          {props.data.duration}
        </p>
      </div>

      <h2 className=" text-base md:text-lg font-semibold text-custom-dark-light/60 dark:text-custom-white-dark/60">
        {props.data.company}
      </h2>
      <p className=" text-sm text-custom-dark-light/60 dark:text-custom-white-dark/60 block md:hidden">
        {props.data.duration}
      </p>

      <ul className="mt-6 list-disc ml-3 text-custom-dark-light/80 dark:text-custom-white-dark/80  text-sm md:text-base ">
        {props.data.responsibilities
          ?.sort((a, b) => a.order - b.order)
          .map((data) => (
            <li key={data.id}>{data.content}</li>
          ))}
      </ul>
    </div>
  );
};

export default ExperienceContainer;
