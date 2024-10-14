import { Metadata } from "next";
import Hero from "./sections/Hero";
import { ThemeProvider } from "next-themes";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import WhoAmI from "./sections/WhoAmI";
import ProjectsRework from "./sections/projects/ProjectsRework";
import AboutRework from "./sections/AboutRework";
import AboutMe from "./sections/aboutMe/AboutMe";
import HeroRework from './sections/hero/HeroRework';
import ShowcaseProjects from "./sections/showcaseProjects/ShowcaseProjects";

export const metadata: Metadata = {
  title: "Jerard Pagalilauan",
};

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <main
        className="select-text scroll-smooth relative
        bg-gradient-to-tr from-custom-white to-custom-white  dark:from-slate-900 dark:to-zinc-950  
        h-dvh overflow-x-hidden text-custom-dark dark:text-custom-white font-poppins "
      >
        <Navbar />
        <div id="home" className="w-screen">
            <HeroRework/>
            <ShowcaseProjects/>
            {/* <Hero /> */}
            {/* <WhoAmI /> */}
            <AboutMe />
            <ProjectsRework />
            {/* <AboutRework /> */}
            <Contact />
            <Footer />
         
        </div>
      </main>
    </ThemeProvider>
  );
}
