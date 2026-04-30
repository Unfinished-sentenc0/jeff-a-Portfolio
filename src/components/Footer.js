import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
  FaWhatsapp,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const sectionRef = useRef(null);

  // Handle Input Change
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Handle Submit (Frontend Only)
  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus("Message captured successfully 🚀");

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => setStatus(""), 3500);
  };

  // Cursor Glow Effect
  const handleMouseMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect();
    sectionRef.current.style.setProperty(
      "--x",
      `${e.clientX - rect.left}px`
    );
    sectionRef.current.style.setProperty(
      "--y",
      `${e.clientY - rect.top}px`
    );
  };

  return (
    <footer
      id="contact"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden py-28 px-6 pb-32 md:pb-24
      bg-gray-100 dark:bg-gray-950
      text-gray-700 dark:text-gray-300"
      style={{ "--x": "50%", "--y": "50%" }}
    >
      {/* Background Cursor Glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(500px circle at var(--x) var(--y), rgba(59,130,246,0.25), transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Let’s{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Connect
            </span>
          </h3>

          <p className="mt-4 max-w-xl mx-auto text-gray-600 dark:text-gray-400">
            Open to freelance work, collaborations, and full-time frontend
            opportunities. Let’s build something impactful together.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative max-w-xl mx-auto mb-20
          bg-white/80 dark:bg-gray-900/70
          backdrop-blur-2xl rounded-3xl
          border border-gray-200 dark:border-gray-800
          p-8 md:p-10 shadow-2xl space-y-6"
        >
          {/* Floating Input - Name */}
          <FloatingInput
            label="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          {/* Floating Input - Email */}
          <FloatingInput
            label="Your Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />

          {/* Floating Textarea */}
          <FloatingTextarea
            label="Write your message..."
            name="message"
            value={formData.message}
            onChange={handleChange}
          />

          {/* Button */}
          <motion.button
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.02 }}
            type="submit"
            className="w-full py-4 rounded-2xl font-semibold text-white
            bg-gradient-to-r from-blue-600 to-purple-600
            shadow-lg hover:shadow-2xl
            transition-all duration-300"
          >
            Send Message 🚀
          </motion.button>
        </motion.form>

        {/* Toast Status */}
        <AnimatePresence>
          {status && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              className="fixed bottom-24 left-1/2 -translate-x-1/2
              bg-green-600 text-white px-6 py-3 rounded-full
              shadow-lg text-sm z-50"
            >
              {status}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Static Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row justify-center gap-6 mb-14 text-sm"
        >
          <span className="flex items-center gap-2">
            <FaLocationDot /> Nakuru, Kenya
          </span>

          <a
            href="mailto:jeffersongithinji@gmail.com"
            className="flex items-center gap-2 hover:text-blue-600 transition"
          >
            <FaEnvelope /> Email Me
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-7 text-2xl"
        >
          <GlowIcon href="https://github.com/Unfinished-sentenc0">
            <FaGithub />
          </GlowIcon>

          <GlowIcon href="https://x.com/_jeffinto">
            <FaXTwitter />
          </GlowIcon>

          <GlowIcon href="https://wa.me/message/H45TAWKQS3QLM1">
            <FaWhatsapp />
          </GlowIcon>

          <GlowIcon href="https://www.linkedin.com/in/jefferson-githinji-586b26238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <FaLinkedin />
          </GlowIcon>

          <GlowIcon href="https://www.instagram.com/92_5vo?utm_source=qr&igsh=MTkwNmxqMXl4bGhydw==">
            <FaInstagram />
          </GlowIcon>
        </motion.div>

        {/* Footer Bottom */}
        <div className="mt-20 border-t border-gray-300 dark:border-gray-800 pt-6">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Jefferson G. Karanja — Built with React + Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}

/* Floating Input Component */
function FloatingInput({ label, name, type = "text", value, onChange }) {
  return (
    <div className="relative">
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required
        placeholder=" "
        className="peer w-full p-4 rounded-2xl border
        border-gray-300 dark:border-gray-700
        bg-transparent outline-none
        focus:ring-2 focus:ring-blue-500"
      />
      <label
        className="absolute left-4 top-4 text-gray-500 dark:text-gray-400
        text-sm transition-all
        peer-placeholder-shown:top-4
        peer-placeholder-shown:text-base
        peer-placeholder-shown:text-gray-500
        peer-focus:top-2
        peer-focus:text-sm
        peer-focus:text-blue-600"
      >
        {label}
      </label>
    </div>
  );
}

/* Floating Textarea Component */
function FloatingTextarea({ label, name, value, onChange }) {
  return (
    <div className="relative">
      <textarea
        name={name}
        rows="5"
        value={value}
        onChange={onChange}
        required
        placeholder=" "
        className="peer w-full p-4 rounded-2xl border
        border-gray-300 dark:border-gray-700
        bg-transparent outline-none resize-none
        focus:ring-2 focus:ring-blue-500"
      />
      <label
        className="absolute left-4 top-4 text-gray-500 dark:text-gray-400
        text-sm transition-all
        peer-placeholder-shown:top-4
        peer-placeholder-shown:text-base
        peer-placeholder-shown:text-gray-500
        peer-focus:top-2
        peer-focus:text-sm
        peer-focus:text-blue-600"
      >
        {label}
      </label>
    </div>
  );
}

/* Glow Social Icon Component */
function GlowIcon({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group"
    >
      <span
        className="absolute inset-0 rounded-full blur-xl opacity-0
        group-hover:opacity-100 transition
        bg-gradient-to-br from-blue-500/40 to-purple-500/40"
      />
      <span
        className="relative z-10 flex items-center justify-center
        w-12 h-12 rounded-full
        bg-white/70 dark:bg-gray-900/70
        backdrop-blur-md shadow-lg
        transition-all duration-300
        group-hover:-translate-y-2 group-hover:scale-110"
      >
        {children}
      </span>
    </a>
  );
}