import { FaBriefcase, FaCertificate } from "react-icons/fa";
import { useRef } from "react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-28 px-6 bg-white dark:bg-gray-950 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Experience & Certifications
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            A snapshot of my professional journey, hands-on experience, and
            continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* EXPERIENCE */}
          <div>
            <SectionHeader icon={<FaBriefcase />} title="Experience" />

            <div className="relative pl-6 space-y-12 border-l border-gray-200 dark:border-gray-800">
              <TimelineCard
                title="ICT Support Intern"
                place="Huduma Centre · Kenya"
                period="2023 – 2024"
                points={[
                  "Provided technical support to staff and citizens",
                  "Assisted in system troubleshooting and maintenance",
                  "Supported digital service delivery platforms",
                ]}
              />

              <TimelineCard
                title="Frontend Developer (Projects)"
                place="Personal & Academic Projects"
                period="2024 – Present"
                points={[
                  "Built responsive web interfaces using React",
                  "Integrated frontend with backend APIs",
                  "Focused on clean UI, accessibility, and performance",
                ]}
              />
            </div>
          </div>

          {/* CERTIFICATIONS */}
          <div>
            <SectionHeader
              icon={<FaCertificate />}
              title="Certifications"
            />

            <div className="grid gap-8">
              <GlowCard
                title="Cisco Networking Academy"
                subtitle="Introduction to Networks"
              />

              <GlowCard
                title="Cisco Networking Academy"
                subtitle="Cybersecurity Essentials"
              />

              <GlowCard
                title="ICT Authority / Government Training"
                subtitle="Digital Government & ICT Support"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- COMPONENTS ---------------- */

function SectionHeader({ icon, title }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <div className="p-3 rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
    </div>
  );
}

function TimelineCard({ title, place, period, points }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty(
      "--x",
      `${e.clientX - r.left}px`
    );
    ref.current.style.setProperty(
      "--y",
      `${e.clientY - r.top}px`
    );
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className="relative group rounded-2xl p-6 bg-gray-50 dark:bg-gray-900
      border border-gray-200 dark:border-gray-800
      transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
      style={{ "--x": "50%", "--y": "50%" }}
    >
      {/* Glow */}
      <span
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-500"
        style={{
          background:
            "radial-gradient(260px circle at var(--x) var(--y), rgba(59,130,246,0.18), transparent 45%)",
        }}
      />

      {/* Dot */}
      <span className="absolute -left-[33px] top-6 w-3 h-3 rounded-full bg-blue-600" />

      <div className="relative z-10">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {place}
        </p>
        <p className="text-xs text-gray-500 mb-4">{period}</p>

        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
          {points.map((p, i) => (
            <li key={i}>• {p}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function GlowCard({ title, subtitle }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty(
      "--x",
      `${e.clientX - r.left}px`
    );
    ref.current.style.setProperty(
      "--y",
      `${e.clientY - r.top}px`
    );
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className="relative group p-6 rounded-2xl bg-gray-50 dark:bg-gray-900
      border border-gray-200 dark:border-gray-800
      transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
      style={{ "--x": "50%", "--y": "50%" }}
    >
      {/* Glow */}
      <span
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-500"
        style={{
          background:
            "radial-gradient(240px circle at var(--x) var(--y), rgba(59,130,246,0.15), transparent 45%)",
        }}
      />

      <div className="relative z-10">
        <h4 className="font-semibold text-gray-900 dark:text-white">
          {title}
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {subtitle}
        </p>
      </div>
    </div>
  );
}