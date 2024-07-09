import React from "react";

type Props = {
  name: string;
  Icon?: React.ElementType;
};

const Tag = (props: Props) => {
  return (
    <div
      className="px-3 text-custom-dark/60 dark:text-custom-white/60 bg-slate-50 dark:bg-slate-800  min-w-fit text-xs md:text-sm 
    hover:bg-slate-100 hover:dark:bg-slate-700 font-semibold rounded-lg min-h-8 whitespace-nowrap flex justify-center items-center select-none "
    >
      {props.Icon && <props.Icon className=" h-4 md:h-5 w-full pr-2 " />}
      {props.name}
    </div>
  );
};

export default Tag;
