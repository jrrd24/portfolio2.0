"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Props = {
  darkImage: string;
  lightImage: string;
  width: number;
  height: number;
};

const SectionNameImage = (props: Props) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    mounted && (
      <Image
        src={theme === "dark" ? props.darkImage : props.lightImage}
        width={props.width}
        height={props.height}
        alt="section"
        // style={{ width: "auto", height: "auto" }}
      />
    )
  );
};

export default SectionNameImage;
