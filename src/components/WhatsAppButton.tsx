"use client";

import { headerSocialLinks, socialLinks } from "@/components/socialLinks";

export default function WhatsAppButton() {
  return (
    <>
      <div className="fixed left-0 top-1/2 z-40 hidden -translate-y-1/2 lg:flex lg:flex-col lg:items-start">
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            title={link.label}
            className={`group flex h-14 items-center overflow-hidden text-white shadow-[0_12px_30px_rgba(0,0,0,0.28)] transition-all duration-300 first:rounded-tr-2xl last:rounded-br-2xl hover:w-40 hover:shadow-[0_16px_36px_rgba(0,0,0,0.35)] ${
              link.id === "whatsapp" ? "w-40" : "w-14"
            } ${link.railClassName}`}
            style={link.railStyle}
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center border-r border-white/10">
              {link.renderIcon("h-5 w-5")}
            </span>
            <span
              className={`pr-5 text-lg font-medium tracking-wide transition-opacity duration-200 ${
                link.id === "whatsapp" ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            >
              {link.label}
            </span>
          </a>
        ))}
      </div>

      <div className="fixed inset-x-4 bottom-4 z-40 lg:hidden">
        <div className="mx-auto flex max-w-max items-center gap-2 rounded-full border border-gold/15 bg-black/88 px-3 py-2 shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur-md">
          {headerSocialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/20 bg-gold/10 text-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold hover:text-black"
            >
              {link.renderIcon("h-4 w-4")}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
