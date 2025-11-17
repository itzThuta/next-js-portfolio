"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "592a7721-5b01-45ef-9905-5d80751ce347");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("✅ Message Sent Successfully!");
      event.target.reset();
    } else {
      setResult("❌ Something went wrong. Try again.");
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full px-[8%] py-24 scroll-mt-20 flex flex-col items-center text-center"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#01030a] via-[#030a18] to-[#02020a]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-72 blur-3xl opacity-60 bg-[radial-gradient(circle_at_10%_20%,rgba(14,165,233,0.35),transparent_55%),radial-gradient(circle_at_90%_0%,rgba(37,99,235,0.35),transparent_45%)]" />

      <h4 className="text-sm font-semibold uppercase tracking-[0.5em] text-sky-300">
        Contact
      </h4>
      <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
        Let’s build something calm
      </h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate-300">
        I reply within 24 hours. Tell me about your product, your constraints, and the outcome you&apos;re targeting.
      </p>

      <div className="mt-12 grid w-full max-w-6xl gap-8 text-left lg:grid-cols-[0.8fr_1fr]">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/40 backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-300">
            Availability
          </p>
          <p className="mt-2 text-2xl font-semibold text-white">
            Open for freelance & full-time remote roles.
          </p>
          <div className="mt-6 space-y-5 text-slate-300">
            {[
              { label: "Email", value: "kuku.zayn@gmail.com" },
              { label: "WhatsApp", value: "+66 800 389 360" },
              { label: "Location", value: "Bangkok · UTC+7" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
                  {item.label}
                </p>
                <p className="text-base font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex gap-4">
            {["GitHub", "LinkedIn", "Instagram"].map((net) => (
              <a
                key={net}
                href={
                  net === "GitHub"
                    ? "https://github.com/itzThuta/"
                    : net === "LinkedIn"
                    ? "https://www.linkedin.com/in/thu-ta-zaw-ab788a34a/"
                    : "https://www.instagram.com/"
                }
                target="_blank"
                className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-semibold text-slate-200 transition hover:-translate-y-1"
              >
                {net}
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="space-y-6 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/40 backdrop-blur-xl"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="text-sm font-semibold text-slate-300">
              Name
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="mt-2 w-full rounded-2xl border border-white/10 bg-[#050b16] px-4 py-3 text-base text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/60"
              />
            </label>
            <label className="text-sm font-semibold text-slate-300">
              Email
              <input
                type="email"
                name="email"
                placeholder="hello@email.com"
                required
                className="mt-2 w-full rounded-2xl border border-white/10 bg-[#050b16] px-4 py-3 text-base text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/60"
              />
            </label>
          </div>
          <label className="block text-sm font-semibold text-slate-300">
            How can I help you?
            <textarea
              name="message"
              placeholder="Describe your project, timeline, and goals."
              required
              rows="6"
              className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-[#050b16] px-4 py-3 text-base text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/60"
            />
          </label>

          <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <p className="text-sm text-slate-400">
              I usually respond within 1 business day.
            </p>
            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:-translate-y-0.5 sm:w-auto"
            >
              Send message
              <Image
                src={assets.right_arrow_white}
                alt="arrow"
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>

          {result && (
            <p className="text-sm font-medium text-slate-300">{result}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
