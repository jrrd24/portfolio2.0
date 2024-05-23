import React from "react";

type Props = {
  title: string;
};

const AboutSectionTitle = (props: Props) => {
  return (
    <h3 className="text-xl md:text-3xl lg:text-4xl font-bold flex items-center">
      {props.title}
      <span className="ml-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
        >
          <circle cx="10.5" cy="10" r="10" fill="#E96479" />
        </svg>
      </span>
    </h3>
  );
};

export default AboutSectionTitle;
