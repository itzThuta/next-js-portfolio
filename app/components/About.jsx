import { infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About = ({ isDarkMode }) => {
  return (
    <section
      id="about"
      className="relative w-full px-[8%] py-20 scroll-mt-20 flex flex-col items-center text-center"
    >
      {/* Keep the same smooth background as other sections */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b 
                      from-sky-50 via-white to-white 
                      dark:from-[#0b1220] dark:via-[#0b1220] dark:to-[#0b1220]" />

      {/* Headings */}
      <h4 className="text-sm uppercase tracking-widest text-sky-500 dark:text-sky-400 font-semibold">
        Introduction
      </h4>
      <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold 
                     bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 
                     bg-clip-text text-transparent">
        About Me
      </h2>

      {/* Bio */}
      <p className="mt-6 max-w-2xl text-slate-600 dark:text-slate-300 leading-relaxed">
        I’m a{" "}
        <span className="font-semibold text-sky-500 dark:text-sky-400">
          Flutter & MERN Stack Developer
        </span>{" "}
        with 1.5 years of hands-on experience building real-world apps, APIs, and
        responsive UIs.
        <br />
        <br />
        Alongside coding, I’m also growing as a{" "}
        <span className="font-semibold text-blue-600 dark:text-blue-400">
          Junior UI/UX Designer
        </span>
        , focusing on smooth user flows and clean design. I’m passionate about
        creating user-friendly digital products and open to{" "}
        <span className="font-semibold text-indigo-600 dark:text-indigo-400">
          remote opportunities
        </span>{" "}
        to keep learning and growing.
      </p>

      {/* Info cards */}
      <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
        {infoList.map(({ icon, iconDark, title, description }, index) => (
          <li
            key={index}
            className="rounded-2xl border border-slate-200 dark:border-white/10 
                       bg-white/80 dark:bg-slate-900/40 p-6 shadow-sm 
                       hover:shadow-lg hover:-translate-y-1 transition-all duration-300
                       group"
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-tr from-sky-100 to-blue-100 
                              dark:from-sky-900/40 dark:to-blue-900/30 
                              group-hover:scale-105 transition">
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-7 h-7"
                />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">
              {title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {description}
            </p>
          </li>
        ))}
      </ul>

      {/* Tools */}
      <h4 className="mt-16 mb-6 text-lg font-semibold text-sky-500 dark:text-sky-400">
        Tools I Use
      </h4>
      <ul className="flex flex-wrap justify-center gap-5 max-w-xl">
        {toolsData.map((tool, index) => (
          <li
            key={index}
            className="flex items-center justify-center w-14 h-14 border border-slate-200 dark:border-slate-700 rounded-xl 
                       bg-white dark:bg-slate-800 shadow-sm 
                       hover:-translate-y-1 hover:shadow-md transition duration-300"
          >
            <Image src={tool} alt="Tool" className="w-7 h-7" />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default About;
