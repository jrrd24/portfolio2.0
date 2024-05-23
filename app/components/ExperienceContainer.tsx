import React from "react";

type Props = {};

const ExperienceContainer = (props: Props) => {
  return (
    <div
      className="my-0 xl:my-32 p-4 xl:p-16 max-w-[28rem] xl:w-[56rem] xl:max-w-none rounded-3xl h-fit 
bg-slate-100/70 shadow-2xl shadow-slate-500/30 dark:shadow-slate-700/30 dark:bg-slate-800/70  relative"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">ScaleUp Solutions</h1>
        <p className="text-lg font-base text-custom-dark-light/60 dark:text-custom-white-dark/60">
          Jan 2024 - Apr 2024
        </p>
      </div>

      <h2 className="mt-2 text-lg font-semibold text-custom-dark-light/60 dark:text-custom-white-dark/60">
        Front-End Web Developer (Intern)
      </h2>

      <ul className="mt-6 list-disc ml-3 text-custom-dark-light/80 dark:text-custom-white-dark/80">
        <li>
          {" "}
          Handled the frontend development of websites using HTML, CSS,
          bootstrap and JavaScript.
        </li>
        <li>
          {" "}
          Handled the frontend development of websites using HTML, CSS,
          bootstrap and JavaScript.
        </li>
        <li>
          {" "}
          Handled the frontend development of websites using HTML, CSS,
          bootstrap and JavaScript.
        </li>
      </ul>
    </div>
  );
};

export default ExperienceContainer;
