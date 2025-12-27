import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="about"
      className="py-24 px-6 bg-gray-100 dark:bg-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Left: Description */}
          <div data-aos="fade-right">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              I’m <span className="font-semibold">Jefferson G. Karanja</span>, a
              frontend-focused full stack developer based in Nakuru, Kenya. I
              hold a <span className="font-semibold">BSc in Information Technology</span>{" "}
              from Kabarak University and have hands-on experience building
              modern, responsive, and user-centered web applications.
            </p>

            <p className="mt-5 text-gray-700 dark:text-gray-300 leading-relaxed">
              My primary strength lies in the frontend — crafting clean UI,
              intuitive user experiences, and responsive layouts — while still
              being comfortable working with backend technologies, APIs, and
              databases. I enjoy turning ideas into polished digital products.
            </p>

            <p className="mt-5 text-gray-700 dark:text-gray-300 leading-relaxed">
              I have professional exposure through an internship at{" "}
              <span className="font-semibold">Huduma Centre, Nakuru</span>, where
              I gained real-world IT experience, teamwork skills, and a deeper
              understanding of production environments.
            </p>
          </div>

          {/* Right: Highlights */}
          <div
            data-aos="fade-left"
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-8"
          >
            <h3 className="text-xl font-semibold mb-6">
              Quick Highlights
            </h3>

            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">▸</span>
                Frontend-focused Full Stack Developer
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">▸</span>
                Strong in React, Tailwind CSS & JavaScript
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">▸</span>
                Experience with Node.js, Firebase & SQLite
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">▸</span>
                Cisco Certified (IT & Networking Fundamentals)
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">▸</span>
                Languages: English & Swahili
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
