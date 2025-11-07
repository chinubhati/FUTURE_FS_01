import React, { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar({ dark, setDark }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/10 dark:bg-gray-900/40 backdrop-blur-md border-b border-white/20 dark:border-gray-800/50 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo / Name */}
        <a
          href="#home"
          className="text-2xl font-bold tracking-wide bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:scale-105 transition-transform"
        >
          Chinu Bhati
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-semibold text-gray-700 dark:text-gray-200">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative group transition duration-300"
              >
                {item}
                <span className="absolute left-0 bottom-[-4px] w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side Buttons */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition-transform"
          >
            {dark ? (
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-yellow-400"
            >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v1.5m0 15V21m9-9h-1.5M4.5 12H3m15.364 6.364l-1.06-1.06M7.696 7.696l-1.06-1.06m0 10.728l1.06-1.06m10.728-10.728l1.06 1.06"
            />
        </svg>
        ) : (
        <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-gray-800"
        >
        <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0112 21.75c-5.385 0-9.75-4.365-9.75-9.75 0-4.11 2.493-7.634 6.002-9.086a.75.75 0 01.998.696 7.501 7.501 0 009.78 9.78.75.75 0 01.722.612z"
        />
       </svg>
  )}
    </button>
    
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/80 dark:bg-gray-900/90 backdrop-blur-md py-4">
          <ul className="flex flex-col items-center space-y-4 font-medium text-gray-700 dark:text-gray-200">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-500 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
