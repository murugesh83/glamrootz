import Link from "next/link";

const socialLinks = [
  { href: "https://www.instagram.com/glamrootz.signature", label: "Instagram" },
  { href: "https://www.facebook.com/glamrootz.signature", label: "Facebook" },
  { href: "https://www.youtube.com/@glamrootzsignature", label: "YouTube" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black-light border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold tracking-wider text-gradient-gold">
              GLAMROOTZ
            </h3>
            <p className="font-script text-gold-light text-lg">Signature</p>
            <p className="text-white-dim text-sm mt-4 leading-relaxed">
              Premium unisex salon delivering luxury grooming experiences since 2020.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-semibold tracking-wider uppercase text-sm mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Gallery", "Booking", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="text-white-dim text-sm hover:text-gold transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gold font-semibold tracking-wider uppercase text-sm mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Haircuts & Styling",
                "Hair Coloring",
                "Skin & Facial",
                "Beard Grooming",
                "Bridal Packages",
                "Spa & Wellness",
              ].map((item) => (
                <li key={item}>
                  <span className="text-white-dim text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-gold font-semibold tracking-wider uppercase text-sm mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-white-dim text-sm">
              <li className="flex items-start gap-2">
                <span className="text-gold mt-0.5">&#9906;</span>
                <span>123 Luxury Lane, Fashion District,<br />Mumbai 400001</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold">&#9742;</span>
                <a href="tel:+919876543210" className="hover:text-gold transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold">&#9993;</span>
                <a href="mailto:hello@glamrootz.com" className="hover:text-gold transition-colors">
                  hello@glamrootz.com
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white-dim hover:text-gold text-xs uppercase tracking-wider transition-colors"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white-dim text-xs">
            &copy; {year} Glamrootz Signature. All rights reserved.
          </p>
          <p className="text-white-dim text-xs">
            Crafted with passion for beauty
          </p>
        </div>
      </div>
    </footer>
  );
}
