import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
} from "react-icons/fa";

const projects = [
  {
    title: "IoT-Enabled Car Parking App",
    category: "IoT",
    featured: true,

    problem:
      "Drivers struggle to find available parking spaces, causing congestion and wasted time.",

    solution:
      "Built an IoT-powered parking management system using sensors to detect slot availability and update a real-time dashboard.",

    outcome:
      "Improved parking efficiency and demonstrated scalable smart-city integration.",

    tech: [
      "React",
      "Firebase",
      "Node.js",
      "IoT Sensors",
    ],

    github:
      "https://github.com/yourusername/iot-car-parking",

    live: "",

    gradient:
      "from-blue-600 to-cyan-500",
  },

  {
    title: "Healthy Diet App",
    category: "Mobile",
    featured: false,

    problem:
      "Users lacked direct access to personalized nutrition guidance and expert support.",

    solution:
      "Developed a role-based nutrition platform with messaging, FAQs, and nutritionist management.",

    outcome:
      "Increased engagement through expert-driven interaction and structured health guidance.",

    tech: [
      "Flutter",
      "Firebase",
      "SQLite",
    ],

    github:
      "https://github.com/yourusername/healthy-diet-app",

    live: "",

    gradient:
      "from-green-500 to-emerald-600",
  },

  {
    title: "Portfolio Website",
    category: "Frontend",
    featured: true,

    problem:
      "Needed a modern digital identity to showcase projects and technical expertise.",

    solution:
      "Designed a fully responsive animated portfolio with advanced UI interactions and theme support.",

    outcome:
      "Created a stronger professional brand presence for recruiters and clients.",

    tech: [
      "React",
      "Tailwind",
      "Framer Motion",
      "EmailJS",
    ],

    github:
      "https://github.com/yourusername/portfolio",

    live:
      "https://your-portfolio-link.vercel.app",

    gradient:
      "from-purple-600 to-pink-500",
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] =
    useState("All");

  const [selectedProject, setSelectedProject] =
    useState(null);

  const filters = [
    "All",
    "Frontend",
    "IoT",
    "Mobile",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (p) =>
            p.category === activeFilter
        );

  return (
    <section
      id="projects"
      className="
      relative py-28 px-6
      bg-white dark:bg-gray-950
      overflow-hidden
    "
    >
      {/* Background Glow */}

      <div className="absolute inset-0 -z-10">
        <div
          className="
          absolute top-20 right-10
          w-72 h-72
          bg-blue-500/20
          rounded-full blur-3xl
        "
        />

        <div
          className="
          absolute bottom-10 left-10
          w-72 h-72
          bg-purple-500/20
          rounded-full blur-3xl
        "
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className="text-center mb-14"
        >
          <h2
            className="
            text-4xl md:text-6xl
            font-black
            mb-4
          "
          >
            My{" "}

            <span
              className="
              bg-gradient-to-r
              from-blue-600
              to-purple-600
              bg-clip-text
              text-transparent
            "
            >
              Projects
            </span>
          </h2>

          <p
            className="
            max-w-2xl mx-auto
            text-gray-600 dark:text-gray-400
            text-lg
          "
          >
            Real-world projects focused on
            modern UI systems, scalable
            architecture, and impactful
            digital experiences.
          </p>
        </motion.div>

        {/* Filters */}

        <div
          className="
          flex justify-center flex-wrap
          gap-4 mb-16
        "
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() =>
                setActiveFilter(filter)
              }
              className={`
              px-6 py-3 rounded-2xl
              text-sm font-semibold
              transition-all duration-300

              ${
                activeFilter === filter
                  ? `
                    bg-gradient-to-r
                    from-blue-600
                    to-purple-600
                    text-white
                    shadow-xl
                  `
                  : `
                    bg-gray-100
                    dark:bg-gray-900

                    border border-gray-200
                    dark:border-gray-800

                    text-gray-700
                    dark:text-gray-300

                    hover:scale-105
                  `
              }
            `}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}

        <div
          className="
          grid gap-10
          md:grid-cols-2
          xl:grid-cols-3
        "
        >
          {filteredProjects.map(
            (project, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay:
                    index * 0.12,
                }}
                onClick={() =>
                  setSelectedProject(
                    project
                  )
                }
                className="
                hover-card glow-hover
                relative overflow-hidden

                rounded-[2rem]
                p-8

                cursor-pointer

                bg-white/70
                dark:bg-gray-900/70

                backdrop-blur-2xl

                border border-gray-200
                dark:border-gray-800

                shadow-xl

                transition-all duration-500

                hover:-translate-y-3
                hover:shadow-2xl
              "
              >
                {/* Gradient Top */}

                <div
                  className={`
                  absolute top-0 left-0
                  w-full h-1

                  bg-gradient-to-r
                  ${project.gradient}
                `}
                />

                {/* Glow */}

                <div
                  className={`
                  absolute -top-20 -right-20
                  w-40 h-40
                  rounded-full
                  blur-3xl
                  opacity-20

                  bg-gradient-to-r
                  ${project.gradient}
                `}
                />

                {/* Featured */}

                {project.featured && (
                  <span
                    className="
                    inline-flex items-center
                    mb-5

                    px-4 py-2
                    rounded-full

                    text-xs font-semibold

                    bg-gradient-to-r
                    from-blue-600
                    to-purple-600

                    text-white
                  "
                  >
                    Featured Project
                  </span>
                )}

                {/* Title */}

                <h3
                  className="
                  text-2xl font-bold
                  mb-4

                  text-gray-900
                  dark:text-white
                "
                >
                  {project.title}
                </h3>

                {/* Problem */}

                <p
                  className="
                  text-gray-600
                  dark:text-gray-400

                  mb-5
                  leading-relaxed
                "
                >
                  {project.problem}
                </p>

                {/* Tech */}

                <div
                  className="
                  flex flex-wrap
                  gap-2 mb-8
                "
                >
                  {project.tech.map(
                    (item) => (
                      <span
                        key={item}
                        className="
                        px-3 py-2
                        rounded-full

                        text-xs

                        bg-blue-100
                        dark:bg-blue-900/30

                        text-blue-700
                        dark:text-blue-300
                      "
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>

                {/* Footer */}

                <div
                  className="
                  flex items-center
                  justify-between
                "
                >
                  <span
                    className="
                    text-sm
                    font-medium

                    text-blue-600
                    dark:text-blue-400
                  "
                  >
                    View Details
                  </span>

                  <div
                    className="
                    flex items-center gap-4
                  "
                  >
                    <FaGithub />

                    {project.live && (
                      <FaExternalLinkAlt />
                    )}
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>

      {/* ================= MODAL ================= */}

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() =>
              setSelectedProject(null)
            }
            className="
            fixed inset-0
            z-[100]
            bg-black/70
            backdrop-blur-md

            flex items-center
            justify-center

            p-6
          "
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
              }}
              transition={{
                duration: 0.3,
              }}
              onClick={(e) =>
                e.stopPropagation()
              }
              className="
              relative

              w-full max-w-3xl

              rounded-[2rem]
              overflow-hidden

              bg-white
              dark:bg-gray-950

              border border-gray-200
              dark:border-gray-800

              shadow-2xl
            "
            >
              {/* Top Gradient */}

              <div
                className={`
                h-2 w-full
                bg-gradient-to-r
                ${selectedProject.gradient}
              `}
              />

              {/* Close */}

              <button
                onClick={() =>
                  setSelectedProject(
                    null
                  )
                }
                className="
                absolute top-6 right-6

                w-10 h-10
                rounded-full

                bg-gray-100
                dark:bg-gray-800

                flex items-center
                justify-center

                hover:rotate-90

                transition-all duration-300
              "
              >
                <FaTimes />
              </button>

              <div className="p-10">
                {/* Title */}

                <h3
                  className="
                  text-4xl font-black
                  mb-6

                  text-gray-900
                  dark:text-white
                "
                >
                  {
                    selectedProject.title
                  }
                </h3>

                {/* Problem */}

                <div className="mb-6">
                  <h4
                    className="
                    font-bold mb-2
                    text-blue-600
                  "
                  >
                    Problem
                  </h4>

                  <p
                    className="
                    text-gray-600
                    dark:text-gray-400
                    leading-relaxed
                  "
                  >
                    {
                      selectedProject.problem
                    }
                  </p>
                </div>

                {/* Solution */}

                <div className="mb-6">
                  <h4
                    className="
                    font-bold mb-2
                    text-purple-600
                  "
                  >
                    Solution
                  </h4>

                  <p
                    className="
                    text-gray-600
                    dark:text-gray-400
                    leading-relaxed
                  "
                  >
                    {
                      selectedProject.solution
                    }
                  </p>
                </div>

                {/* Outcome */}

                <div className="mb-8">
                  <h4
                    className="
                    font-bold mb-2
                    text-green-600
                  "
                  >
                    Outcome
                  </h4>

                  <p
                    className="
                    text-gray-600
                    dark:text-gray-400
                    leading-relaxed
                  "
                  >
                    {
                      selectedProject.outcome
                    }
                  </p>
                </div>

                {/* Tech */}

                <div
                  className="
                  flex flex-wrap gap-3
                  mb-10
                "
                >
                  {selectedProject.tech.map(
                    (tech) => (
                      <span
                        key={tech}
                        className="
                        px-4 py-2
                        rounded-full

                        bg-blue-100
                        dark:bg-blue-900/30

                        text-blue-700
                        dark:text-blue-300

                        text-sm
                      "
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>

                {/* Buttons */}

                <div
                  className="
                  flex flex-wrap gap-4
                "
                >
                  <a
                    href={
                      selectedProject.github
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    px-6 py-4 rounded-2xl

                    bg-gradient-to-r
                    from-blue-600
                    to-purple-600

                    text-white
                    font-semibold

                    flex items-center gap-3

                    hover:scale-105

                    transition-all duration-300
                  "
                  >
                    <FaGithub />
                    View Code
                  </a>

                  {selectedProject.live && (
                    <a
                      href={
                        selectedProject.live
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                      px-6 py-4 rounded-2xl

                      border border-gray-300
                      dark:border-gray-700

                      font-semibold

                      flex items-center gap-3

                      hover:scale-105

                      transition-all duration-300
                    "
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}