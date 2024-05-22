import React from "react";

type Props = {
  link?: string;
};

const TagLink = (props: Props) => {
  return (
    <a
      className="px-3 text-custom-dark/80 dark:text-custom-white bg-slate-200 dark:bg-slate-700 min-w-fit text-sm 
      hover:bg-slate-300 hover:dark:bg-slate-600 font-semibold rounded-lg h-8 flex justify-center items-center select-none"
      href={props.link}
      target="blank"
    >
      {props.link ? "🌐" : "🔒"}
      &nbsp;
      {props.link ? props.link : "Private Repository"}
    </a>
  );
};

export default TagLink;
