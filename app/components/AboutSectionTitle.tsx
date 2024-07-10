import React from "react";

type Props = {
  title: string;
};

const AboutSectionTitle = (props: Props) => {
  return (
    <h3 className="text-xl md:text-3xl lg:text-4xl font-bold flex items-center">
      {props.title}
      <span className="ml-2 text-base md:text-lg lg:text-xl text-custom-red dark:text-custom-red-dark">
        &nbsp;✗
      </span>
    </h3>
  );
};

export default AboutSectionTitle;
