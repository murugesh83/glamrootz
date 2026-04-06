import Link from "next/link";

const signatureServices = [
  {
    title: "Precision Cuts",
    description:
      "Sharp fades, sculpted layers, and signature finishing designed around your face shape.",
    detail: "From 30 min",
  },
  {
    title: "Color Artistry",
    description:
      "Dimensional balayage, glossing, and fashion tones with a healthy-hair-first approach.",
    detail: "Consultation included",
  },
  {
    title: "Skin Rituals",
    description:
      "Targeted facials and de-tan treatments that bring back clarity, lift, and glow.",
    detail: "Luxury care",
  },
  {
    title: "Bridal Styling",
    description:
      "Makeup, hair, and pre-event prep curated for brides, grooms, and celebration parties.",
    detail: "Custom packages",
  },
];

const highlights = [
  { label: "Years Refining Looks", value: "5+" },
  { label: "Luxury Services", value: "30+" },
  { label: "Open Every Week", value: "7 Days" },
  { label: "Guest Rating", value: "4.9/5" },
];

const experienceNotes = [
  "Private consultations before every transformation.",
  "Premium products selected for texture, color retention, and scalp health.",
  "A unisex salon floor designed for comfort, calm, and precision service.",
];

const testimonials = [
  {
    name: "Rhea S.",
    quote:
      "The team understood exactly how to elevate my look without overdoing it. The finish felt polished and effortless.",
  },
  {
    name: "Aman V.",
    quote:
      "Consistent cuts, clean detailing, and a space that actually feels premium. It has become my go-to grooming spot.",
  },
  {
    name: "Neha & Family",
    quote:
      "We booked bridal and grooming services together and the planning was smooth from consultation to final styling.",
  },
];

const bookingSteps = [
  "Choose a service or request a custom consultation.",
  "Pick your preferred date and slot on the booking page.",
  "Receive confirmation on phone or WhatsApp from the salon team.",
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-black px-6 py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.16),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(212,175,55,0.1),_transparent_30%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(340px,0.8fr)] lg:items-center">
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.4em] text-gold">
              Luxury Grooming, Tailored Styling
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-tight text-white md:text-7xl">
              Signature salon care for everyday confidence and standout occasions.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white-dim">
              Glamrootz Signature blends modern precision with a rich, editorial
              aesthetic. From sharp grooming to bridal transformations, each
              appointment is designed to feel elevated from consultation to final
              reveal.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center rounded-sm bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-black transition-all duration-300 hover:bg-gold-light"
              >
                Book Appointment
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-sm border border-gold/40 px-8 py-4 text-sm uppercase tracking-[0.22em] text-gold transition-all duration-300 hover:border-gold hover:bg-gold/10"
              >
                Explore Services
              </Link>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-sm border border-gold/10 bg-black-light/70 p-5 backdrop-blur-sm"
                >
                  <p className="text-3xl font-semibold text-gradient-gold">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white-dim/80">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-8 hidden h-32 w-32 rounded-full border border-gold/20 md:block" />
            <div className="absolute -right-8 bottom-10 hidden h-24 w-24 rounded-full bg-gold/10 blur-2xl md:block" />

            <div className="relative overflow-hidden rounded-sm border border-gold/20 bg-gradient-to-br from-black-light via-black to-black p-8 shadow-[0_0_50px_rgba(212,175,55,0.08)]">
              <div className="flex items-start justify-between gap-6 border-b border-gold/10 pb-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-gold">
                    This Week
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold text-white">
                    The signature chair experience
                  </h2>
                </div>
                <span className="rounded-full border border-gold/20 px-4 py-1 text-xs uppercase tracking-[0.24em] text-gold">
                  Since 2020
                </span>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-sm border border-gold/10 bg-white/3 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-white-dim/70">
                    Today&apos;s Focus
                  </p>
                  <p className="mt-3 text-xl text-white">
                    Hair contouring, bridal previews, and premium skin rituals.
                  </p>
                </div>
                <div className="rounded-sm border border-gold/10 bg-gold/10 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-gold-dark">
                    Walk-in Friendly
                  </p>
                  <p className="mt-3 text-xl text-white">
                    Appointments preferred for color, spa, and event styling.
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {experienceNotes.map((note) => (
                  <div
                    key={note}
                    className="flex items-start gap-3 rounded-sm border border-gold/10 bg-black-light/60 px-4 py-4"
                  >
                    <span className="mt-1 text-gold">&#10022;</span>
                    <p className="text-sm leading-7 text-white-dim">{note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black-light px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-gold">
                Signature Menu
              </p>
              <h2 className="mt-4 text-4xl font-semibold text-gradient-gold">
                Crafted services, not rushed routines
              </h2>
            </div>
            <Link
              href="/services"
              className="text-sm uppercase tracking-[0.24em] text-white-dim transition-colors hover:text-gold"
            >
              View full service list
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {signatureServices.map((service) => (
              <article
                key={service.title}
                className="group flex h-full flex-col rounded-sm border border-gold/10 bg-black px-6 py-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/20 text-gold">
                  &#10022;
                </div>
                <h3 className="text-2xl font-semibold text-white transition-colors group-hover:text-gold-light">
                  {service.title}
                </h3>
                <p className="mt-4 flex-1 leading-7 text-white-dim">
                  {service.description}
                </p>
                <p className="mt-6 text-sm uppercase tracking-[0.22em] text-gold">
                  {service.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[minmax(320px,0.85fr)_minmax(0,1.15fr)] lg:items-center">
          <div className="rounded-sm border border-gold/15 bg-gradient-to-b from-gold/10 to-transparent p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-gold">
              Why Guests Return
            </p>
            <h2 className="mt-4 text-4xl font-semibold text-white">
              A salon visit that feels composed, precise, and personal.
            </h2>
            <p className="mt-6 leading-8 text-white-dim">
              Every booking starts with listening. We shape each cut, color, and
              treatment around your routine, your features, and the finish you
              actually want to maintain after you leave.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Consult First",
                body: "We align on goals, upkeep, and the right service path before any major treatment starts.",
              },
              {
                title: "Premium Finish",
                body: "Products and techniques are chosen to preserve shine, structure, and skin comfort.",
              },
              {
                title: "Photo-Ready Results",
                body: "Every appointment is finished with styling detail so your look holds up on camera and off.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-sm border border-gold/10 bg-black-light/60 p-6"
              >
                <h3 className="text-xl font-semibold text-gold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white-dim">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black-light px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-gold">
              Book In Three Steps
            </p>
            <h2 className="mt-4 text-4xl font-semibold text-gradient-gold">
              Smooth scheduling, fast confirmation
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {bookingSteps.map((step, index) => (
              <div
                key={step}
                className="rounded-sm border border-gold/10 bg-black px-6 py-8 text-center"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-gold">
                  0{index + 1}
                </p>
                <p className="mt-5 leading-8 text-white-dim">{step}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center rounded-sm bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-black transition-colors duration-300 hover:bg-gold-light"
            >
              Reserve Your Time
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-gold">
                Guest Notes
              </p>
              <h2 className="mt-4 text-4xl font-semibold text-white">
                What clients remember after the mirror reveal
              </h2>
            </div>
            <Link
              href="/contact"
              className="text-sm uppercase tracking-[0.24em] text-white-dim transition-colors hover:text-gold"
            >
              Ask about custom packages
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <blockquote
                key={item.name}
                className="rounded-sm border border-gold/10 bg-black-light/70 px-6 py-8"
              >
                <p className="text-lg leading-8 text-white">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-6 text-sm uppercase tracking-[0.24em] text-gold">
                  {item.name}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-black via-black-light to-black px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-sm border border-gold/20 bg-black/70 px-8 py-14 text-center shadow-[0_0_45px_rgba(212,175,55,0.08)] backdrop-blur-sm md:px-14">
          <p className="text-sm uppercase tracking-[0.35em] text-gold">
            Ready For Your Next Look
          </p>
          <h2 className="mt-5 text-4xl font-semibold text-gradient-gold md:text-5xl">
            Visit Glamrootz Signature for your next cut, color, ritual, or celebration styling.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white-dim">
            Book online, contact the team for a consultation, or browse the
            gallery for inspiration before your appointment.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center rounded-sm bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-black transition-colors duration-300 hover:bg-gold-light"
            >
              Book Now
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center rounded-sm border border-gold/40 px-8 py-4 text-sm uppercase tracking-[0.22em] text-gold transition-colors duration-300 hover:border-gold hover:bg-gold/10"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
