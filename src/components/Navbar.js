import { useState } from "react";

export default function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide">
          Jefferson<span className="text-blue-600">.</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-sm font-medium hover:text-blue-600 transition"
              >
                {link.name}
              </a>
            </li>
          ))}

          {/* Theme Selector */}
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="bg-transparent border border-gray-300 dark:border-gray-600 rounded-md px-2 py-1 text-sm focus:outline-none"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System</option>
          </select>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-medium hover:text-blue-600 transition"
                >
                  {link.name}
                </a>
              </li>
            ))}

            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="w-full bg-transparent border border-gray-300 dark:border-gray-600 rounded-md px-2 py-2 text-sm"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="system">System</option>
            </select>
          </ul>
        </div>
      )}
    </nav>
  );
}
