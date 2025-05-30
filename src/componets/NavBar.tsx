import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
  const [theme, setTheme] = useState<string>(() => {
    // Check localStorage first, then system preference, default to 'light'
    return (
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
    );
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="navbar  dark:bg-success shadow-sm">
      <div className="navbar-start">
        <div className="dropdown md:hidden bg-base-100">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle bg-base-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1  mt-3 w-52 p-2 shadow "
          >
            <li>
              <a href="/" className="btn btn-ghost ">
                Homepage
              </a>
            </li>
            <li>
              <a href="#contact " className="btn btn-ghost">
                Contact
              </a>
            </li>
            <li>
              <a href="#about" className="btn btn-ghost">
                About
              </a>
            </li>
            <li>
              <a href="#project" className="btn btn-ghost">
                Projects
              </a>
            </li>
            <li>
              <a href="#experience" className="btn btn-ghost">
                Education & Experiences
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex bg-base-100 rounded-md ">
          <ul className="menu menu-horizontal p-0 w-max bg-success/40 ">
            <li>
              <a href="/" className="btn btn-ghost">
                Homepage
              </a>
            </li>
            <li>
              <a href="#contact" className="btn btn-ghost">
                Contact
              </a>
            </li>
            <li>
              <a href="#about" className="btn btn-ghost">
                About
              </a>
            </li>
            <li>
              <a href="#project" className="btn btn-ghost">
                Projects
              </a>
            </li>
            <li>
              <a href="#experience" className="btn btn-ghost">
                Education & Experiences
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />{" "}
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}
