import React from "react";

type Props = {
  name: string;
};

const Tag = (props: Props) => {
  return (
    <div
      className="px-3 text-custom-dark/60 dark:text-custom-white/60 bg-slate-200 dark:bg-slate-700 min-w-fit text-sm 
    hover:bg-slate-300 hover:dark:bg-slate-600 font-semibold rounded-lg h-8 flex justify-center items-center select-none"
    >
      {props.name}
    </div>
  );
};

export default Tag;
