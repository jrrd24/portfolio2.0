import React from "react";

type Props = {
  link?: string;
};

const TagLink = (props: Props) => {
  return (
    <a
      className="px-3 text-custom-dark/80 dark:text-custom-white bg-slate-200 dark:bg-slate-700 max-w-fill  text-sm 
      hover:bg-slate-300 hover:dark:bg-slate-600 font-semibold rounded-lg h-9 inline-block select-none truncate pt-2"
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
