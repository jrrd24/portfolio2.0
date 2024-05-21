"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/20/solid";

const styles = "h-4 w-4 text-gray-600 dark:text-gray-300";

export default function DarkModeButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    mounted && (
      <label className="switch">
        <input
          type="checkbox"
          onChange={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
          checked={theme !== "dark"}
        />
        <span className="slider"></span>
      </label>
    )
  );
}
