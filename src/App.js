import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Credibility from "./components/Credibility";
import MobileCTA from "./components/MobileCTA";

function App() {
  const [theme, setTheme] = useState("system");

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [isHovering, setIsHovering] =
    useState(false);

  /* ---------------- AOS + THEME ---------------- */

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    if (theme === "dark") {
      document.documentElement.classList.add(
        "dark"
      );
    } else if (theme === "light") {
      document.documentElement.classList.remove(
        "dark"
      );
    } else {
      const prefersDark =
        window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;

      document.documentElement.classList.toggle(
        "dark",
        prefersDark
      );
    }
  }, [theme]);

  /* ---------------- CUSTOM CURSOR ---------------- */

  useEffect(() => {
    const moveCursor = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleHover = () => {
      setIsHovering(true);
    };

    const handleLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener(
      "mousemove",
      moveCursor
    );

    const hoverElements =
      document.querySelectorAll(
        "a, button, .hover-card"
      );

    hoverElements.forEach((el) => {
      el.addEventListener(
        "mouseenter",
        handleHover
      );

      el.addEventListener(
        "mouseleave",
        handleLeave
      );
    });

    return () => {
      window.removeEventListener(
        "mousemove",
        moveCursor
      );

      hoverElements.forEach((el) => {
        el.removeEventListener(
          "mouseenter",
          handleHover
        );

        el.removeEventListener(
          "mouseleave",
          handleLeave
        );
      });
    };
  }, []);

  return (
    <div
      className="
      relative
      bg-white text-gray-900
      dark:bg-gray-950 dark:text-gray-100
      transition-colors duration-300
      overflow-hidden
    "
    >
      {/* ================= CUSTOM CURSOR ================= */}

      <div
        className={`
        hidden md:block
        pointer-events-none
        fixed z-[9999]
        rounded-full
        transition-all duration-200 ease-out
        mix-blend-screen
        ${
          isHovering
             ? "w-40 h-40 opacity-100"
             : "w-20 h-20 opacity-60"
        }
      `}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform:
            "translate(-50%, -50%)",

          background:
            "radial-gradient(circle, rgba(59,130,246,0.35) 0%, rgba(168,85,247,0.18) 45%, transparent 75%)",

          filter: "blur(18px)",
        }}
      />
      {/* ================= MAIN APP ================= */}

      <Navbar
        theme={theme}
        setTheme={setTheme}
      />

      <Hero />

      <About />

      <Credibility />

      <Skills />

      <Projects />

      <Experience />

      <Footer />

      <MobileCTA />
    </div>
  );
}

export default App;