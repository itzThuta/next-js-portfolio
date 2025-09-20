import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <footer className="relative border-t border-gray-200 dark:border-gray-700 px-[8%] py-8 text-sm">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white to-indigo-50 dark:from-slate-900 dark:via-slate-950 dark:to-black" />

      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left - Name + Email */}
        <div className="text-center sm:text-left">
          <h2 className="text-lg font-bold bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600  bg-clip-text text-transparent">
            Thu Ta Zaw
          </h2>
          <a
            href="mailto:kuku.zayn@gmail.com"
            className="flex items-center justify-center sm:justify-start gap-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition mt-2"
          >
            <Image
              src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
              alt="mail"
              className="w-4"
            />
            kuku.zayn@gmail.com
          </a>
        </div>

        {/* Right - Social Links */}
        <ul className="flex items-center gap-6">
          <li>
            <a
              href="https://github.com/itzThuta/"
              target="_blank"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/thu-ta-zaw-ab788a34a/"
              target="_blank"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/itzThuta"
              target="_blank"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>

      {/* Bottom small copyright */}
      <p className="mt-6 text-center text-xs text-gray-600 dark:text-gray-400">
        © 2025 Thu Ta Zaw. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
