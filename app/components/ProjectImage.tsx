"use client";
import Image from "next/image";
import React, { useState } from "react";

type Props = {
  thumbnail: string;
  logo: string;
};

const ProjectImage = (props: Props) => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="relative"
    >
      <Image
        src={props.thumbnail}
        width={911}
        height={1214}
        alt={"Thumbnail"}
        className={`w-full xl:w-72 h-72 md:h-96 object-cover object-right-top rounded-b-none xl:rounded-2xl absolute transition-opacity ease-in-out duration-300 ${
          isHovering ? "opacity-0" : "opacity-100"
        }`}
      />
      <div className="px-12">
        <Image
          src={props.logo}
          width={911}
          height={1214}
          alt={"Logo"}
          className="w-full xl:w-72 h-72 md:h-96 object-contain rounded-b-none xl:rounded-2xl"
        />
      </div>
    </div>
  );
};

export default ProjectImage;
