import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const projects = [
    {
      title: "Healthy Diet Mobile Application",
      description:
        "A nutrition-focused mobile application providing dietary guidance, FAQs, and real-time messaging between users and nutritionists.",
      tech: ["Flutter", "SQLite", "Firebase"],
      github: "#",
      demo: "#",
    },
    {
      title: "Nutritionist Management System",
      description:
        "A role-based system for users, nutritionists, and administrators featuring authentication, approvals, and content management.",
      tech: ["Flutter", "SQLite", "Role-Based Access"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="rounded-2xl p-8 bg-white dark:bg-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-5">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
