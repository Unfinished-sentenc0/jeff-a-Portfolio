import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        
        {/* Name */}
        <h1
          data-aos="fade-down"
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Jefferson Karanja
          </span>
        </h1>

        {/* Role */}
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-4 text-lg md:text-2xl text-gray-600 dark:text-gray-300"
        >
          Frontend-Focused Full Stack Developer
        </p>

        {/* Short value proposition */}
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-6 text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-400"
        >
          I specialize in building clean, responsive, and user-friendly web
          interfaces using modern frontend technologies. Cisco-certified with a
          strong IT foundation and hands-on experience delivering real-world
          solutions.
        </p>

        {/* Highlights */}
        <div
          data-aos="fade-up"
          data-aos-delay="550"
          className="mt-6 flex flex-wrap justify-center gap-3 text-sm"
        >
          <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
            React & Tailwind
          </span>
          <span className="px-4 py-2 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">
            JavaScript & UI/UX
          </span>
          <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">
            Cisco Certified
          </span>
        </div>

        {/* CTA Buttons */}
        <div
          data-aos="fade-up"
          data-aos-delay="700"
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-8 py-3 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
