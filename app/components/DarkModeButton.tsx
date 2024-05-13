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
      <button
        type="button"
        className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-800  dark:hover:bg-gray-700 transition-all rounded flex items-center justify-center h-7 w-7"
        aria-label={theme === "dark" ? "Toggle light mode" : "Toggle dark mode"}
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        {theme === "dark" ? (
          <SunIcon className={styles} />
        ) : (
          <MoonIcon className={styles} />
        )}
      </button>
    )
  );
}
