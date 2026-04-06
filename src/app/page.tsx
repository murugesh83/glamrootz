import Link from "next/link";

const services = [
  {
    title: "Precision Cuts",
    description: "Fades, layers, and sculpted finishing tailored to your face.",
    tag: "From ₹500",
  },
  {
    title: "Color Artistry",
    description: "Balayage, glossing, and fashion tones — healthy-hair-first.",
    tag: "Consultation incl.",
  },
  {
    title: "Skin Rituals",
    description: "Facials and de-tan treatments for clarity, lift, and glow.",
    tag: "Luxury care",
  },
  {
    title: "Bridal Styling",
    description: "Complete makeup, hair, and pre-event prep for the big day.",
    tag: "Custom packages",
  },
];

const stats = [
  { value: "5+", label: "Years" },
  { value: "30+", label: "Services" },
  { value: "7", label: "Days / Week" },
  { value: "4.9", label: "Rating" },
];

const testimonials = [
  {
    name: "Rhea S.",
    quote: "They elevated my look without overdoing it. Effortless and polished.",
  },
  {
    name: "Aman V.",
    quote: "Consistent cuts, clean detailing, and a space that feels premium.",
  },
  {
    name: "Neha & Family",
    quote: "Bridal and grooming booked together — planning was seamless.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-black px-6 py-28 md:py-36 lg:py-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_rgba(212,175,55,0.12),_transparent_40%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.5em] text-gold/80">
            Premium Unisex Salon
          </p>

          <h1 className="mx-auto max-w-4xl text-4xl font-semibold leading-[1.15] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Signature salon care
            <br />
            <span className="text-gradient-gold">for every occasion.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white-dim/80 md:text-lg">
            Modern precision meets editorial aesthetics — from sharp grooming
            to bridal transformations.
          </p>

          <div className="mt-10 flex justify-center gap-5">
            <Link
              href="/booking"
              className="rounded-sm bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]"
            >
              Book Now
            </Link>
            <Link
              href="/services"
              className="rounded-sm border border-gold/30 px-8 py-4 text-sm uppercase tracking-[0.2em] text-gold transition-all duration-300 hover:border-gold hover:bg-gold/5"
            >
              Our Services
            </Link>
          </div>

          {/* Stats strip */}
          <div className="mx-auto mt-20 flex max-w-2xl items-center justify-between border-t border-b border-gold/10 py-8">
            {stats.map((s, i) => (
              <div key={s.label} className={`flex-1 text-center ${i < stats.length - 1 ? "border-r border-gold/10" : ""}`}>
                <p className="text-3xl font-semibold text-gradient-gold md:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white-dim/60">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="bg-black-light px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-gold/80">
                What We Do
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
                Signature Services
              </h2>
            </div>
            <Link
              href="/services"
              className="hidden text-xs uppercase tracking-[0.2em] text-white-dim/60 transition-colors hover:text-gold sm:block"
            >
              View all →
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <article
                key={s.title}
                className="group flex flex-col rounded-sm border border-gold/8 bg-black p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/25"
              >
                <h3 className="text-xl font-semibold text-white group-hover:text-gold-light transition-colors">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white-dim/70">
                  {s.description}
                </p>
                <p className="mt-5 border-t border-gold/8 pt-4 text-xs uppercase tracking-[0.2em] text-gold/70">
                  {s.tag}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY GLAMROOTZ ── */}
      <section className="bg-black px-6 py-24 lg:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gold/80">
              The Experience
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              Why guests keep coming back.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white-dim/70">
              Every visit starts with listening — we shape each service around
              your routine, features, and desired finish.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-block text-sm uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-light"
            >
              Learn more →
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { n: "01", title: "Consult", text: "We align on goals before any treatment begins." },
              { n: "02", title: "Craft", text: "Products and techniques chosen for lasting results." },
              { n: "03", title: "Finish", text: "Styled to look photo-ready when you leave the chair." },
            ].map((item) => (
              <div
                key={item.n}
                className="rounded-sm border border-gold/8 bg-black-light/50 p-6 transition-colors hover:border-gold/20"
              >
                <p className="text-2xl font-semibold text-gold/30">{item.n}</p>
                <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white-dim/60">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-black-light px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-gold/80">
              Guest Notes
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              What our clients say
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="flex flex-col justify-between rounded-sm border border-gold/8 bg-black p-7 transition-colors hover:border-gold/20"
              >
                <p className="text-base leading-relaxed text-white/90">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-5 text-xs uppercase tracking-[0.2em] text-gold/70">
                  — {t.name}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-black px-6 py-28 lg:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-gradient-gold sm:text-4xl md:text-5xl">
            Ready for your next look?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white-dim/70">
            Book online or reach out for a free consultation.
          </p>
          <div className="mt-10 flex justify-center gap-5">
            <Link
              href="/booking"
              className="rounded-sm bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]"
            >
              Book Now
            </Link>
            <Link
              href="/contact"
              className="rounded-sm border border-gold/30 px-8 py-4 text-sm uppercase tracking-[0.2em] text-gold transition-all duration-300 hover:border-gold hover:bg-gold/5"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
