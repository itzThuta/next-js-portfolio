import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <section
      id="services"
      className="relative w-full px-[8%] py-24 scroll-mt-20 flex flex-col items-center text-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#010208] via-[#050b16] to-[#020711]" />
      <div className="absolute inset-0 -z-10 opacity-60 blur-3xl bg-[radial-gradient(circle_at_10%_20%,rgba(14,165,233,0.22),transparent_55%),radial-gradient(circle_at_90%_10%,rgba(56,189,248,0.25),transparent_50%)]" />

      <p className="text-sm uppercase tracking-[0.5em] text-slate-400">
        What I do
      </p>
      <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
        Product-focused services
      </h2>
      <p className="mt-6 max-w-3xl leading-relaxed text-slate-300">
        From research to release, I help teams design performant interfaces, build resilient Flutter apps,
        and craft backend systems that scale with the product roadmap.
      </p>

      <div className="mt-14 grid w-full max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <article
            key={index}
            className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-8 text-left shadow-2xl shadow-black/40 backdrop-blur-xl transition hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-indigo-500/10 opacity-0 transition group-hover:opacity-100" />
            <div className="relative flex flex-col gap-4">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-sky-900/40 to-blue-900/10 shadow-inner shadow-white/10">
                <Image src={icon} alt={title} className="w-7 h-7" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  {title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-300">
                {description}
              </p>
              <a
                href={link}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-300"
              >
                Read more
                <Image src={assets.right_arrow} alt="arrow" className="w-4 h-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
