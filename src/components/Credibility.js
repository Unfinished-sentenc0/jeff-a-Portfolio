import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaGitAlt,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function Credibility() {
  const stats = [
    { number: "2+", label: "Years Experience" },
    { number: "15+", label: "Projects Built" },
    { number: "100%", label: "Responsive Designs" },
  ];

  const techStack = [
    { icon: <FaReact />, name: "React" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaFigma />, name: "Figma" },
  ];

  return (
    <section className="py-24 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Why Work With{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Me?
            </span>
          </h3>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            I build clean, scalable and high-performing frontend experiences
            with attention to detail and performance.
          </p>
        </motion.div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-gray-100 dark:bg-gray-900 shadow-lg"
            >
              <h4 className="text-4xl font-extrabold text-blue-600">
                {stat.number}
              </h4>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* TECH STACK */}
        <div className="flex flex-wrap justify-center gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 px-6 py-4 rounded-2xl
              bg-gray-100 dark:bg-gray-900
              shadow-md hover:shadow-xl
              transition-all duration-300
              hover:-translate-y-1"
            >
              <span className="text-2xl text-blue-600">
                {tech.icon}
              </span>
              <span className="font-medium text-gray-700 dark:text-gray-300">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}