"use client";

import { workData, projectsData } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Work() {
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
  const modalCategories = Array.from(new Set(projectsData.map((p) => p.category).filter(Boolean)));

  return (
    <section
      id="work"
      className="relative w-full px-[6%] py-24 scroll-mt-20 flex flex-col items-center text-center overflow-hidden"
    >
      {/* background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#010208] via-[#040a19] to-[#010208]" />
      <div className="absolute inset-0 -z-10 blur-3xl opacity-60 bg-[radial-gradient(circle_at_0%_0%,rgba(14,165,233,0.22),transparent_55%),radial-gradient(circle_at_100%_0%,rgba(79,70,229,0.25),transparent_50%)]" />

      {/* heading */}
      <h4 className="text-sm font-semibold uppercase tracking-widest text-sky-300">
        Portfolio
      </h4>
      <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
        My Latest Projects
      </h2>
      <p className="mt-6 max-w-2xl leading-relaxed text-slate-300">
        A showcase of apps and websites built for{" "}
        <span className="font-medium text-sky-300">usability</span> and{" "}
        <span className="font-medium text-indigo-300">performance</span>.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        {modalCategories.map((category) => (
          <button
            key={category}
            onClick={() => openModal(category)}
            className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-sky-400/70 hover:text-sky-300"
          >
            {category}
          </button>
        ))}
      </div>

      {/* trigger cards */}
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {workData.map((p, i) => (
          <button
            key={i}
            onClick={() => openModal(p.category || p.description)}
            className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] text-left shadow-2xl shadow-black/40 transition-all hover:-translate-y-1.5"
          >
            <div className="relative h-48 w-full sm:h-44">
              <Image
                src={p.bgImage}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">{p.description}</p>
              <h3 className="mt-2 text-xl font-bold text-white">{p.title}</h3>
              <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-sky-300">
                View collection
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14m0 0-5-5m5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
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
            <div className="flex w-full max-w-6xl max-h-[92vh] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#050b16] shadow-2xl shadow-black/70">
              {/* header */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-8">
                <div className="text-left">
                  <p className="text-[11px] tracking-[0.18em] text-sky-300">
                    SHOWCASE
                  </p>
                  <h3 className="mt-1 text-xl font-extrabold text-white sm:text-3xl">
                    {activeCategory || "Projects"}
                  </h3>
                  {modalCategories.length > 1 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {modalCategories.map((category) => {
                        const isActive = activeCategory?.toLowerCase() === category?.toLowerCase();
                        return (
                          <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-1.5 text-xs font-semibold rounded-full border transition ${
                              isActive
                                ? "border-sky-500 bg-sky-500 text-white"
                                : "border-white/15 text-slate-300 hover:border-sky-400/80"
                            }`}
                          >
                            {category}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
                <button
                  onClick={closeModal}
                  className="rounded-full p-2 text-slate-300 transition hover:bg-white/10"
                >
                  ✕
                </button>
              </div>

              {/* body */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredProjects.length > 0 ? (
                    filteredProjects.map((p, i) => (
                      <ProjectCard key={`overlay-${i}`} project={p} />
                    ))
                  ) : (
                    <p className="col-span-full text-center text-slate-400">
                      No projects found.
                    </p>
                  )}
                </div>
              </div>

              {/* footer */}
              <div className="border-t border-white/10 px-5 py-4 text-center sm:px-8">
                <button
                  onClick={closeModal}
                  className="inline-flex items-center gap-2 rounded-full px-6 py-2 text-sm font-medium text-slate-200 transition hover:text-sky-300"
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
}

/* ------------------------- Project Card ------------------------- */
const ProjectCard = ({ project }) => {
  const device = project.device || inferDevice(project);
  const hasLiveDemo = project.liveUrl && project.liveUrl !== "#";

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#050a19] shadow-lg shadow-black/40 transition hover:-translate-y-1">
      {/* Framed preview */}
      <div className="p-4 pb-0">
        {device === "phone" ? (
          <IPhoneHero size="compact">
            <Thumb src={project.bgImage} alt={project.title} device="phone" />
          </IPhoneHero>
        ) : (
          <LaptopFrame>
            <Thumb src={project.bgImage} alt={project.title} device="desktop" />
          </LaptopFrame>
        )}
      </div>

      {/* Content */}
      <div className="p-4 pt-3 flex-1 flex flex-col text-left">
        <h4 className="text-base font-semibold text-white sm:text-lg">
          {project.title}
        </h4>
        <p className="mt-2 flex-1 text-sm text-slate-300 line-clamp-4">
          {project.fullDescription}
        </p>

        {/* Tech chips */}
        {project.tech && (
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-200"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          {hasLiveDemo ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center text-sm font-medium text-white transition sm:flex-1 rounded-full bg-sky-600 px-4 py-2 hover:bg-sky-500"
            >
              Live Demo
            </a>
          ) : (
            <span
              className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-2 text-center text-sm font-semibold text-slate-400 sm:flex-1"
            >
              Preview Only
            </span>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full px-4 py-2 text-center text-sm font-medium text-sky-300 ring-1 ring-sky-500/50 transition hover:bg-sky-500/10 sm:flex-1"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

/* ------------------------- Frames & Thumb ------------------------- */
const Thumb = ({ src, alt, device }) => {
  const baseClass =
    device === "phone"
      ? "h-full rounded-[1.4rem]"
      : "h-56 xs:h-60 sm:h-48 rounded-[1.4rem]";

  return (
    <div className={`relative w-full overflow-hidden ${baseClass}`}>
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
};

/* iPhone Hero frame */
const IPhoneHero = ({ children, crop, size = "default" }) => {
  const cut = crop === "twoThirds";
  const sizeClass = size === "compact" ? "w-[210px]" : "w-[320px] sm:w-[300px]";
  const heightClass = size === "compact" ? "h-[360px]" : "h-[460px]";
  const shellPad = size === "compact" ? "p-[8px]" : "p-[12px]";
  const innerPad = size === "compact" ? "p-[6px]" : "p-[10px]";
  const notchShell = size === "compact" ? "h-5 w-24" : "h-7 w-32";
  const speakerBar = size === "compact" ? "h-0.5 w-12" : "h-1 w-16";
  const cameraDot = size === "compact" ? "h-[5px] w-[5px]" : "h-[7px] w-[7px]";
  const bezelRadius = size === "compact" ? "rounded-[2.2rem]" : "rounded-[2.6rem]";
  const innerRadius = size === "compact" ? "rounded-[1.7rem]" : "rounded-[1.8rem]";

  return (
    <div
      className={`relative mx-auto ${
        cut ? "h-[260px] sm:h-[240px] overflow-hidden" : ""
      } ${sizeClass}`}
    >
      <div className={`${cut ? "origin-top scale-[0.9] -translate-y-2" : ""}`}>
        <div
          className={`relative ${bezelRadius} ${shellPad}
                        bg-[conic-gradient(at_30%_20%,#3b3d42_0deg,#101114_120deg,#1d1f24_240deg,#3b3d42_360deg)]
                        shadow-[0_24px_45px_rgba(0,0,0,0.4)]`}
        >
          <div
            className={`relative ${innerRadius} ${innerPad} bg-[#0a0a0a]
                          shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05),inset_0_20px_40px_rgba(255,255,255,0.06)]`}
          >
            <div
              className={`absolute top-[10px] left-1/2 -translate-x-1/2 ${notchShell} rounded-[20px] bg-black shadow-[0_0_0_1px_rgba(255,255,255,0.06)]`}
            />
            <div className="absolute top-[18px] left-1/2 -translate-x-1/2 flex items-center gap-3">
              <span className={`${speakerBar} rounded-full bg-zinc-700/80`} />
              <span className={`${cameraDot} rounded-full bg-zinc-900`} />
            </div>
            <div className={`relative ${innerRadius} overflow-hidden bg-black ${heightClass}`}>
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
  <div className="mx-auto w-full rounded-xl border border-white/10 bg-slate-900/80 p-2 pb-3">
    <div className="overflow-hidden rounded-lg bg-black">{children}</div>
    <div className="mx-auto mt-2 h-1.5 w-24 rounded-full bg-gradient-to-r from-slate-800/60 via-slate-600/60 to-slate-800/60" />
  </div>
);

function inferDevice(p) {
  const t = (p.title || "").toLowerCase();
  const c = (p.category || "").toLowerCase();
  if (c.includes("mobile") || t.includes("app")) return "phone";
  return "laptop";
}
