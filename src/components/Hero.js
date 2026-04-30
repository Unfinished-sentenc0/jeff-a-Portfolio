import { motion, useReducedMotion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

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
    hidden: {
      opacity: 0,
      y: 24,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="home"
      role="banner"
      aria-labelledby="hero-heading"
      className="
      relative overflow-hidden
      min-h-screen
      flex items-center justify-center
      px-6
      bg-gray-100 dark:bg-gray-950
    "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div
          className="
          absolute top-20 left-10
          w-80 h-80
          bg-blue-500/15
          rounded-full blur-3xl
        "
        />

        <div
          className="
          absolute bottom-10 right-10
          w-96 h-96
          bg-purple-500/15
          rounded-full blur-3xl
        "
        />

        <div
          className="
          absolute top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          w-[500px] h-[500px]
          bg-cyan-500/10
          rounded-full blur-3xl
        "
        />
      </div>

      {/* Main Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-5xl mx-auto text-center"
      >
        {/* Status Badge */}
        <motion.div
          variants={item}
          className="
          inline-flex items-center gap-3
          px-5 py-2
          rounded-full
          mb-8
          bg-white/70 dark:bg-gray-900/60
          backdrop-blur-xl
          border border-gray-200 dark:border-gray-800
          shadow-lg
        "
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />

          <span className="text-sm text-gray-700 dark:text-gray-300">
            Available for freelance & remote work
          </span>
        </motion.div>

        {/* Greeting */}
        <motion.p
          variants={item}
          className="
          uppercase tracking-[0.35em]
          text-sm md:text-base
          text-gray-500 dark:text-gray-400
          mb-5
        "
        >
          Hello, My Name Is
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={item}
          id="hero-heading"
          className="
          text-5xl md:text-7xl lg:text-8xl
          font-black
          leading-[0.95]
          mb-6
        "
        >
          <span
            className="
            bg-gradient-to-r
            from-blue-600
            via-cyan-500
            to-purple-600
            bg-clip-text
            text-transparent
          "
          >
            Jefferson
          </span>

          <br />

          <span className="text-gray-900 dark:text-white">
            Karanja.
          </span>
        </motion.h1>

        {/* Role */}
        <motion.p
          variants={item}
          className="
          text-lg md:text-2xl
          text-gray-700 dark:text-gray-300
          mb-8
        "
        >
          Creative Freelancer & Full Stack Developer
        </motion.p>

        {/* Typewriter */}
        <motion.div
          variants={item}
          className="
          max-w-3xl mx-auto
          text-base md:text-xl
          text-gray-600 dark:text-gray-400
          leading-relaxed
          mb-10
        "
        >
          <span>I build </span>

          <span
            className="
            font-semibold
            text-blue-600 dark:text-blue-400
          "
          >
            {!shouldReduceMotion ? (
              <Typewriter
                words={[
                  "modern digital experiences",
                  "clean full-stack solutions",
                  "high-performance web apps",
                  "responsive UI systems",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={55}
                deleteSpeed={35}
                delaySpeed={1800}
              />
            ) : (
              "modern digital experiences"
            )}
          </span>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          variants={item}
          className="
          flex flex-wrap justify-center
          gap-4 mb-12
        "
        >
          {[
            "10+ Projects Delivered",
            "Cisco Certified",
            "Detail-Oriented",
            "Frontend Focused",
          ].map((item) => (
            <span
              key={item}
              className="
              px-4 py-2 rounded-full
              text-sm
              bg-white/70 dark:bg-gray-900/60
              backdrop-blur-xl
              border border-gray-200 dark:border-gray-800
              text-gray-700 dark:text-gray-300
              shadow-md
            "
            >
              {item}
            </span>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="
          flex flex-col sm:flex-row
          justify-center gap-5
          mb-14
        "
        >
          <a
            href="#projects"
            className="
            group
            px-8 py-4
            rounded-2xl
            bg-gradient-to-r
            from-blue-600 to-purple-600
            text-white
            font-semibold
            transition-all duration-300
            hover:scale-105
            hover:shadow-2xl
          "
          >
            <span className="flex items-center gap-2">
              View Projects

              <svg
                width="15"
                height="15"
                viewBox="0 0 14 14"
                fill="none"
                className="
                transition-transform
                group-hover:translate-x-1
              "
              >
                <path
                  d="M2 7h10M8 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>

          <a
            href="/Jefferson_Karanja_Resume.pdf"
            download
            className="
            px-8 py-4 rounded-2xl
            bg-white/70 dark:bg-gray-900/60
            backdrop-blur-xl
            border border-gray-200 dark:border-gray-800
            text-gray-900 dark:text-white
            font-semibold
            transition-all duration-300
            hover:scale-105
            hover:shadow-xl
          "
          >
            Download CV
          </a>

          <a
            href="#contact"
            className="
            px-8 py-4 rounded-2xl
            bg-white/40 dark:bg-gray-900/40
            backdrop-blur-xl
            border border-gray-200 dark:border-gray-800
            text-gray-900 dark:text-white
            font-semibold
            transition-all duration-300
            hover:scale-105
            hover:shadow-xl
          "
          >
            Contact Me
          </a>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          variants={item}
          className="
          flex flex-wrap justify-center
          gap-3
        "
        >
          {[
            "React",
            "Tailwind CSS",
            "JavaScript",
            "Node.js",
            "Firebase",
            "UI / UX",
          ].map((tech) => (
            <span
              key={tech}
              className="
              px-4 py-2
              rounded-full
              text-sm
              bg-white/60 dark:bg-gray-900/50
              backdrop-blur-xl
              border border-gray-200 dark:border-gray-800
              text-gray-700 dark:text-gray-300
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-lg
            "
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="
        absolute bottom-10 left-1/2
        -translate-x-1/2
        flex flex-col items-center gap-3
      "
      >
        <span
          className="
          text-xs uppercase tracking-[0.3em]
          text-gray-500 dark:text-gray-400
        "
        >
          Scroll
        </span>

        <div
          className="
          w-[1px] h-16
          bg-gradient-to-b
          from-blue-500
          to-transparent
        "
        />
      </motion.div>
    </section>
  );
}