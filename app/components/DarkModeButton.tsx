"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function DarkModeButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    if (theme === "dark") setTheme("dark");
    else setTheme("light");
  }, []);

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
