import Image from "next/image";
import React from "react";
import Tag from "../Tag";

type Props = {
  data: Data;
};

type Data = {
  title: string;
  date: string;
  Icon: React.ElementType;
  result: string;
};

const AchievementContainer = (props: Props) => {
  return (
    <div className="group w-full flex lg:flex-row flex-col items-center gap-4 md:gap-6  py-4 last:border-b-0 border-b-2">
      {/**Title */}
      <div className="w-full flex lg:justify-center lg:w-[10%]">
        {" "}
        {props.data.Icon && (
          <props.data.Icon className="lg:max-h-8 max-h-7 aspect-square h-auto group-hover:text-custom-orange group-hover:lg:max-h-9 transition-all duration-300 " />
        )}
      </div>

      <h1 className="text-md md:text-lg font-bold leading-snug md:leading-snug w-full lg:w-[60%]">
        {props.data.title}{" "}
        <span className="text-custom-orange dark:text-custom-orange-dark">
          {" "}
          - {props.data.result}
        </span>
      </h1>
      <p className=" lg:text-right text-sm md:text-base text-custom-dark-light/60 dark:text-custom-white-dark/60 w-full lg:w-[30%]">
        {props.data.date}
      </p>
    </div>
  );
};

export default AchievementContainer;
