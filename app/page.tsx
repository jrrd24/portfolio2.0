import { Metadata } from "next";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import { ThemeProvider } from "next-themes";
import DarkModeButton from "./components/DarkModeButton";

export const metadata: Metadata = {
  title: "Jerard Pagalilauan | Home",
};

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <main className="flex flex-col items-center select-text scroll-smooth relative bg-custom-white dark:bg-custom-dark overflow-x-hidden text-custom-dark dark:text-custom-white ">
        <DarkModeButton />
        <Hero />
        <Projects />

        <section className="min-h-screen container">hellooooo</section>

        <section className="min-h-screen">hellooooo</section>
      </main>
    </ThemeProvider>
  );
}
