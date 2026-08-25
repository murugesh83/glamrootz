"use client";

import Link from "next/link";
import Image from "next/image";
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-pink/20">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-12 w-32 md:h-14 md:w-36">
            <Image
              src="/logo-dark.jpg"
              alt="Glamrootz Signature Unisex Salon"
              fill
              className="object-contain hover:opacity-90 transition-opacity"
              priority
            />
          </div>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {/* Desktop Nav */}
          <nav className="flex items-center gap-8">
            {navLinks.map((link) =>
              link.label === "Book Now" ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-sm bg-pink px-6 py-2 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-pink-light"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm uppercase tracking-wider text-white-dim transition-colors duration-300 hover:text-pink"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden items-center gap-2 border-l border-pink/10 pl-6 xl:flex">
            {headerSocialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-pink/20 bg-pink/10 text-pink transition-all duration-300 hover:-translate-y-0.5 hover:bg-pink hover:text-white"
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
            className={`w-6 h-0.5 bg-pink transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-pink transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-pink transition-all duration-300 ${
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
                  ? "px-6 py-2 bg-pink text-white font-semibold rounded-sm"
                  : "text-white-dim hover:text-pink"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-2 flex items-center gap-3 border-t border-pink/10 pt-4">
            {headerSocialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-pink/20 bg-pink/10 text-pink transition-all duration-300 hover:bg-pink hover:text-white"
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
