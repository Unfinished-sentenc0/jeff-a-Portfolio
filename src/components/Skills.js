import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const skillList = [
    {
      title: "Frontend",
      description: "UI, interactivity, and responsive design",
      skills: [
        { name: "HTML5", rating: 5 },
        { name: "CSS3", rating: 5 },
        { name: "JavaScript", rating: 4 },
        { name: "React", rating: 4 },
        { name: "Tailwind CSS", rating: 4 },
      ],
      accent: "blue",
    },
    {
      title: "Backend",
      description: "Server logic and data management",
      skills: [
        { name: "Node.js", rating: 4 },
        { name: "Express.js", rating: 4 },
        { name: "SQLite", rating: 3 },
        { name: "Firebase", rating: 3 },
      ],
      accent: "purple",
    },
    {
      title: "Other Skills",
      description: "Workflow and development best practices",
      skills: [
        { name: "Git & GitHub", rating: 5 },
        { name: "Responsive Design", rating: 4 },
        { name: "Problem Solving", rating: 5 },
      ],
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

  const renderStars = (rating, active) =>
    [...Array(5)].map((_, i) => (
      <span
        key={i}
        className={`transition-all duration-500 ${
          active && i < rating
            ? "text-yellow-400"
            : "text-gray-300 dark:text-gray-600"
        }`}
        style={{ transitionDelay: `${i * 120}ms` }}
      >
        ★
      </span>
    ));

  const [visible, setVisible] = useState({});
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = e.target.dataset.index;
            setVisible((v) => ({ ...v, [i]: true }));
          }
        });
      },
      { threshold: 0.4 }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="relative py-28 px-6 bg-gray-50 dark:bg-gray-950"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
          >
            Skills & Expertise
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="120"
            className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto"
          >
            Technologies and tools I use to design, build, and deliver
            high-quality digital experiences.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skillList.map((group, index) => (
            <SkillCard
              key={group.title}
              data={group}
              index={index}
              ref={(el) => (refs.current[index] = el)}
              visible={visible[index]}
              accentStyles={accentStyles}
              renderStars={renderStars}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SKILL CARD ---------------- */

const SkillCard = ({
  data,
  index,
  visible,
  accentStyles,
  renderStars,
}, ref) => {
  const cardRef = useRef(null);

  const onMove = (e) => {
    const r = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty(
      "--x",
      `${e.clientX - r.left}px`
    );
    cardRef.current.style.setProperty(
      "--y",
      `${e.clientY - r.top}px`
    );
  };

  return (
    <div
      ref={(el) => {
        cardRef.current = el;
        if (ref) ref(el);
      }}
      data-index={index}
      onMouseMove={onMove}
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="relative group rounded-3xl p-8
      bg-white dark:bg-gray-900
      border border-gray-200 dark:border-gray-800
      transition-all duration-500
      hover:-translate-y-2 hover:shadow-2xl
      overflow-hidden"
      style={{ "--x": "50%", "--y": "50%" }}
    >
      {/* Cursor Glow */}
      <span
        className="pointer-events-none absolute -inset-px opacity-0
        group-hover:opacity-100 transition duration-500"
        style={{
          background:
            "radial-gradient(300px circle at var(--x) var(--y), rgba(59,130,246,0.18), transparent 45%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">
          {data.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          {data.description}
        </p>

        <div className="flex flex-col gap-3">
          {data.skills.map((skill) => (
            <div
              key={skill.name}
              className={`flex items-center justify-between
              px-4 py-2 rounded-full text-sm
              transition-all duration-300
              hover:scale-[1.02]
              ${accentStyles[data.accent]}`}
            >
              <span className="font-medium">{skill.name}</span>
              <span>{renderStars(skill.rating, visible)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};