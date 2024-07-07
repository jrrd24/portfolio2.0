import { Metadata } from "next";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import { ThemeProvider } from "next-themes";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Jerard Pagalilauan",
};

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <main
        className="select-text scroll-smooth relative
        bg-gradient-to-tr from-slate-300 to-custom-white  dark:from-slate-900 dark:to-zinc-950  
        h-dvh overflow-x-hidden text-custom-dark dark:text-custom-white font-poppins "
      >
        <Navbar />
        <div id="home" className="grid lg:grid-cols-2 w-screen ">
          <div
            className=" w-full lg:col-start-1  lg:col-span-11 2xl:col-span-12 lg:col-end-11 2xl:col-end-12 
            flex flex-col items-center justify-items-center"
          >
            <Hero />
            <Projects />
            <About />
            <Contact />
            <Footer />
          </div>
          <div className="lg:col-start-11 lg:col-end-12 w-20 ">
            <Sidebar />
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}
