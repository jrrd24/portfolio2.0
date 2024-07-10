import React from "react";

type Props = {
  data: Data;
};

type Data = {
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
    <div
      className="group my-8 p-6 py-8 sm:p-8 md:p-16 max-w-[24rem] xl:w-[50rem] md:max-w-none rounded-3xl h-fit
bg-slate-100/50 shadow-2xl shadow-slate-500/30 dark:shadow-slate-700/30 dark:bg-slate-800/50  relative"
    >
      <div className="flex justify-between items-center  group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-flow group-hover:bg-[length:200%_auto] group-hover:animate-gradient transition-all duration-300 ">
        <h1 className="text-xl font-bold  ">{props.data.job}</h1>
        <p className=" text-base text-custom-dark-light/60 dark:text-custom-white-dark/60 hidden md:block">
          {props.data.duration}
        </p>
      </div>

      <h2 className=" text-base md:text-lg font-semibold text-custom-red dark:text-custom-red-dark group-hover:text-custom-dark-light/60 dark:group-hover:text-custom-white-dark/60">
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
