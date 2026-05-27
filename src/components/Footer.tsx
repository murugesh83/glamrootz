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
              Premium unisex salon — luxury grooming since 2018.
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
              <li>Maxworth Nagar, NO.1&2, Lavender St, VGN Blooming Garden, Kolapakkam, Chennai 600125</li>
              <li>
                <div className="flex flex-col gap-1">
                  <a href="tel:+919500569095" className="transition-colors hover:text-gold">
                    +91 95005 69095 (Mobile)
                  </a>
                  <a href="tel:04448577888" className="transition-colors hover:text-gold">
                    044-48577888 (Landline)
                  </a>
                </div>
              </li>
              <li>
                <a href="mailto:glamrootsalon@gmail.com" className="transition-colors hover:text-gold">
                  glamrootsalon@gmail.com
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
