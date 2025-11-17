"use client";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#work" },
];

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const navClasses = useMemo(
    () =>
      `fixed top-0 left-0 z-50 w-full border-b border-white/10 transition-all duration-500 ${
        isScroll ? "bg-[#050b16]/95 shadow-lg shadow-black/40 backdrop-blur-xl" : "bg-transparent"
      }`,
    [isScroll]
  );

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={navClasses}>
      <div className="pointer-events-none absolute inset-0 bg-[#050b16]/85" />
      <div className="pointer-events-none absolute inset-0 blur-3xl opacity-50 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.25),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.25),transparent_40%)]" />

      <div className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        {/* Brand */}
        <a href="#top" className="flex flex-col leading-tight">
          <span className="text-lg font-semibold uppercase tracking-[0.18em] text-slate-100">
            Thu Ta Zaw
          </span>
          <span className="text-[11px] font-semibold tracking-[0.35em] text-sky-300">
            Portfolio
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="group relative px-4 py-2 transition hover:text-sky-300"
              >
                <span>{link.label}</span>
                <span className="absolute left-1/2 -bottom-0.5 h-px w-0 bg-gradient-to-r from-sky-500 to-indigo-500 transition-all duration-300 -translate-x-1/2 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Right */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden lg:inline-flex whitespace-nowrap items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5"
          >
            Let&apos;s talk
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14m0 0-5-5m5 5-5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <button
            className="text-slate-100 md:hidden"
            onClick={openMenu}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            <Image src={assets.menu_white} alt="menu" className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <button
          aria-label="Close menu overlay"
          onClick={closeMenu}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
        />
      )}

      {/* Mobile panel */}
      <div
        id="mobile-nav"
        className={`fixed top-0 right-0 z-50 h-screen w-72 transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute inset-0 bg-[#050b16]" />
        <div className="absolute inset-0 blur-3xl opacity-70 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.4),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.4),transparent_40%)]" />

        <div className="relative flex flex-col h-full p-8 gap-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Menu</p>
              <p className="text-lg font-semibold text-white">Navigate</p>
            </div>
            <button onClick={closeMenu} aria-label="Close menu">
              <Image src={assets.close_white} alt="close" className="w-5 h-5" />
            </button>
          </div>

          <ul className="flex flex-1 flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="flex items-center gap-2 text-lg font-medium text-white/80 transition hover:text-white"
                >
                  <span className="h-[1px] w-6 bg-white/30" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="rounded-2xl border border-white/10 p-4 text-white/80">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Currently</p>
            <p className="mt-1 text-base font-semibold">Open for freelance & remote work</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
