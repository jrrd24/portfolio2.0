import { Metadata } from "next";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import { ThemeProvider } from "next-themes";
import DarkModeButton from "./components/DarkModeButton";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Jerard Pagalilauan | Home",
};

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <main
        className="flex flex-col items-center select-text scroll-smooth relative
        bg-gradient-to-tr from-slate-300 to-custom-white  dark:from-slate-900 dark:to-zinc-950  
        overflow-x-hidden  text-custom-dark dark:text-custom-white font-poppins "
      >
        <Navbar />
        <Hero />
        <Projects />
      </main>
    </ThemeProvider>
  );
}
