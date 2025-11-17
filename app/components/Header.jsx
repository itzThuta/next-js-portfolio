// components/Header.jsx
"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

export default function Header() {
  const snowRef = useRef(null);

  useEffect(() => {
    const canvas = snowRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const { clientWidth = 1, clientHeight = 1 } = canvas;
      canvas.width = clientWidth * DPR;
      canvas.height = clientHeight * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };
    resize();

    const ro =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(resize)
        : null;
    if (ro) {
      ro.observe(canvas);
    } else {
      window.addEventListener("resize", resize);
    }

    const COUNT = 80;
    const flakes = Array.from({ length: COUNT }).map(() => ({
      x: Math.random() * (canvas.clientWidth || 1),
      y: Math.random() * (canvas.clientHeight || 1),
      r: 1 + Math.random() * 2,
      vy: 0.5 + Math.random() * 0.8,
      phase: Math.random() * Math.PI * 2,
    }));

    const isDark = () =>
      document.documentElement.classList.contains("dark") ||
      window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;

    let rafId;
    const draw = () => {
      const w = canvas.clientWidth || 1;
      const h = canvas.clientHeight || 1;
      ctx.clearRect(0, 0, w, h);

      // Flake colors: black/gray in light mode, white in dark mode
      const fillColor = isDark()
        ? "rgba(255,255,255,0.95)" // dark mode
        : "rgba(30,30,30,0.85)"; // light mode
      const strokeColor = isDark()
        ? "rgba(0,0,0,0.15)"
        : "rgba(255,255,255,0.1)";

      ctx.fillStyle = fillColor;
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 0.5;

      for (const f of flakes) {
        f.y += f.vy;
        f.x += Math.cos((f.phase += 0.015)) * 0.3;
        if (f.y > h + 6) f.y = -6;
        if (f.x < -6) f.x = w + 6;
        if (f.x > w + 6) f.x = -6;

        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      }
      rafId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(rafId);
      if (ro) {
        ro.disconnect();
      } else {
        window.removeEventListener("resize", resize);
      }
    };
  }, []);

  const keyframes = `
    @keyframes fadeInUp { 0% {opacity:0; transform: translateY(10px);} 100% {opacity:1; transform: translateY(0);} }
    @keyframes underlineGrow { to { width: 200px; } }
    @media (min-width: 640px) { @keyframes underlineGrow { to { width: 260px; } } }
    @keyframes floaty { 0% {transform: translateY(0);} 50% {transform: translateY(-8px);} 100% {transform: translateY(0);} }
  `;

  return (
    <section className="relative flex min-h-[88vh] items-center justify-center px-5 py-16 sm:px-6 sm:py-20 overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: keyframes }} />

      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#01030a] via-[#020a19] to-[#01030a]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-72 blur-3xl opacity-60 bg-[radial-gradient(circle_at_10%_20%,rgba(14,165,233,0.25),transparent_55%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.25),transparent_45%)]" />

      {/* Snow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <canvas ref={snowRef} className="w-full h-full" />
      </div>

      {/* Content */}
      <div className="w-full max-w-[940px] text-center">
        <div className="absolute left-6 sm:left-16 top-16 sm:top-24 hidden md:flex flex-col gap-3 text-left">
          <div className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur shadow-lg shadow-black/40 animate-[floaty_6s_ease-in-out_infinite]">
            <p className="text-[11px] uppercase tracking-[0.4em] text-slate-300">
              Currently
            </p>
            <p className="text-sm font-semibold text-white">
              Building bespoke Flutter apps
            </p>
          </div>
          <div
            className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur shadow-lg shadow-black/40 animate-[floaty_6s_ease-in-out_infinite]"
            style={{ animationDelay: "0.8s" }}
          >
            <p className="text-[11px] uppercase tracking-[0.35em] text-slate-300">
              Location
            </p>
            <p className="text-sm font-semibold text-white">
              Bangkok · Remote ready
            </p>
          </div>
        </div>

        <div className="relative mx-auto h-28 w-28 sm:h-32 sm:w-32">
          <Image
            src={assets.profile}
            alt="Thu Ta Zaw"
            fill
            className="rounded-full object-cover shadow-xl ring-4 ring-sky-500/30"
            priority
          />
        </div>

        <p className="mt-6 text-[15px] text-slate-300 sm:text-base">
          Hi! I&apos;m Thu Ta Zaw
        </p>

        <h1
          className="mt-2 text-[24px] font-extrabold leading-tight text-transparent opacity-0 sm:text-[34px] sm:leading-tight
                     bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text"
          style={{ animation: "fadeInUp 600ms ease-out forwards" }}
        >
          Junior UI/UX Designer & Web/Flutter Developer
        </h1>

        <span
          className="mt-2 inline-block h-[3px] w-0 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full"
          style={{ animation: "underlineGrow 800ms 200ms ease-out forwards" }}
        />

        <p className="mt-5 mx-auto max-w-2xl text-[15px] text-slate-300 sm:text-base">
          I design and build clean, human-friendly interfaces and modern apps.
          Based in Bangkok • 1.5 years experience • open to remote roles.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-3 text-left sm:grid-cols-3">
          {[
            { label: "Projects", value: "15+", detail: "Web & mobile builds shipped" },
            { label: "Stack", value: "Flutter · MERN", detail: "Full-cycle product delivery" },
            { label: "Focus", value: "UI/UX + Dev", detail: "Pixel detail meets code" },
          ].map((stat, idx) => (
            <div
              key={stat.label}
              className="flex flex-col gap-1 rounded-3xl border border-white/10 bg-white/5 px-5 py-4 opacity-0 shadow-lg shadow-black/40 backdrop-blur animate-[fadeInUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
            >
              <p className="text-[11px] uppercase tracking-[0.35em] text-slate-300">
                {stat.label}
              </p>
              <p className="text-2xl font-semibold text-white">{stat.value}</p>
              <p className="text-sm text-slate-300">{stat.detail}</p>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div
          className="mt-7 flex flex-col sm:flex-row justify-center items-center gap-2.5 sm:gap-3"
          style={{ animation: "fadeInUp 560ms 260ms ease-out both" }}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2
                       w-[200px] sm:w-auto
                       rounded-full px-4 py-2 text-sm sm:text-[15px]
                       font-semibold text-white bg-sky-600 hover:bg-sky-700
                       active:scale-[0.99] transition
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60"
          >
            Contact Me
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 -mr-0.5"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 12h14m0 0-5-5m5 5-5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <a
            href="/thuta-fullstack.pdf"
            target="_blank"
            className="inline-flex items-center justify-center gap-2
                       w-[200px] sm:w-auto
                       rounded-full px-4 py-2 text-sm sm:text-[15px]
                       font-semibold border border-white/20
                       text-slate-200
                       bg-transparent
                       hover:bg-white/10
                       active:scale-[0.99] transition
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60"
          >
            CV Resume
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 3v12m0 0l4-4m-4 4-4-4M5 21h14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
        <div className="mt-10 flex justify-center">
          <div className="flex items-center gap-3 rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-500 animate-ping" />
            Scroll
          </div>
        </div>
      </div>
    </section>
  );
}
