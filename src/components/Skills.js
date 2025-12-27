import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const skillList = [
    {
      title: "Frontend",
      description: "UI, interactivity, and responsive design",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
      accent: "blue",
    },
    {
      title: "Backend",
      description: "Server logic and data management",
      skills: ["Node.js", "Express.js", "SQLite", "Firebase"],
      accent: "purple",
    },
    {
      title: "Other Skills",
      description: "Workflow and development best practices",
      skills: ["Git & GitHub", "Responsive Design", "Problem Solving"],
      accent: "green",
    },
  ];

  const accentStyles = {
    blue: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    purple:
      "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
    green:
      "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  };

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillList.map((skill, index) => (
            <div
              key={skill.title}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="rounded-2xl p-8 bg-white dark:bg-gray-800 shadow-sm hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-semibold mb-1">
                {skill.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-5">
                {skill.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {skill.skills.map((s) => (
                  <span
                    key={s}
                    className={`px-3 py-1 rounded-full text-sm ${accentStyles[skill.accent]}`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
