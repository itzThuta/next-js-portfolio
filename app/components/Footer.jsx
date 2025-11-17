import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const socials = [
  { label: "GitHub", href: "https://github.com/itzThuta/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/thu-ta-zaw-ab788a34a/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden px-[8%] py-16 text-sm">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[#050b16] to-[#010207]" />
      <div className="absolute inset-0 -z-10 blur-3xl opacity-60 bg-[radial-gradient(circle_at_0%_0%,rgba(14,165,233,0.2),transparent_55%),radial-gradient(circle_at_100%_0%,rgba(79,70,229,0.25),transparent_45%)]" />

      <div className="mx-auto flex max-w-6xl flex-col gap-10 rounded-[36px] border border-white/10 bg-white/5 px-8 py-10 backdrop-blur-xl shadow-2xl shadow-black/50">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:items-start">
          <div className="text-center text-slate-200 lg:text-left">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
              Thu Ta Zaw
            </p>
            <h3 className="mt-2 text-3xl font-semibold text-white">
              Product engineer crafting calm software.
            </h3>
            <a
              href="mailto:kuku.zayn@gmail.com"
              className="mt-4 inline-flex items-center gap-2 text-base font-medium text-slate-200"
            >
              <Image src={assets.mail_icon_dark} alt="mail" className="w-4" />
              kuku.zayn@gmail.com
            </a>
          </div>

          <div className="flex flex-col gap-4 text-center text-slate-200 lg:text-right">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
              Navigate
            </p>
            <div className="flex flex-wrap justify-center gap-3 lg:justify-end">
              {["Home", "About", "Services", "Projects", "Contact"].map((link) => (
                <a
                  key={link}
                  href={link === "Home" ? "#top" : `#${link.toLowerCase()}`}
                  className="rounded-full border border-white/10 px-4 py-2 text-slate-200 transition hover:-translate-y-1"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 text-slate-300 lg:flex-row">
          <div className="flex items-center gap-6">
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                className="text-base font-semibold text-slate-300 transition hover:text-sky-400"
              >
                {item.label}
              </a>
            ))}
          </div>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Thu Ta Zaw. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
