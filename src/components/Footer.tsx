import Link from "next/link";
import { socialLinks } from "@/components/socialLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold/10 bg-black">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold tracking-wider text-gradient-gold">
              GLAMROOTZ
            </h3>
            <p className="font-script text-gold-light text-sm">Signature</p>
            <p className="mt-3 text-sm leading-relaxed text-white-dim/60">
              Premium unisex salon — luxury grooming since 2020.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold/80 mb-4">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              {["Home", "About", "Services", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-sm text-white-dim/60 transition-colors hover:text-gold"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold/80 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {[
                "Haircuts & Styling",
                "Hair Coloring",
                "Skin & Facial",
                "Bridal Packages",
                "Spa & Wellness",
              ].map((item) => (
                <li key={item}>
                  <span className="text-sm text-white-dim/60">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold/80 mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-white-dim/60">
              <li>123 Luxury Lane, Mumbai 400001</li>
              <li>
                <a href="tel:+919876543210" className="transition-colors hover:text-gold">
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a href="mailto:hello@glamrootz.com" className="transition-colors hover:text-gold">
                  hello@glamrootz.com
                </a>
              </li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/20 bg-gold/10 text-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold hover:text-black"
                >
                  {link.renderIcon("h-4 w-4")}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gold/8 pt-6 text-center">
          <p className="text-xs text-white-dim/40">
            &copy; {year} Glamrootz Signature. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
