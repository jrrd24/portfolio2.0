import React from "react";

type Props = {
  link?: string;
};

const TagLink = (props: Props) => {
  return (
    <a
      className="px-2 md:px-3 text-custom-dark/80 dark:text-custom-white bg-slate-50 dark:bg-slate-800 max-w-fill  text-xs md:text-sm 
      hover:bg-slate-100 hover:dark:bg-slate-700 font-semibold rounded-lg h-6 md:h-9 inline-block select-none truncate pt-1 md:pt-2"
      href={props.link}
      target="blank"
    >
      <span className="">
        {props.link ? "🌐" : "🔒"}
        &nbsp;
        {props.link ? props.link : "Private Repository"}
      </span>
    </a>
  );
};

export default TagLink;
