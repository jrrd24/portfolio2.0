import Image from "next/image";
import React from "react";
import Tag from "./Tag";

type Props = {
  data: Data;
};

type Data = {
  title: string;
  date: string;
  image: string;
  tags: Tag[];
};

type Tag = {
  id: number;
  description: string;
  order: number;
};

const AchievementContainer = (props: Props) => {
  return (
    <div
      className="max-w-[24rem] xl:w-[56rem] rounded-3xl flex flex-col gap-6 p-6
bg-slate-100/70 shadow-2xl shadow-slate-500/30 dark:shadow-slate-700/30 dark:bg-slate-800/70  relative"
    >
      {/**Image */}
      <div
        className={` w-full h-56 rounded-t-2xl xl:rounded-xl  overflow-hidden`}
      >
        <Image
          src={props.data.image}
          width={500}
          height={500}
          alt="achievement"
          className="hover:scale-110 transition duration-500  w-full h-56 rounded-t-2xl xl:rounded-xl object-cover"
        />
      </div>

      <div className="flex flex-col gap-2">
        {/**Title */}
        <h1 className="text-xl font-bold ">{props.data.title}</h1>
        <p className=" text-sm md:text-base text-custom-dark-light/60 dark:text-custom-white-dark/60">
          {props.data.date}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {props.data.tags
          .sort((a, b) => a.order - b.order)
          .map((data) => (
            <Tag key={data.id} name={data.description} />
          ))}
      </div>
    </div>
  );
};

export default AchievementContainer;
