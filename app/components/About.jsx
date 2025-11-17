import { infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full px-[8%] py-24 scroll-mt-20 flex flex-col items-center text-center"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#030614] via-[#040915] to-[#01030a]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-72 blur-3xl opacity-60 bg-[radial-gradient(circle_at_10%_20%,rgba(14,165,233,0.25),transparent_55%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.25),transparent_45%)]" />

      <h4 className="text-sm font-semibold uppercase tracking-[0.5em] text-sky-300">
        Introduction
      </h4>
      <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
        About Me
      </h2>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start w-full max-w-6xl">
        <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 text-left shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-10">
          <p className="text-lg font-semibold text-slate-200">
            A product-minded developer crafting calm, human-focused experiences.
          </p>
          <p className="mt-4 leading-relaxed text-slate-300">
            I&apos;m a{" "}
            <span className="font-medium text-sky-300">Flutter & MERN developer</span>{" "}
            blending UI thinking with engineering discipline. I love translating product ideas into
            tangible flows—moving from sketches to interactive prototypes to production-ready builds.
          </p>
          <p className="mt-4 leading-relaxed text-slate-300">
            With 1.5 years of iterative experience, I&apos;ve shipped internal dashboards, launch websites,
            and mobile utilities. I thrive in remote-first teams with clear ownership and feedback loops.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Experience", value: "1.5 yrs", detail: "Flutter · MERN" },
              { label: "Timezone", value: "UTC+7", detail: "Bangkok, remote" },
              { label: "Focus", value: "UI/UX", detail: "Design systems" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur"
              >
                <p className="text-[11px] uppercase tracking-[0.35em] text-slate-300">
                  {item.label}
                </p>
                <p className="text-xl font-semibold text-white">{item.value}</p>
                <p className="text-sm text-slate-400">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left shadow-lg shadow-black/30 backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="mb-4 inline-flex items-center justify-center rounded-2xl bg-gradient-to-tr from-sky-900/40 to-blue-900/20 p-3">
                  <Image src={iconDark || icon} alt={title} className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-slate-400">{description}</p>
              </li>
            ))}
          </ul>

          <div className="rounded-3xl border border-dashed border-white/20 p-6 text-left">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-300">
              Toolbox
            </p>
            <ul className="mt-4 flex flex-wrap gap-4">
              {toolsData.map((tool, index) => (
                <li
                  key={index}
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-black/20"
                >
                  <Image src={tool} alt="Tool" className="w-6 h-6" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
