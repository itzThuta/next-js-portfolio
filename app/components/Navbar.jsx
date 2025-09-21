"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        isScroll
          ? "backdrop-blur bg-white/70 dark:bg-slate-900/70 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Brand name */}
        <a
          href="#top"
          className="text-xl md:text-2xl font-bold tracking-wide 
                     bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 
                     bg-clip-text text-transparent"
        >
          Thu Ta Zaw
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {["Home", "About", "Services", "Projects"].map((item) => (
            <li key={item}>
              <a
                href={item === "Home" ? "#top" : `#${item.toLowerCase()}`}
                className="relative text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Contact button (desktop only) */}
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2 rounded-full 
                       bg-sky-600 hover:bg-sky-700 
                       text-white text-sm font-medium shadow transition"
          >
            Contact
          </a>

          {/* Mobile menu toggle */}
          {/* Mobile menu toggle */}
          <button
            className="md:hidden"
            onClick={openMenu}
            aria-label="Open menu"
          >
            <Image
              src={assets.menu_black} // black icon for light mode
              alt="menu"
              className="w-6 h-6 block dark:hidden"
            />
            <Image
              src={assets.menu_white} // white icon for dark mode
              alt="menu"
              className="w-6 h-6 hidden dark:block"
            />
          </button>
        </div>
      </div>

      {/* Mobile side menu */}
      <ul
        className={`fixed top-0 right-0 h-screen w-64 transform transition-transform duration-300 
                    flex flex-col gap-6 p-8 md:hidden z-[60]
                    bg-gradient-to-b from-sky-900 via-blue-900 to-indigo-900
                    bg-opacity-95 backdrop-blur
                    ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close button */}
        <button
          className="self-end"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <Image src={assets.close_white} alt="close" className="w-5 h-5" />
        </button>

        {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={item === "Home" ? "#top" : `#${item.toLowerCase()}`}
              onClick={closeMenu}
              className="block text-lg font-medium text-slate-200 hover:text-sky-400 transition"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
