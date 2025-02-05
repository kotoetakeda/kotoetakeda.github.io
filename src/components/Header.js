import React from 'react';
import { NavLink } from "react-router-dom";


const Header = () => {
  const NameFont = "text-lg sm:text-lg md:text-lg lg:text-xl xl:text-2xl header font-normal text-stone-950";
  const NavFont = "text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl header font-normal text-stone-950";

  return (
    <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row gap-1 mb-12">
      {/* Site Name */}
      <div className="flex flex-1 justify-center sm:justify-center md:justify-start lg:justify-start xl:justify-start">
        <NavLink to={"/website"} className={NameFont}>
          <p>Kotoe Takeda</p>
        </NavLink>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-1 justify-center sm:justify-center md:justify-end lg:justify-end xl:justify-end gap-5">
        <NavLink
          to="/website"
          className={({ isActive }) =>
            `${NavFont} ${
              isActive
                ? "text-stone-950 underline underline-offset-8"
                : "text-stone-400 hover:text-stone-950 hover:underline hover:underline-offset-8"
            }`
          }
        > Home </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${NavFont} ${
              isActive
                ? "text-stone-950 underline underline-offset-8"
                : "text-stone-400 hover:text-stone-950 hover:underline hover:underline-offset-8"
            }`
          }
        > About </NavLink>

        <a
          href="/website/Kotoe_Takeda_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={`${NavFont} text-stone-400 hover:text-stone-950 hover:underline hover:underline-offset-8`}
        > Resume </a>
      </div>
    </div>
  );
};


export default Header;