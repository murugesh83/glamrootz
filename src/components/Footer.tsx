import Link from "next/link";

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
            <div className="mt-5 flex gap-4">
              {["Instagram", "Facebook", "YouTube"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-xs uppercase tracking-wider text-white-dim/40 transition-colors hover:text-gold"
                >
                  {s}
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
