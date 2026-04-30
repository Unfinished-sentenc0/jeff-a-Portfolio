import { motion } from "framer-motion";
import {
  Laptop,
  Code2,
  Award,
  Globe,
  Sparkles,
  Layers3,
} from "lucide-react";
import { useRef } from "react";

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden py-32 px-6 bg-gray-100 dark:bg-gray-950"
    >
      {/* Elite Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute top-20 left-10 w-80 h-80
          bg-blue-500/20 rounded-full blur-3xl"
        />

        <div
          className="absolute bottom-10 right-10 w-96 h-96
          bg-purple-500/20 rounded-full blur-3xl"
        />

        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2
          -translate-y-1/2 w-[500px] h-[500px]
          bg-cyan-500/10 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div
          variants={item}
          className="text-center mb-20"
        >
          <p
            className="inline-flex items-center gap-2
            px-4 py-2 rounded-full
            bg-white/70 dark:bg-gray-900/60
            backdrop-blur-md
            border border-gray-200 dark:border-gray-800
            text-sm text-gray-600 dark:text-gray-300 mb-6"
          >
            <Sparkles size={16} />
            Creative Developer & Problem Solver
          </p>

          <h2
            className="text-4xl md:text-6xl font-black
            text-gray-900 dark:text-white"
          >
            About{" "}
            <span
              className="bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600
              bg-clip-text text-transparent"
            >
              Me
            </span>
          </h2>

          <p
            className="mt-6 max-w-2xl mx-auto
            text-gray-600 dark:text-gray-400
            text-lg leading-relaxed"
          >
            Passionate about building visually refined,
            responsive, and high-performing digital
            experiences that combine clean design with
            functional engineering.
          </p>
        </motion.div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT SIDE */}
          <motion.div
            variants={item}
            className="space-y-8"
          >
            {/* Main Card */}
            <div
              className="relative overflow-hidden
              rounded-3xl p-8 md:p-10
              bg-white/70 dark:bg-gray-900/60
              backdrop-blur-xl
              border border-gray-200 dark:border-gray-800
              shadow-2xl"
            >
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  background:
                    "radial-gradient(circle at top right, rgba(59,130,246,0.15), transparent 40%)",
                }}
              />

              <div className="relative z-10 space-y-6">
                <p
                  className="text-lg leading-relaxed
                  text-gray-700 dark:text-gray-300"
                >
                  I’m{" "}
                  <span
                    className="font-bold
                    text-blue-600 dark:text-blue-400"
                  >
                    Jefferson G. Karanja
                  </span>
                  , a creative freelancer and
                  frontend-focused full stack developer
                  based in Nakuru, Kenya.
                </p>

                <p
                  className="text-gray-700
                  dark:text-gray-300 leading-relaxed"
                >
                  I specialize in building modern,
                  responsive, and user-focused digital
                  experiences using technologies like
                  React, Tailwind CSS, and modern
                  frontend architectures.
                </p>

                <p
                  className="text-gray-700
                  dark:text-gray-300 leading-relaxed"
                >
                  Beyond frontend development, I also
                  work with backend technologies
                  including Node.js, Firebase, APIs,
                  and databases to build complete and
                  scalable applications.
                </p>

                <p
                  className="text-gray-700
                  dark:text-gray-300 leading-relaxed"
                >
                  My internship experience at
                  <span className="font-semibold">
                    {" "}
                    Huduma Centre, Nakuru
                  </span>{" "}
                  strengthened my teamwork,
                  communication, and real-world IT
                  problem-solving abilities.
                </p>
              </div>
            </div>

            {/* Stats */}
            <motion.div
              variants={container}
              className="grid grid-cols-2 gap-6"
            >
              <StatCard
                number="10+"
                label="Projects Built"
                color="blue"
              />

              <StatCard
                number="2+"
                label="Years Experience"
                color="purple"
              />
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            variants={container}
            className="grid gap-6"
          >
            <EliteCard
              icon={<Laptop />}
              title="Frontend Specialist"
              description="Building elegant, responsive, and engaging interfaces with modern UI principles."
              color="blue"
            />

            <EliteCard
              icon={<Code2 />}
              title="Modern Tech Stack"
              description="Experienced with React, Tailwind CSS, JavaScript, Firebase, and scalable frontend systems."
              color="purple"
            />

            <EliteCard
              icon={<Layers3 />}
              title="Full Stack Capability"
              description="Able to integrate APIs, backend services, databases, and authentication systems."
              color="cyan"
            />

            <EliteCard
              icon={<Award />}
              title="Continuous Learning"
              description="Always improving through certifications, experimentation, and hands-on development."
              color="green"
            />

            <EliteCard
              icon={<Globe />}
              title="Collaboration & Impact"
              description="Focused on teamwork, communication, and creating meaningful digital experiences."
              color="orange"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

/* ---------------- ELITE CARD ---------------- */

function EliteCard({
  icon,
  title,
  description,
  color,
}) {
  const ref = useRef(null);

  const glowMap = {
    blue: "rgba(59,130,246,0.18)",
    purple: "rgba(168,85,247,0.18)",
    cyan: "rgba(6,182,212,0.18)",
    green: "rgba(34,197,94,0.18)",
    orange: "rgba(249,115,22,0.18)",
  };

  const iconMap = {
    blue: "text-blue-600",
    purple: "text-purple-600",
    cyan: "text-cyan-500",
    green: "text-green-500",
    orange: "text-orange-500",
  };

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    ref.current.style.setProperty(
      "--x",
      `${e.clientX - rect.left}px`
    );

    ref.current.style.setProperty(
      "--y",
      `${e.clientY - rect.top}px`
    );
  };

  return (
    <motion.div
      whileHover={{ y: -6 }}
      ref={ref}
      onMouseMove={handleMove}
      className="relative group overflow-hidden
      rounded-3xl p-7
      bg-white/70 dark:bg-gray-900/60
      backdrop-blur-xl
      border border-gray-200 dark:border-gray-800
      transition-all duration-500
      hover:shadow-2xl"
      style={{
        "--x": "50%",
        "--y": "50%",
      }}
    >
      {/* Cursor Glow */}
      <div
        className="absolute inset-0 opacity-0
        group-hover:opacity-100 transition duration-500"
        style={{
          background: `radial-gradient(280px circle at var(--x) var(--y), ${glowMap[color]}, transparent 45%)`,
        }}
      />

      <div className="relative z-10 flex gap-5">
        <div
          className={`p-4 rounded-2xl
          bg-white dark:bg-gray-800
          ${iconMap[color]}`}
        >
          {icon}
        </div>

        <div>
          <h3
            className="text-lg font-semibold
            text-gray-900 dark:text-white mb-2"
          >
            {title}
          </h3>

          <p
            className="text-sm leading-relaxed
            text-gray-600 dark:text-gray-400"
          >
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------------- STAT CARD ---------------- */

function StatCard({ number, label }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="rounded-3xl p-6
      bg-white/70 dark:bg-gray-900/60
      backdrop-blur-xl
      border border-gray-200 dark:border-gray-800
      shadow-lg"
    >
      <h3
        className="text-3xl font-black
        bg-gradient-to-r from-blue-600 to-purple-600
        bg-clip-text text-transparent"
      >
        {number}
      </h3>

      <p
        className="mt-2 text-sm
        text-gray-600 dark:text-gray-400"
      >
        {label}
      </p>
    </motion.div>
  );
}