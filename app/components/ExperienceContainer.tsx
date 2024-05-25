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
      className="my-8 p-4 xl:p-16 max-w-[28rem] xl:w-[56rem] xl:max-w-none rounded-3xl h-fit 
bg-slate-100/70 shadow-2xl shadow-slate-500/30 dark:shadow-slate-700/30 dark:bg-slate-800/70  relative"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">{props.data.company}</h1>
        <p className=" text-base font-base text-custom-dark-light/60 dark:text-custom-white-dark/60">
          {props.data.duration}
        </p>
      </div>

      <h2 className="text-lg font-semibold text-custom-dark-light/60 dark:text-custom-white-dark/60">
        {props.data.job}
      </h2>

      <ul className="mt-6 list-disc ml-3 text-custom-dark-light/80 dark:text-custom-white-dark/80">
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
