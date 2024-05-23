import { Metadata } from "next";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import { ThemeProvider } from "next-themes";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import About from "./sections/About";

export const metadata: Metadata = {
  title: "Jerard Pagalilauan | Home",
};

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <main
        className="select-text scroll-smooth relative
        bg-gradient-to-tr from-slate-300 to-custom-white  dark:from-slate-900 dark:to-zinc-950  
        h-screen overflow-x-hidden text-custom-dark dark:text-custom-white font-poppins "
      >
        <Navbar />
        <div id="home" className="grid lg:grid-cols-2 w-screen ">
          <div
            className=" w-full lg:col-start-1  lg:col-span-11 2xl:col-span-12 lg:col-end-11 2xl:col-end-12 
            flex flex-col items-center justify-items-center"
          >
            <Hero />
            <Projects />
            <About/>
          </div>
          <div className="lg:col-start-11 lg:col-end-12 w-20 h-screen">
            <Sidebar />
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}
