export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-2xl font-semibold text-white mb-4">
          Let’s Work Together
        </h3>

        <p className="mb-6">
          I’m open to internship, junior developer, and full-stack opportunities.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 mb-6">
          <a
            href="mailto:your-email@example.com"
            className="flex items-center gap-2 text-blue-400 hover:underline transition"
          >
            📧 jeffersongithinji@gmail.com
          </a>

          <span>📍 Nakuru, Kenya</span>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition"
          >
            💻 GitHub
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-500 hover:text-white transition"
          >
            🔗 LinkedIn
          </a>
        </div>

        <p className="mt-8 text-sm text-gray-500">
          © {new Date().getFullYear()} Jefferson G. Karanja. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
