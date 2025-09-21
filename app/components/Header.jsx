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
      const w = canvas.clientWidth || 1;
      const h = canvas.clientHeight || 1;
      canvas.width = w * DPR;
      canvas.height = h * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const COUNT = 60;
    const flakes = Array.from({ length: COUNT }).map(() => ({
      x: Math.random() * (canvas.clientWidth || 1),
      y: Math.random() * (canvas.clientHeight || 1),
      r: 1 + Math.random() * 2,
      vy: 0.6 + Math.random() * 0.8,
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
        : "rgba(30,30,30,0.85)";   // light mode
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
      ro.disconnect();
    };
  }, []);

  const keyframes = `
    @keyframes fadeInUp { 0% {opacity:0; transform: translateY(10px);} 100% {opacity:1; transform: translateY(0);} }
    @keyframes underlineGrow { to { width: 200px; } }
    @media (min-width: 640px) { @keyframes underlineGrow { to { width: 260px; } } }
  `;

  return (
    <section className="relative min-h-[88vh] flex items-center justify-center px-5 sm:px-6 py-14 sm:py-16 overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: keyframes }} />

      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-sky-50 via-white to-sky-50 dark:from-[#0b1220] dark:via-[#0b1220] dark:to-[#0b1220]" />

      {/* Snow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <canvas ref={snowRef} className="w-full h-full" />
      </div>

      {/* Content */}
      <div className="w-full max-w-[940px] text-center">
        <div className="relative mx-auto w-24 h-24 sm:w-32 sm:h-32">
          <Image
            src={assets.profile}
            alt="Thu Ta Zaw"
            fill
            className="rounded-full shadow-xl ring-4 ring-sky-200/70 dark:ring-sky-600/40 object-cover"
            priority
          />
        </div>

        <p className="mt-6 text-[15px] sm:text-base text-slate-600 dark:text-slate-300">
          Hi! I&apos;m Thu Ta Zaw
        </p>

        <h1
          className="mt-2 text-[24px] leading-tight sm:text-[34px] sm:leading-tight font-extrabold
                     bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 dark:from-sky-400 dark:via-blue-400 dark:to-indigo-400
                     bg-clip-text text-transparent opacity-0"
          style={{ animation: "fadeInUp 600ms ease-out forwards" }}
        >
          Junior UI/UX Designer & Web/Flutter Developer
        </h1>

        <span
          className="mt-2 inline-block h-[3px] w-0 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full"
          style={{ animation: "underlineGrow 800ms 200ms ease-out forwards" }}
        />

        <p className="mt-5 max-w-2xl mx-auto text-[15px] sm:text-base text-slate-600 dark:text-slate-300">
          I design and build clean, human-friendly interfaces and modern apps.
          Based in Bangkok • 1.5 years experience • open to remote roles.
        </p>

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
                       font-semibold border border-slate-300 dark:border-slate-600
                       text-slate-800 dark:text-slate-200
                       bg-white/85 dark:bg-slate-800/60
                       hover:bg-white dark:hover:bg-slate-800
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
      </div>
    </section>
  );
}
