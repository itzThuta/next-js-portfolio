"use client";

import { workData, projectsData, assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Work = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const openModal = (category) => {
    setActiveCategory(category);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    setActiveCategory(null);
  };

  // lock body scroll
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = prev);
  }, [isOpen]);

  // ESC to close
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeModal();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // filter in modal
  const filteredProjects = projectsData.filter(
    (p) => p.category?.toLowerCase() === activeCategory?.toLowerCase()
  );

  return (
    <section
      id="work"
      className="relative w-full px-[6%] py-20 scroll-mt-20 flex flex-col items-center text-center"
    >
      {/* background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 via-white to-white dark:from-[#0b1220] dark:via-[#0b1220] dark:to-[#0b1220]" />

      {/* heading */}
      <h4 className="text-sm uppercase tracking-widest text-sky-500 dark:text-sky-400 font-semibold">
        Portfolio
      </h4>
      <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
        My Latest Projects
      </h2>
      <p className="mt-6 max-w-2xl text-slate-600 dark:text-slate-300 leading-relaxed">
        A showcase of apps and websites built for{" "}
        <span className="text-sky-600 dark:text-sky-400 font-medium">usability</span> and{" "}
        <span className="text-blue-600 dark:text-blue-400 font-medium">performance</span>.
      </p>

      {/* trigger cards */}
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {workData.map((p, i) => (
          <button
            key={i}
            onClick={() => openModal(p.category || p.description)}
            className="group text-left rounded-2xl overflow-hidden bg-white/80 dark:bg-slate-900/70 
                       border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
          >
            <div className="relative w-full h-48 sm:h-44">
              <Image
                src={p.bgImage}
                alt={p.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{p.description}</p>
              <span className="mt-3 inline-block text-sm font-medium text-sky-600 dark:text-sky-400">
                View →
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* modal */}
      {isOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm" onClick={closeModal} />
          <div className="fixed inset-0 z-50 flex items-center justify-center px-3 sm:px-6">
            <div className="w-full max-w-6xl max-h-[92vh] overflow-hidden rounded-3xl shadow-2xl
                            bg-white dark:bg-slate-900 border border-white/10 flex flex-col">
              {/* header */}
              <div className="flex items-center justify-between px-5 sm:px-8 py-4 border-b border-slate-200 dark:border-white/10">
                <div className="text-left">
                  <p className="text-[11px] tracking-[0.18em] text-sky-500 dark:text-sky-300">
                    SHOWCASE
                  </p>
                  <h3 className="mt-1 text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                    {activeCategory || "Projects"}
                  </h3>
                </div>
                <button
                  onClick={closeModal}
                  className="rounded-full p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-200/50 dark:hover:bg-white/10 transition"
                >
                  ✕
                </button>
              </div>

              {/* body */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProjects.length > 0 ? (
                    filteredProjects.map((p, i) => (
                      <ProjectCard key={`overlay-${i}`} project={p} />
                    ))
                  ) : (
                    <p className="col-span-full text-center text-slate-500 dark:text-slate-400">
                      No projects found.
                    </p>
                  )}
                </div>
              </div>

              {/* footer */}
              <div className="px-5 sm:px-8 py-4 border-t border-slate-200 dark:border-white/10 text-center">
                <button
                  onClick={closeModal}
                  className="inline-flex items-center gap-2 rounded-full px-6 py-2 text-sm 
                             font-medium text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

/* ------------------------- Project Card ------------------------- */
const ProjectCard = ({ project }) => {
  const device = project.device || inferDevice(project);

  return (
    <div className="rounded-2xl bg-white dark:bg-slate-800 shadow-sm hover:shadow-lg transition overflow-hidden flex flex-col">
      {/* Framed preview */}
      <div className="p-4 pb-0">
        {device === "phone" ? (
          <IPhoneHero crop="twoThirds">
            <Thumb src={project.bgImage} alt={project.title} />
          </IPhoneHero>
        ) : (
          <LaptopFrame>
            <Thumb src={project.bgImage} alt={project.title} />
          </LaptopFrame>
        )}
      </div>

      {/* Content */}
      <div className="p-4 pt-3 flex-1 flex flex-col text-left">
        <h4 className="text-slate-900 dark:text-white font-semibold text-base sm:text-lg">
          {project.title}
        </h4>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 flex-1 line-clamp-4">
          {project.fullDescription}
        </p>

        {/* Tech chips */}
        {project.tech && (
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-medium rounded-full bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 text-center rounded-full px-4 py-2 text-sm font-medium
                       text-white bg-sky-600 hover:bg-sky-700 transition"
          >
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 text-center rounded-full px-4 py-2 text-sm font-medium
                       text-sky-600 dark:text-sky-300 ring-1 ring-sky-400/60 hover:bg-sky-400/10 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

/* ------------------------- Frames & Thumb ------------------------- */
const Thumb = ({ src, alt }) => (
  <div className="relative w-full h-56 xs:h-60 sm:h-48 overflow-hidden rounded-xl">
    <Image src={src} alt={alt} fill className="object-cover" />
  </div>
);

/* iPhone Hero frame */
const IPhoneHero = ({ children, crop }) => {
  const cut = crop === "twoThirds";

  return (
    <div
      className={`relative mx-auto ${cut ? "h-[260px] sm:h-[240px] overflow-hidden" : ""} w-[320px] sm:w-[300px]`}
    >
      <div className={`${cut ? "origin-top scale-[0.9] -translate-y-2" : ""}`}>
        <div className="relative rounded-[2.6rem] p-[12px]
                        bg-[conic-gradient(at_30%_20%,#3b3d42_0deg,#101114_120deg,#1d1f24_240deg,#3b3d42_360deg)]
                        shadow-[0_28px_60px_rgba(0,0,0,0.45)]">
          <div className="relative rounded-[2.2rem] p-[10px] bg-[#0a0a0a]
                          shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05),inset_0_20px_40px_rgba(255,255,255,0.06)]">
            <div className="absolute top-[10px] left-1/2 -translate-x-1/2 h-7 w-32 rounded-[20px] bg-black shadow-[0_0_0_1px_rgba(255,255,255,0.06)]" />
            <div className="absolute top-[18px] left-1/2 -translate-x-1/2 flex items-center gap-3">
              <span className="h-1 w-16 rounded-full bg-zinc-700/80" />
              <span className="h-[7px] w-[7px] rounded-full bg-zinc-900" />
            </div>
            <div className="relative rounded-[1.8rem] overflow-hidden bg-black h-[460px]">
              <div className="relative w-full h-full">{children}</div>
            </div>
            <div className="mt-2 h-1.5 w-24 mx-auto rounded-full bg-zinc-500/55" />
          </div>
        </div>
      </div>
    </div>
  );
};

/* Laptop frame */
const LaptopFrame = ({ children }) => (
  <div className="mx-auto w-full rounded-xl border border-black/15 dark:border-white/10 bg-slate-900/85 p-2 pb-3">
    <div className="rounded-lg overflow-hidden bg-black">{children}</div>
    <div className="mx-auto mt-2 h-1.5 w-24 rounded-full bg-gradient-to-r from-slate-400/50 via-slate-200 to-slate-400/50 dark:from-slate-700 dark:via-slate-500 dark:to-slate-700" />
  </div>
);

function inferDevice(p) {
  const t = (p.title || "").toLowerCase();
  const c = (p.category || "").toLowerCase();
  if (c.includes("mobile") || t.includes("app")) return "phone";
  return "laptop";
}

export default Work;
