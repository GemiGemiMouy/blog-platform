import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className="
        fixed top-0 left-0 right-0 z-50
        bg-white/50 dark:bg-slate-900/60 backdrop-blur-md
        shadow-sm
        border-b border-gray-200 dark:border-gray-700
        px-16 py-6
        flex items-center justify-between
        text-slate-800 dark:text-gray-200
      "
    >
      {/* Logo */}
      <Link
        to="/"
        className="
          font-extrabold text-2xl
          hover:text-indigo-600
          transition-colors
          mr-32
          inline-block
        "
        aria-label="Homepage"
      >
        MyBlog
      </Link>

      {/* Navigation links */}
      <div className="hidden md:flex space-x-16 font-medium text-lg">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400"
              : "hover:border-b-2 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400"
              : "hover:border-b-2 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/categories"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400"
              : "hover:border-b-2 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          }
        >
          Categories
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400"
              : "hover:border-b-2 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          }
        >
          Contact
        </NavLink>
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-10">
        <DarkModeToggle />

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7 text-slate-800 dark:text-gray-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div
          className="
            absolute top-full left-0 right-0 bg-white dark:bg-slate-900
            border-t border-gray-200 dark:border-gray-700
            shadow-md
            flex flex-col space-y-6 py-6 px-10
            md:hidden
          "
        >
          <NavLink
            to="/"
            end
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "border-l-4 border-indigo-500 pl-4 text-indigo-600 dark:text-indigo-400"
                : "pl-4 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "border-l-4 border-indigo-500 pl-4 text-indigo-600 dark:text-indigo-400"
                : "pl-4 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/categories"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "border-l-4 border-indigo-500 pl-4 text-indigo-600 dark:text-indigo-400"
                : "pl-4 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            }
          >
            Categories
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "border-l-4 border-indigo-500 pl-4 text-indigo-600 dark:text-indigo-400"
                : "pl-4 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            }
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
}
