import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const NameFont =
    "text-lg sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-ibm font-semibold text-stone-950";
  const NavFont =
    "text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-playfair font-normal text-stone-950";

  // Name to be animated
  const name = "KOTOE TAKEDA";

  // State for scroll detection
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY; // Store last scroll position

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false); // Hide header on scroll down
      } else {
        setShowHeader(true); // Show header on scroll up
      }
      lastScrollY = window.scrollY; // Update last scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between px-8 py-4">
        {/* Name (Left) */}
        <div>
          <NavLink to="/" className={`${NameFont} inline-block group`}>
            {name.split("").map((letter, index) => (
              <span
                key={index}
                className="inline-block transition-transform duration-300 group-hover:animate-jump"
                style={{ animationDelay: `${index * 0.1}s`, display: "inline-block" }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </NavLink>
        </div>

        {/* Navigation Links (Right) */}
        <nav className="flex gap-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${NavFont} ${
                isActive
                  ? "text-stone-950 underline underline-offset-8"
                  : "text-stone-400 hover:text-stone-950 hover:underline hover:underline-offset-8"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${NavFont} ${
                isActive
                  ? "text-stone-950 underline underline-offset-8"
                  : "text-stone-400 hover:text-stone-950 hover:underline hover:underline-offset-8"
              }`
            }
          >
            About
          </NavLink>

          <a
            href="/Kotoe_Takeda_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`${NavFont} text-stone-400 hover:text-stone-950 hover:underline hover:underline-offset-8`}
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
