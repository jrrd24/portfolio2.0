import Image from "next/image";
import React from "react";

type Props = { data: Data };

type Data = { Icon: React.ElementType; logo: string; link: string };

const TechStackContainer = (props: Props) => {
  return (
    <a
      className="group max-w-[6rem] xl:max-w-[8rem] md:max-w-none rounded-xl aspect-square
    bg-slate-100/50 shadow-2xl shadow-slate-500/30 dark:shadow-slate-700/30 dark:bg-slate-800/50 relative
    flex items-center justify-center hover:dark:bg-slate-100 duration-300 hover:bg-slate-50 backdrop-blur-sm"
      href={props.data.link}
      target="blank"
    >
      {props.data.Icon && (
        <props.data.Icon className=" max-h-12 h-auto w-full group-hover:opacity-0 duration-300 z-10 absolute" />
      )}
      <Image
        src={props.data.logo}
        width={16}
        height={16}
        alt={"Thumbnail"}
        className=" max-h-12 aspect-square w-full opacity-0 group-hover:opacity-100 duration-300 z-0"
      />
    </a>
  );
};

export default TechStackContainer;
