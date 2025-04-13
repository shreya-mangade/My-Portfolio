"use client";

import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

const navItems = [
  { href: "#home", label: "About Me" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact-me", label: "Contact Me" },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#182630] border-b border-[var(--color-cyan-light)] px-5 py-4 flex justify-between items-center">
      {/* Logo */}
      <p className="text-xl text-[var(--color-cyan-dark)] font-semibold">
        Shreya Mangade.
      </p>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6">
        {navItems.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="text-white hover:text-[var(--color-cyan-light)] transition duration-300"
          >
            {label}
          </a>
        ))}
      </nav>

      {/* Mobile Toggle Button */}
      <div className="md:hidden text-white z-50" onClick={toggleMenu}>
        {menuOpen ? <MdClose size={26} /> : <MdMenu size={26} />}
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-[var(--color-bg-blend)] shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <MdClose
            size={26}
            onClick={closeMenu}
            className="text-white cursor-pointer"
          />
        </div>

        <nav className="flex flex-col items-start gap-4 px-6">
          {navItems.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="text-white hover:text-[var(--color-cyan-light)] text-lg transition duration-300"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
