import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState("system");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      // system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, [theme]);

  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
