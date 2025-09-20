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
      className="relative w-full px-[8%] py-20 scroll-mt-20 flex flex-col items-center text-center"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 via-white to-sky-50 dark:from-[#0b1220] dark:via-[#0b1220] dark:to-[#0b1220]" />

      {/* Heading */}
      <h4 className="text-sm uppercase tracking-widest text-sky-500 dark:text-sky-400 font-semibold">
        Contact
      </h4>
      <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
        Get in Touch
      </h2>
      <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300 text-base leading-relaxed">
        Have a project or an idea? Let’s talk.  
        I’m always open to{" "}
        <span className="text-sky-600 dark:text-sky-400 font-medium">
          new opportunities
        </span>{" "}
        and creative collaborations.
      </p>

      {/* Form */}
      <form
        onSubmit={onSubmit}
        className="mt-10 w-full max-w-2xl text-left space-y-6"
      >
        <div className="grid sm:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3 text-base text-slate-800 dark:text-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3 text-base text-slate-800 dark:text-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
          />
        </div>

        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="6"
          className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3 text-base text-slate-800 dark:text-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition resize-none"
        ></textarea>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="group flex items-center gap-2 rounded-full px-8 py-3 text-base font-semibold text-white bg-sky-600 hover:bg-sky-700 active:scale-[0.98] transition shadow-md"
          >
            Send Message
            <Image
              src={assets.right_arrow_white}
              alt="arrow"
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>

        {/* Result message */}
        {result && (
          <p className="mt-4 text-center text-sm text-slate-700 dark:text-slate-300">
            {result}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
