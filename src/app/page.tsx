import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Precision Cuts",
    description:
      "Sharp fades, sculpted layers, and signature finishing designed around your face shape.",
    tag: "FROM \u20b9500 \u00b7 30 MIN",
    image:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80",
  },
  {
    title: "Color Artistry",
    description:
      "Dimensional balayage, glossing, and fashion tones with a healthy-hair-first approach.",
    tag: "CONSULTATION INCLUDED",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
  },
  {
    title: "Skin Rituals",
    description:
      "Targeted facials and de-tan treatments that bring back clarity, lift, and glow.",
    tag: "LUXURY CARE",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
  },
  {
    title: "Bridal Styling",
    description:
      "Makeup, hair, and pre-event prep curated for brides, grooms, and celebration parties.",
    tag: "CUSTOM PACKAGES",
    image:
      "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=600&q=80",
  },
];

const stats = [
  { value: "5+", label: "Years Refining Looks" },
  { value: "30+", label: "Luxury Services" },
  { value: "7 Days", label: "Open Every Week" },
  { value: "4.9/5", label: "Guest Rating" },
];

const testimonials = [
  {
    name: "Rhea S.",
    quote:
      "They elevated my look without overdoing it. Effortless and polished.",
  },
  {
    name: "Aman V.",
    quote:
      "Consistent cuts, clean detailing, and a space that feels premium.",
  },
  {
    name: "Neha & Family",
    quote:
      "Bridal and grooming booked together \u2014 planning was seamless.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-black">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2 lg:min-h-[85vh]">
          {/* Left: Text */}
          <div className="relative z-10 flex flex-col justify-center px-6 py-24 md:px-12 lg:py-32 lg:pr-16">
            <p className="mb-5 text-xs uppercase tracking-[0.5em] text-gold/80">
              Premium Unisex Salon
            </p>

            <h1 className="max-w-lg text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              Signature salon care for everyday confidence
              <span className="text-gradient-gold"> and standout occasions.</span>
            </h1>

            <p className="mt-6 max-w-md text-base leading-relaxed text-white-dim/70">
              Glamrootz Signature blends modern precision with a rich, editorial
              aesthetic. From sharp grooming to bridal transformations, each
              appointment is designed to feel elevated from consultation to final
              reveal.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/booking"
                className="rounded-sm bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]"
              >
                Book Appointment
              </Link>
              <Link
                href="/services"
                className="rounded-sm border border-gold/30 px-8 py-4 text-sm uppercase tracking-[0.2em] text-gold transition-all duration-300 hover:border-gold hover:bg-gold/5"
              >
                Explore Services
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-semibold text-gradient-gold md:text-3xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-white-dim/50">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="relative hidden lg:block">
            <Image
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=900&q=80"
              alt="Luxury salon interior"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />

            {/* Floating info cards */}
            <div className="absolute right-8 top-1/4 w-64 space-y-4">
              <div className="rounded-sm border border-gold/20 bg-black/80 p-5 backdrop-blur-md">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold">
                  This Week
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  The signature chair experience
                </p>
                <p className="mt-2 text-xs leading-relaxed text-white-dim/60">
                  Hair contouring, bridal previews, and premium skin rituals.
                </p>
              </div>
              <div className="rounded-sm border border-gold/20 bg-black/80 p-4 backdrop-blur-md">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold">
                  Walk-In Friendly
                </p>
                <p className="mt-1 text-xs leading-relaxed text-white-dim/60">
                  Appointments preferred for color, spa, and event styling.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile hero image */}
        <div className="relative h-72 lg:hidden">
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=900&q=80"
            alt="Luxury salon interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      <section className="border-y border-gold/10 bg-black-light px-6 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8">
          <span className="text-gold text-xs">&#10022;</span>
          <p className="text-sm text-white-dim/60">
            Private consultations before every transformation.
          </p>
          <span className="hidden text-gold/30 sm:block">&bull;</span>
          <p className="text-sm text-white-dim/60">
            Premium products selected for texture, color retention, and scalp
            health.
          </p>
          <span className="hidden text-gold/30 sm:block">&bull;</span>
          <p className="text-sm text-white-dim/60">
            A unisex salon floor designed for comfort, calm, and precision
            service.
          </p>
        </div>
      </section>

      {/* ── SIGNATURE SERVICES ── */}
      <section className="bg-black px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-gold/80">
                Signature Menu
              </p>
              <h2 className="mt-3 max-w-md text-3xl font-semibold text-white md:text-4xl">
                Crafted services, not rushed routines
              </h2>
            </div>
            <Link
              href="/services"
              className="hidden text-xs uppercase tracking-[0.2em] text-white-dim/60 transition-colors hover:text-gold sm:block"
            >
              View Full Service List &rarr;
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <article
                key={s.title}
                className="group overflow-hidden rounded-sm border border-gold/8 bg-black-light transition-all duration-300 hover:-translate-y-1 hover:border-gold/25"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black-light to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white group-hover:text-gold-light transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white-dim/60">
                    {s.description}
                  </p>
                  <p className="mt-4 border-t border-gold/8 pt-3 text-[10px] uppercase tracking-[0.2em] text-gold/70">
                    {s.tag}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY GUESTS RETURN ── */}
      <section className="bg-black-light px-6 py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80"
              alt="Stylist at work"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black-light/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-xs uppercase tracking-[0.3em] text-gold">
                Since 2020
              </p>
              <p className="mt-1 text-lg font-semibold text-white">
                The experience that defines us
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gold/80">
              Why Guests Return
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              Every visit starts with listening.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white-dim/70">
              We shape each service around your routine, features, and desired
              finish. No assembly-line cuts, no cookie-cutter treatments.
            </p>

            <div className="mt-10 space-y-6">
              {[
                {
                  n: "01",
                  title: "Consult",
                  text: "We align on goals before any treatment begins.",
                },
                {
                  n: "02",
                  title: "Craft",
                  text: "Products and techniques chosen for lasting results.",
                },
                {
                  n: "03",
                  title: "Finish",
                  text: "Styled to look photo-ready when you leave the chair.",
                },
              ].map((item) => (
                <div key={item.n} className="flex gap-5">
                  <p className="text-2xl font-semibold text-gold/25">
                    {item.n}
                  </p>
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-white-dim/60">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="mt-10 inline-block text-sm uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-light"
            >
              Learn more about us &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── GALLERY STRIP ── */}
      <section className="bg-black px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-gold/80">
                Our Work
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                Recent Transformations
              </h2>
            </div>
            <Link
              href="/gallery"
              className="hidden text-xs uppercase tracking-[0.2em] text-white-dim/60 transition-colors hover:text-gold sm:block"
            >
              View Gallery &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              {
                src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=500&q=80",
                label: "Men's Fade",
              },
              {
                src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=500&q=80",
                label: "Balayage",
              },
              {
                src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=500&q=80",
                label: "Bridal Look",
              },
              {
                src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=500&q=80",
                label: "Beard Styling",
              },
            ].map((img) => (
              <div
                key={img.label}
                className="group relative aspect-square overflow-hidden rounded-sm"
              >
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <p className="absolute bottom-4 left-4 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {img.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-black-light px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-gold/80">
              Guest Notes
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              What our guests say
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="rounded-sm border border-gold/8 bg-black p-8"
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-gold text-sm">
                      &#9733;
                    </span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-white-dim/70 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-gold/80">
                  {t.name}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-black px-6 py-24 lg:py-32">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=1200&q=70"
            alt="Salon ambiance"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-white md:text-5xl">
            Ready for a <span className="text-gradient-gold">transformation</span>?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base text-white-dim/70">
            Book your appointment today and experience the Glamrootz Signature
            difference.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/booking"
              className="rounded-sm bg-gold px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-gold-light"
            >
              Book Now
            </Link>
            <a
              href="tel:+919876543210"
              className="rounded-sm border border-gold/30 px-10 py-4 text-sm uppercase tracking-[0.2em] text-gold transition-all duration-300 hover:border-gold hover:bg-gold/5"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
