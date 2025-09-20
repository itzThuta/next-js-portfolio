import { assets, serviceData } from "@/assets/assets";
import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <section
      id="services"
      className="relative w-full px-[8%] py-20 scroll-mt-20 flex flex-col items-center text-center"
    >
      {/* Background gradient (consistent theme) */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b 
                   from-sky-50 via-white to-white 
                   dark:from-[#0b1220] dark:via-[#0b1220] dark:to-[#0b1220]"
      />

      {/* Headings */}
      <h4 className="text-sm uppercase tracking-widest text-sky-500 dark:text-sky-400 font-semibold">
        What I Offer
      </h4>
      <h2
        className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight 
                   bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 
                   bg-clip-text text-transparent"
      >
        My Services
      </h2>

      {/* Intro paragraph */}
      <p className="mt-6 max-w-2xl mx-auto text-slate-600 dark:text-slate-300 leading-relaxed">
        I build modern web and mobile apps using{" "}
        <span className="text-sky-500 dark:text-sky-400 font-semibold">
          Flutter
        </span>{" "}
        and the{" "}
        <span className="text-blue-600 dark:text-blue-400 font-semibold">
          MERN stack
        </span>
        , with a focus on responsive UI, full-stack solutions, and smooth user
        experiences. I also offer{" "}
        <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
          UI/UX design support
        </span>{" "}
        to bring your ideas to life.
      </p>

      {/* Service cards */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="group rounded-2xl border border-slate-200 dark:border-white/10 
                       bg-white/90 dark:bg-slate-900/40 p-8 shadow-sm 
                       hover:-translate-y-2 hover:shadow-lg transition-all duration-300
                       flex flex-col items-center text-center"
          >
            {/* Centered icon */}
            <div
              className="flex items-center justify-center w-16 h-16 rounded-2xl 
                         bg-gradient-to-tr from-sky-100 to-blue-100 
                         dark:from-sky-900/40 dark:to-blue-900/30 mb-5 
                         group-hover:scale-110 transition"
            >
              <Image src={icon} alt={title} className="w-8 h-8" />
            </div>

            <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">
              {title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {description}
            </p>

            <a
              href={link}
              className="mt-5 inline-flex items-center justify-center gap-2 text-sm font-medium 
                         text-sky-600 dark:text-sky-400 group-hover:translate-x-1 transition-transform"
            >
              Read more
              <Image alt="arrow" src={assets.right_arrow} className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
