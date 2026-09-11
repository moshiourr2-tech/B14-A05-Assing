



import { useState } from "react";
import Logo from "../assets/logo-text.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <nav className="sticky top-0 z-50 max-w-300 mx-auto mt-5 px-5 md:px-8 flex items-center justify-between bg-white">

        {/* Mobile Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-xl z-10"
        >
          ☰
        </button>

        {/* Logo */}
        <img
          src={Logo}
          alt="Dev Stack"
          className="w-22.5 md:w-auto md:static absolute left-1/2 -translate-x-1/2"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-5">
          <li className="text-red-500">Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        {/* Auth Buttons */}
        <div className="flex items-center gap-2 md:gap-4">
          <button className="text-sm md:text-base">
            Sign In
          </button>

          <button className="bg-pink-500 text-white rounded-full px-3 py-1 md:px-5 md:py-2 text-sm md:text-base">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden max-w-300 mx-auto mt-4 px-5 flex flex-col gap-4 border-t pt-4">
          <li className="text-red-500">Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      )}
    </>
  );
};

export default Nav;