"use client";

import Link from "next/link";
import { useState } from "react";
import { headerSocialLinks } from "@/components/socialLinks";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/booking", label: "Book Now" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-start gap-0.5">
          <span className="font-display text-2xl font-bold tracking-widest text-gradient-gold leading-none pb-0.5">
            GLAMROOTZ
          </span>
          <span className="font-script text-gold-light text-base leading-none pl-0.5">
            Signature
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {/* Desktop Nav */}
          <nav className="flex items-center gap-8">
            {navLinks.map((link) =>
              link.label === "Book Now" ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-sm bg-gold px-6 py-2 text-sm font-semibold uppercase tracking-wider text-black transition-all duration-300 hover:bg-gold-light"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm uppercase tracking-wider text-white-dim transition-colors duration-300 hover:text-gold"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden items-center gap-2 border-l border-gold/10 pl-6 xl:flex">
            {headerSocialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/20 bg-gold/10 text-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold hover:text-black"
            >
              {link.renderIcon("h-4 w-4")}
            </a>
          ))}
        </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-gold transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-gold transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-gold transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-4 pb-6 bg-black/95">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-sm tracking-wider uppercase transition-colors duration-300 ${
                link.label === "Book Now"
                  ? "px-6 py-2 bg-gold text-black font-semibold rounded-sm"
                  : "text-white-dim hover:text-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-2 flex items-center gap-3 border-t border-gold/10 pt-4">
            {headerSocialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/20 bg-gold/10 text-gold transition-all duration-300 hover:bg-gold hover:text-black"
              >
                {link.renderIcon("h-4 w-4")}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
