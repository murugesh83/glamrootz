import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      {/* Hero with background image */}
      <section className="relative overflow-hidden bg-black py-32 px-6">
        <Image
          src="/salon-wide.png"
          alt="Glamrootz Signature salon"
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-pink tracking-[0.3em] uppercase text-xs mb-4">
            Our Story
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold text-white mb-6">
            About <span className="text-gradient-pink">Glamrootz</span>
          </h1>
          <p className="text-white-dim/70 text-lg max-w-xl mx-auto">
            Where luxury meets artistry, and every appointment tells a story.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 bg-black-light">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-pink/80 mb-3">
              Our Philosophy
            </p>
            <h2 className="text-3xl font-semibold text-white mb-6">
              Contemporary hair artistry &amp; premium beauty experiences
            </h2>
            <p className="text-white-dim/70 leading-relaxed mb-4">
              Step into a world of contemporary hair artistry, refined styling,
              and premium beauty experiences at Glamrootz Signature Unisex Salon.
              Led by Mrs. Vidhya M, our experienced team of professionals
              combines technical expertise, creativity, and an eye for detail to
              deliver personalised looks that reflect each client&apos;s unique
              style and personality.
            </p>
            <p className="text-white-dim/70 leading-relaxed mb-4">
              Spread across an expansive 2,400+ sq. ft. luxury space, Glamrootz
              Signature offers dedicated services for both women and men in an
              elegant, comfortable, and professionally designed environment.
            </p>
            <p className="text-white-dim/70 leading-relaxed">
              Our philosophy is simple &mdash; to help every client look
              confident, feel beautiful, and leave with a renewed sense of self.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="/salon-entrance.png"
              alt="Glamrootz Signature entrance"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black-light/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-pink/80 mb-3">
              What We Offer
            </p>
            <h2 className="text-3xl font-semibold text-white max-w-2xl mx-auto">
              A comprehensive range of premium services from head to toe
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-white-dim/70 leading-relaxed mb-6 text-center">
              From precision haircuts, advanced colouring, and contemporary
              styling to professional skin care and complete beauty solutions, we
              offer a comprehensive range of premium services designed to meet
              your grooming and beauty needs from head to toe.
            </p>
            <p className="text-white-dim/70 leading-relaxed text-center">
              At Glamrootz Signature, every service is thoughtfully delivered
              with a commitment to quality, hygiene, personalised care, and
              perfection. We continuously embrace evolving trends, modern
              techniques, and professional standards to ensure every visit
              delivers a distinctive and elevated salon experience.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-black-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-pink/80 mb-3">
              What Drives Us
            </p>
            <h2 className="text-3xl font-semibold text-gradient-pink">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                desc: "We never settle for ordinary. Every cut, every treatment, every experience is held to the highest standard.",
                image:
                  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&q=80",
              },
              {
                title: "Innovation",
                desc: "We stay ahead of trends, continuously learning and adopting the latest techniques and premium products.",
                image:
                  "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=500&q=80",
              },
              {
                title: "Warmth",
                desc: "Beyond luxury, we create a welcoming space where every client feels valued, heard, and cared for.",
                image:
                  "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=500&q=80",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="group overflow-hidden rounded-sm border border-pink/8 bg-black"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={v.image}
                    alt={v.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                </div>
                <div className="p-7">
                  <h3 className="text-lg font-semibold text-pink mb-2">
                    {v.title}
                  </h3>
                  <p className="text-white-dim/60 text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proprietor */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-pink/80 mb-3">
            Leadership
          </p>
          <h2 className="text-3xl font-semibold text-white mb-6">
            Mrs. Vidhya M
          </h2>
          <p className="text-pink font-script text-lg mb-4">
            Proprietor &amp; Makeup Artist
          </p>
          <p className="text-white-dim/70 leading-relaxed max-w-xl mx-auto">
            With a passion for beauty and an unwavering commitment to
            excellence, Mrs. Vidhya M leads Glamrootz Signature with a vision
            to redefine the salon experience in Kolapakkam, Chennai.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-black-light text-center">
        <h2 className="text-3xl font-semibold text-white mb-4">
          Experience Glamrootz{" "}
          <span className="text-gradient-pink">Signature</span>
        </h2>
        <p className="text-white-dim/60 mb-8 max-w-md mx-auto">
          Book a consultation and discover the difference that attention to
          detail makes.
        </p>
        <Link
          href="/booking"
          className="inline-block rounded-sm bg-pink px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-pink-light"
        >
          Book Now
        </Link>
      </section>
    </>
  );
}
