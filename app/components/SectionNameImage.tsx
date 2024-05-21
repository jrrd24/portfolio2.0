"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Props = {
  darkImage: string;
  lightImage: string;
};

const SectionNameImage = (props: Props) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    mounted && (
      <Image
        src={theme === "dark" ? props.darkImage : props.lightImage}
        width={100}
        height={50}
        alt="projects"
      />
    )
  );
};

export default SectionNameImage;
