import { useEffect, useState } from "react";
import {
  FaMoon,
  FaSun,
  FaDesktop,
} from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "system"
  );

  const [activeSection, setActiveSection] = useState("home");

  const [scrolled, setScrolled] = useState(false);

  /* ---------------- THEME ---------------- */

  useEffect(() => {
    const root = document.documentElement;

    const mediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const applyTheme = (mode) => {
      if (mode === "dark") {
        root.classList.add("dark");
      } else if (mode === "light") {
        root.classList.remove("dark");
      } else {
        root.classList.toggle("dark", mediaQuery.matches);
      }
    };

    applyTheme(theme);

    localStorage.setItem("theme", theme);

    const handleSystemTheme = () => {
      if (theme === "system") {
        applyTheme("system");
      }
    };

    mediaQuery.addEventListener(
      "change",
      handleSystemTheme
    );

    return () =>
      mediaQuery.removeEventListener(
        "change",
        handleSystemTheme
      );
  }, [theme]);

  /* ---------------- SCROLL ---------------- */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  /* ---------------- ACTIVE SECTION ---------------- */

  useEffect(() => {
    const sections = navLinks
      .map((link) =>
        document.querySelector(link.href)
      )
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin:
          "-45% 0px -45% 0px",
      }
    );

    sections.forEach((section) =>
      observer.observe(section)
    );

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav
        className={`
        fixed top-4 left-1/2
        -translate-x-1/2
        z-50
        transition-all duration-500

        ${
          scrolled
            ? `
              w-[95%] max-w-6xl
              bg-white/70 dark:bg-gray-900/70
              backdrop-blur-2xl
              border border-white/20 dark:border-gray-800
              shadow-2xl
            `
            : `
              w-[98%] max-w-7xl
              bg-white/40 dark:bg-gray-900/40
              backdrop-blur-xl
              border border-white/10 dark:border-gray-800/50
            `
        }

        rounded-2xl
      `}
      >
        {/* Glow */}
        <div
          className="
          absolute inset-0
          rounded-2xl
          bg-gradient-to-r
          from-blue-500/10
          via-purple-500/10
          to-cyan-500/10
          blur-xl
          pointer-events-none
        "
        />

        <div
          className="
          relative
          px-6 py-4
          flex items-center justify-between
        "
        >
          {/* Logo */}

          <a
            href="#home"
            className="
            text-2xl font-black
            tracking-tight
            text-gray-900 dark:text-white
            transition-all duration-300
            hover:scale-105
          "
          >
            Jefferson
            <span
              className="
              bg-gradient-to-r
              from-blue-500
              to-purple-500
              bg-clip-text
              text-transparent
            "
            >
              .
            </span>
          </a>

          {/* Desktop Nav */}

          <div
            className="
            hidden md:flex
            items-center gap-3
          "
          >
            {navLinks.map((link) => {
              const isActive =
                activeSection ===
                link.href.slice(1);

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`
                  relative
                  px-4 py-2
                  rounded-xl
                  text-sm font-medium
                  transition-all duration-300

                  ${
                    isActive
                      ? `
                        text-white
                        bg-gradient-to-r
                        from-blue-600
                        to-purple-600
                        shadow-lg
                      `
                      : `
                        text-gray-700 dark:text-gray-300

                        hover:text-white
                        hover:bg-white/10
                        dark:hover:bg-white/5
                      `
                  }
                `}
                >
                  {link.name}
                </a>
              );
            })}

            {/* Theme Switch */}

            <div
              className="
              flex items-center gap-2
              ml-4
              p-1
              rounded-xl
              bg-white/40 dark:bg-gray-800/40
              border border-white/10
            "
            >
              <button
                onClick={() =>
                  setTheme("light")
                }
                className={`
                p-2 rounded-lg
                transition-all duration-300

                ${
                  theme === "light"
                    ? `
                      bg-yellow-400
                      text-black
                    `
                    : `
                      text-gray-500
                      hover:text-white
                    `
                }
              `}
              >
                <FaSun />
              </button>

              <button
                onClick={() =>
                  setTheme("dark")
                }
                className={`
                p-2 rounded-lg
                transition-all duration-300

                ${
                  theme === "dark"
                    ? `
                      bg-blue-600
                      text-white
                    `
                    : `
                      text-gray-500
                      hover:text-white
                    `
                }
              `}
              >
                <FaMoon />
              </button>

              <button
                onClick={() =>
                  setTheme("system")
                }
                className={`
                p-2 rounded-lg
                transition-all duration-300

                ${
                  theme === "system"
                    ? `
                      bg-purple-600
                      text-white
                    `
                    : `
                      text-gray-500
                      hover:text-white
                    `
                }
              `}
              >
                <FaDesktop />
              </button>
            </div>
          </div>

          {/* Mobile Button */}

          <button
            onClick={() =>
              setIsOpen(!isOpen)
            }
            className="
            md:hidden

            w-11 h-11
            rounded-xl

            bg-white/10
            border border-white/10

            text-gray-900 dark:text-white
            text-xl

            transition-all duration-300
            hover:scale-105
          "
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}

        {isOpen && (
          <div
            className="
            md:hidden
            px-6 pb-6
          "
          >
            <div
              className="
              flex flex-col gap-3
              pt-4
            "
            >
              {navLinks.map((link) => {
                const isActive =
                  activeSection ===
                  link.href.slice(1);

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() =>
                      setIsOpen(false)
                    }
                    className={`
                    px-4 py-3
                    rounded-xl
                    transition-all duration-300

                    ${
                      isActive
                        ? `
                          bg-gradient-to-r
                          from-blue-600
                          to-purple-600
                          text-white
                        `
                        : `
                          bg-white/5
                          text-gray-700
                          dark:text-gray-300
                        `
                    }
                  `}
                  >
                    {link.name}
                  </a>
                );
              })}

              {/* Mobile Theme */}

              <div
                className="
                flex items-center gap-3
                pt-4
              "
              >
                <button
                  onClick={() =>
                    setTheme("light")
                  }
                  className="
                  flex-1 py-3 rounded-xl
                  bg-yellow-400
                  text-black
                "
                >
                  <FaSun className="mx-auto" />
                </button>

                <button
                  onClick={() =>
                    setTheme("dark")
                  }
                  className="
                  flex-1 py-3 rounded-xl
                  bg-blue-600
                  text-white
                "
                >
                  <FaMoon className="mx-auto" />
                </button>

                <button
                  onClick={() =>
                    setTheme("system")
                  }
                  className="
                  flex-1 py-3 rounded-xl
                  bg-purple-600
                  text-white
                "
                >
                  <FaDesktop className="mx-auto" />
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}